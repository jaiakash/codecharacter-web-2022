var x=Object.defineProperty;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(o,t,r)=>t in o?x(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,h=(o,t)=>{for(var r in t||(t={}))S.call(t,r)&&u(o,r,t[r]);if(f)for(var r of f(t))w.call(t,r)&&u(o,r,t[r]);return o};import{r as d,e as O,s as p,p as l,n as P,P as a,a as y,b as E,c as M,d as R,f as $,l as D,g as j,h as A}from"./vendor.5292d8c9.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};H();const L={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:L}),C=Object.defineProperty,B=Object.getOwnPropertyDescriptor,T=(o,t,r,n)=>{for(var e=n>1?void 0:n?B(t,r):t,s=o.length-1,c;s>=0;s--)(c=o[s])&&(e=(n?c(t,r,e):c(e))||e);return n&&e&&C(t,r,e),e};const I=new URL("assets/open-wc-logo.7e15b7e0.svg",self.location).href;let i=class extends p{constructor(){super(...arguments);this.title="Home Page"}render(){return l`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${I} /></div>
        <h1>${this.title}</h1>
      </main>
    `}};i.styles=d`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--code-character-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;T([O({type:String})],i.prototype,"title",2);i=T([P("home-page")],i);var z={parameters:{storySource:{source:`import '../src/pages/Home.js';
import { TemplateResult, html } from 'lit';

export default {
  title: 'Home Page',
  component: 'home-page',
  argTypes: {
    title: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
}

const Template: Story<ArgTypes> = ({ title }: ArgTypes) => html\`
  <home-page .title=\${title ?? ''}></home-page>
\`;

export const Home = Template.bind({});
Home.args = {
  title: 'Home Page',
};
`,locationsMap:{home:{startLoc:{col:34,line:22},endLoc:{col:1,line:24},startBody:{col:34,line:22},endBody:{col:1,line:24}}}}},title:"Home Page",component:"home-page",argTypes:{title:{control:"text"}}};const N=({title:o})=>l`
  <home-page .title=${o!=null?o:""}></home-page>
`,_=N.bind({});_.args={title:"Home Page"};const q=["Home"];var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z,Home:_,__namedExportsOrder:q});class Z extends a.Scene{constructor(){super({key:"TestScene"})}create(){const t=this.add.graphics({lineStyle:{width:2,color:11184640}}),r=a.Geom.Triangle.BuildEquilateral(400,25,300),n=a.Geom.Triangle.Decompose(r);let e=0;for(;e<Math.PI*2;)a.Geom.Triangle.Offset(r,Math.cos(e)*15,Math.sin(e)*15),a.Geom.Triangle.Rotate(r,Math.PI/20),a.Geom.Triangle.Decompose(r,n),e+=Math.PI/20;t.strokePoints(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=o=>t=>typeof t=="function"?((r,n)=>(window.customElements.define(r,n),n))(o,t):((r,n)=>{const{kind:e,elements:s}=n;return{kind:e,elements:s,finisher(c){window.customElements.define(r,c)}}})(o,t);var F=Object.defineProperty,J=Object.getOwnPropertyDescriptor,K=(o,t,r,n)=>{for(var e=n>1?void 0:n?J(t,r):t,s=o.length-1,c;s>=0;s--)(c=o[s])&&(e=(n?c(t,r,e):c(e))||e);return n&&e&&F(t,r,e),e};let g=class extends p{firstUpdated(){this._game=new a.Game({type:a.AUTO,parent:this.shadowRoot.querySelector("#renderer"),scene:[Z],dom:{createContainer:!1},scale:{mode:a.Scale.RESIZE,autoCenter:a.Scale.CENTER_BOTH}})}disconnectedCallback(){this._game.destroy(!0)}render(){return l` <div id="renderer"></div> `}};g.styles=d`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0.2em;
      box-sizing: border-box;
    }
  `;g=K([k("cc-map-designer")],g);var Q={parameters:{storySource:{source:`import '@codecharacter-2022/map-designer';
import { TemplateResult, html } from 'lit';

export default {
  title: 'Map Designer',
  component: 'cc-map-designer',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html\`
  <cc-map-designer></cc-map-designer>
\`;

export const MapDesigner = Template.bind({});
MapDesigner.args = {};
`,locationsMap:{"map-designer":{startLoc:{col:34,line:18},endLoc:{col:1,line:20},startBody:{col:34,line:18},endBody:{col:1,line:20}}}}},title:"Map Designer",component:"cc-map-designer",argTypes:{}};const V=()=>l`
  <cc-map-designer></cc-map-designer>
`,b=V.bind({});b.args={};const W=["MapDesigner"];var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q,MapDesigner:b,__namedExportsOrder:W});class Y extends a.Scene{constructor(){super({key:"TestScene"})}create(){const t=this.add.graphics({lineStyle:{width:2,color:43690}}),r=a.Geom.Triangle.BuildEquilateral(400,25,300),n=a.Geom.Triangle.Decompose(r);let e=0;for(;e<Math.PI*2;)a.Geom.Triangle.Offset(r,Math.cos(e)*15,Math.sin(e)*15),a.Geom.Triangle.Rotate(r,Math.PI/20),a.Geom.Triangle.Decompose(r,n),e+=Math.PI/20;t.strokePoints(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=o=>t=>typeof t=="function"?((r,n)=>(window.customElements.define(r,n),n))(o,t):((r,n)=>{const{kind:e,elements:s}=n;return{kind:e,elements:s,finisher(c){window.customElements.define(r,c)}}})(o,t);var re=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ne=(o,t,r,n)=>{for(var e=n>1?void 0:n?te(t,r):t,s=o.length-1,c;s>=0;s--)(c=o[s])&&(e=(n?c(t,r,e):c(e))||e);return n&&e&&re(t,r,e),e};let m=class extends p{firstUpdated(){this._game=new a.Game({type:a.AUTO,parent:this.shadowRoot.querySelector("#renderer"),scene:[Y],dom:{createContainer:!1},scale:{mode:a.Scale.RESIZE,autoCenter:a.Scale.CENTER_BOTH}})}disconnectedCallback(){this._game.destroy(!0)}render(){return l` <div id="renderer"></div> `}};m.styles=d`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0.2em;
      box-sizing: border-box;
    }
  `;m=ne([ee("cc-renderer")],m);var oe={parameters:{storySource:{source:`import '@codecharacter-2022/renderer';
import { TemplateResult, html } from 'lit';

export default {
  title: 'Renderer',
  component: 'cc-renderer',
  argTypes: {
    log: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  log?: string;
}

const Template: Story<ArgTypes> = ({ log }: ArgTypes) => html\`
  <cc-renderer .log=\${log ?? ''}></cc-renderer>
\`;

export const Renderer = Template.bind({});
Renderer.args = {
  log: 'Test',
};
`,locationsMap:{renderer:{startLoc:{col:34,line:22},endLoc:{col:1,line:24},startBody:{col:34,line:22},endBody:{col:1,line:24}}}}},title:"Renderer",component:"cc-renderer",argTypes:{log:{control:"text"}}};const se=({log:o})=>l`
  <cc-renderer .log=${o!=null?o:""}></cc-renderer>
`,v=se.bind({});v.args={log:"Test"};const ae=["Renderer"];var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe,Renderer:v,__namedExportsOrder:ae});const le=[A,G];le.forEach(o=>{Object.keys(o).forEach(t=>{const r=o[t];switch(t){case"args":case"argTypes":return D.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(r));case"decorators":return r.forEach(n=>$(n,!1));case"loaders":return r.forEach(n=>R(n,!1));case"parameters":return y(h({},r),!1);case"argTypesEnhancers":return r.forEach(n=>M(n));case"argsEnhancers":return r.forEach(n=>E(n));case"globals":case"globalTypes":{const n={};return n[t]=r,y(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});j(()=>[U,X,ce].filter(o=>o.default),{hot:!1},!1);
//# sourceMappingURL=iframe.7ed18d2f.js.map
