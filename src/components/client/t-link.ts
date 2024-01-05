import { html, css } from "lit"
import { customElement, property } from "lit/decorators.js"
import { HTMXElement } from "./t-htmx";

@customElement('t-link')
export class TLink extends HTMXElement {

	static styles = css`
		:host{	
			flex-basis: 50%;
		  box-sizing: border-box;
		}
		a:hover h2,
		a:hover p {
			color: var(--md-sys-color-primary) !important;
    }		
		a:hover img{
			border-color:var(--md-sys-color-primary) !important;
		}
		a{
			text-decoration: none;
			color: #212121;
		}
		h2 {
			margin-bottom: 32px;
			font-variation-settings: 'wght' 100, 'wdth' 100, 'opsz' 8; 
			font-size: 2.5rem;
			font-weight: normal;	
		}
		p {
			font-size: 0.95rem;
			font-weight: 300;
			margin-bottom: 40px;
			margin-top: 0px;
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

	render() {
		return this.renderAnchor(html`
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
    `)
	}
}
