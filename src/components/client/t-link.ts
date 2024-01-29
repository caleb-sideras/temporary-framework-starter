import { css, nothing, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { HTMXElement } from "./t-htmx";
import { literal, StaticValue, html as staticHtml } from 'lit/static-html.js';

@customElement('t-link')
export class TLink extends HTMXElement {

	static styles = css`
		:host{	
			flex-basis: 50%;
		  box-sizing: border-box;
		}
		:host([disabled]) {
	    pointer-events: none;
	    filter: grayscale(100%);
	  }
		.link_container:hover h2,
		.link_container:hover p {
			color: var(--md-sys-color-on-secondary) !important;
    }		
		.link_container:hover img{
			border-color:var(--md-sys-color-on-secondary) !important;
		}
		.link_container{
			text-decoration: none;
		}
		h2 {
			margin-bottom: 32px;
			font-variation-settings: 'wght' 100, 'wdth' 100, 'opsz' 8; 			font-size: 2.5rem;
			font-weight: normal;	
			color: var(--md-sys-color-on-primary) !important;
		}
		p {
			font-size: 0.95rem;
			font-weight: 300;
			margin-bottom: 40px;
			margin-top: 0px;
			color: var(--md-sys-color-on-primary-80) !important;
		}
		img {
			width: 100%;
			border-color: transparent;
			border-style: solid !important;
			border-width: 2px !important;
		}		
	`
	@property({ type: String, attribute: 'src' }) imgSrc = '';

	@property({ type: String, attribute: 'alt' }) imgAlt = '';

	@property({ type: String, attribute: 'title' }) title = '';

	@property({ type: String, attribute: 'description' }) description = '';

	@property({ type: Boolean, reflect: true }) disabled = false;

	render() {
		let tag: StaticValue;
		if (!this.href || this.href === "") {
			tag = literal`div`;
		} else {
			tag = literal`a`;
		}

		return staticHtml`
			<${tag} href=${this.href || nothing} class="link_container">
				<h2>
					${this.title}
				</h2>
				<p>
					${this.description}
				</p>
				<img
					loading="lazy"
					src="${this.imgSrc}"
					alt="${this.imgAlt}"
				/>     
			</${tag}>
    `
	}

	// When HTMX supports shadow DOM we change back to this
	// render() {
	// 	return this.renderAnchor(html`
	// 		<h2>
	// 			${this.title}
	// 		</h2>
	// 		<p>
	// 			${this.description}
	// 		</p>
	// 		<img
	// 			loading="lazy"
	// 			src="${this.imgSrc}"
	// 			alt="${this.imgAlt}"
	// 		/>     
	//    `)
	// }
}
