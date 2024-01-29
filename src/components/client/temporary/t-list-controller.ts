import { ListController, ListControllerConfig } from '@material/web/list/internal/list-controller.js';
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
    * Finds matching href 
    */
  public getListItem(url: string): TListItem | undefined {
    if (!url) return;

    const items = this.items;
    if (items.length <= 0) return;

    const matchingItem = this.findMatch(url, items);
    // console.log("TListController: Matching Item from", url, "-> ", matchingItem);

    return matchingItem;
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
  protected findMatch(url: string, items: TListItem[]): TListItem | undefined {
    const regexMatch = this.findMatchingRegex(url, items);
    if (regexMatch) {
      return regexMatch;
    }
    return this.findMatchingExact(url, items);
  }

  protected findMatchingExact(href: string, listItems: TListItem[]): TListItem | undefined {
    for (const item of listItems) {
      if (this.removeFirstLastSlash(item.href) === this.removeFirstLastSlash(href)) return item;
    }
    return;
  }

  protected findMatchingRegex(href: string, listItems: TListItem[]): TListItem | undefined {
    for (const item of listItems) {
      if (item.regex === "") continue;

      const regex = new RegExp(item.regex);
      const isMatch = regex.test(href);

      if (isMatch) return item;
    }
    return;
  }

  protected removeFirstLastSlash(text: string): string {
    return text.replace(/^\/|\/$/g, "");
  }
}
