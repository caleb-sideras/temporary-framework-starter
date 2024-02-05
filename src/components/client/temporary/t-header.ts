import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement('t-header')
export class THeader extends LitElement {

  static styles = css`
    a {
			color: var(--md-sys-color-on-primary) !important;
      display:flex;
      align-items:center;
			color: #000000;
      margin-top: 32px;
      margin-bottom: 32px;
    }

		a:hover {
			color: var(--md-sys-color-on-secondary) !important;
		}

    h1 {
      font-variation-settings: 'wght' 100, 'wdth' 100, 'opsz' 8;
      font-size: 5.25rem;
      line-height: 5.75rem;
      font-weight: 500;
      text-align: center;
      margin: 0;
    }
    @media screen and (max-width: 1024px) {
      h1 {
        font-size: 3.25rem;
        line-height: 3.75rem;
      }    
    }
  `

  @property({ type: String, attribute: 'href' }) href = '';
  @property({ type: String, attribute: 'heading' }) heading = ''

  /** 
  * TODO
  * Add a check to see if href is passed in. if not just render a div
  **/
  render() {
    return html`
		<a href=${this.href}>
  		<h1>${this.heading}</h1>
			<md-icon>north_east</md-icon>
		</a>
  `
  }
}
