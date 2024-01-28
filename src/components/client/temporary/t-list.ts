import { html, isServer, LitElement } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import { NavigableKeys } from '@material/web/list/internal/list-controller.js';
import { ListItem as SharedListItem } from '@material/web/list/internal/list-navigation-helpers.js';
import { TListController } from './t-list-controller';

const NAVIGABLE_KEY_SET = new Set<string>(Object.values(NavigableKeys));


export interface TListItem extends SharedListItem {
  type: 'text' | 'button' | 'link';
  active: boolean;
  href: string;
  regex: string;
}

export class TList extends LitElement {

  @queryAssignedElements({ flatten: true })
  protected slotItems!: Array<TListItem | (HTMLElement & { item?: TListItem })>;

  /**
    * HTML DOM attributes used for items
    */
  public itemAttributes: string[] = []

  /**
    * HTML DOM attributes used for lists with items
    */
  public listAttributes: string[] = []

  /** @export */
  get items() {
    return this.listController.items;
  }

  public readonly listController = new TListController<TListItem>({
    isItem: (item: HTMLElement): item is TListItem => this.itemAttributes.includes(item.localName),
    isList: (item: HTMLElement): item is TList => this.listAttributes.includes(item.localName),
    getPossibleItems: () => this.slotItems,
    isRtl: () => getComputedStyle(this).direction === 'rtl',
    deactivateItem: (item) => {
      item.tabIndex = -1;
      item.active = false;
    },
    activateItem: (item) => {
      item.tabIndex = 0;
      item.active = true;
    },
    isNavigableKey: (key) => NAVIGABLE_KEY_SET.has(key),
    isActivatable: (item) => !item.disabled && item.type !== 'text',
  });

  private readonly internals =
    // Cast needed for closure
    (this as HTMLElement).attachInternals();

  constructor() {
    super();
    if (!isServer) {
      this.internals.role = 'list';
      this.addEventListener('keydown', this.listController.handleKeydown);
    }
  }

  protected override render() {
    return html`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `;
  }

  /**
   * Activates the next item in the list. If at the end of the list, the first
   * item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activateNextItem(): TListItem | null {
    return this.listController.activateNextItem();
  }

  /**
   * Activates the previous item in the list. If at the start of the list, the
   * last item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activatePreviousItem(): TListItem | null {
    return this.listController.activatePreviousItem();
  }
}
