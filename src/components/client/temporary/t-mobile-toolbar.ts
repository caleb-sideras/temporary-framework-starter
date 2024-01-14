import { css } from "lit";
import { TList } from "./t-list";
import { styles } from '@material/web/list/internal/list-styles.css.js';
import { customElement } from 'lit/decorators.js';

/**
 * @summary THorizontalList vertical holds and controls list items  *
 * @description
 * Extends TList which allows activation and keyboard controls of items
 *
 * @final
 * @suppress {visibility}
 */
@customElement('t-horizontal-list')
export class THorizontalList extends TList {
  static override styles = [
    styles,
    css`
    :host{
      flex-direction: row !important;
    }
    `
  ];

  public itemAttributes: string[] = ['temporary-list-item', 'temporary-list-item-2']
}
