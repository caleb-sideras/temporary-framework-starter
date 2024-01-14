import { ListController, ListControllerConfig, NavigableKeys } from '@material/web/list/internal/list-controller.js';
import { TListItem, TList } from './t-list';

/** 
  * TODO
  * Work on making ListController  support indefinite nesting of lists 
  */

/** 
  * Extending ListControllerConfig to add additional properties/methods 
  */
export interface TListControllerConfig<Item extends TListItem> extends ListControllerConfig<Item> {
  /**
    * A function that determines whether or not the given element is an List
    */
  isList: (list: HTMLElement) => list is TList;
}



/** 
  * Extending ListController to add and initialize properties/methods 
  */
export class TListController<Item extends TListItem> extends ListController<Item> {

  isList: (list: HTMLElement) => list is TList;

  constructor(config: TListControllerConfig<Item>) {
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
    }
    return items;
  }

  /**
    * Finds matching href and activates the respective item
    */
  public updateList(url: string) {
    const matchingItem = this.getListItem(url);
    if (matchingItem) this.onRequestActivation(this.createActivationEvent(matchingItem));
  }

  /**
    * Finds matching href 
    */
  public getListItem(url: string, soft: boolean = false): TListItem | undefined {
    if (!url) return;

    const items = this.items;
    if (items.length <= 0) return;

    let matchingItem: TListItem | undefined;
    if (soft) {
      matchingItem = this.findSoftMatchingItem(url, items);
    } else {
      matchingItem = this.findMatchingItem(url, items);
    }
    if (!matchingItem) return;

    console.log("TListController: Matching Item -> ", matchingItem);

    return matchingItem
  }

  /**
    * Highlights the element (sets active and tabindex) without focusing. Avoid emitting an event
    */
  public requestHighlight(item: TListItem) {
    this.onDeactivateItems();
    // @ts-ignore
    this.activateItem(item);
  }

  /**
    * Adds interop with ListController onRequestActivation()
    */
  public requestActivation(item: TListItem) {
    const itemEvent = this.createActivationEvent(item);
    this.onRequestActivation(itemEvent);
  }


  protected createActivationEvent(item: TListItem): Event {
    const activationEvent = new Event('request-activation', { bubbles: true, composed: true });
    Object.defineProperty(activationEvent, 'target', { value: item });
    return activationEvent
  }

  /**
    * Helpers
    */
  protected findMatchingItem(href: string, listItems: TListItem[]): TListItem | undefined {
    for (const item of listItems) {
      if (this.removeFirstLastSlash(item.href) === this.removeFirstLastSlash(href)) return item;
    }
    return;
  }

  /**
  * href -> 'projects/musicpgt' matches item.href -> 'projects/' 
  */
  protected findSoftMatchingItem(href: string, listItems: TListItem[]): TListItem | undefined {
    for (const item of listItems) {
      const cleanItemHref = this.removeFirstLastSlash(item.href);
      const cleanHref = this.removeFirstLastSlash(href);
      console.log("cleanItemHref", cleanItemHref);
      console.log("cleanHref", cleanHref);
      console.log("cleanFinal", cleanHref.slice(0, cleanItemHref.length))
      if (cleanHref.slice(0, cleanItemHref.length) === cleanItemHref) return item;
    }
    return;
  }

  protected removeFirstLastSlash(text: string): string {
    return text.replace(/^\/|\/$/g, "");
  }
}
