import { css, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { HTMXElement } from "./t-htmx";

@customElement('t-link-2')
export class TLink2 extends HTMXElement {

	static styles = css`
		:host([disabled]) {
	    pointer-events: none;
	    filter: grayscale(100%);
	  }
		.link_container:hover{
			background: var(--md-sys-color-secondary-hover) !important;
			cursor: pointer; 
    }		
		a{
	    text-decoration: none;
		}
		.link_container {
	    text-decoration: none;
	    text-align: left;
	    padding: 16px;
	    background: var(--md-sys-color-secondary);
		}
		h2 {
	    margin-bottom: 16px;
	    margin-top: 0px;
	    font-variation-settings: 'wght' 100, 'wdth' 100, 'opsz' 8;
	    font-size: 2rem;
	    font-weight: normal;
	    color: var(--md-sys-color-on-primary) !important;
		}
		p {
	    font-size: 0.95rem;
	    font-weight: 300;
	    margin: 0px;
	    color: var(--md-sys-color-on-primary-80) !important;
		}
		img {
			width: 100%;
			border-color: transparent;
			border-style: solid !important;
			border-width: 2px !important;
		}		
	`
	@property({ type: String, attribute: 'title' }) title = '';

	@property({ type: String, attribute: 'description' }) description = '';

	@property({ type: Boolean, reflect: true }) disabled = false;

	// render() {
	// 	let tag: StaticValue;
	// 	if (!this.href || this.href === "") {
	// 		tag = literal`div`;
	// 	} else {
	// 		tag = literal`a`;
	// 	}

	// 	return staticHtml`
	// 		<${tag} href=${this.href || nothing} class="link_container">
	// 			<h2>
	// 				${this.title}
	// 			</h2>
	// 			<p>
	// 				${this.description}
	// 			</p>
	// 		</${tag}>
	//    `
	// }

	// When HTMX supports shadow DOM we change back to this
	render() {
		// 	let tag: StaticValue;
		// 	if (!this.href || this.href === "") {
		// 		tag = literal`div`;
		// 	} else {
		// 		tag = literal`a`;
		return this.renderAnchor(html`
			<div class="link_container">
				<h2>
					${this.title}
				</h2>
				<p>
					${this.description}
				</p>
			</div>
	   `)
	}
}
