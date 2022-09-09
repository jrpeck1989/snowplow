"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[28006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?i.createElement(g,o(o({ref:t},s),{},{components:n})):i.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const l={title:"Scala client",date:"2021-03-26",sidebar_position:70},o=void 0,r={unversionedId:"pipeline-components-and-applications/iglu/iglu-clients/scala-client-setup/index",id:"pipeline-components-and-applications/iglu/iglu-clients/scala-client-setup/index",title:"Scala client",description:"Overview",source:"@site/docs/pipeline-components-and-applications/iglu/iglu-clients/scala-client-setup/index.md",sourceDirName:"pipeline-components-and-applications/iglu/iglu-clients/scala-client-setup",slug:"/pipeline-components-and-applications/iglu/iglu-clients/scala-client-setup/",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-clients/scala-client-setup/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/iglu-clients/scala-client-setup/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:70,frontMatter:{title:"Scala client",date:"2021-03-26",sidebar_position:70},sidebar:"defaultSidebar",previous:{title:"Ruby client",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-clients/ruby-client/"},next:{title:"Iglu Central Setup",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-central-setup/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Integration options",id:"integration-options",level:2},{value:"Setup",id:"setup",level:2},{value:"Hosting",id:"hosting",level:3},{value:"SBT",id:"sbt",level:3},{value:"Gradle",id:"gradle",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-scala-client"},"Scala client")," is an Iglu client and schema resolver implemented in Scala."),(0,a.kt)("p",null,"Setting up the Scala client to use from your own code is straightforward.",(0,a.kt)("br",{parentName:"p"}),"\n","For actual examples of initialization you can look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-scala-client"},"Scala client")," page."),(0,a.kt)("h2",{id:"integration-options"},"Integration options"),(0,a.kt)("p",null,"To minimize jar bloat, we have tried to keep external dependencies to a minimum. The main dependencies are on Jackson and JSON Schema-related libraries."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"hosting"},"Hosting"),(0,a.kt)("p",null,"The Scala client is published to Snowplow's ",(0,a.kt)("a",{parentName:"p",href:"http://maven.snplow.com"},"hosted Maven repository"),", which should make it easy to add it as a dependency into your own Java app."),(0,a.kt)("p",null,"The current version of the Scala client is 1.0.2."),(0,a.kt)("h3",{id:"sbt"},"SBT"),(0,a.kt)("p",null,"Add this to your SBT config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Dependency\nval igluClient = "com.snowplowanalytics" %% "iglu-scala-client"  % "1.0.2"\n')),(0,a.kt)("h3",{id:"gradle"},"Gradle"),(0,a.kt)("p",null,"Add into ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dependencies {\n    ...\n    // Iglu client\n    compile 'com.snowplowanalytics:iglu-scala-client:0.4.0'\n}\n")),(0,a.kt)("p",null,"Now read the  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-scala-client"},"Scala client API")," to start using the Scala client."))}u.isMDXComponent=!0}}]);