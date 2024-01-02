import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref, createRef } from 'lit/directives/ref.js';

enum NavigationTabs {
  Home = 1,
  Examples = 2,
  Docs = 3,
}

interface TabClickEvent extends Event {
  selectedTab: NavigationTabs;
}


@customElement("t-navigation-bar")
export class NavigationBar extends LitElement {

  @property()
  selectedSlot: NavigationTabs = NavigationTabs.Home;

  homeRef = createRef<HTMLInputElement>();
  examplesRef = createRef<HTMLInputElement>();
  docsRef = createRef<HTMLInputElement>();

  render() {
    return html`
      <div>
      <a href="/">
        <!-- <md-navigation-tab id="home" label="Home" @click=${this._handleTabClicked.bind(this, NavigationTabs.Home)}>
          <span slot="active-icon" class="material-symbols-outlined pointer-events-none"
            style="font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;">home</span>
          <span slot="inactive-icon" class="material-symbols-outlined pointer-events-none"
            style="font-variation-settings: 'FILL' 0 , 'wght' 400, 'GRAD' 0, 'opsz' 48;">home</span>
        </md-navigation-tab> -->
      </a>

      <md-list active-index="0" class="w-full" hx-boost="true">
        <button @click=${() => this.selectedSlot = NavigationTabs.Home}>Slot 1</button>
        <button @click=${() => this.selectedSlot = NavigationTabs.Examples}>Slot 2</button>
        <button @click=${() => this.selectedSlot = NavigationTabs.Docs}>Slot 3</button>
      </md-list>

        ${this.selectedSlot === NavigationTabs.Home ? html`<slot name="home"></slot>` : ''}
        ${this.selectedSlot === NavigationTabs.Home ? html`<slot name="examples"></slot>` : ''}
        ${this.selectedSlot === NavigationTabs.Home ? html`<slot name="docs"></slot>` : ''}
      </div>
    `;
  }

  // _handleTabClicked(e: Event, tab: NavigationTabs) {
  //   if (this.selectedSlot != tab) {
  //     e.target.active = true;
  //   }
  // }

}
