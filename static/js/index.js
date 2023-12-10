var __legacyDecorateClassTS = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// node_modules/lit-html/directive-
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css
var t = (t2) => (e, o) => {
  o !== undefined ? o.addInitializer(() => {
    customElements.define(t2, e);
  }) : customElements.define(t2, e);
};
// node_modules/lit-html/directive-helpers.js.js
var t2 = globalThis;
var e = t2.ShadowRoot && (t2.ShadyCSS === undefined || t2.ShadyCSS.nativeShadow) && ("adoptedStyleSheets" in Document.prototype) && ("replace" in CSSStyleSheet.prototype);
var s = Symbol();
var o = new WeakMap;

class n {
  constructor(t3, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e2;
  }
  get styleSheet() {
    let t3 = this.o;
    const s2 = this.t;
    if (e && t3 === undefined) {
      const e2 = s2 !== undefined && s2.length === 1;
      e2 && (t3 = o.get(s2)), t3 === undefined && ((this.o = t3 = new CSSStyleSheet).replaceSync(this.cssText), e2 && o.set(s2, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
}
var r = (t3) => new n(typeof t3 == "string" ? t3 : t3 + "", undefined, s);
var i = (t3, ...e2) => {
  const o2 = t3.length === 1 ? t3[0] : e2.reduce((e3, s2, o3) => e3 + ((t4) => {
    if (t4._$cssResult$ === true)
      return t4.cssText;
    if (typeof t4 == "number")
      return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t3[o3 + 1], t3[0]);
  return new n(o2, t3, s);
};
var S = (s2, o2) => {
  if (e)
    s2.adoptedStyleSheets = o2.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
  else
    for (const e2 of o2) {
      const o3 = document.createElement("style"), n2 = t2.litNonce;
      n2 !== undefined && o3.setAttribute("nonce", n2), o3.textContent = e2.cssText, s2.appendChild(o3);
    }
};
var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e2 = "";
  for (const s2 of t4.cssRules)
    e2 += s2.cssText;
  return r(e2);
})(t3) : t3;

// node_modules/lit-html/directive-helpers.js.jsus-ring-s
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t3, s2) => t3;
var u = { toAttribute(t3, s2) {
  switch (s2) {
    case Boolean:
      t3 = t3 ? l : null;
      break;
    case Object:
    case Array:
      t3 = t3 == null ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, s2) {
  let i3 = t3;
  switch (s2) {
    case Boolean:
      i3 = t3 !== null;
      break;
    case Number:
      i3 = t3 === null ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        i3 = JSON.parse(t3);
      } catch (t4) {
        i3 = null;
      }
  }
  return i3;
} };
var f = (t3, s2) => !i2(t3, s2);
var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= new WeakMap;

class b extends HTMLElement {
  static addInitializer(t3) {
    this._$Ei(), (this.l ??= []).push(t3);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t3, s2 = y) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.elementProperties.set(t3, s2), !s2.noAccessor) {
      const i3 = Symbol(), r3 = this.getPropertyDescriptor(t3, i3, s2);
      r3 !== undefined && e2(this.prototype, t3, r3);
    }
  }
  static getPropertyDescriptor(t3, s2, i3) {
    const { get: e3, set: h2 } = r2(this.prototype, t3) ?? { get() {
      return this[s2];
    }, set(t4) {
      this[s2] = t4;
    } };
    return { get() {
      return e3?.call(this);
    }, set(s3) {
      const r3 = e3?.call(this);
      h2.call(this, s3), this.requestUpdate(t3, r3, i3);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) ?? y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties")))
      return;
    const t3 = n2(this);
    t3.finalize(), t3.l !== undefined && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t4 = this.properties, s2 = [...h(t4), ...o2(t4)];
      for (const i3 of s2)
        this.createProperty(i3, t4[i3]);
    }
    const t3 = this[Symbol.metadata];
    if (t3 !== null) {
      const s2 = litPropertyMetadata.get(t3);
      if (s2 !== undefined)
        for (const [t4, i3] of s2)
          this.elementProperties.set(t4, i3);
    }
    this._$Eh = new Map;
    for (const [t4, s2] of this.elementProperties) {
      const i3 = this._$Eu(t4, s2);
      i3 !== undefined && this._$Eh.set(i3, t4);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i3 = [];
    if (Array.isArray(s2)) {
      const e3 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e3)
        i3.unshift(c(s3));
    } else
      s2 !== undefined && i3.push(c(s2));
    return i3;
  }
  static _$Eu(t3, s2) {
    const i3 = s2.attribute;
    return i3 === false ? undefined : typeof i3 == "string" ? i3 : typeof t3 == "string" ? t3.toLowerCase() : undefined;
  }
  constructor() {
    super(), this._$Ep = undefined, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$Eg = new Promise((t3) => this.enableUpdating = t3), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
  }
  addController(t3) {
    (this._$ES ??= []).push(t3), this.renderRoot !== undefined && this.isConnected && t3.hostConnected?.();
  }
  removeController(t3) {
    this._$ES?.splice(this._$ES.indexOf(t3) >>> 0, 1);
  }
  _$E_() {
    const t3 = new Map, s2 = this.constructor.elementProperties;
    for (const i3 of s2.keys())
      this.hasOwnProperty(i3) && (t3.set(i3, this[i3]), delete this[i3]);
    t3.size > 0 && (this._$Ep = t3);
  }
  createRenderRoot() {
    const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t3, this.constructor.elementStyles), t3;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$ES?.forEach((t3) => t3.hostConnected?.());
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    this._$ES?.forEach((t3) => t3.hostDisconnected?.());
  }
  attributeChangedCallback(t3, s2, i3) {
    this._$AK(t3, i3);
  }
  _$EO(t3, s2) {
    const i3 = this.constructor.elementProperties.get(t3), e3 = this.constructor._$Eu(t3, i3);
    if (e3 !== undefined && i3.reflect === true) {
      const r3 = (i3.converter?.toAttribute !== undefined ? i3.converter : u).toAttribute(s2, i3.type);
      this._$Em = t3, r3 == null ? this.removeAttribute(e3) : this.setAttribute(e3, r3), this._$Em = null;
    }
  }
  _$AK(t3, s2) {
    const i3 = this.constructor, e3 = i3._$Eh.get(t3);
    if (e3 !== undefined && this._$Em !== e3) {
      const t4 = i3.getPropertyOptions(e3), r3 = typeof t4.converter == "function" ? { fromAttribute: t4.converter } : t4.converter?.fromAttribute !== undefined ? t4.converter : u;
      this._$Em = e3, this[e3] = r3.fromAttribute(s2, t4.type), this._$Em = null;
    }
  }
  requestUpdate(t3, s2, i3, e3 = false, r3) {
    if (t3 !== undefined) {
      if (i3 ??= this.constructor.getPropertyOptions(t3), !(i3.hasChanged ?? f)(e3 ? r3 : this[t3], s2))
        return;
      this.C(t3, s2, i3);
    }
    this.isUpdatePending === false && (this._$Eg = this._$EP());
  }
  C(t3, s2, i3) {
    this._$AL.has(t3) || this._$AL.set(t3, s2), i3.reflect === true && this._$Em !== t3 && (this._$Ej ??= new Set).add(t3);
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$Eg;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return t3 != null && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this._$Ep) {
        for (const [t5, s3] of this._$Ep)
          this[t5] = s3;
        this._$Ep = undefined;
      }
      const t4 = this.constructor.elementProperties;
      if (t4.size > 0)
        for (const [s3, i3] of t4)
          i3.wrapped !== true || this._$AL.has(s3) || this[s3] === undefined || this.C(s3, this[s3], i3);
    }
    let t3 = false;
    const s2 = this._$AL;
    try {
      t3 = this.shouldUpdate(s2), t3 ? (this.willUpdate(s2), this._$ES?.forEach((t4) => t4.hostUpdate?.()), this.update(s2)) : this._$ET();
    } catch (s3) {
      throw t3 = false, this._$ET(), s3;
    }
    t3 && this._$AE(s2);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    this._$ES?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$ET() {
    this._$AL = new Map, this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$Ej &&= this._$Ej.forEach((t4) => this._$EO(t4, this[t4])), this._$ET();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
}
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = new Map, b[d("finalized")] = new Map, p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.1");

// node_modules/lit-html/directive-helpers.js.jsus-ring-styl
var n3 = function(t3) {
  return (e3, o3) => typeof o3 == "object" ? r3(t3, e3, o3) : ((t4, e4, o4) => {
    const r3 = e4.hasOwnProperty(o4);
    return e4.constructor.createProperty(o4, r3 ? { ...t4, wrapped: true } : t4), r3 ? Object.getOwnPropertyDescriptor(e4, o4) : undefined;
  })(t3, e3, o3);
};
var o3 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r3 = (t3 = o3, e3, r4) => {
  const { kind: n4, metadata: i3 } = r4;
  let s2 = globalThis.litPropertyMetadata.get(i3);
  if (s2 === undefined && globalThis.litPropertyMetadata.set(i3, s2 = new Map), s2.set(r4.name, t3), n4 === "accessor") {
    const { name: o4 } = r4;
    return { set(r5) {
      const n5 = e3.get.call(this);
      e3.set.call(this, r5), this.requestUpdate(o4, n5, t3);
    }, init(e4) {
      return e4 !== undefined && this.C(o4, undefined, t3), e4;
    } };
  }
  if (n4 === "setter") {
    const { name: o4 } = r4;
    return function(r5) {
      const n5 = this[o4];
      e3.call(this, r5), this.requestUpdate(o4, n5, t3);
    };
  }
  throw Error("Unsupported decorator location: " + n4);
};
// node_modules/lit-html/directive-helpers.js.jsus-ring-s
var r4 = function(r5) {
  return n3({ ...r5, state: true, attribute: false });
};
// node_modules/lit-html/directive-helpers.js.jsus-ring-
var e3 = (e4, t3, c3) => (c3.configurable = true, c3.enumerable = true, Reflect.decorate && typeof t3 != "object" && Object.defineProperty(e4, t3, c3), c3);

// node_modules/lit-html/directive-helpers.js.jsus-ring-s
var e4 = function(e5, r5) {
  return (n4, s2, i3) => {
    const o4 = (t3) => t3.renderRoot?.querySelector(e5) ?? null;
    if (r5) {
      const { get: e6, set: u2 } = typeof s2 == "object" ? n4 : i3 ?? (() => {
        const t3 = Symbol();
        return { get() {
          return this[t3];
        }, set(e7) {
          this[t3] = e7;
        } };
      })();
      return e3(n4, s2, { get() {
        if (r5) {
          let t3 = e6.call(this);
          return t3 === undefined && (t3 = o4(this), u2.call(this, t3)), t3;
        }
        return o4(this);
      } });
    }
    return e3(n4, s2, { get() {
      return o4(this);
    } });
  };
};
// node_modules/lit-html/directive-helpers.js.jsus-ring-style
var r5 = function(r6) {
  return (n4, o4) => e3(n4, o4, { get() {
    return (this.renderRoot ?? (e5 ??= document.createDocumentFragment())).querySelectorAll(r6);
  } });
};
var e5;
// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.js
var o4 = function(o5) {
  return (e6, n4) => {
    const { slot: r6, selector: s2 } = o5 ?? {}, c3 = "slot" + (r6 ? `[name=${r6}]` : ":not([name])");
    return e3(e6, n4, { get() {
      const t3 = this.renderRoot?.querySelector(c3), e7 = t3?.assignedElements(o5) ?? [];
      return s2 === undefined ? e7 : e7.filter((t4) => t4.matches(s2));
    } });
  };
};
// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js
var n4 = function(n5) {
  return (o5, r6) => {
    const { slot: e6 } = n5 ?? {}, s2 = "slot" + (e6 ? `[name=${e6}]` : ":not([name])");
    return e3(o5, r6, { get() {
      const t3 = this.renderRoot?.querySelector(s2);
      return t3?.assignedNodes(n5) ?? [];
    } });
  };
};
// node_modules/lit-html/directive-h
var C = function(t3, i3) {
  if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return s2 !== undefined ? s2.createHTML(i3) : i3;
};
var N = function(t3, i3, s2 = t3, e6) {
  if (i3 === w)
    return i3;
  let h2 = e6 !== undefined ? s2._$Co?.[e6] : s2._$Cl;
  const o5 = c3(i3) ? undefined : i3._$litDirective$;
  return h2?.constructor !== o5 && (h2?._$AO?.(false), o5 === undefined ? h2 = undefined : (h2 = new o5(t3), h2._$AT(t3, s2, e6)), e6 !== undefined ? (s2._$Co ??= [])[e6] = h2 : s2._$Cl = h2), h2 !== undefined && (i3 = N(t3, h2._$AS(t3, i3.values), h2, e6)), i3;
};
var t3 = globalThis;
var i3 = t3.trustedTypes;
var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t4) => t4 }) : undefined;
var e6 = "$lit$";
var h2 = `lit\$${(Math.random() + "").slice(9)}\$`;
var o5 = "?" + h2;
var n5 = `<${o5}>`;
var r6 = document;
var l2 = () => r6.createComment("");
var c3 = (t4) => t4 === null || typeof t4 != "object" && typeof t4 != "function";
var a2 = Array.isArray;
var u2 = (t4) => a2(t4) || typeof t4?.[Symbol.iterator] == "function";
var d2 = "[ \t\n\f\r]";
var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var _ = />/g;
var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|\$)`, "g");
var p2 = /'/g;
var g = /"/g;
var $ = /^(?:script|style|textarea|title)$/i;
var y2 = (t4) => (i4, ...s3) => ({ _$litType$: t4, strings: i4, values: s3 });
var x = y2(1);
var b2 = y2(2);
var w = Symbol.for("lit-noChange");
var T = Symbol.for("lit-nothing");
var A = new WeakMap;
var E = r6.createTreeWalker(r6, 129);
var P = (t4, i4) => {
  const s3 = t4.length - 1, o6 = [];
  let r7, l3 = i4 === 2 ? "<svg>" : "", c4 = f2;
  for (let i5 = 0;i5 < s3; i5++) {
    const s4 = t4[i5];
    let a3, u3, d3 = -1, y3 = 0;
    for (;y3 < s4.length && (c4.lastIndex = y3, u3 = c4.exec(s4), u3 !== null); )
      y3 = c4.lastIndex, c4 === f2 ? u3[1] === "!--" ? c4 = v : u3[1] !== undefined ? c4 = _ : u3[2] !== undefined ? ($.test(u3[2]) && (r7 = RegExp("</" + u3[2], "g")), c4 = m) : u3[3] !== undefined && (c4 = m) : c4 === m ? u3[0] === ">" ? (c4 = r7 ?? f2, d3 = -1) : u3[1] === undefined ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = u3[3] === undefined ? m : u3[3] === '"' ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r7 = undefined);
    const x2 = c4 === m && t4[i5 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === f2 ? s4 + n5 : d3 >= 0 ? (o6.push(a3), s4.slice(0, d3) + e6 + s4.slice(d3) + h2 + x2) : s4 + h2 + (d3 === -2 ? i5 : x2);
  }
  return [C(t4, l3 + (t4[s3] || "<?>") + (i4 === 2 ? "</svg>" : "")), o6];
};

class V {
  constructor({ strings: t4, _$litType$: s3 }, n6) {
    let r7;
    this.parts = [];
    let c4 = 0, a3 = 0;
    const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = P(t4, s3);
    if (this.el = V.createElement(f3, n6), E.currentNode = this.el.content, s3 === 2) {
      const t5 = this.el.content.firstChild;
      t5.replaceWith(...t5.childNodes);
    }
    for (;(r7 = E.nextNode()) !== null && d3.length < u3; ) {
      if (r7.nodeType === 1) {
        if (r7.hasAttributes())
          for (const t5 of r7.getAttributeNames())
            if (t5.endsWith(e6)) {
              const i4 = v2[a3++], s4 = r7.getAttribute(t5).split(h2), e7 = /([.?@])?(.*)/.exec(i4);
              d3.push({ type: 1, index: c4, name: e7[2], strings: s4, ctor: e7[1] === "." ? k : e7[1] === "?" ? H : e7[1] === "@" ? I : R }), r7.removeAttribute(t5);
            } else
              t5.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r7.removeAttribute(t5));
        if ($.test(r7.tagName)) {
          const t5 = r7.textContent.split(h2), s4 = t5.length - 1;
          if (s4 > 0) {
            r7.textContent = i3 ? i3.emptyScript : "";
            for (let i4 = 0;i4 < s4; i4++)
              r7.append(t5[i4], l2()), E.nextNode(), d3.push({ type: 2, index: ++c4 });
            r7.append(t5[s4], l2());
          }
        }
      } else if (r7.nodeType === 8)
        if (r7.data === o5)
          d3.push({ type: 2, index: c4 });
        else {
          let t5 = -1;
          for (;(t5 = r7.data.indexOf(h2, t5 + 1)) !== -1; )
            d3.push({ type: 7, index: c4 }), t5 += h2.length - 1;
        }
      c4++;
    }
  }
  static createElement(t4, i4) {
    const s3 = r6.createElement("template");
    return s3.innerHTML = t4, s3;
  }
}

class S2 {
  constructor(t4, i4) {
    this._$AV = [], this._$AN = undefined, this._$AD = t4, this._$AM = i4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t4) {
    const { el: { content: i4 }, parts: s3 } = this._$AD, e7 = (t4?.creationScope ?? r6).importNode(i4, true);
    E.currentNode = e7;
    let h3 = E.nextNode(), o6 = 0, n6 = 0, l3 = s3[0];
    for (;l3 !== undefined; ) {
      if (o6 === l3.index) {
        let i5;
        l3.type === 2 ? i5 = new M(h3, h3.nextSibling, this, t4) : l3.type === 1 ? i5 = new l3.ctor(h3, l3.name, l3.strings, this, t4) : l3.type === 6 && (i5 = new L(h3, this, t4)), this._$AV.push(i5), l3 = s3[++n6];
      }
      o6 !== l3?.index && (h3 = E.nextNode(), o6++);
    }
    return E.currentNode = r6, e7;
  }
  p(t4) {
    let i4 = 0;
    for (const s3 of this._$AV)
      s3 !== undefined && (s3.strings !== undefined ? (s3._$AI(t4, s3, i4), i4 += s3.strings.length - 2) : s3._$AI(t4[i4])), i4++;
  }
}

class M {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t4, i4, s3, e7) {
    this.type = 2, this._$AH = T, this._$AN = undefined, this._$AA = t4, this._$AB = i4, this._$AM = s3, this.options = e7, this._$Cv = e7?.isConnected ?? true;
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i4 = this._$AM;
    return i4 !== undefined && t4?.nodeType === 11 && (t4 = i4.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i4 = this) {
    t4 = N(this, t4, i4), c3(t4) ? t4 === T || t4 == null || t4 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t4 !== this._$AH && t4 !== w && this._(t4) : t4._$litType$ !== undefined ? this.g(t4) : t4.nodeType !== undefined ? this.$(t4) : u2(t4) ? this.T(t4) : this._(t4);
  }
  k(t4) {
    return this._$AA.parentNode.insertBefore(t4, this._$AB);
  }
  $(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.k(t4));
  }
  _(t4) {
    this._$AH !== T && c3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.$(r6.createTextNode(t4)), this._$AH = t4;
  }
  g(t4) {
    const { values: i4, _$litType$: s3 } = t4, e7 = typeof s3 == "number" ? this._$AC(t4) : (s3.el === undefined && (s3.el = V.createElement(C(s3.h, s3.h[0]), this.options)), s3);
    if (this._$AH?._$AD === e7)
      this._$AH.p(i4);
    else {
      const t5 = new S2(e7, this), s4 = t5.u(this.options);
      t5.p(i4), this.$(s4), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i4 = A.get(t4.strings);
    return i4 === undefined && A.set(t4.strings, i4 = new V(t4)), i4;
  }
  T(t4) {
    a2(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let s3, e7 = 0;
    for (const h3 of t4)
      e7 === i4.length ? i4.push(s3 = new M(this.k(l2()), this.k(l2()), this, this.options)) : s3 = i4[e7], s3._$AI(h3), e7++;
    e7 < i4.length && (this._$AR(s3 && s3._$AB.nextSibling, e7), i4.length = e7);
  }
  _$AR(t4 = this._$AA.nextSibling, i4) {
    for (this._$AP?.(false, true, i4);t4 && t4 !== this._$AB; ) {
      const i5 = t4.nextSibling;
      t4.remove(), t4 = i5;
    }
  }
  setConnected(t4) {
    this._$AM === undefined && (this._$Cv = t4, this._$AP?.(t4));
  }
}

class R {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t4, i4, s3, e7, h3) {
    this.type = 1, this._$AH = T, this._$AN = undefined, this.element = t4, this.name = i4, this._$AM = e7, this.options = h3, s3.length > 2 || s3[0] !== "" || s3[1] !== "" ? (this._$AH = Array(s3.length - 1).fill(new String), this.strings = s3) : this._$AH = T;
  }
  _$AI(t4, i4 = this, s3, e7) {
    const h3 = this.strings;
    let o6 = false;
    if (h3 === undefined)
      t4 = N(this, t4, i4, 0), o6 = !c3(t4) || t4 !== this._$AH && t4 !== w, o6 && (this._$AH = t4);
    else {
      const e8 = t4;
      let n6, r7;
      for (t4 = h3[0], n6 = 0;n6 < h3.length - 1; n6++)
        r7 = N(this, e8[s3 + n6], i4, n6), r7 === w && (r7 = this._$AH[n6]), o6 ||= !c3(r7) || r7 !== this._$AH[n6], r7 === T ? t4 = T : t4 !== T && (t4 += (r7 ?? "") + h3[n6 + 1]), this._$AH[n6] = r7;
    }
    o6 && !e7 && this.O(t4);
  }
  O(t4) {
    t4 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
  }
}

class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  O(t4) {
    this.element[this.name] = t4 === T ? undefined : t4;
  }
}

class H extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  O(t4) {
    this.element.toggleAttribute(this.name, !!t4 && t4 !== T);
  }
}

class I extends R {
  constructor(t4, i4, s3, e7, h3) {
    super(t4, i4, s3, e7, h3), this.type = 5;
  }
  _$AI(t4, i4 = this) {
    if ((t4 = N(this, t4, i4, 0) ?? T) === w)
      return;
    const s3 = this._$AH, e7 = t4 === T && s3 !== T || t4.capture !== s3.capture || t4.once !== s3.once || t4.passive !== s3.passive, h3 = t4 !== T && (s3 === T || e7);
    e7 && this.element.removeEventListener(this.name, this, s3), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
  }
}

class L {
  constructor(t4, i4, s3) {
    this.element = t4, this.type = 6, this._$AN = undefined, this._$AM = i4, this.options = s3;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    N(this, t4);
  }
}
var Z = t3.litHtmlPolyfillSupport;
Z?.(V, M), (t3.litHtmlVersions ??= []).push("3.1.0");
var j = (t4, i4, s3) => {
  const e7 = s3?.renderBefore ?? i4;
  let h3 = e7._$litPart$;
  if (h3 === undefined) {
    const t5 = s3?.renderBefore ?? null;
    e7._$litPart$ = h3 = new M(i4.insertBefore(l2(), t5), t5, undefined, s3 ?? {});
  }
  return h3._$AI(t4), h3;
};
// node_modules/lit-html/directive-helpers
class s3 extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = undefined;
  }
  createRenderRoot() {
    const t4 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t4.firstChild, t4;
  }
  update(t4) {
    const i4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = j(i4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return w;
  }
}
s3._$litElement$ = true, s3["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s3 });
var r7 = globalThis.litElementPolyfillSupport;
r7?.({ LitElement: s3 });
(globalThis.litElementVersions ??= []).push("4.0.1");
// node_modules/lit-html/directive-he
var o6 = false;
// node_modules/lit-html/directive-helpers.js.jsus-ring-style
class Elevation extends s3 {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-hidden", "true");
  }
  render() {
    return x`<span class="shadow"></span>`;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js
var styles = i`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-r
var MdElevation = class MdElevation2 extends Elevation {
};
MdElevation.styles = [styles];
MdElevation = __decorate([
  t("md-elevation")
], MdElevation);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.j
var ATTACHABLE_CONTROLLER = Symbol("attachableController");
var FOR_ATTRIBUTE_OBSERVER;
if (!o6) {
  FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
    for (const record of records) {
      record.target[ATTACHABLE_CONTROLLER]?.hostConnected();
    }
  });
}

