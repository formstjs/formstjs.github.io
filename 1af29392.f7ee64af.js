(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),o=(r(0),r(104));const a={id:"formst",title:"Formst",sidebar_label:"Formst",slug:"/api/formst"},c={unversionedId:"formst",id:"formst",isDocsHomePage:!1,title:"Formst",description:"We need to wrap Field and ErrorMessage components inside Formst and pass a createFormModel instance to it. The Formst component creates a React Context containing formInstance which is available to Field and ErrorMessage inside it. Field and ErrorMessage can use the values from formInstance.",source:"@site/docs/Formst.md",slug:"/api/formst",permalink:"/docs/api/formst",editUrl:"https://github.com/formstjs/formst-docs/docs/Formst.md",version:"current",sidebar_label:"Formst",sidebar:"someSidebar",previous:{title:"createFormModel",permalink:"/docs/api/create-form-model"},next:{title:"Field",permalink:"/docs/api/field"}},i=[{value:"API",id:"api",children:[]},{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:i};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We need to wrap ",Object(o.b)("inlineCode",{parentName:"p"},"Field")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ErrorMessage")," components inside ",Object(o.b)("inlineCode",{parentName:"p"},"Formst")," and pass a ",Object(o.b)("inlineCode",{parentName:"p"},"createFormModel")," instance to it. The Formst component creates a React Context containing formInstance which is available to Field and ErrorMessage inside it. Field and ErrorMessage can use the values from formInstance."),Object(o.b)("h3",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'import { Formst } from "formst";\n\n<Formst formInstance={formInstance} />\n')),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"formInstance: Instance of the model created by createFormModel\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'<Formst formInstance={formInstance}>\n  <Field name="title" component={CustomComponent}>\n  <ErrorMessage name="title" />\n</Formst>\n')))}p.isMDXComponent=!0}}]);