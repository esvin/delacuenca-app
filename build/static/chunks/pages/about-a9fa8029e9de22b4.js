(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8961:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(4444)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a=(l=r(7294))&&l.__esModule?l:{default:l},c=r(1003),s=r(880),i=r(9246);var f={};function u(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),l=a.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],l=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):l||r}}),[n,e.href,e.as]),p=l.href,h=l.as,d=a.default.useRef(p),y=a.default.useRef(h),m=e.children,b=e.replace,v=e.shallow,g=e.scroll,j=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var x=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,O=o(i.useIntersection({rootMargin:"200px"}),3),w=O[0],k=O[1],E=O[2],L=a.default.useCallback((function(e){y.current===h&&d.current===p||(E(),y.current=h,d.current=p),w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[h,x,p,E,w]);a.default.useEffect((function(){var e=k&&r&&c.isLocalURL(p),t="undefined"!==typeof j?j:n&&n.locale,o=f[p+"%"+h+(t?"%"+t:"")];e&&!o&&u(n,p,h,{locale:t})}),[h,p,k,j,r,n]);var N={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,l,a,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:l,locale:s,scroll:a}))}(e,n,p,h,b,v,g,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(p)&&u(n,p,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof j?j:n&&n.locale,_=n&&n.isLocaleDomain&&c.getDomainLocale(h,P,n&&n.locales,n&&n.domainLocales);N.href=_||c.addBasePath(c.addLocale(h,P,n&&n.defaultLocale))}return a.default.cloneElement(t,N)};t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4444:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(5893),o=r(7294),l=r(7948),a=r(5861),c=r(7357),s=r(3321),i=r(122),f=r(3219);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return(0,n.jsx)(f.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({},e,{children:(0,n.jsx)("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}))}function h(){return(0,n.jsxs)(a.Z,{sx:{mt:6,mb:3},color:"text.secondary",children:[(0,n.jsx)(p,{sx:{mr:1,verticalAlign:"middle"}}),"Pro tip: See more ",(0,n.jsx)(i.Z,{href:"https://mui.com/getting-started/templates/",children:"templates"})," on the MUI documentation."]})}var d=r(5697),y=r.n(d),m=r(6010),b=r(1163),v=r(1664),g=r.n(v);function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){j(e,t,r[t])}))}return e}function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var w=(0,r(1496).ZP)("a")({}),k=o.forwardRef((function(e,t){var r=e.to,o=e.linkAs,l=e.replace,a=e.scroll,c=e.shallow,s=e.prefetch,i=e.locale,f=O(e,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,n.jsx)(g(),{href:r,prefetch:s,as:o,replace:l,scroll:a,shallow:c,passHref:!0,locale:i,children:(0,n.jsx)(w,x({ref:t},f))})}));k.propTypes={href:y().any,linkAs:y().oneOfType([y().object,y().string]),locale:y().string,passHref:y().bool,prefetch:y().bool,replace:y().bool,scroll:y().bool,shallow:y().bool,to:y().oneOfType([y().object,y().string]).isRequired};var E=o.forwardRef((function(e,t){var r=e.activeClassName,o=void 0===r?"active":r,l=e.as,a=e.className,c=e.href,s=e.linkAs,f=e.locale,u=e.noLinkStyle,p=e.prefetch,h=e.replace,d=(e.role,e.scroll),y=e.shallow,v=O(e,["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"]),g=(0,b.useRouter)(),E="string"===typeof c?c:c.pathname,L=(0,m.Z)(a,j({},o,g.pathname===E&&o));if("string"===typeof c&&(0===c.indexOf("http")||0===c.indexOf("mailto:")))return u?(0,n.jsx)(w,x({className:L,href:c,ref:t},v)):(0,n.jsx)(i.Z,x({className:L,href:c,ref:t},v));var N={to:c,linkAs:s||l,replace:h,scroll:d,shallow:y,prefetch:p,locale:f};return u?(0,n.jsx)(k,x({className:L,ref:t},N,v)):(0,n.jsx)(i.Z,x({component:k,className:L,ref:t},N,v))}));E.propTypes={activeClassName:y().string,as:y().oneOfType([y().object,y().string]),className:y().string,href:y().any,linkAs:y().oneOfType([y().object,y().string]),locale:y().string,noLinkStyle:y().bool,prefetch:y().bool,replace:y().bool,role:y().string,scroll:y().bool,shallow:y().bool};var L=E;function N(){return(0,n.jsxs)(a.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,n.jsx)(i.Z,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}function P(){return(0,n.jsx)(l.Z,{maxWidth:"sm",children:(0,n.jsxs)(c.Z,{sx:{my:4},children:[(0,n.jsx)(a.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"Next.js example"}),(0,n.jsx)(s.Z,{variant:"contained",component:L,noLinkStyle:!0,href:"/",children:"Go to the main page"}),(0,n.jsx)(h,{}),(0,n.jsx)(N,{})]})})}},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[804,774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);