class AttachableController {
  get htmlFor() {
    return this.host.getAttribute("for");
  }
  set htmlFor(htmlFor) {
    if (htmlFor === null) {
      this.host.removeAttribute("for");
    } else {
      this.host.setAttribute("for", htmlFor);
    }
  }
  get control() {
    if (this.host.hasAttribute("for")) {
      if (!this.htmlFor || !this.host.isConnected) {
        return null;
      }
      return this.host.getRootNode().querySelector(`#${this.htmlFor}`);
    }
    return this.currentControl || this.host.parentElement;
  }
  set control(control) {
    if (control) {
      this.attach(control);
    } else {
      this.detach();
    }
  }
  constructor(host, onControlChange) {
    this.host = host;
    this.onControlChange = onControlChange;
    this.currentControl = null;
    host.addController(this);
    host[ATTACHABLE_CONTROLLER] = this;
    FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ["for"] });
  }
  attach(control) {
    if (control === this.currentControl) {
      return;
    }
    this.setCurrentControl(control);
    this.host.removeAttribute("for");
  }
  detach() {
    this.setCurrentControl(null);
    this.host.setAttribute("for", "");
  }
  hostConnected() {
    this.setCurrentControl(this.control);
  }
  hostDisconnected() {
    this.setCurrentControl(null);
  }
  setCurrentControl(control) {
    this.onControlChange(this.currentControl, control);
    this.currentControl = control;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-st
var EVENTS = ["focusin", "focusout", "pointerdown"];

class FocusRing extends s3 {
  constructor() {
    super(...arguments);
    this.visible = false;
    this.inward = false;
    this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
  }
  get htmlFor() {
    return this.attachableController.htmlFor;
  }
  set htmlFor(htmlFor) {
    this.attachableController.htmlFor = htmlFor;
  }
  get control() {
    return this.attachableController.control;
  }
  set control(control) {
    this.attachableController.control = control;
  }
  attach(control) {
    this.attachableController.attach(control);
  }
  detach() {
    this.attachableController.detach();
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-hidden", "true");
  }
  handleEvent(event) {
    if (event[HANDLED_BY_FOCUS_RING]) {
      return;
    }
    switch (event.type) {
      default:
        return;
      case "focusin":
        this.visible = this.control?.matches(":focus-visible") ?? false;
        break;
      case "focusout":
      case "pointerdown":
        this.visible = false;
        break;
    }
    event[HANDLED_BY_FOCUS_RING] = true;
  }
  onControlChange(prev, next) {
    if (o6)
      return;
    for (const event of EVENTS) {
      prev?.removeEventListener(event, this);
      next?.addEventListener(event, this);
    }
  }
  update(changed) {
    if (changed.has("visible")) {
      this.dispatchEvent(new Event("visibility-changed"));
    }
    super.update(changed);
  }
}
__decorate([
  n3({ type: Boolean, reflect: true })
], FocusRing.prototype, "visible", undefined);
__decorate([
  n3({ type: Boolean, reflect: true })
], FocusRing.prototype, "inward", undefined);
var HANDLED_BY_FOCUS_RING = Symbol("handledByFocusRing");

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js
var styles2 = i`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-r
var MdFocusRing = class MdFocusRing2 extends FocusRing {
};
MdFocusRing.styles = [styles2];
MdFocusRing = __decorate([
  t("md-focus-ring")
], MdFocusRing);

// node_modules/lit-html/directive-he
var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e7 = (t5) => (...e8) => ({ _$litDirective$: t5, values: e8 });

class i4 {
  constructor(t5) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t5, e8, i5) {
    this._$Ct = t5, this._$AM = e8, this._$Ci = i5;
  }
  _$AS(t5, e8) {
    return this.update(t5, e8);
  }
  update(t5, e8) {
    return this.render(...e8);
  }
}

// node_modules/lit-html/directive-helpers.js.js
var e8 = e7(class extends i4 {
  constructor(t5) {
    if (super(t5), t5.type !== t4.ATTRIBUTE || t5.name !== "class" || t5.strings?.length > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t5) {
    return " " + Object.keys(t5).filter((s4) => t5[s4]).join(" ") + " ";
  }
  update(s4, [i5]) {
    if (this.it === undefined) {
      this.it = new Set, s4.strings !== undefined && (this.st = new Set(s4.strings.join(" ").split(/\s/).filter((t5) => t5 !== "")));
      for (const t5 in i5)
        i5[t5] && !this.st?.has(t5) && this.it.add(t5);
      return this.render(i5);
    }
    const r8 = s4.element.classList;
    for (const t5 of this.it)
      (t5 in i5) || (r8.remove(t5), this.it.delete(t5));
    for (const t5 in i5) {
      const s5 = !!i5[t5];
      s5 === this.it.has(t5) || this.st?.has(t5) || (s5 ? (r8.add(t5), this.it.add(t5)) : (r8.remove(t5), this.it.delete(t5)));
    }
    return w;
  }
});
// node_modules/lit-html/directive-helpers.js.jsus-ring-st
var EASING = {
  STANDARD: "cubic-bezier(0.2, 0, 0, 1)",
  STANDARD_ACCELERATE: "cubic-bezier(.3,0,1,1)",
  STANDARD_DECELERATE: "cubic-bezier(0,0,0,1)",
  EMPHASIZED: "cubic-bezier(.3,0,0,1)",
  EMPHASIZED_ACCELERATE: "cubic-bezier(.3,0,.8,.15)",
  EMPHASIZED_DECELERATE: "cubic-bezier(.05,.7,.1,1)"
};

// node_modules/lit-html/directive-helpers.js.jsus-ring
var PRESS_GROW_MS = 450;
var MINIMUM_PRESS_MS = 225;
var INITIAL_ORIGIN_SCALE = 0.2;
var PADDING = 10;
var SOFT_EDGE_MINIMUM_SIZE = 75;
var SOFT_EDGE_CONTAINER_RATIO = 0.35;
var PRESS_PSEUDO = "::after";
var ANIMATION_FILL = "forwards";
var State;
(function(State2) {
  State2[State2["INACTIVE"] = 0] = "INACTIVE";
  State2[State2["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
  State2[State2["HOLDING"] = 2] = "HOLDING";
  State2[State2["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
})(State || (State = {}));
var EVENTS2 = [
  "click",
  "contextmenu",
  "pointercancel",
  "pointerdown",
  "pointerenter",
  "pointerleave",
  "pointerup"
];
var TOUCH_DELAY_MS = 150;

class Ripple extends s3 {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.hovered = false;
    this.pressed = false;
    this.rippleSize = "";
    this.rippleScale = "";
    this.initialSize = 0;
    this.state = State.INACTIVE;
    this.checkBoundsAfterContextMenu = false;
    this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
  }
  get htmlFor() {
    return this.attachableController.htmlFor;
  }
  set htmlFor(htmlFor) {
    this.attachableController.htmlFor = htmlFor;
  }
  get control() {
    return this.attachableController.control;
  }
  set control(control) {
    this.attachableController.control = control;
  }
  attach(control) {
    this.attachableController.attach(control);
  }
  detach() {
    this.attachableController.detach();
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-hidden", "true");
  }
  render() {
    const classes = {
      hovered: this.hovered,
      pressed: this.pressed
    };
    return x`<div class="surface ${e8(classes)}"></div>`;
  }
  update(changedProps) {
    if (changedProps.has("disabled") && this.disabled) {
      this.hovered = false;
      this.pressed = false;
    }
    super.update(changedProps);
  }
  handlePointerenter(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    this.hovered = true;
  }
  handlePointerleave(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    this.hovered = false;
    if (this.state !== State.INACTIVE) {
      this.endPressAnimation();
    }
  }
  handlePointerup(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    if (this.state === State.HOLDING) {
      this.state = State.WAITING_FOR_CLICK;
      return;
    }
    if (this.state === State.TOUCH_DELAY) {
      this.state = State.WAITING_FOR_CLICK;
      this.startPressAnimation(this.rippleStartEvent);
      return;
    }
  }
  async handlePointerdown(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    this.rippleStartEvent = event;
    if (!this.isTouch(event)) {
      this.state = State.WAITING_FOR_CLICK;
      this.startPressAnimation(event);
      return;
    }
    if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
      return;
    }
    this.checkBoundsAfterContextMenu = false;
    this.state = State.TOUCH_DELAY;
    await new Promise((resolve) => {
      setTimeout(resolve, TOUCH_DELAY_MS);
    });
    if (this.state !== State.TOUCH_DELAY) {
      return;
    }
    this.state = State.HOLDING;
    this.startPressAnimation(event);
  }
  handleClick() {
    if (this.disabled) {
      return;
    }
    if (this.state === State.WAITING_FOR_CLICK) {
      this.endPressAnimation();
      return;
    }
    if (this.state === State.INACTIVE) {
      this.startPressAnimation();
      this.endPressAnimation();
    }
  }
  handlePointercancel(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    this.endPressAnimation();
  }
  handleContextmenu() {
    if (this.disabled) {
      return;
    }
    this.checkBoundsAfterContextMenu = true;
    this.endPressAnimation();
  }
  determineRippleSize() {
    const { height, width } = this.getBoundingClientRect();
    const maxDim = Math.max(height, width);
    const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
    const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
    const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
    const maxRadius = hypotenuse + PADDING;
    this.initialSize = initialSize;
    this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
    this.rippleSize = `${initialSize}px`;
  }
  getNormalizedPointerEventCoords(pointerEvent) {
    const { scrollX, scrollY } = window;
    const { left, top } = this.getBoundingClientRect();
    const documentX = scrollX + left;
    const documentY = scrollY + top;
    const { pageX, pageY } = pointerEvent;
    return { x: pageX - documentX, y: pageY - documentY };
  }
  getTranslationCoordinates(positionEvent) {
    const { height, width } = this.getBoundingClientRect();
    const endPoint = {
      x: (width - this.initialSize) / 2,
      y: (height - this.initialSize) / 2
    };
    let startPoint;
    if (positionEvent instanceof PointerEvent) {
      startPoint = this.getNormalizedPointerEventCoords(positionEvent);
    } else {
      startPoint = {
        x: width / 2,
        y: height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    return { startPoint, endPoint };
  }
  startPressAnimation(positionEvent) {
    if (!this.mdRoot) {
      return;
    }
    this.pressed = true;
    this.growAnimation?.cancel();
    this.determineRippleSize();
    const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
    const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
    const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    this.growAnimation = this.mdRoot.animate({
      top: [0, 0],
      left: [0, 0],
      height: [this.rippleSize, this.rippleSize],
      width: [this.rippleSize, this.rippleSize],
      transform: [
        `translate(${translateStart}) scale(1)`,
        `translate(${translateEnd}) scale(${this.rippleScale})`
      ]
    }, {
      pseudoElement: PRESS_PSEUDO,
      duration: PRESS_GROW_MS,
      easing: EASING.STANDARD,
      fill: ANIMATION_FILL
    });
  }
  async endPressAnimation() {
    this.state = State.INACTIVE;
    const animation2 = this.growAnimation;
    let pressAnimationPlayState = Infinity;
    if (typeof animation2?.currentTime === "number") {
      pressAnimationPlayState = animation2.currentTime;
    } else if (animation2?.currentTime) {
      pressAnimationPlayState = animation2.currentTime.to("ms").value;
    }
    if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
      this.pressed = false;
      return;
    }
    await new Promise((resolve) => {
      setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
    });
    if (this.growAnimation !== animation2) {
      return;
    }
    this.pressed = false;
  }
  shouldReactToEvent(event) {
    if (this.disabled || !event.isPrimary) {
      return false;
    }
    if (this.rippleStartEvent && this.rippleStartEvent.pointerId !== event.pointerId) {
      return false;
    }
    if (event.type === "pointerenter" || event.type === "pointerleave") {
      return !this.isTouch(event);
    }
    const isPrimaryButton = event.buttons === 1;
    return this.isTouch(event) || isPrimaryButton;
  }
  inBounds({ x: x2, y: y3 }) {
    const { top, left, bottom, right } = this.getBoundingClientRect();
    return x2 >= left && x2 <= right && y3 >= top && y3 <= bottom;
  }
  isTouch({ pointerType }) {
    return pointerType === "touch";
  }
  async handleEvent(event) {
    switch (event.type) {
      case "click":
        this.handleClick();
        break;
      case "contextmenu":
        this.handleContextmenu();
        break;
      case "pointercancel":
        this.handlePointercancel(event);
        break;
      case "pointerdown":
        await this.handlePointerdown(event);
        break;
      case "pointerenter":
        this.handlePointerenter(event);
        break;
      case "pointerleave":
        this.handlePointerleave(event);
        break;
      case "pointerup":
        this.handlePointerup(event);
        break;
      default:
        break;
    }
  }
  onControlChange(prev, next) {
    if (o6)
      return;
    for (const event of EVENTS2) {
      prev?.removeEventListener(event, this);
      next?.addEventListener(event, this);
    }
  }
}
__decorate([
  n3({ type: Boolean, reflect: true })
], Ripple.prototype, "disabled", undefined);
__decorate([
  r4()
], Ripple.prototype, "hovered", undefined);
__decorate([
  r4()
], Ripple.prototype, "pressed", undefined);
__decorate([
  e4(".surface")
], Ripple.prototype, "mdRoot", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css
var styles3 = i`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.
var MdRipple = class MdRipple2 extends Ripple {
};
MdRipple.styles = [styles3];
MdRipple = __decorate([
  t("md-ripple")
], MdRipple);

// node_modules/lit-html/directive
var e9 = Symbol.for("");
var o7 = (t5) => {
  if (t5?.r === e9)
    return t5?._$litStatic$;
};
var s4 = (t5, ...r8) => ({ _$litStatic$: r8.reduce((r9, e10, o8) => r9 + ((t6) => {
  if (t6._$litStatic$ !== undefined)
    return t6._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t6}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`);
})(e10) + t5[o8 + 1], t5[0]), r: e9 });
var a3 = new Map;
var l3 = (t5) => (r8, ...e10) => {
  const i5 = e10.length;
  let s5, l4;
  const n6 = [], u3 = [];
  let c4, $2 = 0, f3 = false;
  for (;$2 < i5; ) {
    for (c4 = r8[$2];$2 < i5 && (l4 = e10[$2], s5 = o7(l4)) !== undefined; )
      c4 += s5 + r8[++$2], f3 = true;
    $2 !== i5 && u3.push(l4), n6.push(c4), $2++;
  }
  if ($2 === i5 && n6.push(r8[i5]), f3) {
    const t6 = n6.join("$$lit$$");
    (r8 = a3.get(t6)) === undefined && (n6.raw = n6, a3.set(t6, r8 = n6)), e10 = u3;
  }
  return t5(r8, ...e10);
};
var n6 = l3(x);
var u3 = l3(b2);
// node_modules/lit-html/directive-helpers.js.jsus-
function ariaPropertyToAttribute(property3) {
  return property3.replace("aria", "aria-").replace(/Elements?/g, "").toLowerCase();
}
function setupHostAria(ctor, { focusable } = {}) {
  if (focusable !== false) {
    ctor.addInitializer((host) => {
      host.addController({
        hostConnected() {
          if (host.hasAttribute("tabindex")) {
            return;
          }
          host.tabIndex = 0;
        }
      });
    });
  }
  if (o6 || ("role" in Element.prototype)) {
    return;
  }
  for (const ariaProperty of ARIA_PROPERTIES) {
    ctor.createProperty(ariaProperty, {
      attribute: ariaPropertyToAttribute(ariaProperty),
      reflect: true
    });
  }
  ctor.createProperty("role", { reflect: true });
}
function polyfillElementInternalsAria(host, internals) {
  if (checkIfElementInternalsSupportsAria(internals)) {
    return internals;
  }
  if (!("role" in host)) {
    throw new Error("Missing setupHostAria()");
  }
  let firstConnectedCallbacks = [];
  let hasBeenConnected = false;
  for (const ariaProperty of ARIA_PROPERTIES) {
    let internalAriaValue = null;
    Object.defineProperty(internals, ariaProperty, {
      enumerable: true,
      configurable: true,
      get() {
        return internalAriaValue;
      },
      set(value) {
        const setValue = () => {
          internalAriaValue = value;
          if (!hasBeenConnected) {
            firstConnectedCallbacks.push({ property: ariaProperty, callback: setValue });
            return;
          }
          host[ariaProperty] = value;
        };
        setValue();
      }
    });
  }
  let internalRoleValue = null;
  Object.defineProperty(internals, "role", {
    enumerable: true,
    configurable: true,
    get() {
      return internalRoleValue;
    },
    set(value) {
      const setRole = () => {
        internalRoleValue = value;
        if (!hasBeenConnected) {
          firstConnectedCallbacks.push({
            property: "role",
            callback: setRole
          });
          return;
        }
        if (value === null) {
          host.removeAttribute("role");
        } else {
          host.setAttribute("role", value);
        }
      };
      setRole();
    }
  });
  host.addController({
    hostConnected() {
      if (hasBeenConnected) {
        return;
      }
      hasBeenConnected = true;
      const propertiesSetByUser = new Set;
      for (const { property: property3 } of firstConnectedCallbacks) {
        const wasSetByUser = host.getAttribute(ariaPropertyToAttribute(property3)) !== null || host[property3] !== undefined;
        if (wasSetByUser) {
          propertiesSetByUser.add(property3);
        }
      }
      for (const { property: property3, callback } of firstConnectedCallbacks) {
        if (propertiesSetByUser.has(property3)) {
          continue;
        }
        callback();
      }
      firstConnectedCallbacks = [];
    }
  });
  return internals;
}
var checkIfElementInternalsSupportsAria = function(internals) {
  return "role" in internals;
};
var ARIA_PROPERTIES = [
  "ariaAtomic",
  "ariaAutoComplete",
  "ariaBusy",
  "ariaChecked",
  "ariaColCount",
  "ariaColIndex",
  "ariaColSpan",
  "ariaCurrent",
  "ariaDisabled",
  "ariaExpanded",
  "ariaHasPopup",
  "ariaHidden",
  "ariaInvalid",
  "ariaKeyShortcuts",
  "ariaLabel",
  "ariaLevel",
  "ariaLive",
  "ariaModal",
  "ariaMultiLine",
  "ariaMultiSelectable",
  "ariaOrientation",
  "ariaPlaceholder",
  "ariaPosInSet",
  "ariaPressed",
  "ariaReadOnly",
  "ariaRequired",
  "ariaRoleDescription",
  "ariaRowCount",
  "ariaRowIndex",
  "ariaRowSpan",
  "ariaSelected",
  "ariaSetSize",
  "ariaSort",
  "ariaValueMax",
  "ariaValueMin",
  "ariaValueNow",
  "ariaValueText"
];
var ARIA_ATTRIBUTES = ARIA_PROPERTIES.map(ariaPropertyToAttribute);

// node_modules/lit-html/directive-helpers.js.jsus-ring
function requestUpdateOnAriaChange(ctor) {
  for (const ariaProperty of ARIA_PROPERTIES) {
    ctor.createProperty(ariaProperty, {
      attribute: ariaPropertyToAttribute(ariaProperty),
      reflect: true
    });
  }
  ctor.addInitializer((element) => {
    const controller = {
      hostConnected() {
        element.setAttribute("role", "presentation");
      }
    };
    element.addController(controller);
  });
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.
var internals = Symbol("internals");

// node_modules/lit-html/directive-helpers.js.jsus-ring-sty
function redispatchEvent(element, event) {
  if (event.bubbles && (!element.shadowRoot || event.composed)) {
    event.stopPropagation();
  }
  const copy = Reflect.construct(event.constructor, [event.type, event]);
  const dispatched = element.dispatchEvent(copy);
  if (!dispatched) {
    event.preventDefault();
  }
  return dispatched;
}
function dispatchActivationClick(element) {
  const event = new MouseEvent("click", { bubbles: true });
  element.dispatchEvent(event);
  return event;
}
function isActivationClick(event) {
  if (event.currentTarget !== event.target) {
    return false;
  }
  if (event.composedPath()[0] !== event.target) {
    return false;
  }
  if (event.target.disabled) {
    return false;
  }
  return !squelchEvent(event);
}
var squelchEvent = function(event) {
  const squelched = isSquelchingEvents;
  if (squelched) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  squelchEventsForMicrotask();
  return squelched;
};
async function squelchEventsForMicrotask() {
  isSquelchingEvents = true;
  await null;
  isSquelchingEvents = false;
}
var isSquelchingEvents = false;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.
function setupFormSubmitter(ctor) {
  if (o6) {
    return;
  }
  ctor.addInitializer((instance) => {
    const submitter = instance;
    submitter.addEventListener("click", async (event) => {
      const { type, [internals]: elementInternals } = submitter;
      const { form } = elementInternals;
      if (!form || type === "button") {
        return;
      }
      await new Promise((resolve) => {
        resolve();
      });
      if (event.defaultPrevented) {
        return;
      }
      if (type === "reset") {
        form.reset();
        return;
      }
      form.addEventListener("submit", (submitEvent) => {
        Object.defineProperty(submitEvent, "submitter", {
          configurable: true,
          enumerable: true,
          get: () => submitter
        });
      }, { capture: true, once: true });
      elementInternals.setFormValue(submitter.value);
      form.requestSubmit();
    });
  });
}

// node_modules/lit-html/directive-helpers.js.jsus-ring
var _a;

class Button extends s3 {
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(name) {
    this.setAttribute("name", name);
  }
  get form() {
    return this[internals].form;
  }
  constructor() {
    super();
    this.disabled = false;
    this.href = "";
    this.target = "";
    this.trailingIcon = false;
    this.hasIcon = false;
    this.type = "submit";
    this.value = "";
    this[_a] = this.attachInternals();
    this.handleActivationClick = (event) => {
      if (!isActivationClick(event) || !this.buttonElement) {
        return;
      }
      this.focus();
      dispatchActivationClick(this.buttonElement);
    };
    if (!o6) {
      this.addEventListener("click", this.handleActivationClick);
    }
  }
  focus() {
    this.buttonElement?.focus();
  }
  blur() {
    this.buttonElement?.blur();
  }
  render() {
    const isDisabled = this.disabled && !this.href;
    const button = this.href ? s4`a` : s4`button`;
    const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
    return n6`
      <${button}
        class="button ${e8(this.getRenderClasses())}"
        ?disabled=${isDisabled}
        aria-label="${ariaLabel || T}"
        aria-haspopup="${ariaHasPopup || T}"
        aria-expanded="${ariaExpanded || T}"
        href=${this.href || T}
        target=${this.target || T}
      >${this.renderContent()}</${button}>`;
  }
  getRenderClasses() {
    return {
      "button--icon-leading": !this.trailingIcon && this.hasIcon,
      "button--icon-trailing": this.trailingIcon && this.hasIcon
    };
  }
  renderContent() {
    const isDisabled = this.disabled && !this.href;
    const icon = x`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;
    return x`
      ${this.renderElevation?.()}
      ${this.renderOutline?.()}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${isDisabled}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon ? T : icon}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon ? icon : T}
    `;
  }
  handleSlotChange() {
    this.hasIcon = this.assignedIcons.length > 0;
  }
}
_a = internals;
(() => {
  requestUpdateOnAriaChange(Button);
  setupFormSubmitter(Button);
})();
Button.formAssociated = true;
Button.shadowRootOptions = { mode: "open", delegatesFocus: true };
__decorate([
  n3({ type: Boolean, reflect: true })
], Button.prototype, "disabled", undefined);
__decorate([
  n3()
], Button.prototype, "href", undefined);
__decorate([
  n3()
], Button.prototype, "target", undefined);
__decorate([
  n3({ type: Boolean, attribute: "trailing-icon" })
], Button.prototype, "trailingIcon", undefined);
__decorate([
  n3({ type: Boolean, attribute: "has-icon" })
], Button.prototype, "hasIcon", undefined);
__decorate([
  n3()
], Button.prototype, "type", undefined);
__decorate([
  n3()
], Button.prototype, "value", undefined);
__decorate([
  e4(".button")
], Button.prototype, "buttonElement", undefined);
__decorate([
  o4({ slot: "icon", flatten: true })
], Button.prototype, "assignedIcons", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles
class FilledButton extends Button {
  renderElevation() {
    return x`<md-elevation></md-elevation>`;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css
var styles4 = i`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss
var styles5 = i`md-elevation{transition-duration:280ms}.button:disabled md-elevation{transition:none}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css
var styles6 = i`:host{display:inline-flex;height:var(--_container-height);outline:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ri
var MdFilledButton = class MdFilledButton2 extends FilledButton {
};
MdFilledButton.styles = [styles6, styles5, styles4];
MdFilledButton = __decorate([
  t("md-filled-button")
], MdFilledButton);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styl
class TextButton extends Button {
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.c
var styles7 = i`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-
var MdTextButton = class MdTextButton2 extends TextButton {
};
MdTextButton.styles = [styles6, styles7];
MdTextButton = __decorate([
  t("md-text-button")
], MdTextButton);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.j
class FilledTonalButton extends Button {
  renderElevation() {
    return x`<md-elevation></md-elevation>`;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js
var styles8 = i`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-sty
var MdFilledTonalButton = class MdFilledTonalButton2 extends FilledTonalButton {
};
MdFilledTonalButton.styles = [styles6, styles5, styles8];
MdFilledTonalButton = __decorate([
  t("md-filled-tonal-button")
], MdFilledTonalButton);

// node_modules/lit-html/directive-helpers.js.jsus-ring-sty
class Progress extends s3 {
  constructor() {
    super(...arguments);
    this.value = 0;
    this.max = 1;
    this.indeterminate = false;
    this.fourColor = false;
  }
  render() {
    const { ariaLabel } = this;
    return x`
      <div class="progress ${e8(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${ariaLabel || T}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate ? T : this.value}
      >${this.renderIndicator()}</div>
    `;
  }
  getRenderClasses() {
    return {
      indeterminate: this.indeterminate,
      "four-color": this.fourColor
    };
  }
}
(() => {
  requestUpdateOnAriaChange(Progress);
})();
__decorate([
  n3({ type: Number })
], Progress.prototype, "value", undefined);
__decorate([
  n3({ type: Number })
], Progress.prototype, "max", undefined);
__decorate([
  n3({ type: Boolean })
], Progress.prototype, "indeterminate", undefined);
__decorate([
  n3({ type: Boolean, attribute: "four-color" })
], Progress.prototype, "fourColor", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.j
class CircularProgress extends Progress {
  renderIndicator() {
    if (this.indeterminate) {
      return this.renderIndeterminateContainer();
    }
    return this.renderDeterminateContainer();
  }
  renderDeterminateContainer() {
    const dashOffset = (1 - this.value / this.max) * 100;
    return x`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle class="active-track" pathLength="100"
          stroke-dashoffset=${dashOffset}></circle>
      </svg>
    `;
  }
  renderIndeterminateContainer() {
    return x`
      <div class="spinner">
        <div class="left">
          <div class="circle"></div>
        </div>
        <div class="right">
          <div class="circle"></div>
        </div>
      </div>`;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.js
var styles9 = i`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;min-block-size:var(--_size);min-inline-size:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}/*# sourceMappingURL=circular-progress-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-sty
var MdCircularProgress = class MdCircularProgress2 extends CircularProgress {
};
MdCircularProgress.styles = [styles9];
MdCircularProgress = __decorate([
  t("md-circular-progress")
], MdCircularProgress);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.c
class OutlinedButton extends Button {
  renderOutline() {
    return x`<span class="button__outline"></span>`;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.j
var styles10 = i`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button:active .button__outline{border-color:var(--_pressed-outline-color)}.button:disabled .button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){.button:disabled .button__outline{opacity:1}}.button__outline,.button__ripple{border-width:var(--_outline-width)}.button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring
var MdOutlinedButton = class MdOutlinedButton2 extends OutlinedButton {
};
MdOutlinedButton.styles = [styles6, styles10];
MdOutlinedButton = __decorate([
  t("md-outlined-button")
], MdOutlinedButton);

// node_modules/lit-html/directive-helpers.js.jsus-ring-sty
class Checkbox extends s3 {
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(name) {
    this.setAttribute("name", name);
  }
  get form() {
    return this.internals.form;
  }
  get labels() {
    return this.internals.labels;
  }
  get validity() {
    this.syncValidity();
    return this.internals.validity;
  }
  get validationMessage() {
    this.syncValidity();
    return this.internals.validationMessage;
  }
  get willValidate() {
    this.syncValidity();
    return this.internals.willValidate;
  }
  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.indeterminate = false;
    this.required = false;
    this.value = "on";
    this.prevChecked = false;
    this.prevDisabled = false;
    this.prevIndeterminate = false;
    this.hasCustomValidityError = false;
    this.internals = this.attachInternals();
    if (!o6) {
      this.addEventListener("click", (event) => {
        if (!isActivationClick(event)) {
          return;
        }
        this.focus();
        dispatchActivationClick(this.input);
      });
    }
  }
  checkValidity() {
    this.syncValidity();
    return this.internals.checkValidity();
  }
  reportValidity() {
    this.syncValidity();
    return this.internals.reportValidity();
  }
  setCustomValidity(error) {
    this.hasCustomValidityError = !!error;
    this.internals.setValidity({ customError: !!error }, error, this.getInput());
  }
  update(changed) {
    if (changed.has("checked") || changed.has("disabled") || changed.has("indeterminate")) {
      this.prevChecked = changed.get("checked") ?? this.checked;
      this.prevDisabled = changed.get("disabled") ?? this.disabled;
      this.prevIndeterminate = changed.get("indeterminate") ?? this.indeterminate;
    }
    const shouldAddFormValue = this.checked && !this.indeterminate;
    const state2 = String(this.checked);
    this.internals.setFormValue(shouldAddFormValue ? this.value : null, state2);
    super.update(changed);
  }
  render() {
    const prevNone = !this.prevChecked && !this.prevIndeterminate;
    const prevChecked = this.prevChecked && !this.prevIndeterminate;
    const prevIndeterminate = this.prevIndeterminate;
    const isChecked = this.checked && !this.indeterminate;
    const isIndeterminate = this.indeterminate;
    const containerClasses = e8({
      disabled: this.disabled,
      selected: isChecked || isIndeterminate,
      unselected: !isChecked && !isIndeterminate,
      checked: isChecked,
      indeterminate: isIndeterminate,
      "prev-unselected": prevNone,
      "prev-checked": prevChecked,
      "prev-indeterminate": prevIndeterminate,
      "prev-disabled": this.prevDisabled
    });
    const { ariaLabel, ariaInvalid } = this;
    return x`
      <div class="container ${containerClasses}">
        <input type="checkbox"
          id="input"
          aria-checked=${isIndeterminate ? "mixed" : T}
          aria-label=${ariaLabel || T}
          aria-invalid=${ariaInvalid || T}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @change=${this.handleChange}
        >

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `;
  }
  updated() {
    this.syncValidity();
  }
  handleChange(event) {
    const target = event.target;
    this.checked = target.checked;
    this.indeterminate = target.indeterminate;
    redispatchEvent(this, event);
  }
  syncValidity() {
    const input = this.getInput();
    if (this.hasCustomValidityError) {
      input.setCustomValidity(this.internals.validationMessage);
    } else {
      input.setCustomValidity("");
    }
    this.internals.setValidity(input.validity, input.validationMessage, this.getInput());
  }
  getInput() {
    if (!this.input) {
      this.connectedCallback();
      this.performUpdate();
    }
    if (this.isUpdatePending) {
      this.scheduleUpdate();
    }
    return this.input;
  }
  formResetCallback() {
    this.checked = this.hasAttribute("checked");
  }
  formStateRestoreCallback(state2) {
    this.checked = state2 === "true";
  }
}
(() => {
  requestUpdateOnAriaChange(Checkbox);
})();
Checkbox.shadowRootOptions = {
  ...s3.shadowRootOptions,
  delegatesFocus: true
};
Checkbox.formAssociated = true;
__decorate([
  n3({ type: Boolean })
], Checkbox.prototype, "checked", undefined);
__decorate([
  n3({ type: Boolean, reflect: true })
], Checkbox.prototype, "disabled", undefined);
__decorate([
  n3({ type: Boolean })
], Checkbox.prototype, "indeterminate", undefined);
__decorate([
  n3({ type: Boolean })
], Checkbox.prototype, "required", undefined);
__decorate([
  n3()
], Checkbox.prototype, "value", undefined);
__decorate([
  r4()
], Checkbox.prototype, "prevChecked", undefined);
__decorate([
  r4()
], Checkbox.prototype, "prevDisabled", undefined);
__decorate([
  r4()
], Checkbox.prototype, "prevIndeterminate", undefined);
__decorate([
  e4("input")
], Checkbox.prototype, "input", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.
var styles11 = i`:host{--_container-shape: var(--md-checkbox-container-shape, 2px);--_container-size: var(--md-checkbox-container-size, 18px);--_icon-size: var(--md-checkbox-icon-size, 18px);--_selected-container-color: var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));--_selected-disabled-container-color: var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-disabled-container-opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);--_selected-disabled-icon-color: var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff));--_selected-focus-container-color: var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-icon-color: var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-container-color: var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-state-layer-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-container-color: var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-state-layer-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-checkbox-state-layer-shape, 9999px);--_state-layer-size: var(--md-checkbox-state-layer-size, 40px);--_disabled-container-opacity: var(--md-checkbox-disabled-container-opacity, 0.38);--_disabled-outline-color: var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-width: var(--md-checkbox-disabled-outline-width, 2px);--_focus-outline-color: var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-outline-width: var(--md-checkbox-focus-outline-width, 2px);--_hover-outline-color: var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-checkbox-hover-outline-width, 2px);--_hover-state-layer-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--_outline-color: var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-width: var(--md-checkbox-outline-width, 2px);--_pressed-outline-color: var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-outline-width: var(--md-checkbox-pressed-outline-width, 2px);--_pressed-state-layer-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: var( --md-checkbox-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-checkbox-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-checkbox-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-checkbox-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:inline-flex;height:var(--_container-size);position:relative;vertical-align:top;width:var(--_container-size);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--_outline-color);border-style:solid;border-width:var(--_outline-width);box-sizing:border-box}.background{background-color:var(--_selected-container-color)}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.icon{fill:var(--_selected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--_hover-outline-color);border-width:var(--_hover-outline-width)}:where(:hover) .background{background:var(--_selected-hover-container-color)}:where(:hover) .icon{fill:var(--_selected-hover-icon-color)}:where(:focus-within) .outline{border-color:var(--_focus-outline-color);border-width:var(--_focus-outline-width)}:where(:focus-within) .background{background:var(--_selected-focus-container-color)}:where(:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:where(:active) .outline{border-color:var(--_pressed-outline-color);border-width:var(--_pressed-outline-width)}:where(:active) .background{background:var(--_selected-pressed-container-color)}:where(:active) .icon{fill:var(--_selected-pressed-icon-color)}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);border-width:var(--_disabled-outline-width);opacity:var(--_disabled-container-opacity)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--_selected-disabled-container-color);opacity:var(--_selected-disabled-container-opacity)}:where(.disabled) .icon{fill:var(--_selected-disabled-icon-color)}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}/*# sourceMappingURL=checkbox-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus
var MdCheckbox = class MdCheckbox2 extends Checkbox {
};
MdCheckbox.styles = [styles11];
MdCheckbox = __decorate([
  t("md-checkbox")
], MdCheckbox);

// node_modules/lit-html/directive-helpers.js.jsus-ri
class Field extends s3 {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.error = false;
    this.focused = false;
    this.label = "";
    this.populated = false;
    this.required = false;
    this.resizable = false;
    this.supportingText = "";
    this.errorText = "";
    this.count = -1;
    this.max = -1;
    this.hasStart = false;
    this.hasEnd = false;
    this.isAnimating = false;
    this.refreshErrorAlert = false;
    this.disableTransitions = false;
  }
  get counterText() {
    if (this.count < 0 || this.max < 0) {
      return "";
    }
    return `${this.count} / ${this.max}`;
  }
  get supportingOrErrorText() {
    return this.error && this.errorText ? this.errorText : this.supportingText;
  }
  reannounceError() {
    this.refreshErrorAlert = true;
  }
  update(props) {
    const isDisabledChanging = props.has("disabled") && props.get("disabled") !== undefined;
    if (isDisabledChanging) {
      this.disableTransitions = true;
    }
    if (this.disabled && this.focused) {
      props.set("focused", true);
      this.focused = false;
    }
    this.animateLabelIfNeeded({
      wasFocused: props.get("focused"),
      wasPopulated: props.get("populated")
    });
    super.update(props);
  }
  render() {
    const floatingLabel = this.renderLabel(true);
    const restingLabel = this.renderLabel(false);
    const outline = this.renderOutline?.(floatingLabel);
    const classes = {
      disabled: this.disabled,
      "disable-transitions": this.disableTransitions,
      error: this.error && !this.disabled,
      focused: this.focused,
      "with-start": this.hasStart,
      "with-end": this.hasEnd,
      populated: this.populated,
      resizable: this.resizable,
      required: this.required,
      "no-label": !this.label
    };
    return x`
      <div class="field ${e8(classes)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          ${this.renderIndicator?.()}
          ${outline}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${restingLabel}
                ${outline ? T : floatingLabel}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `;
  }
  updated(changed) {
    if (changed.has("supportingText") || changed.has("errorText") || changed.has("count") || changed.has("max")) {
      this.updateSlottedAriaDescribedBy();
    }
    if (this.refreshErrorAlert) {
      requestAnimationFrame(() => {
        this.refreshErrorAlert = false;
      });
    }
    if (this.disableTransitions) {
      requestAnimationFrame(() => {
        this.disableTransitions = false;
      });
    }
  }
  renderSupportingText() {
    const { supportingOrErrorText, counterText } = this;
    if (!supportingOrErrorText && !counterText) {
      return T;
    }
    const start = x`<span>${supportingOrErrorText}</span>`;
    const end = counterText ? x`<span class="counter">${counterText}</span>` : T;
    const shouldErrorAnnounce = this.error && this.errorText && !this.refreshErrorAlert;
    const role = shouldErrorAnnounce ? "alert" : T;
    return x`
      <div class="supporting-text" role=${role}>${start}${end}</div>
      <slot name="aria-describedby" @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `;
  }
  updateSlottedAriaDescribedBy() {
    for (const element of this.slottedAriaDescribedBy) {
      j(x`${this.supportingOrErrorText} ${this.counterText}`, element);
      element.setAttribute("hidden", "");
    }
  }
  renderLabel(isFloating) {
    if (!this.label) {
      return T;
    }
    let visible;
    if (isFloating) {
      visible = this.focused || this.populated || this.isAnimating;
    } else {
      visible = !this.focused && !this.populated && !this.isAnimating;
    }
    const classes = {
      hidden: !visible,
      floating: isFloating,
      resting: !isFloating
    };
    const labelText = `${this.label}${this.required ? "*" : ""}`;
    return x`
      <span class="label ${e8(classes)}"
        aria-hidden=${!visible}
      >${labelText}</span>
    `;
  }
  animateLabelIfNeeded({ wasFocused, wasPopulated }) {
    if (!this.label) {
      return;
    }
    wasFocused ?? (wasFocused = this.focused);
    wasPopulated ?? (wasPopulated = this.populated);
    const wasFloating = wasFocused || wasPopulated;
    const shouldBeFloating = this.focused || this.populated;
    if (wasFloating === shouldBeFloating) {
      return;
    }
    this.isAnimating = true;
    this.labelAnimation?.cancel();
    this.labelAnimation = this.floatingLabelEl?.animate(this.getLabelKeyframes(), { duration: 150, easing: EASING.STANDARD });
    this.labelAnimation?.addEventListener("finish", () => {
      this.isAnimating = false;
    });
  }
  getLabelKeyframes() {
    const { floatingLabelEl, restingLabelEl } = this;
    if (!floatingLabelEl || !restingLabelEl) {
      return [];
    }
    const { x: floatingX, y: floatingY, height: floatingHeight } = floatingLabelEl.getBoundingClientRect();
    const { x: restingX, y: restingY, height: restingHeight } = restingLabelEl.getBoundingClientRect();
    const floatingScrollWidth = floatingLabelEl.scrollWidth;
    const restingScrollWidth = restingLabelEl.scrollWidth;
    const scale = restingScrollWidth / floatingScrollWidth;
    const xDelta = restingX - floatingX;
    const yDelta = restingY - floatingY + Math.round((restingHeight - floatingHeight * scale) / 2);
    const restTransform = `translateX(${xDelta}px) translateY(${yDelta}px) scale(${scale})`;
    const floatTransform = `translateX(0) translateY(0) scale(1)`;
    const restingClientWidth = restingLabelEl.clientWidth;
    const isRestingClipped = restingScrollWidth > restingClientWidth;
    const width = isRestingClipped ? `${restingClientWidth / scale}px` : "";
    if (this.focused || this.populated) {
      return [
        { transform: restTransform, width },
        { transform: floatTransform, width }
      ];
    }
    return [
      { transform: floatTransform, width },
      { transform: restTransform, width }
    ];
  }
  getSurfacePositionClientRect() {
    return this.containerEl.getBoundingClientRect();
  }
}
__decorate([
  n3({ type: Boolean })
], Field.prototype, "disabled", undefined);
__decorate([
  n3({ type: Boolean })
], Field.prototype, "error", undefined);
__decorate([
  n3({ type: Boolean })
], Field.prototype, "focused", undefined);
__decorate([
  n3()
], Field.prototype, "label", undefined);
__decorate([
  n3({ type: Boolean })
], Field.prototype, "populated", undefined);
__decorate([
  n3({ type: Boolean })
], Field.prototype, "required", undefined);
__decorate([
  n3({ type: Boolean })
], Field.prototype, "resizable", undefined);
__decorate([
  n3({ attribute: "supporting-text" })
], Field.prototype, "supportingText", undefined);
__decorate([
  n3({ attribute: "error-text" })
], Field.prototype, "errorText", undefined);
__decorate([
  n3({ type: Number })
], Field.prototype, "count", undefined);
__decorate([
  n3({ type: Number })
], Field.prototype, "max", undefined);
__decorate([
  n3({ type: Boolean, attribute: "has-start" })
], Field.prototype, "hasStart", undefined);
__decorate([
  n3({ type: Boolean, attribute: "has-end" })
], Field.prototype, "hasEnd", undefined);
__decorate([
  o4({ slot: "aria-describedby" })
], Field.prototype, "slottedAriaDescribedBy", undefined);
__decorate([
  r4()
], Field.prototype, "isAnimating", undefined);
__decorate([
  r4()
], Field.prototype, "refreshErrorAlert", undefined);
__decorate([
  r4()
], Field.prototype, "disableTransitions", undefined);
__decorate([
  e4(".label.floating")
], Field.prototype, "floatingLabelEl", undefined);
__decorate([
  e4(".label.resting")
], Field.prototype, "restingLabelEl", undefined);
__decorate([
  e4(".container")
], Field.prototype, "containerEl", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styl
class FilledField extends Field {
  renderBackground() {
    return x`
      <div class="background"></div>
      <div class="state-layer"></div>
    `;
  }
  renderIndicator() {
    return x`<div class="active-indicator"></div>`;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.cs
var styles12 = i`:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, 0px) );--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px)}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}/*# sourceMappingURL=filled-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.cs
var styles13 = i`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;white-space:pre-wrap}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-
var MdFilledField = class MdFilledField2 extends FilledField {
};
MdFilledField.styles = [styles13, styles12];
MdFilledField = __decorate([
  t("md-filled-field")
], MdFilledField);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.jss.js
var styles14 = i`@media(forced-colors: active){:host{--md-filled-text-field-disabled-active-indicator-color: GrayText;--md-filled-text-field-disabled-active-indicator-opacity: 1;--md-filled-text-field-disabled-input-text-color: GrayText;--md-filled-text-field-disabled-input-text-opacity: 1;--md-filled-text-field-disabled-label-text-color: GrayText;--md-filled-text-field-disabled-label-text-opacity: 1;--md-filled-text-field-disabled-leading-icon-color: GrayText;--md-filled-text-field-disabled-leading-icon-opacity: 1;--md-filled-text-field-disabled-supporting-text-color: GrayText;--md-filled-text-field-disabled-supporting-text-opacity: 1;--md-filled-text-field-disabled-trailing-icon-color: GrayText;--md-filled-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=filled-forced-colors-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js
var styles15 = i`:host{--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, 0px) );--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}/*# sourceMappingURL=filled-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js
var f3 = (o8) => o8.strings === undefined;
var u4 = {};
var m2 = (o8, t5 = u4) => o8._$AH = t5;

// node_modules/lit-html/directive-helpers.
var l4 = e7(class extends i4 {
  constructor(r8) {
    if (super(r8), r8.type !== t4.PROPERTY && r8.type !== t4.ATTRIBUTE && r8.type !== t4.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!f3(r8))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(r8) {
    return r8;
  }
  update(i5, [t5]) {
    if (t5 === w || t5 === T)
      return t5;
    const { element: o8, name: l5 } = i5;
    if (i5.type === t4.PROPERTY) {
      if (t5 === o8[l5])
        return w;
    } else if (i5.type === t4.BOOLEAN_ATTRIBUTE) {
      if (!!t5 === o8.hasAttribute(l5))
        return w;
    } else if (i5.type === t4.ATTRIBUTE && o8.getAttribute(l5) === t5 + "")
      return w;
    return m2(i5), t5;
  }
});
// node_modules/lit-html/directive-helpers.js.js
var n7 = "important";
var i5 = " !" + n7;
var o8 = e7(class extends i4 {
  constructor(t5) {
    if (super(t5), t5.type !== t4.ATTRIBUTE || t5.name !== "style" || t5.strings?.length > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t5) {
    return Object.keys(t5).reduce((e10, r8) => {
      const s5 = t5[r8];
      return s5 == null ? e10 : e10 + `${r8 = r8.includes("-") ? r8 : r8.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s5};`;
    }, "");
  }
  update(e10, [r8]) {
    const { style: s5 } = e10.element;
    if (this.ut === undefined)
      return this.ut = new Set(Object.keys(r8)), this.render(r8);
    for (const t5 of this.ut)
      r8[t5] == null && (this.ut.delete(t5), t5.includes("-") ? s5.removeProperty(t5) : s5[t5] = null);
    for (const t5 in r8) {
      const e11 = r8[t5];
      if (e11 != null) {
        this.ut.add(t5);
        const r9 = typeof e11 == "string" && e11.endsWith(i5);
        t5.includes("-") || r9 ? s5.setProperty(t5, r9 ? e11.slice(0, -11) : e11, r9 ? n7 : "") : s5[t5] = e11;
      }
    }
    return w;
  }
});
// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js
var stringConverter = {
  fromAttribute(value) {
    return value ?? "";
  },
  toAttribute(value) {
    return value || null;
  }
};

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles
class TextField extends s3 {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.error = false;
    this.errorText = "";
    this.label = "";
    this.required = false;
    this.value = "";
    this.prefixText = "";
    this.suffixText = "";
    this.hasLeadingIcon = false;
    this.hasTrailingIcon = false;
    this.supportingText = "";
    this.textDirection = "";
    this.rows = 2;
    this.inputMode = "";
    this.max = "";
    this.maxLength = -1;
    this.min = "";
    this.minLength = -1;
    this.pattern = "";
    this.placeholder = "";
    this.readOnly = false;
    this.multiple = false;
    this.step = "";
    this.type = "text";
    this.autocomplete = "";
    this.dirty = false;
    this.focused = false;
    this.nativeError = false;
    this.nativeErrorText = "";
    this.hasCustomValidityError = false;
    this.internals = this.attachInternals();
  }
  get form() {
    return this.internals.form;
  }
  get labels() {
    return this.internals.labels;
  }
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(name) {
    this.setAttribute("name", name);
  }
  get selectionDirection() {
    return this.getInputOrTextarea().selectionDirection;
  }
  set selectionDirection(value) {
    this.getInputOrTextarea().selectionDirection = value;
  }
  get selectionEnd() {
    return this.getInputOrTextarea().selectionEnd;
  }
  set selectionEnd(value) {
    this.getInputOrTextarea().selectionEnd = value;
  }
  get selectionStart() {
    return this.getInputOrTextarea().selectionStart;
  }
  set selectionStart(value) {
    this.getInputOrTextarea().selectionStart = value;
  }
  get validationMessage() {
    this.syncValidity();
    return this.internals.validationMessage;
  }
  get validity() {
    this.syncValidity();
    return this.internals.validity;
  }
  get valueAsNumber() {
    const input = this.getInput();
    if (!input) {
      return NaN;
    }
    return input.valueAsNumber;
  }
  set valueAsNumber(value) {
    const input = this.getInput();
    if (!input) {
      return;
    }
    input.valueAsNumber = value;
    this.value = input.value;
  }
  get valueAsDate() {
    const input = this.getInput();
    if (!input) {
      return null;
    }
    return input.valueAsDate;
  }
  set valueAsDate(value) {
    const input = this.getInput();
    if (!input) {
      return;
    }
    input.valueAsDate = value;
    this.value = input.value;
  }
  get willValidate() {
    this.syncValidity();
    return this.internals.willValidate;
  }
  get hasError() {
    return this.error || this.nativeError;
  }
  checkValidity() {
    this.syncValidity();
    return this.internals.checkValidity();
  }
  reportValidity() {
    let invalidEvent;
    this.addEventListener("invalid", (event) => {
      invalidEvent = event;
    }, { once: true });
    const valid = this.checkValidity();
    if (invalidEvent?.defaultPrevented) {
      return valid;
    }
    const prevMessage = this.getErrorText();
    this.nativeError = !valid;
    this.nativeErrorText = this.validationMessage;
    if (prevMessage === this.getErrorText()) {
      this.field?.reannounceError();
    }
    return valid;
  }
  select() {
    this.getInputOrTextarea().select();
  }
  setCustomValidity(error) {
    this.hasCustomValidityError = !!error;
    this.internals.setValidity({ customError: !!error }, error, this.getInputOrTextarea());
  }
  setRangeText(...args) {
    this.getInputOrTextarea().setRangeText(...args);
    this.value = this.getInputOrTextarea().value;
  }
  setSelectionRange(start, end, direction) {
    this.getInputOrTextarea().setSelectionRange(start, end, direction);
  }
  stepDown(stepDecrement) {
    const input = this.getInput();
    if (!input) {
      return;
    }
    input.stepDown(stepDecrement);
    this.value = input.value;
  }
  stepUp(stepIncrement) {
    const input = this.getInput();
    if (!input) {
      return;
    }
    input.stepUp(stepIncrement);
    this.value = input.value;
  }
  reset() {
    this.dirty = false;
    this.value = this.getAttribute("value") ?? "";
    this.nativeError = false;
    this.nativeErrorText = "";
  }
  attributeChangedCallback(attribute, newValue, oldValue) {
    if (attribute === "value" && this.dirty) {
      return;
    }
    super.attributeChangedCallback(attribute, newValue, oldValue);
  }
  render() {
    const classes = {
      disabled: this.disabled,
      error: !this.disabled && this.hasError,
      textarea: this.type === "textarea"
    };
    return x`
       <span class="text-field ${e8(classes)}">
         ${this.renderField()}
       </span>
     `;
  }
  updated(changedProperties) {
    const value = this.getInputOrTextarea().value;
    if (this.value !== value) {
      this.value = value;
    }
    this.internals.setFormValue(value);
    this.syncValidity();
  }
  renderField() {
    return n6`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type === "textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`;
  }
  renderLeadingIcon() {
    return x`
       <span class="icon leading" slot="start">
         <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
  }
  renderTrailingIcon() {
    return x`
       <span class="icon trailing" slot="end">
         <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
  }
  renderInputOrTextarea() {
    const style = { direction: this.textDirection };
    const ariaLabel = this.ariaLabel || this.label || T;
    const autocomplete = this.autocomplete;
    if (this.type === "textarea") {
      return x`
        <textarea
          class="input"
          style=${o8(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || T}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength > -1 ? this.maxLength : T}
          minlength=${this.minLength > -1 ? this.minLength : T}
          placeholder=${this.placeholder || T}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          .value=${l4(this.value)}
          @change=${this.handleChange}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        ></textarea>
      `;
    }
    const prefix = this.renderPrefix();
    const suffix = this.renderSuffix();
    const inputMode = this.inputMode;
    return x`
      <div class="input-wrapper">
        ${prefix}
        <input
          class="input"
          style=${o8(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || T}
          ?disabled=${this.disabled}
          inputmode=${inputMode || T}
          max=${this.max || T}
          maxlength=${this.maxLength > -1 ? this.maxLength : T}
          min=${this.min || T}
          minlength=${this.minLength > -1 ? this.minLength : T}
          pattern=${this.pattern || T}
          placeholder=${this.placeholder || T}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step || T}
          type=${this.type}
          .value=${l4(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        >
        ${suffix}
      </div>
    `;
  }
  renderPrefix() {
    return this.renderAffix(this.prefixText, false);
  }
  renderSuffix() {
    return this.renderAffix(this.suffixText, true);
  }
  renderAffix(text, isSuffix) {
    if (!text) {
      return T;
    }
    const classes = {
      suffix: isSuffix,
      prefix: !isSuffix
    };
    return x`<span class="${e8(classes)}">${text}</span>`;
  }
  getErrorText() {
    return this.error ? this.errorText : this.nativeErrorText;
  }
  handleFocusin() {
    this.focused = true;
  }
  handleFocusout() {
    this.focused = false;
  }
  handleInput(event) {
    this.dirty = true;
    this.value = event.target.value;
    this.syncValidity();
  }
  handleChange(event) {
    this.syncValidity();
    this.redispatchEvent(event);
  }
  redispatchEvent(event) {
    redispatchEvent(this, event);
  }
  getInputOrTextarea() {
    if (!this.inputOrTextarea) {
      this.connectedCallback();
      this.scheduleUpdate();
    }
    if (this.isUpdatePending) {
      this.scheduleUpdate();
    }
    return this.inputOrTextarea;
  }
  getInput() {
    if (this.type === "textarea") {
      return null;
    }
    return this.getInputOrTextarea();
  }
  syncValidity() {
    const input = this.getInputOrTextarea();
    if (this.hasCustomValidityError) {
      input.setCustomValidity(this.internals.validationMessage);
    } else {
      input.setCustomValidity("");
    }
    this.internals.setValidity(input.validity, input.validationMessage, this.getInputOrTextarea());
  }
  handleIconChange() {
    this.hasLeadingIcon = this.leadingIcons.length > 0;
    this.hasTrailingIcon = this.trailingIcons.length > 0;
  }
  formResetCallback() {
    this.reset();
  }
  formStateRestoreCallback(state2) {
    this.value = state2;
  }
  focus() {
    this.getInputOrTextarea().focus();
  }
}
(() => {
  requestUpdateOnAriaChange(TextField);
})();
TextField.shadowRootOptions = { ...s3.shadowRootOptions, delegatesFocus: true };
TextField.formAssociated = true;
__decorate([
  n3({ type: Boolean, reflect: true })
], TextField.prototype, "disabled", undefined);
__decorate([
  n3({ type: Boolean, reflect: true })
], TextField.prototype, "error", undefined);
__decorate([
  n3({ attribute: "error-text" })
], TextField.prototype, "errorText", undefined);
__decorate([
  n3()
], TextField.prototype, "label", undefined);
__decorate([
  n3({ type: Boolean, reflect: true })
], TextField.prototype, "required", undefined);
__decorate([
  n3()
], TextField.prototype, "value", undefined);
__decorate([
  n3({ attribute: "prefix-text" })
], TextField.prototype, "prefixText", undefined);
__decorate([
  n3({ attribute: "suffix-text" })
], TextField.prototype, "suffixText", undefined);
__decorate([
  n3({ type: Boolean, attribute: "has-leading-icon" })
], TextField.prototype, "hasLeadingIcon", undefined);
__decorate([
  n3({ type: Boolean, attribute: "has-trailing-icon" })
], TextField.prototype, "hasTrailingIcon", undefined);
__decorate([
  n3({ attribute: "supporting-text" })
], TextField.prototype, "supportingText", undefined);
__decorate([
  n3({ attribute: "text-direction" })
], TextField.prototype, "textDirection", undefined);
__decorate([
  n3({ type: Number })
], TextField.prototype, "rows", undefined);
__decorate([
  n3({ reflect: true })
], TextField.prototype, "inputMode", undefined);
__decorate([
  n3()
], TextField.prototype, "max", undefined);
__decorate([
  n3({ type: Number })
], TextField.prototype, "maxLength", undefined);
__decorate([
  n3()
], TextField.prototype, "min", undefined);
__decorate([
  n3({ type: Number })
], TextField.prototype, "minLength", undefined);
__decorate([
  n3()
], TextField.prototype, "pattern", undefined);
__decorate([
  n3({ reflect: true, converter: stringConverter })
], TextField.prototype, "placeholder", undefined);
__decorate([
  n3({ type: Boolean, reflect: true })
], TextField.prototype, "readOnly", undefined);
__decorate([
  n3({ type: Boolean, reflect: true })
], TextField.prototype, "multiple", undefined);
__decorate([
  n3()
], TextField.prototype, "step", undefined);
__decorate([
  n3({ reflect: true })
], TextField.prototype, "type", undefined);
__decorate([
  n3({ reflect: true })
], TextField.prototype, "autocomplete", undefined);
__decorate([
  r4()
], TextField.prototype, "dirty", undefined);
__decorate([
  r4()
], TextField.prototype, "focused", undefined);
__decorate([
  r4()
], TextField.prototype, "nativeError", undefined);
__decorate([
  r4()
], TextField.prototype, "nativeErrorText", undefined);
__decorate([
  e4(".input")
], TextField.prototype, "inputOrTextarea", undefined);
__decorate([
  e4(".field")
], TextField.prototype, "field", undefined);
__decorate([
  o4({ slot: "leading-icon" })
], TextField.prototype, "leadingIcons", undefined);
__decorate([
  o4({ slot: "trailing-icon" })
], TextField.prototype, "trailingIcons", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js
class FilledTextField extends TextField {
  constructor() {
    super(...arguments);
    this.fieldTag = s4`md-filled-field`;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js
var styles16 = i`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background-color:Field}}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styl
var MdFilledTextField = class MdFilledTextField2 extends FilledTextField {
  constructor() {
    super(...arguments);
    this.fieldTag = s4`md-filled-field`;
  }
};
MdFilledTextField.styles = [styles16, styles15, styles14];
MdFilledTextField = __decorate([
  t("md-filled-text-field")
], MdFilledTextField);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles
class OutlinedField extends Field {
  renderOutline(floatingLabel) {
    return x`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${floatingLabel}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.
var styles17 = i`:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_container-shape: var(--md-outlined-field-container-shape, 4px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_container-shape-start-start: var( --md-outlined-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-field-container-shape-end-start, var(--_container-shape) )}.outline{border-color:var(--_outline-color);border-radius:inherit;color:var(--_outline-color);display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}:host-context([dir=rtl]) .resizable .container,:host([dir=rtl]) .resizable .container{clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}/*# sourceMappingURL=outlined-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ri
var MdOutlinedField = class MdOutlinedField2 extends OutlinedField {
};
MdOutlinedField.styles = [styles13, styles17];
MdOutlinedField = __decorate([
  t("md-outlined-field")
], MdOutlinedField);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.jss.jsjs
var styles18 = i`@media(forced-colors: active){:host{--md-outlined-text-field-disabled-input-text-color: GrayText;--md-outlined-text-field-disabled-input-text-opacity: 1;--md-outlined-text-field-disabled-label-text-color: GrayText;--md-outlined-text-field-disabled-label-text-opacity: 1;--md-outlined-text-field-disabled-leading-icon-color: GrayText;--md-outlined-text-field-disabled-leading-icon-opacity: 1;--md-outlined-text-field-disabled-outline-color: GrayText;--md-outlined-text-field-disabled-outline-opacity: 1;--md-outlined-text-field-disabled-supporting-text-color: GrayText;--md-outlined-text-field-disabled-supporting-text-opacity: 1;--md-outlined-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.j
var styles19 = i`:host{--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-outlined-text-field-container-shape, 4px);--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var( --md-outlined-text-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-text-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-text-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-text-field-container-shape-end-start, var(--_container-shape) );--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space)}/*# sourceMappingURL=outlined-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.j
class OutlinedTextField extends TextField {
  constructor() {
    super(...arguments);
    this.fieldTag = s4`md-outlined-field`;
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles
var MdOutlinedTextField = class MdOutlinedTextField2 extends OutlinedTextField {
  constructor() {
    super(...arguments);
    this.fieldTag = s4`md-outlined-field`;
  }
};
MdOutlinedTextField.styles = [styles16, styles19, styles18];
MdOutlinedTextField = __decorate([
  t("md-outlined-text-field")
], MdOutlinedTextField);

// node_modules/lit-html/directive-helpers.js.jsus-
class Icon extends s3 {
  render() {
    return x`<slot></slot>`;
  }
  connectedCallback() {
    super.connectedCallback();
    const ariaHidden = this.getAttribute("aria-hidden");
    if (ariaHidden === "false") {
      this.removeAttribute("aria-hidden");
      return;
    }
    this.setAttribute("aria-hidden", "true");
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles
var styles20 = i`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;

// node_modules/lit-html/directive-helpers
var MdIcon = class MdIcon2 extends Icon {
};
MdIcon.styles = [styles20];
MdIcon = __decorate([
  t("md-icon")
], MdIcon);

// node_modules/lit-html/directive-helpers.js.jsus-ring-sty
function isRtl(el, shouldCheck = true) {
  return shouldCheck && getComputedStyle(el).getPropertyValue("direction").trim() === "rtl";
}

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.c
var _a2;

class IconButton extends s3 {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.flipIconInRtl = false;
    this.href = "";
    this.target = "";
    this.ariaLabelSelected = "";
    this.toggle = false;
    this.selected = false;
    this.type = "submit";
    this.value = "";
    this.flipIcon = isRtl(this, this.flipIconInRtl);
    this[_a2] = this.attachInternals();
  }
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(name) {
    this.setAttribute("name", name);
  }
  get form() {
    return this[internals].form;
  }
  get labels() {
    return this[internals].labels;
  }
  willUpdate() {
    if (this.href) {
      this.disabled = false;
    }
  }
  render() {
    const tag = this.href ? s4`div` : s4`button`;
    const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
    const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected;
    const ariaPressedValue = !this.toggle ? T : this.selected;
    let ariaLabelValue = T;
    if (!this.href) {
      ariaLabelValue = hasToggledAriaLabel && this.selected ? this.ariaLabelSelected : ariaLabel;
    }
    return n6`<${tag}
        class="icon-button ${e8(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || T}"
        aria-haspopup="${!this.href && ariaHasPopup || T}"
        aria-expanded="${!this.href && ariaExpanded || T}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : T}
        ${this.selected ? this.renderSelectedIcon() : T}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`;
  }
  renderLink() {
    const { ariaLabel } = this;
    return x`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target || T}"
        aria-label="${ariaLabel || T}"
      ></a>
    `;
  }
  getRenderClasses() {
    return {
      "flip-icon": this.flipIcon,
      selected: this.toggle && this.selected
    };
  }
  renderIcon() {
    return x`<span class="icon"><slot></slot></span>`;
  }
  renderSelectedIcon() {
    return x`<span class="icon icon--selected"><slot name="selected"><slot></slot></slot></span>`;
  }
  renderTouchTarget() {
    return x`<span class="touch"></span>`;
  }
  renderFocusRing() {
    return x`<md-focus-ring part="focus-ring" for=${this.href ? "link" : "button"}></md-focus-ring>`;
  }
  renderRipple() {
    return x`<md-ripple
      for=${this.href ? "link" : T}
      ?disabled="${!this.href && this.disabled}"
    ></md-ripple>`;
  }
  connectedCallback() {
    this.flipIcon = isRtl(this, this.flipIconInRtl);
    super.connectedCallback();
  }
  async handleClick(event) {
    await 0;
    if (!this.toggle || this.disabled || event.defaultPrevented) {
      return;
    }
    this.selected = !this.selected;
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
    this.dispatchEvent(new Event("change", { bubbles: true }));
  }
}
_a2 = internals;
(() => {
  requestUpdateOnAriaChange(IconButton);
  setupFormSubmitter(IconButton);
})();
IconButton.formAssociated = true;
IconButton.shadowRootOptions = { mode: "open", delegatesFocus: true };
__decorate([
  n3({ type: Boolean, reflect: true })
], IconButton.prototype, "disabled", undefined);
__decorate([
  n3({ type: Boolean, attribute: "flip-icon-in-rtl" })
], IconButton.prototype, "flipIconInRtl", undefined);
__decorate([
  n3()
], IconButton.prototype, "href", undefined);
__decorate([
  n3()
], IconButton.prototype, "target", undefined);
__decorate([
  n3({ attribute: "aria-label-selected" })
], IconButton.prototype, "ariaLabelSelected", undefined);
__decorate([
  n3({ type: Boolean })
], IconButton.prototype, "toggle", undefined);
__decorate([
  n3({ type: Boolean, reflect: true })
], IconButton.prototype, "selected", undefined);
__decorate([
  n3()
], IconButton.prototype, "type", undefined);
__decorate([
  n3()
], IconButton.prototype, "value", undefined);
__decorate([
  r4()
], IconButton.prototype, "flipIcon", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.
var styles21 = i`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}/*# sourceMappingURL=shared-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js
var styles22 = i`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring
var MdIconButton = class MdIconButton2 extends IconButton {
  getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      standard: true
    };
  }
};
MdIconButton.styles = [styles21, styles22];
MdIconButton = __decorate([
  t("md-icon-button")
], MdIconButton);

// node_modules/lit-html/directive-helpers.js.jsus-ring-s
class Divider extends s3 {
  constructor() {
    super(...arguments);
    this.inset = false;
    this.insetStart = false;
    this.insetEnd = false;
  }
}
__decorate([
  n3({ type: Boolean, reflect: true })
], Divider.prototype, "inset", undefined);
__decorate([
  n3({ type: Boolean, reflect: true, attribute: "inset-start" })
], Divider.prototype, "insetStart", undefined);
__decorate([
  n3({ type: Boolean, reflect: true, attribute: "inset-end" })
], Divider.prototype, "insetEnd", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.j
var styles23 = i`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.js
var MdDivider = class MdDivider2 extends Divider {
};
MdDivider.styles = [styles23];
MdDivider = __decorate([
  t("md-divider")
], MdDivider);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.js
class NavigationBar extends s3 {
  constructor() {
    super(...arguments);
    this.activeIndex = 0;
    this.hideInactiveLabels = false;
    this.tabs = [];
  }
  render() {
    const { ariaLabel } = this;
    return x`<div class="md3-navigation-bar"
            role="tablist"
            aria-label=${ariaLabel || T}
            @keydown="${this.handleKeydown}"
            @navigation-tab-interaction="${this.handleNavigationTabInteraction}"
            @navigation-tab-rendered=${this.handleNavigationTabConnected}
          ><md-elevation></md-elevation
          ><div class="md3-navigation-bar__tabs-slot-container"
        ><slot></slot></div></div>`;
  }
  updated(changedProperties) {
    if (changedProperties.has("activeIndex")) {
      this.onActiveIndexChange(this.activeIndex);
      this.dispatchEvent(new CustomEvent("navigation-bar-activated", {
        detail: { tab: this.tabs[this.activeIndex], activeIndex: this.activeIndex },
        bubbles: true,
        composed: true
      }));
    }
    if (changedProperties.has("hideInactiveLabels")) {
      this.onHideInactiveLabelsChange(this.hideInactiveLabels);
    }
    if (changedProperties.has("tabs")) {
      this.onHideInactiveLabelsChange(this.hideInactiveLabels);
      this.onActiveIndexChange(this.activeIndex);
    }
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.layout();
  }
  layout() {
    if (!this.tabsElement)
      return;
    const navTabs = [];
    for (const node of this.tabsElement) {
      navTabs.push(node);
    }
    this.tabs = navTabs;
  }
  handleNavigationTabConnected(event) {
    const target = event.target;
    if (this.tabs.indexOf(target) === -1) {
      this.layout();
    }
  }
  handleNavigationTabInteraction(event) {
    this.activeIndex = this.tabs.indexOf(event.detail.state);
  }
  handleKeydown(event) {
    const key = event.key;
    const focusedTabIndex = this.tabs.findIndex((tab) => {
      return tab.matches(":focus-within");
    });
    const isRTL = isRtl(this);
    const maxIndex = this.tabs.length - 1;
    if (key === "Enter" || key === " ") {
      this.activeIndex = focusedTabIndex;
      return;
    }
    if (key === "Home") {
      this.tabs[0].focus();
      return;
    }
    if (key === "End") {
      this.tabs[maxIndex].focus();
      return;
    }
    const toNextTab = key === "ArrowRight" && !isRTL || key === "ArrowLeft" && isRTL;
    if (toNextTab && focusedTabIndex === maxIndex) {
      this.tabs[0].focus();
      return;
    }
    if (toNextTab) {
      this.tabs[focusedTabIndex + 1].focus();
      return;
    }
    const toPreviousTab = key === "ArrowLeft" && !isRTL || key === "ArrowRight" && isRTL;
    if (toPreviousTab && focusedTabIndex === 0) {
      this.tabs[maxIndex].focus();
      return;
    }
    if (toPreviousTab) {
      this.tabs[focusedTabIndex - 1].focus();
      return;
    }
  }
  onActiveIndexChange(value) {
    if (!this.tabs[value]) {
      throw new Error("NavigationBar: activeIndex is out of bounds.");
    }
    for (let i6 = 0;i6 < this.tabs.length; i6++) {
      this.tabs[i6].active = i6 === value;
    }
  }
  onHideInactiveLabelsChange(value) {
    for (const tab of this.tabs) {
      tab.hideInactiveLabel = value;
    }
  }
}
(() => {
  requestUpdateOnAriaChange(NavigationBar);
})();
__decorate([
  n3({ type: Number, attribute: "active-index" })
], NavigationBar.prototype, "activeIndex", undefined);
__decorate([
  n3({ type: Boolean, attribute: "hide-inactive-labels" })
], NavigationBar.prototype, "hideInactiveLabels", undefined);
__decorate([
  o4({ flatten: true })
], NavigationBar.prototype, "tabsElement", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.jss.jsjss
var styles24 = i`:host{--_active-indicator-color: var(--md-navigation-bar-active-indicator-color, var(--md-sys-color-secondary-container, #e8def8));--_active-indicator-height: var(--md-navigation-bar-active-indicator-height, 32px);--_active-indicator-shape: var(--md-navigation-bar-active-indicator-shape, 9999px);--_active-indicator-width: var(--md-navigation-bar-active-indicator-width, 64px);--_active-focus-icon-color: var(--md-navigation-bar-active-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-focus-label-text-color: var(--md-navigation-bar-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-focus-state-layer-color: var(--md-navigation-bar-active-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-icon-color: var(--md-navigation-bar-active-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-hover-label-text-color: var(--md-navigation-bar-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color: var(--md-navigation-bar-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-icon-color: var(--md-navigation-bar-active-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-label-text-color: var(--md-navigation-bar-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-label-text-weight: var(--md-navigation-bar-active-label-text-weight, var(--md-sys-typescale-label-medium-weight-prominent, var(--md-ref-typeface-weight-bold, 700)));--_active-pressed-icon-color: var(--md-navigation-bar-active-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-pressed-label-text-color: var(--md-navigation-bar-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color: var(--md-navigation-bar-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color: var(--md-navigation-bar-container-color, var(--md-sys-color-surface-container, #f3edf7));--_container-elevation: var(--md-navigation-bar-container-elevation, 2);--_container-height: var(--md-navigation-bar-container-height, 80px);--_container-shape: var(--md-navigation-bar-container-shape, 0px);--_focus-state-layer-opacity: var(--md-navigation-bar-focus-state-layer-opacity, 0.12);--_hover-state-layer-opacity: var(--md-navigation-bar-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-navigation-bar-icon-size, 24px);--_inactive-focus-icon-color: var(--md-navigation-bar-inactive-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-focus-label-text-color: var(--md-navigation-bar-inactive-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-focus-state-layer-color: var(--md-navigation-bar-inactive-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-hover-icon-color: var(--md-navigation-bar-inactive-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-hover-label-text-color: var(--md-navigation-bar-inactive-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-hover-state-layer-color: var(--md-navigation-bar-inactive-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-icon-color: var(--md-navigation-bar-inactive-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-label-text-color: var(--md-navigation-bar-inactive-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-pressed-icon-color: var(--md-navigation-bar-inactive-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-pressed-label-text-color: var(--md-navigation-bar-inactive-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-pressed-state-layer-color: var(--md-navigation-bar-inactive-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-navigation-bar-label-text-font, var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-navigation-bar-label-text-line-height, var(--md-sys-typescale-label-medium-line-height, 1rem));--_label-text-size: var(--md-navigation-bar-label-text-size, var(--md-sys-typescale-label-medium-size, 0.75rem));--_label-text-tracking: var(--md-navigation-bar-label-text-tracking, );--_label-text-type: var(--md-navigation-bar-label-text-type, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-label-medium-size, 0.75rem) / var(--md-sys-typescale-label-medium-line-height, 1rem) var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-weight: var(--md-navigation-bar-label-text-weight, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-state-layer-opacity: var(--md-navigation-bar-pressed-state-layer-opacity, 0.12);--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color);width:100%}.md3-navigation-bar{display:flex;position:relative;width:100%;background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height)}.md3-navigation-bar .md3-navigation-bar__tabs-slot-container{display:inherit;width:inherit}md-elevation{transition-duration:280ms;z-index:0}/*# sourceMappingURL=navigation-bar-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css
var MdNavigationBar = class MdNavigationBar2 extends NavigationBar {
};
MdNavigationBar.styles = [styles24];
MdNavigationBar = __decorate([
  t("md-navigation-bar")
], MdNavigationBar);

// node_modules/lit-html/directive-helpers.js.jsus-ring-st
class Badge extends s3 {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  render() {
    const classes = { "md3-badge--large": this.value };
    return x`<div class="md3-badge ${e8(classes)}">
      <p class="md3-badge__value">${this.value}</p>
    </div>`;
  }
}
__decorate([
  n3()
], Badge.prototype, "value", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js
var styles25 = i`:host{--_color: var(--md-badge-color, var(--md-sys-color-error, #b3261e));--_large-color: var(--md-badge-large-color, var(--md-sys-color-error, #b3261e));--_large-label-text-color: var(--md-badge-large-label-text-color, var(--md-sys-color-on-error, #fff));--_large-label-text-font: var(--md-badge-large-label-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));--_large-label-text-line-height: var(--md-badge-large-label-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));--_large-label-text-size: var(--md-badge-large-label-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));--_large-label-text-weight: var(--md-badge-large-label-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_large-shape: var(--md-badge-large-shape, 9999px);--_large-size: var(--md-badge-large-size, 16px);--_shape: var(--md-badge-shape, 9999px);--_size: var(--md-badge-size, 6px)}.md3-badge{inset-inline-start:50%;margin-inline-start:6px;margin-block-start:4px;position:absolute;inset-block-start:0px;background-color:var(--_color);border-radius:var(--_shape);height:var(--_size)}.md3-badge:not(.md3-badge--large){width:var(--_size)}.md3-badge.md3-badge--large{display:flex;flex-direction:column;justify-content:center;margin-inline-start:2px;margin-block-start:1px;background-color:var(--_large-color);border-radius:var(--_large-shape);height:var(--_large-size);min-width:var(--_large-size);color:var(--_large-label-text-color)}.md3-badge.md3-badge--large .md3-badge__value{padding:0px 4px;text-align:center}.md3-badge__value{font-family:var(--_large-label-text-font);font-size:var(--_large-label-text-size);line-height:var(--_large-label-text-line-height);font-weight:var(--_large-label-text-weight)}/*# sourceMappingURL=badge-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsu
var MdBadge = class MdBadge2 extends Badge {
};
MdBadge.styles = [styles25];
MdBadge = __decorate([
  t("md-badge")
], MdBadge);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.js
class NavigationTab extends s3 {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.active = false;
    this.hideInactiveLabel = false;
    this.badgeValue = "";
    this.showBadge = false;
  }
  render() {
    const { ariaLabel } = this;
    return x`
      <button
        class="md3-navigation-tab ${e8(this.getRenderClasses())}"
        role="tab"
        aria-selected="${this.active}"
        aria-label=${ariaLabel || T}
        tabindex="${this.active ? 0 : -1}"
        @click="${this.handleClick}"
      >
        <md-focus-ring part="focus-ring" inward></md-focus-ring>
        <md-ripple ?disabled="${this.disabled}" class="md3-navigation-tab__ripple"></md-ripple>
        <span aria-hidden="true" class="md3-navigation-tab__icon-content"
          ><span class="md3-navigation-tab__active-indicator"
            ></span><span class="md3-navigation-tab__icon"
          ><slot name="inactive-icon"></slot
        ></span>
        <span class="md3-navigation-tab__icon md3-navigation-tab__icon--active"
          ><slot name="active-icon"></slot
        ></span>${this.renderBadge()}</span
        >${this.renderLabel()}
      </button>`;
  }
  getRenderClasses() {
    return {
      "md3-navigation-tab--hide-inactive-label": this.hideInactiveLabel,
      "md3-navigation-tab--active": this.active
    };
  }
  renderBadge() {
    return this.showBadge ? x`<md-badge .value="${this.badgeValue}"></md-badge>` : T;
  }
  renderLabel() {
    const { ariaLabel } = this;
    const ariaHidden = ariaLabel ? "true" : "false";
    return !this.label ? T : x`
        <span aria-hidden="${ariaHidden}" class="md3-navigation-tab__label-text">${this.label}</span>`;
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const event = new Event("navigation-tab-rendered", { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }
  focus() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      buttonElement.focus();
    }
  }
  blur() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      buttonElement.blur();
    }
  }
  handleClick() {
    this.dispatchEvent(new CustomEvent("navigation-tab-interaction", { detail: { state: this }, bubbles: true, composed: true }));
  }
}
(() => {
  requestUpdateOnAriaChange(NavigationTab);
})();
__decorate([
  n3({ type: Boolean })
], NavigationTab.prototype, "disabled", undefined);
__decorate([
  n3({ type: Boolean, reflect: true })
], NavigationTab.prototype, "active", undefined);
__decorate([
  n3({ type: Boolean, attribute: "hide-inactive-label" })
], NavigationTab.prototype, "hideInactiveLabel", undefined);
__decorate([
  n3()
], NavigationTab.prototype, "label", undefined);
__decorate([
  n3({ attribute: "badge-value" })
], NavigationTab.prototype, "badgeValue", undefined);
__decorate([
  n3({ type: Boolean, attribute: "show-badge" })
], NavigationTab.prototype, "showBadge", undefined);
__decorate([
  e4("button")
], NavigationTab.prototype, "buttonElement", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.jss.jsjss
var styles26 = i`:host{--_active-indicator-color: var(--md-navigation-bar-active-indicator-color, var(--md-sys-color-secondary-container, #e8def8));--_active-indicator-height: var(--md-navigation-bar-active-indicator-height, 32px);--_active-indicator-shape: var(--md-navigation-bar-active-indicator-shape, 9999px);--_active-indicator-width: var(--md-navigation-bar-active-indicator-width, 64px);--_active-focus-icon-color: var(--md-navigation-bar-active-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-focus-label-text-color: var(--md-navigation-bar-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-focus-state-layer-color: var(--md-navigation-bar-active-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-icon-color: var(--md-navigation-bar-active-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-hover-label-text-color: var(--md-navigation-bar-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color: var(--md-navigation-bar-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-icon-color: var(--md-navigation-bar-active-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-label-text-color: var(--md-navigation-bar-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-label-text-weight: var(--md-navigation-bar-active-label-text-weight, var(--md-sys-typescale-label-medium-weight-prominent, var(--md-ref-typeface-weight-bold, 700)));--_active-pressed-icon-color: var(--md-navigation-bar-active-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-pressed-label-text-color: var(--md-navigation-bar-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color: var(--md-navigation-bar-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color: var(--md-navigation-bar-container-color, var(--md-sys-color-surface-container, #f3edf7));--_container-elevation: var(--md-navigation-bar-container-elevation, 2);--_container-height: var(--md-navigation-bar-container-height, 80px);--_container-shape: var(--md-navigation-bar-container-shape, 0px);--_focus-state-layer-opacity: var(--md-navigation-bar-focus-state-layer-opacity, 0.12);--_hover-state-layer-opacity: var(--md-navigation-bar-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-navigation-bar-icon-size, 24px);--_inactive-focus-icon-color: var(--md-navigation-bar-inactive-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-focus-label-text-color: var(--md-navigation-bar-inactive-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-focus-state-layer-color: var(--md-navigation-bar-inactive-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-hover-icon-color: var(--md-navigation-bar-inactive-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-hover-label-text-color: var(--md-navigation-bar-inactive-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-hover-state-layer-color: var(--md-navigation-bar-inactive-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-icon-color: var(--md-navigation-bar-inactive-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-label-text-color: var(--md-navigation-bar-inactive-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-pressed-icon-color: var(--md-navigation-bar-inactive-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-pressed-label-text-color: var(--md-navigation-bar-inactive-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-pressed-state-layer-color: var(--md-navigation-bar-inactive-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-navigation-bar-label-text-font, var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-navigation-bar-label-text-line-height, var(--md-sys-typescale-label-medium-line-height, 1rem));--_label-text-size: var(--md-navigation-bar-label-text-size, var(--md-sys-typescale-label-medium-size, 0.75rem));--_label-text-tracking: var(--md-navigation-bar-label-text-tracking, );--_label-text-type: var(--md-navigation-bar-label-text-type, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-label-medium-size, 0.75rem) / var(--md-sys-typescale-label-medium-line-height, 1rem) var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-weight: var(--md-navigation-bar-label-text-weight, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-state-layer-opacity: var(--md-navigation-bar-pressed-state-layer-opacity, 0.12);display:flex;flex-grow:1}md-focus-ring{--md-focus-ring-shape: 8px;--md-focus-ring-inward-offset: -1px}.md3-navigation-tab{align-items:center;appearance:none;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;height:100%;justify-content:center;min-height:48px;min-width:48px;outline:none;padding:8px 0px 12px;position:relative;text-align:center;width:100%;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight)}.md3-navigation-tab::-moz-focus-inner{border:0;padding:0}.md3-navigation-tab__icon-content{align-items:center;box-sizing:border-box;display:flex;justify-content:center;position:relative;z-index:1}.md3-navigation-tab__label-text{height:16px;margin-top:4px;opacity:1;transition:opacity 100ms cubic-bezier(0.4, 0, 0.2, 1),height 100ms cubic-bezier(0.4, 0, 0.2, 1);z-index:1}.md3-navigation-tab--hide-inactive-label:not(.md3-navigation-tab--active) .md3-navigation-tab__label-text{height:0;opacity:0}.md3-navigation-tab__active-indicator{display:flex;justify-content:center;opacity:0;position:absolute;transition:width 100ms cubic-bezier(0.4, 0, 0.2, 1),opacity 100ms cubic-bezier(0.4, 0, 0.2, 1);width:32px;background-color:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape)}.md3-navigation-tab--active .md3-navigation-tab__active-indicator{opacity:1}.md3-navigation-tab__active-indicator,.md3-navigation-tab__icon-content{height:var(--_active-indicator-height)}.md3-navigation-tab--active .md3-navigation-tab__active-indicator,.md3-navigation-tab__icon-content{width:var(--_active-indicator-width)}.md3-navigation-tab__icon{fill:currentColor;align-self:center;display:inline-block;position:relative;width:var(--_icon-size);height:var(--_icon-size);font-size:var(--_icon-size)}.md3-navigation-tab__icon.md3-navigation-tab__icon--active{display:none}.md3-navigation-tab--active .md3-navigation-tab__icon{display:none}.md3-navigation-tab--active .md3-navigation-tab__icon.md3-navigation-tab__icon--active{display:inline-block}.md3-navigation-tab__ripple{z-index:0}.md3-navigation-tab--active{--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.md3-navigation-tab--active .md3-navigation-tab__icon{color:var(--_active-icon-color)}.md3-navigation-tab--active .md3-navigation-tab__label-text{color:var(--_active-label-text-color)}.md3-navigation-tab--active:hover .md3-navigation-tab__icon{color:var(--_active-hover-icon-color)}.md3-navigation-tab--active:hover .md3-navigation-tab__label-text{color:var(--_active-hover-label-text-color)}.md3-navigation-tab--active:focus .md3-navigation-tab__icon{color:var(--_active-focus-icon-color)}.md3-navigation-tab--active:focus .md3-navigation-tab__label-text{color:var(--_active-focus-label-text-color)}.md3-navigation-tab--active:active .md3-navigation-tab__icon{color:var(--_active-pressed-icon-color)}.md3-navigation-tab--active:active .md3-navigation-tab__label-text{color:var(--_active-pressed-label-text-color)}.md3-navigation-tab:not(.md3-navigation-tab--active){--md-ripple-hover-color: var(--_inactive-hover-state-layer-color);--md-ripple-pressed-color: var(--_inactive-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.md3-navigation-tab:not(.md3-navigation-tab--active) .md3-navigation-tab__icon{color:var(--_inactive-icon-color)}.md3-navigation-tab:not(.md3-navigation-tab--active) .md3-navigation-tab__label-text{color:var(--_inactive-label-text-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):hover .md3-navigation-tab__icon{color:var(--_inactive-hover-icon-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):hover .md3-navigation-tab__label-text{color:var(--_inactive-hover-label-text-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):focus .md3-navigation-tab__icon{color:var(--_inactive-focus-icon-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):focus .md3-navigation-tab__label-text{color:var(--_inactive-focus-label-text-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):active .md3-navigation-tab__icon{color:var(--_inactive-pressed-icon-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):active .md3-navigation-tab__label-text{color:var(--_inactive-pressed-label-text-color)}/*# sourceMappingURL=navigation-tab-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css
var MdNavigationTab = class MdNavigationTab2 extends NavigationTab {
};
MdNavigationTab.styles = [styles26];
MdNavigationTab = __decorate([
  t("md-navigation-tab")
], MdNavigationTab);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.jss.
class NavigationDrawer extends s3 {
  constructor() {
    super(...arguments);
    this.opened = false;
    this.pivot = "end";
  }
  render() {
    const ariaExpanded = this.opened ? "true" : "false";
    const ariaHidden = !this.opened ? "true" : "false";
    const { ariaLabel, ariaModal } = this;
    return x`
      <div
        aria-expanded="${ariaExpanded}"
        aria-hidden="${ariaHidden}"
        aria-label=${ariaLabel || T}
        aria-modal="${ariaModal || T}"
        class="md3-navigation-drawer ${this.getRenderClasses()}"
        role="dialog">
        <md-elevation></md-elevation>
        <div class="md3-navigation-drawer__slot-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
  getRenderClasses() {
    return e8({
      "md3-navigation-drawer--opened": this.opened,
      "md3-navigation-drawer--pivot-at-start": this.pivot === "start"
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("opened")) {
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent("navigation-drawer-changed", { detail: { opened: this.opened }, bubbles: true, composed: true }));
      }, 250);
    }
  }
}
(() => {
  requestUpdateOnAriaChange(NavigationDrawer);
})();
__decorate([
  n3({ type: Boolean })
], NavigationDrawer.prototype, "opened", undefined);
__decorate([
  n3()
], NavigationDrawer.prototype, "pivot", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.jss.jsjsscss.js
var styles27 = i`:host{--_container-color: var(--md-navigation-drawer-container-color, #fff);--_container-height: var(--md-navigation-drawer-container-height, 100%);--_container-shape: var(--md-navigation-drawer-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-container-width, 360px);--_divider-color: var(--md-navigation-drawer-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-container-elevation, 1);--_standard-container-elevation: var(--md-navigation-drawer-standard-container-elevation, 0);--md-elevation-level: var(--_standard-container-elevation);--md-elevation-shadow-color: var(--_divider-color)}:host{display:flex}.md3-navigation-drawer{inline-size:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;overflow-y:auto;visibility:hidden;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}md-elevation{z-index:0}.md3-navigation-drawer--opened{visibility:visible;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer__slot-content{display:flex;flex-direction:column;position:relative}/*# sourceMappingURL=navigation-drawer-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.jss.
var styles28 = i`.md3-navigation-drawer-modal{background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height)}.md3-navigation-drawer-modal.md3-navigation-drawer-modal--opened{inline-size:var(--_container-width)}.md3-navigation-drawer-modal .md3-navigation-drawer-modal__slot-content{min-inline-size:var(--_container-width);max-inline-size:var(--_container-width)}/*# sourceMappingURL=shared-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js
var MdNavigationDrawer = class MdNavigationDrawer2 extends NavigationDrawer {
};
MdNavigationDrawer.styles = [styles28, styles27];
MdNavigationDrawer = __decorate([
  t("md-navigation-drawer")
], MdNavigationDrawer);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.jss.jsjssc
class NavigationDrawerModal extends s3 {
  constructor() {
    super(...arguments);
    this.opened = false;
    this.pivot = "end";
  }
  render() {
    const ariaExpanded = this.opened ? "true" : "false";
    const ariaHidden = !this.opened ? "true" : "false";
    const { ariaLabel, ariaModal } = this;
    return x`
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-expanded=${ariaExpanded}
        aria-hidden=${ariaHidden}
        aria-label=${ariaLabel || T}
        aria-modal=${ariaModal || T}
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"><div class="md3-elevation-overlay"
        ></div>
        <div class="md3-navigation-drawer-modal__slot-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
  getScrimClasses() {
    return e8({
      "md3-navigation-drawer-modal--scrim-visible": this.opened
    });
  }
  getRenderClasses() {
    return e8({
      "md3-navigation-drawer-modal--opened": this.opened,
      "md3-navigation-drawer-modal--pivot-at-start": this.pivot === "start"
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("opened")) {
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent("navigation-drawer-changed", { detail: { opened: this.opened }, bubbles: true, composed: true }));
      }, 250);
    }
  }
  handleKeyDown(event) {
    if (event.code === "Escape") {
      this.opened = false;
    }
  }
  handleScrimClick() {
    this.opened = !this.opened;
  }
}
(() => {
  requestUpdateOnAriaChange(NavigationDrawerModal);
})();
__decorate([
  n3({ type: Boolean })
], NavigationDrawerModal.prototype, "opened", undefined);
__decorate([
  n3()
], NavigationDrawerModal.prototype, "pivot", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.jss.jsjsscss.jscss.js
var styles29 = i`:host{--_container-color: var(--md-navigation-drawer-modal-container-color, #fff);--_container-height: var(--md-navigation-drawer-modal-container-height, 100%);--_container-shape: var(--md-navigation-drawer-modal-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-modal-container-width, 360px);--_divider-color: var(--md-navigation-drawer-modal-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-modal-container-elevation, 1);--_scrim-color: var(--md-navigation-drawer-modal-scrim-color, );--_scrim-opacity: var(--md-navigation-drawer-modal-scrim-opacity, 0.04);--_standard-container-elevation: var(--md-navigation-drawer-modal-standard-container-elevation, 0);--md-elevation-level: var(--_modal-container-elevation)}.md3-navigation-drawer-modal{bottom:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;position:absolute;top:0;inline-size:0;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--opened{transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer-modal--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer-modal__slot-content{display:flex;flex-direction:column;position:relative}.md3-navigation-drawer-modal__scrim{inset:0;opacity:0;position:absolute;visibility:hidden;background-color:var(--_scrim-color);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--scrim-visible{visibility:visible;opacity:var(--_scrim-opacity);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}/*# sourceMappingURL=navigation-drawer-modal-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss.j
var MdNavigationDrawerModal = class MdNavigationDrawerModal2 extends NavigationDrawerModal {
};
MdNavigationDrawerModal.styles = [styles28, styles29];
MdNavigationDrawerModal = __decorate([
  t("md-navigation-drawer-modal")
], MdNavigationDrawerModal);

// node_modules/lit-html/directive-helpers.js.jsus-ring-
var slotHasContent = function(slot) {
  for (const node of slot.assignedNodes({ flatten: true })) {
    const isElement = node.nodeType === Node.ELEMENT_NODE;
    const isTextWithContent = node.nodeType === Node.TEXT_NODE && node.textContent?.match(/\S/);
    if (isElement || isTextWithContent) {
      return true;
    }
  }
  return false;
};

class Item extends s3 {
  constructor() {
    super(...arguments);
    this.multiline = false;
  }
  render() {
    return x`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot class="default-slot"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="supporting-text"
            @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `;
  }
  handleTextSlotChange() {
    let isMultiline = false;
    let slotsWithContent = 0;
    for (const slot of this.textSlots) {
      if (slotHasContent(slot)) {
        slotsWithContent += 1;
      }
      if (slotsWithContent > 1) {
        isMultiline = true;
        break;
      }
    }
    this.multiline = isMultiline;
  }
}
__decorate([
  n3({ type: Boolean, reflect: true })
], Item.prototype, "multiline", undefined);
__decorate([
  r5(".text slot")
], Item.prototype, "textSlots", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.
var styles30 = i`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.j
var MdItem = class MdItem2 extends Item {
};
MdItem.styles = [styles30];
MdItem = __decorate([
  t("md-item")
], MdItem);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.
function activateFirstItem(items, isActivatable = isItemNotDisabled) {
  const firstItem = getFirstActivatableItem(items, isActivatable);
  if (firstItem) {
    firstItem.tabIndex = 0;
    firstItem.focus();
  }
  return firstItem;
}
function activateLastItem(items, isActivatable = isItemNotDisabled) {
  const lastItem = getLastActivatableItem(items, isActivatable);
  if (lastItem) {
    lastItem.tabIndex = 0;
    lastItem.focus();
  }
  return lastItem;
}
function getActiveItem(items, isActivatable = isItemNotDisabled) {
  for (let i6 = 0;i6 < items.length; i6++) {
    const item2 = items[i6];
    if (item2.tabIndex === 0 && isActivatable(item2)) {
      return {
        item: item2,
        index: i6
      };
    }
  }
  return null;
}
function getFirstActivatableItem(items, isActivatable = isItemNotDisabled) {
  for (const item2 of items) {
    if (isActivatable(item2)) {
      return item2;
    }
  }
  return null;
}
function getLastActivatableItem(items, isActivatable = isItemNotDisabled) {
  for (let i6 = items.length - 1;i6 >= 0; i6--) {
    const item2 = items[i6];
    if (isActivatable(item2)) {
      return item2;
    }
  }
  return null;
}
function getNextItem(items, index, isActivatable = isItemNotDisabled) {
  for (let i6 = 1;i6 < items.length; i6++) {
    const nextIndex = (i6 + index) % items.length;
    const item2 = items[nextIndex];
    if (isActivatable(item2)) {
      return item2;
    }
  }
  return items[index] ? items[index] : null;
}
function getPrevItem(items, index, isActivatable = isItemNotDisabled) {
  for (let i6 = 1;i6 < items.length; i6++) {
    const prevIndex = (index - i6 + items.length) % items.length;
    const item2 = items[prevIndex];
    if (isActivatable(item2)) {
      return item2;
    }
  }
  return items[index] ? items[index] : null;
}
function activateNextItem(items, activeItemRecord, isActivatable = isItemNotDisabled) {
  if (activeItemRecord) {
    const next = getNextItem(items, activeItemRecord.index, isActivatable);
    if (next) {
      next.tabIndex = 0;
      next.focus();
    }
    return next;
  } else {
    return activateFirstItem(items, isActivatable);
  }
}
function activatePreviousItem(items, activeItemRecord, isActivatable = isItemNotDisabled) {
  if (activeItemRecord) {
    const prev = getPrevItem(items, activeItemRecord.index, isActivatable);
    if (prev) {
      prev.tabIndex = 0;
      prev.focus();
    }
    return prev;
  } else {
    return activateLastItem(items, isActivatable);
  }
}
function createRequestActivationEvent() {
  return new Event("request-activation", { bubbles: true, composed: true });
}
var isItemNotDisabled = function(item2) {
  return !item2.disabled;
};

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.cs
class ListItemEl extends s3 {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.type = "text";
    this.isListItem = true;
    this.href = "";
    this.target = "";
  }
  get isDisabled() {
    return this.disabled && this.type !== "link";
  }
  willUpdate(changed) {
    if (this.href) {
      this.type = "link";
    }
    super.willUpdate(changed);
  }
  render() {
    return this.renderListItem(x`
      <md-item>
        <div slot="container">
          ${this.renderRipple()}
          ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
  }
  renderListItem(content) {
    const isAnchor = this.type === "link";
    let tag;
    switch (this.type) {
      case "link":
        tag = s4`a`;
        break;
      case "button":
        tag = s4`button`;
        break;
      default:
      case "text":
        tag = s4`li`;
        break;
    }
    const isInteractive = this.type !== "text";
    const target = isAnchor && !!this.target ? this.target : T;
    return n6`
      <${tag}
        id="item"
        tabindex="${this.isDisabled || !isInteractive ? -1 : 0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected || T}
        aria-checked=${this.ariaChecked || T}
        aria-expanded=${this.ariaExpanded || T}
        aria-haspopup=${this.ariaHasPopup || T}
        class="list-item ${e8(this.getRenderClasses())}"
        href=${this.href || T}
        target=${target}
        @focus=${this.onFocus}
      >${content}</${tag}>
    `;
  }
  renderRipple() {
    if (this.type === "text") {
      return T;
    }
    return x`
      <md-ripple
          part="ripple"
          for="item"
          ?disabled=${this.isDisabled}></md-ripple>`;
  }
  renderFocusRing() {
    if (this.type === "text") {
      return T;
    }
    return x`
      <md-focus-ring
          @visibility-changed=${this.onFocusRingVisibilityChanged}
          part="focus-ring"
          for="item"
          inward></md-focus-ring>`;
  }
  onFocusRingVisibilityChanged(e10) {
  }
  getRenderClasses() {
    return { disabled: this.isDisabled };
  }
  renderBody() {
    return x`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot name="trailing-supporting-text"
          slot="trailing-supporting-text"></slot>
    `;
  }
  onFocus() {
    if (this.tabIndex !== -1) {
      return;
    }
    this.dispatchEvent(createRequestActivationEvent());
  }
  focus() {
    this.listItemRoot?.focus();
  }
}
(() => {
  requestUpdateOnAriaChange(ListItemEl);
})();
ListItemEl.shadowRootOptions = {
  ...s3.shadowRootOptions,
  delegatesFocus: true
};
__decorate([
  n3({ type: Boolean, reflect: true })
], ListItemEl.prototype, "disabled", undefined);
__decorate([
  n3({ reflect: true })
], ListItemEl.prototype, "type", undefined);
__decorate([
  n3({ type: Boolean, attribute: "md-list-item", reflect: true })
], ListItemEl.prototype, "isListItem", undefined);
__decorate([
  n3()
], ListItemEl.prototype, "href", undefined);
__decorate([
  n3()
], ListItemEl.prototype, "target", undefined);
__decorate([
  e4(".list-item")
], ListItemEl.prototype, "listItemRoot", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js.js.jss
var styles31 = i`:host{display:flex;--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}/*# sourceMappingURL=list-item-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.j
var MdListItem = class MdListItem2 extends ListItemEl {
};
MdListItem.styles = [styles31];
MdListItem = __decorate([
  t("md-list-item")
], MdListItem);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles
var NavigableKeys = {
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  Home: "Home",
  End: "End"
};

class ListController {
  constructor(config) {
    this.handleKeydown = (event) => {
      const key = event.key;
      if (event.defaultPrevented || !this.isNavigableKey(key)) {
        return;
      }
      const items = this.items;
      if (!items.length) {
        return;
      }
      const activeItemRecord = getActiveItem(items, this.isActivatable);
      if (activeItemRecord) {
        activeItemRecord.item.tabIndex = -1;
      }
      event.preventDefault();
      const isRtl3 = this.isRtl();
      const inlinePrevious = isRtl3 ? NavigableKeys.ArrowRight : NavigableKeys.ArrowLeft;
      const inlineNext = isRtl3 ? NavigableKeys.ArrowLeft : NavigableKeys.ArrowRight;
      switch (key) {
        case NavigableKeys.ArrowDown:
        case inlineNext:
          activateNextItem(items, activeItemRecord, this.isActivatable);
          break;
        case NavigableKeys.ArrowUp:
        case inlinePrevious:
          activatePreviousItem(items, activeItemRecord, this.isActivatable);
          break;
        case NavigableKeys.Home:
          activateFirstItem(items, this.isActivatable);
          break;
        case NavigableKeys.End:
          activateLastItem(items, this.isActivatable);
          break;
        default:
          break;
      }
    };
    this.onDeactivateItems = () => {
      const items = this.items;
      for (const item3 of items) {
        this.deactivateItem(item3);
      }
    };
    this.onRequestActivation = (event) => {
      this.onDeactivateItems();
      const target = event.target;
      this.activateItem(target);
      target.focus();
    };
    this.onSlotchange = () => {
      const items = this.items;
      let encounteredActivated = false;
      for (const item3 of items) {
        const isActivated = !item3.disabled && item3.tabIndex > -1;
        if (isActivated && !encounteredActivated) {
          encounteredActivated = true;
          item3.tabIndex = 0;
          continue;
        }
        item3.tabIndex = -1;
      }
      if (encounteredActivated) {
        return;
      }
      const firstActivatableItem = getFirstActivatableItem(items, this.isActivatable);
      if (!firstActivatableItem) {
        return;
      }
      firstActivatableItem.tabIndex = 0;
    };
    const { isItem, getPossibleItems, isRtl: isRtl2, deactivateItem, activateItem, isNavigableKey, isActivatable } = config;
    this.isItem = isItem;
    this.getPossibleItems = getPossibleItems;
    this.isRtl = isRtl2;
    this.deactivateItem = deactivateItem;
    this.activateItem = activateItem;
    this.isNavigableKey = isNavigableKey;
    this.isActivatable = isActivatable;
  }
  get items() {
    const maybeItems = this.getPossibleItems();
    const items = [];
    for (const itemOrParent of maybeItems) {
      const isItem = this.isItem(itemOrParent);
      if (isItem) {
        items.push(itemOrParent);
        continue;
      }
      const subItem = itemOrParent.item;
      if (subItem && this.isItem(subItem)) {
        items.push(subItem);
      }
    }
    return items;
  }
  activateNextItem() {
    const items = this.items;
    const activeItemRecord = getActiveItem(items, this.isActivatable);
    if (activeItemRecord) {
      activeItemRecord.item.tabIndex = -1;
    }
    return activateNextItem(items, activeItemRecord, this.isActivatable);
  }
  activatePreviousItem() {
    const items = this.items;
    const activeItemRecord = getActiveItem(items, this.isActivatable);
    if (activeItemRecord) {
      activeItemRecord.item.tabIndex = -1;
    }
    return activatePreviousItem(items, activeItemRecord, this.isActivatable);
  }
}

// node_modules/lit-html/directive-helpers.js.jsus-
var NAVIGABLE_KEY_SET = new Set(Object.values(NavigableKeys));

class List extends s3 {
  get items() {
    return this.listController.items;
  }
  constructor() {
    super();
    this.listController = new ListController({
      isItem: (item3) => item3.hasAttribute("md-list-item"),
      getPossibleItems: () => this.slotItems,
      isRtl: () => getComputedStyle(this).direction === "rtl",
      deactivateItem: (item3) => {
        item3.tabIndex = -1;
      },
      activateItem: (item3) => {
        item3.tabIndex = 0;
      },
      isNavigableKey: (key) => NAVIGABLE_KEY_SET.has(key),
      isActivatable: (item3) => !item3.disabled && item3.type !== "text"
    });
    this.internals = polyfillElementInternalsAria(this, this.attachInternals());
    if (!o6) {
      this.internals.role = "list";
      this.addEventListener("keydown", this.listController.handleKeydown);
    }
  }
  render() {
    return x`
      <slot
          @deactivate-items=${this.listController.onDeactivateItems}
          @request-activation=${this.listController.onRequestActivation}
          @slotchange=${this.listController.onSlotchange}>
      </slot>
    `;
  }
  activateNextItem() {
    return this.listController.activateNextItem();
  }
  activatePreviousItem() {
    return this.listController.activatePreviousItem();
  }
}
(() => {
  setupHostAria(List, { focusable: false });
})();
__decorate([
  o4({ flatten: true })
], List.prototype, "slotItems", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles
var styles32 = i`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
`;

// node_modules/lit-html/directive-helpers
var MdList = class MdList2 extends List {
};
MdList.styles = [styles32];
MdList = __decorate([
  t("md-list")
], MdList);

// node_modules/lit-html/directive-helpers.js.jsus
var shouldReduceMotion = function() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
var _a3;
var INDICATOR = Symbol("indicator");
var ANIMATE_INDICATOR = Symbol("animateIndicator");

class Tab extends s3 {
  get selected() {
    return this.active;
  }
  set selected(active) {
    this.active = active;
  }
  constructor() {
    super();
    this.isTab = true;
    this.active = false;
    this.hasIcon = false;
    this.iconOnly = false;
    this.fullWidthIndicator = false;
    this.internals = polyfillElementInternalsAria(this, this.attachInternals());
    if (!o6) {
      this.internals.role = "tab";
      this.addEventListener("keydown", this.handleKeydown.bind(this));
    }
  }
  render() {
    const indicator = x`<div class="indicator"></div>`;
    return x`
      <div class="button" role="presentation" @click=${this.handleContentClick}>
        <md-focus-ring part="focus-ring" inward
            .control=${this}></md-focus-ring>
        <md-elevation></md-elevation>
        <md-ripple .control=${this}></md-ripple>
        <div class="content ${e8(this.getContentClasses())}"
            role="presentation">
          <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
          <slot @slotchange=${this.handleSlotChange}></slot>
          ${this.fullWidthIndicator ? T : indicator}
        </div>
        ${this.fullWidthIndicator ? indicator : T}
      </div>`;
  }
  getContentClasses() {
    return {
      "has-icon": this.hasIcon,
      "has-label": !this.iconOnly
    };
  }
  updated() {
    this.internals.ariaSelected = String(this.active);
  }
  async handleKeydown(event) {
    await 0;
    if (event.defaultPrevented) {
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.click();
    }
  }
  handleContentClick(event) {
    event.stopPropagation();
    this.click();
  }
  [(_a3 = INDICATOR, ANIMATE_INDICATOR)](previousTab) {
    if (!this[INDICATOR]) {
      return;
    }
    this[INDICATOR].getAnimations().forEach((a4) => {
      a4.cancel();
    });
    const frames = this.getKeyframes(previousTab);
    if (frames !== null) {
      this[INDICATOR].animate(frames, { duration: 250, easing: EASING.EMPHASIZED });
    }
  }
  getKeyframes(previousTab) {
    const reduceMotion = shouldReduceMotion();
    if (!this.active) {
      return reduceMotion ? [{ opacity: 1 }, { transform: "none" }] : null;
    }
    const from = {};
    const fromRect = previousTab[INDICATOR]?.getBoundingClientRect() ?? {};
    const fromPos = fromRect.left;
    const fromExtent = fromRect.width;
    const toRect = this[INDICATOR].getBoundingClientRect();
    const toPos = toRect.left;
    const toExtent = toRect.width;
    const scale = fromExtent / toExtent;
    if (!reduceMotion && fromPos !== undefined && toPos !== undefined && !isNaN(scale)) {
      from["transform"] = `translateX(${(fromPos - toPos).toFixed(4)}px) scaleX(${scale.toFixed(4)})`;
    } else {
      from["opacity"] = 0;
    }
    return [from, { transform: "none" }];
  }
  handleSlotChange() {
    this.iconOnly = false;
    for (const node of this.assignedDefaultNodes) {
      const hasTextContent = node.nodeType === Node.TEXT_NODE && !!node.wholeText.match(/\S/);
      if (node.nodeType === Node.ELEMENT_NODE || hasTextContent) {
        return;
      }
    }
    this.iconOnly = true;
  }
  handleIconSlotChange() {
    this.hasIcon = this.assignedIcons.length > 0;
  }
}
(() => {
  setupHostAria(Tab);
})();
__decorate([
  n3({ type: Boolean, reflect: true, attribute: "md-tab" })
], Tab.prototype, "isTab", undefined);
__decorate([
  n3({ type: Boolean, reflect: true })
], Tab.prototype, "active", undefined);
__decorate([
  n3({ type: Boolean })
], Tab.prototype, "selected", null);
__decorate([
  n3({ type: Boolean, attribute: "has-icon" })
], Tab.prototype, "hasIcon", undefined);
__decorate([
  n3({ type: Boolean, attribute: "icon-only" })
], Tab.prototype, "iconOnly", undefined);
__decorate([
  e4(".indicator")
], Tab.prototype, _a3, undefined);
__decorate([
  r4()
], Tab.prototype, "fullWidthIndicator", undefined);
__decorate([
  n4({ flatten: true })
], Tab.prototype, "assignedDefaultNodes", undefined);
__decorate([
  o4({ slot: "icon", flatten: true })
], Tab.prototype, "assignedIcons", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-st
class PrimaryTab extends Tab {
  constructor() {
    super(...arguments);
    this.inlineIcon = false;
  }
  getContentClasses() {
    return {
      ...super.getContentClasses(),
      stacked: !this.inlineIcon
    };
  }
}
__decorate([
  n3({ type: Boolean, attribute: "inline-icon" })
], PrimaryTab.prototype, "inlineIcon", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles.css.js
var styles33 = i`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_container-shape: var(--md-primary-tab-container-shape, 0px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var( --md-primary-tab-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-primary-tab-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-primary-tab-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-primary-tab-container-shape-end-start, var(--_container-shape) )}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}/*# sourceMappingURL=primary-tab-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsus-ring-style
var styles34 = i`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;width:100%;position:relative;padding:0 16px;margin:0;z-index:0;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus{color:var(--_focus-label-text-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]) .button{color:var(--_active-label-text-color);--md-elevation-level: var(--_container-elevation);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) .button ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]) .button:hover{color:var(--_active-hover-label-text-color)}:host([active]) .button:hover ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]) .button:focus{color:var(--_active-focus-label-text-color)}:host([active]) .button:focus ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]) .button:active{color:var(--_active-pressed-label-text-color)}:host([active]) .button:active ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}/*# sourceMappingURL=tab-styles.css.map */
`;

// node_modules/lit-html/directive-helpers.js.jsu
var MdPrimaryTab = class MdPrimaryTab2 extends PrimaryTab {
};
MdPrimaryTab.styles = [styles34, styles33];
MdPrimaryTab = __decorate([
  t("md-primary-tab")
], MdPrimaryTab);

// node_modules/lit-html/directive-helpers.js.jsus-
var isTab = function(element) {
  return element instanceof HTMLElement && element.hasAttribute("md-tab");
};

class Tabs extends s3 {
  get activeTab() {
    return this.tabs.find((tab3) => tab3.active) ?? null;
  }
  set activeTab(tab3) {
    if (tab3) {
      this.activateTab(tab3);
    }
  }
  get activeTabIndex() {
    return this.tabs.findIndex((tab3) => tab3.active);
  }
  set activeTabIndex(index) {
    const activateTabAtIndex = () => {
      const tab3 = this.tabs[index];
      if (tab3) {
        this.activateTab(tab3);
      }
    };
    if (!this.slotElement) {
      this.updateComplete.then(activateTabAtIndex);
      return;
    }
    activateTabAtIndex();
  }
  get focusedTab() {
    return this.tabs.find((tab3) => tab3.matches(":focus-within"));
  }
  constructor() {
    super();
    this.autoActivate = false;
    this.internals = polyfillElementInternalsAria(this, this.attachInternals());
    if (!o6) {
      this.internals.role = "tablist";
      this.addEventListener("keydown", this.handleKeydown.bind(this));
      this.addEventListener("keyup", this.handleKeyup.bind(this));
      this.addEventListener("focusout", this.handleFocusout.bind(this));
    }
  }
  async scrollToTab(tabToScrollTo) {
    await this.updateComplete;
    const { tabs } = this;
    tabToScrollTo ?? (tabToScrollTo = this.activeTab);
    if (!tabToScrollTo || !tabs.includes(tabToScrollTo)) {
      return;
    }
    for (const tab3 of this.tabs) {
      await tab3.updateComplete;
    }
    const offset = tabToScrollTo.offsetLeft;
    const extent = tabToScrollTo.offsetWidth;
    const scroll = this.scrollLeft;
    const hostExtent = this.offsetWidth;
    const scrollMargin = 48;
    const min = offset - scrollMargin;
    const max = offset + extent - hostExtent + scrollMargin;
    const to = Math.min(min, Math.max(max, scroll));
    const behavior = !this.focusedTab ? "smooth" : "instant";
    this.scrollTo({ behavior, top: 0, left: to });
  }
  render() {
    return x`
      <div class="tabs">
        <slot @slotchange=${this.handleSlotChange}
            @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `;
  }
  async handleTabClick(event) {
    const tab3 = event.target;
    await 0;
    if (event.defaultPrevented || !isTab(tab3) || tab3.active) {
      return;
    }
    this.activateTab(tab3);
  }
  activateTab(activeTab) {
    const { tabs } = this;
    const previousTab = this.activeTab;
    if (!tabs.includes(activeTab) || previousTab === activeTab) {
      return;
    }
    for (const tab3 of tabs) {
      tab3.active = tab3 === activeTab;
    }
    if (previousTab) {
      const defaultPrevented = !this.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
      if (defaultPrevented) {
        for (const tab3 of tabs) {
          tab3.active = tab3 === previousTab;
        }
        return;
      }
      activeTab[ANIMATE_INDICATOR](previousTab);
    }
    this.updateFocusableTab(activeTab);
    this.scrollToTab(activeTab);
  }
  updateFocusableTab(focusableTab) {
    for (const tab3 of this.tabs) {
      tab3.tabIndex = tab3 === focusableTab ? 0 : -1;
    }
  }
  async handleKeydown(event) {
    await 0;
    const isLeft = event.key === "ArrowLeft";
    const isRight = event.key === "ArrowRight";
    const isHome = event.key === "Home";
    const isEnd = event.key === "End";
    if (event.defaultPrevented || !isLeft && !isRight && !isHome && !isEnd) {
      return;
    }
    const { tabs } = this;
    if (tabs.length < 2) {
      return;
    }
    event.preventDefault();
    let indexToFocus;
    if (isHome || isEnd) {
      indexToFocus = isHome ? 0 : tabs.length - 1;
    } else {
      const isRtl2 = getComputedStyle(this).direction === "rtl";
      const forwards = isRtl2 ? isLeft : isRight;
      const { focusedTab } = this;
      if (!focusedTab) {
        indexToFocus = forwards ? 0 : tabs.length - 1;
      } else {
        const focusedIndex = this.tabs.indexOf(focusedTab);
        indexToFocus = forwards ? focusedIndex + 1 : focusedIndex - 1;
        if (indexToFocus >= tabs.length) {
          indexToFocus = 0;
        } else if (indexToFocus < 0) {
          indexToFocus = tabs.length - 1;
        }
      }
    }
    const tabToFocus = tabs[indexToFocus];
    tabToFocus.focus();
    if (this.autoActivate) {
      this.activateTab(tabToFocus);
    } else {
      this.updateFocusableTab(tabToFocus);
    }
  }
  handleKeyup() {
    this.scrollToTab(this.focusedTab ?? this.activeTab);
  }
  handleFocusout() {
    if (this.matches(":focus-within")) {
      return;
    }
    const { activeTab } = this;
    if (activeTab) {
      this.updateFocusableTab(activeTab);
    }
  }
  handleSlotChange() {
    const firstTab = this.tabs[0];
    if (!this.activeTab && firstTab) {
      this.activateTab(firstTab);
    }
    this.scrollToTab(this.activeTab);
  }
}
(() => {
  setupHostAria(Tabs, { focusable: false });
})();
__decorate([
  o4({ flatten: true, selector: "[md-tab]" })
], Tabs.prototype, "tabs", undefined);
__decorate([
  n3({ type: Boolean, attribute: "auto-activate" })
], Tabs.prototype, "autoActivate", undefined);
__decorate([
  e4("slot")
], Tabs.prototype, "slotElement", undefined);

// node_modules/lit-html/directive-helpers.js.jsus-ring-styles
var styles35 = i`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}/*# sourceMappingURL=tabs-styles.css.map */
`;

// node_modules/lit-html/directive-helpers
var MdTabs = class MdTabs2 extends Tabs {
};
MdTabs.styles = [styles35];
MdTabs = __decorate([
  t("md-tabs")
], MdTabs);

// node_modules/lit-html/di
class TList extends MdList {
  constructor() {
    super(...arguments);
    this.activeIndex = -1;
    this.event = "list";
  }
  tabs = [];
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.layout();
  }
  updated(changedProperties) {
    if (changedProperties.has("activeIndex")) {
      this.onActiveIndexChange(this.activeIndex);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.event) {
      this.addEventListener(`t-${this.event}-item-interaction`, (e10) => {
        this.handleListItemInteraction(e10);
      });
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.event) {
      this.addEventListener(`t-${this.event}-item-interaction`, (e10) => {
        this.handleListItemInteraction(e10);
      });
    }
  }
  layout() {
    if (!this.slotItems)
      return;
    const navTabs = [];
    for (const node of this.slotItems) {
      navTabs.push(node);
    }
    this.tabs = navTabs;
  }
  handleListItemInteraction(event) {
    const currIndex = this.tabs.indexOf(event.detail.state);
    if (this.activeIndex == currIndex)
      return;
    this.activeIndex = currIndex;
    this.dispatchEvent(new CustomEvent(`t-${this.event}-interaction`, {
      detail: { state: event.detail.state },
      bubbles: true,
      composed: true
    }));
  }
  onActiveIndexChange(value) {
    if (value === -1 || value === undefined) {
      for (let i6 = 0;i6 < this.tabs.length; i6++) {
        if ("active" in this.tabs[i6]) {
          this.tabs[i6].active = false;
        }
      }
      return;
    }
    if (!this.tabs[value]) {
      return;
    }
    for (let i6 = 0;i6 < this.tabs.length; i6++) {
      if ("active" in this.tabs[i6]) {
        this.tabs[i6].active = i6 === value;
      }
    }
  }
}
__legacyDecorateClassTS([
  n3({ type: Number, attribute: "active-index" })
], TList.prototype, "activeIndex", undefined);
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event" })
], TList.prototype, "event", undefined);
__legacyDecorateClassTS([
  o4({ flatten: true })
], TList.prototype, "slotItems", undefined);
TList = __legacyDecorateClassTS([
  t("t-list")
], TList);

// node_modules/lit-html/directi
class TListItem extends MdListItem {
  static styles = [
    i`
      md-item {
        gap: 8px !important;
      }      
    `,
    ...MdListItem.styles
  ];
  constructor() {
    super();
    this.active = false;
    this.event = "list";
    this.addEventListener("click", (e10) => this.handleClick(e10));
  }
  handleClick(e10) {
    if (this.active) {
      e10.stopImmediatePropagation();
      e10.preventDefault();
    }
    this.dispatchEvent(new CustomEvent(`t-${this.event}-item-interaction`, {
      detail: { state: this },
      bubbles: true,
      composed: true
    }));
  }
}
__legacyDecorateClassTS([
  n3({ type: Boolean, reflect: true })
], TListItem.prototype, "active", undefined);
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event-name" })
], TListItem.prototype, "event", undefined);
TListItem = __legacyDecorateClassTS([
  t("t-list-items")
], TListItem);

// node_modules/lit-html/directiv
class TNavigation extends s3 {
  constructor() {
    super(...arguments);
  }
  static styles = i`
    :host{
      display: flex;
    }
  `;
  navRail;
  navDrawers = [];
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.layout();
    this.setDrawerIndex();
  }
  layout() {
    if (!this.items)
      return;
    for (let i6 = 0;i6 < this.items.length; i6++) {
      const item3 = this.items[i6];
      switch (item3.localName) {
        case "t-navigation-rail":
          this.navRail = item3;
          break;
        case "t-navigation-drawer":
          this.navDrawers.push(item3);
          break;
        default:
          break;
      }
    }
    console.log(this.navRail);
    console.log(this.navDrawers);
  }
  setDrawerIndex() {
    console.log("setDrawerIndex");
    if (!this.navDrawers)
      return;
    for (let i6 = 0;i6 < this.navDrawers.length; i6++) {
      this.navDrawers[i6].parentIndex = i6;
      console.log(this.navDrawers[i6].parentIndex, i6);
    }
  }
  handleRailInteraction(event) {
    console.log("handleRailInteraction");
    for (let i6 = 0;i6 < this.navDrawers.length; i6++) {
      this.navDrawers[i6].activeId = event.detail.state.id;
    }
  }
  handleDrawerInteraction(event) {
    const id = event.detail.state.id;
    const index = event.target?.parentIndex;
    console.log("handleDrawerInteraction", index, id);
    if (index >= this.navDrawers.length)
      return;
    for (let i6 = index + 1;i6 < this.navDrawers.length; i6++) {
      this.navDrawers[i6].activeId = id;
    }
  }
  testing(e10) {
    console.log("parentState", e10.detail.state);
    console.log("parentDetail", e10.detail);
    console.log("parent", e10);
  }
  render() {
    return x`
      <slot 
        @t-rail-interaction=${this.handleRailInteraction}
        @t-drawer-interaction=${this.handleDrawerInteraction}
      >
      </slot>
      `;
  }
}
__legacyDecorateClassTS([
  o4({ flatten: true })
], TNavigation.prototype, "items", undefined);
TNavigation = __legacyDecorateClassTS([
  t("t-navigation")
], TNavigation);

// node_modules/lit-html/directive-hel
class TNavigationRail extends TList {
  constructor() {
    super(...arguments);
    this.activeIndex = 0;
    this.event = "rail";
    this.initList = false;
  }
  static styles = [
    i`
    :host{
      --md-list-container-color: var(--t-navigation-rail-list-container-color) !important;
--md-ref-typeface-plain: 'Roboto Mono, monospace';

      padding: 8px !important;
      background: var(--t-navigation-rail-list-container-color);
      gap: 24px;
      display: flex;
      flex-direction: column;    
    }
  `,
    ...TList.styles
  ];
  INITIAL_INDEX;
  firstUpdated(changedProperties) {
    this.INITIAL_INDEX = this.activeIndex;
    super.firstUpdated(changedProperties);
    this.layout();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("initList")) {
      if (this.initList)
        this.handleInitList();
    }
  }
  handleInitList() {
    if (!this.tabs[this.INITIAL_INDEX])
      return;
    this.tabs[this.INITIAL_INDEX].click();
  }
}
__legacyDecorateClassTS([
  n3({ type: Number, attribute: "active-index" })
], TNavigationRail.prototype, "activeIndex", undefined);
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event" })
], TNavigationRail.prototype, "event", undefined);
__legacyDecorateClassTS([
  n3({ type: Boolean, attribute: "init-list" })
], TNavigationRail.prototype, "initList", undefined);
TNavigationRail = __legacyDecorateClassTS([
  t("t-navigation-rail")
], TNavigationRail);

// node_modules/lit-html/directive-helpers.
class TNavigationRailItem extends TListItem {
  constructor() {
    super(...arguments);
    this.event = "rail";
  }
  static styles = [
    i`
      md-item {     
          --md-list-item-label-text-size: var(--t-navigation-rail-list-item-text-size);
      }

      :host{
        background-color: var(--t-navigation-rail-list-item-container-color);
        --md-list-item-label-text-color	: var(--t-navigation-rail-list-item-color);
        --md-list-item-trailing-icon-color: var(--t-navigation-rail-list-item-color);
        border-radius: 32px !important;        

        /** Dynamic **/
        --md-list-item-hover-state-layer-color: var(--t-navigation-rail-list-item-hover-state-layer-color);
        --md-list-item-hover-state-layer-opacity: var(--t-navigation-rail-list-item-hover-state-layer-opacity);

        --md-list-item-pressed-state-layer-color: var(--t-navigation-rail-list-item-pressed-state-layer-color);
        --md-list-item-pressed-state-layer-opacity: var(--t-navigation-rail-list-item-pressed-state-layer-opacity);   
      }

      :host([active]){
        --md-list-item-label-text-color: var(--t-navigation-rail-list-item-active-color);
        --md-list-item-trailing-icon-color: var(--t-navigation-rail-list-item-active-color);
      }
    `,
    ...TListItem.styles
  ];
}
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event-name" })
], TNavigationRailItem.prototype, "event", undefined);
TNavigationRailItem = __legacyDecorateClassTS([
  t("t-navigation-rail-item")
], TNavigationRailItem);

// node_modules/lit-html/directive-helpe
class TNavigationDrawer extends TList {
  constructor() {
    super(...arguments);
    this.activeId = "";
    this.event = "drawer";
    this.parentIndex = -1;
  }
  static styles = [
    i`
    :host{
      padding-top: 0px !important;
      --md-list-container-color: var(--t-navigation-drawer-container-color, var(--md-sys-color-surface, #fef7ff));
        }
    `,
    ...TList.styles
  ];
  idToIndex = new Map;
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.initId();
    this.setActiveIndex();
  }
  updated(changedProperties) {
    if (changedProperties.has("activeId"))
      this.setActiveIndex();
    super.updated(changedProperties);
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.event) {
      this.addEventListener(`t-${this.event}-list-interaction`, (e10) => {
        this.handleListInteraction(e10);
      });
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.event) {
      this.addEventListener(`t-${this.event}-list-interaction`, (e10) => {
        this.handleListInteraction(e10);
      });
    }
  }
  handleListInteraction(e10) {
    console.log(`t-${this.event}-interaction`);
    this.dispatchEvent(new CustomEvent(`t-${this.event}-interaction`, {
      detail: { state: e10.detail.state },
      bubbles: true,
      composed: true
    }));
  }
  setActiveIndex() {
    if (!this.idToIndex.has(this.activeId)) {
      this.activeIndex = -1;
      return;
    }
    this.activeIndex = this.idToIndex.get(this.activeId);
  }
  initId() {
    for (let i6 = 0;i6 < this.tabs.length; i6++) {
      if (this.tabs[i6].id !== "") {
        this.idToIndex.set(this.tabs[i6].id, i6);
      }
    }
  }
  onActiveIndexChange(value) {
    console.log(this.id, this.activeIndex);
    if (value === -1 || value === undefined) {
      for (let i6 = 0;i6 < this.tabs.length; i6++) {
        if ("active" in this.tabs[i6]) {
          this.tabs[i6].active = false;
        }
        if ("activeIndex" in this.tabs[i6]) {
          this.tabs[i6].activeIndex = 0;
        }
      }
      return;
    }
    if (!this.tabs[value]) {
      return;
    }
    for (let i6 = 0;i6 < this.tabs.length; i6++) {
      if ("active" in this.tabs[i6]) {
        const setActive = i6 === value;
        this.tabs[i6].active = setActive;
        if (setActive) {
          this.tabs[i6].clickFirstListItem();
        }
      }
    }
  }
}
__legacyDecorateClassTS([
  n3({ type: String, attribute: "active-index" })
], TNavigationDrawer.prototype, "activeId", undefined);
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event" })
], TNavigationDrawer.prototype, "event", undefined);
__legacyDecorateClassTS([
  n3({ type: Number, attribute: "parent-index" })
], TNavigationDrawer.prototype, "parentIndex", undefined);
TNavigationDrawer = __legacyDecorateClassTS([
  t("t-navigation-drawer")
], TNavigationDrawer);

// node_modules/lit-html/directive
class TListActive extends TList {
  constructor() {
    super(...arguments);
    this.active = false;
  }
  static styles = [
    i`
      :host {
        /** MdList Styling **/
        --md-list-container-color: var(--t-list-container-color, #ffffff) !important;
        --md-ref-typeface-plain: var(--t-list-container-font, 'Roboto Mono, monospace');

        width: var(--t-list-container-width, 165px);
        gap: var(--t-list-container-gap, 24px);
        display: none !important;
        flex-direction: column;    
      }

      :host([active]) {
        display: flex !important;
        padding-right: var(--t-list-container-padding-right, 8px !important;
        padding-left: var(--t-list-container-padding-left, 8px) !important;
        padding-top: var(--t-list-container-padding-top, 8px) !important;
        padding-bottom: var(--t-list-container-padding-bottom, 0px) !important;
      }  
  `,
    ...TList.styles
  ];
}
__legacyDecorateClassTS([
  n3({ type: Boolean, reflect: true })
], TListActive.prototype, "active", undefined);
TListActive = __legacyDecorateClassTS([
  t("t-list-active")
], TListActive);

// node_modules/lit-html/directive-helpers.js
class TNavigationDrawerList extends TListActive {
  constructor() {
    super(...arguments);
    this.activeIndex = 0;
    this.event = "drawer-list";
  }
  static styles = [
    i`
      :host {
        --t-list-container-color: var(--t-navigation-drawer-list-container-color, var(--t-list-container-color, #ffffff));
        --t-list-container-font: var(--t-navigation-drawer-list-container-font, var(--t-list-container-font, 'Roboto Mono, monospace'));
        --t-list-container-width: var(--t-navigation-drawer-list-container-width, var(--t-list-container-width, 165px));
        --t-list-container-gap: var(--t-navigation-drawer-list-container-gap, var(--t-list-container-gap, 16px));
      }

      :host([active]) {
        --t-list-container-padding-right: var(--t-navigation-drawer-list-container-padding-right, var(--t-list-container-padding-right, 8px));
        --t-list-container-padding-left: var(--t-navigation-drawer-list-container-padding-left, var(--t-list-container-padding-left, 8px));
        --t-list-container-padding-top: var(--t-navigation-drawer-list-container-padding-top, var(--t-list-container-padding-top, 0px));
        --t-list-container-padding-bottom: var(--t-navigation-drawer-list-container-padding-bottom, var(--t-list-container-padding-bottom, 0px));
      }  
  `,
    ...TListActive.styles
  ];
  clickFirstListItem() {
    if (this.tabs.length <= 0)
      return;
    this.activeIndex = -1;
    this.tabs[0].click();
  }
}
__legacyDecorateClassTS([
  n3({ type: Number, attribute: "active-index" })
], TNavigationDrawerList.prototype, "activeIndex", undefined);
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event" })
], TNavigationDrawerList.prototype, "event", undefined);
TNavigationDrawerList = __legacyDecorateClassTS([
  t("t-navigation-drawer-list")
], TNavigationDrawerList);

// node_modules/lit-html/directive-helpers.js.jsus
class TNavigationDrawerItem extends TNavigationRailItem {
  constructor() {
    super(...arguments);
    this.event = "drawer-list";
  }
  static styles = [
    i`
      md-item {
        --md-list-item-label-text-size: var(--t-navigation-drawer-list-item-text-size) !important;
      }      

      :host([active]){
        border: solid !important;
        border-width: 1px !important;
        border-color: var(--t-navigation-rail-list-item-active-color) !important;
      }
    `,
    ...TNavigationRailItem.styles
  ];
}
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event-name" })
], TNavigationDrawerItem.prototype, "event", undefined);
TNavigationDrawerItem = __legacyDecorateClassTS([
  t("t-navigation-drawer-item")
], TNavigationDrawerItem);

// node_modules/lit-html/direct
class TDropdown extends s3 {
  constructor() {
    super(...arguments);
    this.active = false;
  }
  dTitle;
  dList;
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.layout();
  }
  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (_changedProperties.has("active")) {
      if (this.active === false) {
        this.dList.activeIndex = -1;
        this.dTitle.active = false;
      }
    }
  }
  layout() {
    if (!this.dropdownTitle)
      return;
    if (!this.dropdownList)
      return;
    this.dTitle = this.dropdownTitle[0];
    this.dList = this.dropdownList[0];
  }
  render() {
    return x`
      <slot @t-dropdown-title-item-interaction="${this.handleTitleIteraction}" name="title"></slot>
      <slot @t-dropdown-list-interaction="${this.handleListIteraction}" name="content"></slot>
    `;
  }
  handleTitleIteraction(event) {
    console.log("handleTitleIteraction");
    this.dList.active = event.detail.state.collapsed;
  }
  handleListIteraction(_2) {
    this.active = true;
    this.dTitle.active = true;
    this.dispatchEvent(new CustomEvent("list-item-interaction", {
      detail: { state: this },
      bubbles: true,
      composed: true
    }));
  }
}
__legacyDecorateClassTS([
  n3({ type: Boolean, reflect: true })
], TDropdown.prototype, "active", undefined);
__legacyDecorateClassTS([
  o4({ flatten: true, slot: "title" })
], TDropdown.prototype, "dropdownTitle", undefined);
__legacyDecorateClassTS([
  o4({ flatten: true, slot: "content" })
], TDropdown.prototype, "dropdownList", undefined);
TDropdown = __legacyDecorateClassTS([
  t("t-dropdown")
], TDropdown);

// node_modules/lit-html/directive-he
class TDropdownTitle extends TNavigationDrawerItem {
  constructor() {
    super(...arguments);
    this.event = "dropdown-title";
    this.collapsed = false;
  }
  render() {
    return this.renderListItem(x`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end">  
          ${this.collapsed ? this.inactiveSlot : this.activeSlot}         </slot>
        ${this.renderBody()}
      </md-item>
    `);
  }
  get activeSlot() {
    return x`<slot name="active"></slot>`;
  }
  get inactiveSlot() {
    return x`<slot name="inactive"></slot>`;
  }
  handleClick(e10) {
    this.collapsed = !this.collapsed;
    console.log();
    super.handleClick(e10);
  }
}
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event-name" })
], TDropdownTitle.prototype, "event", undefined);
__legacyDecorateClassTS([
  n3({ type: Boolean, reflect: true })
], TDropdownTitle.prototype, "collapsed", undefined);
TDropdownTitle = __legacyDecorateClassTS([
  t("t-dropdown-title")
], TDropdownTitle);

// node_modules/lit-html/directive-h
class TDropdownList extends TListActive {
  constructor() {
    super(...arguments);
    this.event = "dropdown-list";
  }
  static styles = [
    i`
      :host {
        --t-list-container-color: var(--t-navigation-dropdown-list-container-color, var(--t-list-container-color, #ffffff));
        --t-list-container-font: var(--t-navigation-dropdown-list-container-font, var(--t-list-container-font, 'Roboto Mono, monospace'));
        --t-list-container-width: var(--t-navigation-dropdown-list-container-width, var(--t-list-container-width, 165px));
        --t-list-container-gap: var(--t-navigation-dropdown-list-container-gap, var(--t-list-container-gap, 0px));
      }

      :host([active]) {
        --t-list-container-padding-right: var(--t-navigation-dropdown-list-container-padding-right, var(--t-list-container-padding-right, 0px));
        --t-list-container-padding-left: var(--t-navigation-dropdown-list-container-padding-left, var(--t-list-container-padding-left, 16px));
        --t-list-container-padding-top: var(--t-navigation-dropdown-list-container-padding-top, var(--t-list-container-padding-top, 0px));
        --t-list-container-padding-bottom: var(--t-navigation-dropdown-list-container-padding-bottom, var(--t-list-container-padding-bottom, 0px));
      }  
  `,
    ...TListActive.styles
  ];
}
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event" })
], TDropdownList.prototype, "event", undefined);
TDropdownList = __legacyDecorateClassTS([
  t("t-dropdown-list")
], TDropdownList);

// node_modules/lit-html/directive-helper
class TDropdownItem extends TNavigationDrawerItem {
  constructor() {
    super(...arguments);
    this.event = "dropdown-list";
  }
}
__legacyDecorateClassTS([
  n3({ type: String, attribute: "event-name" })
], TDropdownItem.prototype, "event", undefined);
TDropdownItem = __legacyDecorateClassTS([
  t("t-dropdown-list-item")
], TDropdownItem);
