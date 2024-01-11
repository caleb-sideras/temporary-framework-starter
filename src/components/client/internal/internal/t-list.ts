/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/** 
  * i didn't want to have to clone this... but google forced my hand...
  * why can't you design this in a way to allow maximum extensibility? i'm sure there's a complicated answer :/
  * anyways - gunna be a nightmare to maintain
  * TODO: bring all controlling logic inside of ExtendedListController and make it public to prevent all of @ts-ignore stuff 
**/

import { html, isServer, LitElement, PropertyValueMap } from 'lit';
import { queryAssignedElements, property } from 'lit/decorators.js';

import { ListController, ListControllerConfig, NavigableKeys } from '@material/web/list/internal/list-controller.js';
import { ListItem as SharedListItem } from '@material/web/list/internal/list-navigation-helpers.js';
import { List } from '@material/web/list/internal/list';


/** TEMPORARY UI -- START **/

/** 
  * Extending ListControllerConfig to add additional properties/methods 
  */
interface ExtendedListControllerConfig<Item extends ListItem> extends ListControllerConfig<Item> {
  /**
    * A function that determines whether or not the given element is an List
    */
  isList: (list: HTMLElement) => list is List;
}

/** 
  * Extending ListController to add and initialize properties/methods 
  */
class ExtendedListController<Item extends ListItem> extends ListController<Item> {

  isList: (list: HTMLElement) => list is List;

  constructor(config: ExtendedListControllerConfig<Item>) {
    super(config);
    this.isList = config.isList;
  }

  /**
    * Overriding items function to add child items
    */
  get items(): Item[] {

    // @ts-ignore
    const maybeItemOrList = this.getPossibleItems();
    const items: Item[] = [];

    for (const itemOrList of maybeItemOrList) {

      // If item, add to list
      if (this.isItem(itemOrList)) {
        items.push(itemOrList);
        continue;
      }

      // If list, add items to list
      if (this.isList(itemOrList) && itemOrList) {

        // @ts-ignore
        items.push(...itemOrList.items)

        continue;
      }

      // const subItem = (itemOrList as HTMLElement & { item?: Item }).item;
      // if (subItem && this.isItem(subItem)) {
      //   items.push(subItem);
      // }

      // const subItem = (listOrParent as HTMLElement & { item?: List }).item;
      // if (subItem && this.isList(subItem)) {
      //   // @ts-ignore
      //   childItems.push(...subItem.items);
      // }
    }
    return items;
  }
}

/** TEMPORARY UI -- END **/

const NAVIGABLE_KEY_SET = new Set<string>(Object.values(NavigableKeys));

export interface ListItem extends SharedListItem {
  type: 'text' | 'button' | 'link';
  href: string;
  url: string;
}

// tslint:disable-next-line:enforce-comments-on-exported-symbols
export class TDrawerList extends LitElement {
  /**
   * An array of activatable and disableable list items. Queries every assigned
   * element that has the `md-list-item` attribute.
   *
   * _NOTE:_ This is a shallow, flattened query via
   * `HTMLSlotElement.queryAssignedElements` and thus will _only_ include direct
   * children / directly slotted elements.
   */

  @queryAssignedElements({ flatten: true })
  protected slotItems!: Array<ListItem | (HTMLElement & { item?: ListItem })>;

  /** TEMPORARY UI -- START **/

  @property({ type: String })
  url: string = '';

  /**
    * HTML DOM attributes used for items
    */
  public itemAttributes: string[] = [];

  /**
    * HTML DOM attributes used for lists with items
    */
  public listAttributes: string[] = [];

  protected updated(_changedProperties: PropertyValueMap<TDrawerList>): void {
    super.updated(_changedProperties);
    if (_changedProperties.has('url') && this.url !== "") {
      this.updateListItems();
    }
  }

  /**
    * PUBLIC FUNCTIONS
    */

  /**
    * Finds matching hrefs and activates the respective item
    */
  updateListItems() {
    if (!this.url) {
      return;
    };

    const items = this.ListController.items;
    if (items.length <= 0) return;

    const parentItems: ListItem[] = this.findParentItems(this.url, items);
    const matchingItem: ListItem | null = this.findMatchingItem(this.url, items);

    console.log("TNavigationDrawerList: Matching Parent Items -> ", parentItems);
    console.log("TNavigationDrawerList: Matching Item -> ", matchingItem);

    this.ListController.onDeactivateItems();

    /** 
    * TODO
    * Work on making listController support indefinite nesting of lists 
    */

    // activate all parentItems
    for (const item of parentItems) {
      this.activateItem(item);
    }

    // activate matchingItem 
    if (matchingItem !== null) {
      this.activateItem(matchingItem);
    }

    // reset url
    this.url = "";
  }

  findParentItems(href: string, listItems: ListItem[]): ListItem[] {
    const matchingItems: ListItem[] = [];

    const idSegments = this.removeFirstLastSlash(href).split('/');

    for (const parentId of listItems) {
      const parentSegments = this.removeFirstLastSlash(parentId.href).split('/');

      if (
        parentSegments.length < idSegments.length &&
        idSegments.slice(0, parentSegments.length).join('/') === parentId.id
      ) {
        matchingItems.push(parentId);
      }
    }

    return matchingItems;
  }

  findMatchingItem(href: string, listItems: ListItem[]): ListItem | null {
    for (const item of listItems) {
      if (this.removeFirstLastSlash(item.href) === this.removeFirstLastSlash(href)) return item;
    }
    return null;
  }

  removeFirstLastSlash(text: string) {
    return text.replace(/^\/|\/$/g, "");
  }

  isActive(item: ListItem) {
    return item.tabIndex === 0;
  }

  activateItem(item: ListItem) {
    return item.tabIndex = 0;
  }


  /** 
    * Initializing Extended ListController
    */
  private readonly ListControllerConfig: ExtendedListControllerConfig<ListItem> = {
    isItem: (item: HTMLElement): item is ListItem => this.itemAttributes.some((condition) => item.localName === condition), 
    isList: (item: HTMLElement): item is List => this.listAttributes.some((condition) => item.localName === condition),
    getPossibleItems: () => this.slotItems,
    isRtl: () => getComputedStyle(this).direction === 'rtl',
    deactivateItem: (item) => {
      item.tabIndex = -1;
    },
    activateItem: (item) => {
      item.tabIndex = 0;
    },
    isNavigableKey: (key) => NAVIGABLE_KEY_SET.has(key),
    isActivatable: (item) => !item.disabled && item.type !== 'text',
  };

  private readonly ListController = new ExtendedListController<ListItem>(this.ListControllerConfig);

  /** TEMPORARY UI -- END **/

  /** @export */
  get items() {
    return this.ListController.items;
  }

  private readonly internals =
    // Cast needed for closure
    (this as HTMLElement).attachInternals();

  constructor() {
    super();
    if (!isServer) {
      this.internals.role = 'list';
      this.addEventListener('keydown', this.ListController.handleKeydown);
    }
  }

  protected override render() {
    return html`
      <slot
        @deactivate-items=${this.ListController.onDeactivateItems}
        @request-activation=${this.ListController.onRequestActivation}
        @slotchange=${this.ListController.onSlotchange}>
      </slot>
    `;
  }

  /**
   * Activates the next item in the list. If at the end of the list, the first
   * item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activateNextItem(): ListItem | null {
    return this.ListController.activateNextItem();
  }

  /**
   * Activates the previous item in the list. If at the start of the list, the
   * last item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activatePreviousItem(): ListItem | null {
    return this.ListController.activatePreviousItem();
  }
}
