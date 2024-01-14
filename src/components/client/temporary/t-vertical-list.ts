import { TList } from "./t-list";
import { styles } from '@material/web/list/internal/list-styles.css.js';
import { customElement } from 'lit/decorators.js';

/**
 * @summary TVerticalList vertical holds and controls list items  *
 * @description
 * Extends TList which allows activation and keyboard controls of items
 *
 * @final
 * @suppress {visibility}
 */
@customElement('temporary-list')
export class TVerticalList extends TList{ 
  static override styles = [styles];

  public itemAttributes: string[] = ['temporary-list-item', 't-dropdown-list-item']
  public listAttributes: string[] = ['t-dropdown']
}
