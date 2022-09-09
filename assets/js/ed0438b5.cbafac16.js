"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),o=n(20080);const r={title:"Retrieving data model execution data via the API",date:"2020-12-28",sidebar_position:70},s=void 0,l={unversionedId:"modeling-your-data/retrieving-job-execution-data-via-the-api/index",id:"modeling-your-data/retrieving-job-execution-data-via-the-api/index",title:"Retrieving data model execution data via the API",description:"The API that powers the warehouse jobs monitoring view in Snowplow BDP Console (Jobs) is also available for consumption by other authenticated clients.",source:"@site/docs/modeling-your-data/retrieving-job-execution-data-via-the-api/index.md",sourceDirName:"modeling-your-data/retrieving-job-execution-data-via-the-api",slug:"/modeling-your-data/retrieving-job-execution-data-via-the-api/",permalink:"/docs/modeling-your-data/retrieving-job-execution-data-via-the-api/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/modeling-your-data/retrieving-job-execution-data-via-the-api/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:70,frontMatter:{title:"Retrieving data model execution data via the API",date:"2020-12-28",sidebar_position:70},sidebar:"defaultSidebar",previous:{title:"Resolving data model failures (via Snowplow BDP)",permalink:"/docs/modeling-your-data/resolving-data-model-failures-via-snowplow-bdp/"},next:{title:"Analytics SDKs",permalink:"/docs/modeling-your-data/analytics-sdk/"}},u={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Retrieving job run information",id:"retrieving-job-run-information",level:2},{value:"Getting a list of job runs for a specific time window",id:"getting-a-list-of-job-runs-for-a-specific-time-window",level:3},{value:"Retrieving information about a specific job run",id:"retrieving-information-about-a-specific-job-run",level:3},{value:"Retrieving steps of a specific job run",id:"retrieving-steps-of-a-specific-job-run",level:3},{value:"Retrieving detailed information about a specific step execution",id:"retrieving-detailed-information-about-a-specific-step-execution",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The API that powers the warehouse jobs monitoring view in Snowplow BDP Console (Jobs) is also available for consumption by other authenticated clients."),(0,a.kt)("p",null,"The exact same data about past and current jobs executions can be retrieved and processed programmatically. Hence, it possible to integrate with your monitoring infrastructure and enable additional alerting or insights."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"You can have a look at and interact with all available endpoints in the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://console.snowplowanalytics.com/api/msc/v1/docs/index.html?url=/api/msc/v1/docs/docs.yaml#/Jobs"},"API documentation"),"."),(0,a.kt)("p",null,"Authorizing in the API documentation"),(0,a.kt)("p",null,"To be able to post sample requests in the documentation you need to click the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Authorize"),"\xa0button at the top of the document and authorize with your token. The value for the token field in each individual requests is overwritten by this authorization."),(0,a.kt)("p",null,"The endpoints focus on the main operations in the workflow around:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Getting a list of job runs within a specific time window. This window ",(0,a.kt)("strong",{parentName:"li"},"may span 96 hours at most and be contained within the last week"),"."),(0,a.kt)("li",{parentName:"ol"},"Retrieving information about a particular job run, including its individual steps."),(0,a.kt)("li",{parentName:"ol"},"Retrieving only the steps of a particular job run without any additional information."),(0,a.kt)("li",{parentName:"ol"},"Getting the full data available about the execution of a particular step of a particular job run, including ",(0,a.kt)("inlineCode",{parentName:"li"},"stdout"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"stderr"),".")),(0,a.kt)("p",null,"Each request will need to include your company\u2019s\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"organizationID"),"\xa0which is a UUID that can be retrieved from the URL immediately following the .com when visiting console:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(64700).Z,width:"727",height:"57"})),(0,a.kt)(o.ZP,{mdxType:"Block14551"}),(0,a.kt)("h2",{id:"retrieving-job-run-information"},"Retrieving job run information"),(0,a.kt)("h3",{id:"getting-a-list-of-job-runs-for-a-specific-time-window"},"Getting a list of job runs for a specific time window"),(0,a.kt)("p",null,"The invocation is as such:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/msc/v1/organizations/{organizationId}/jobs/v1/runs?from=X&to=Y")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Y")," are required and can be passed either as ISO8601 timestamps or as ISO8601 durations, and they must both be of the same type (i.e. it is not possible to mix a timestamp with a duration). For example, the query parameters can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from=2020-12-02T03:40:00Z&to=2020-12-02T15:40:00Z")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from=PT-12H&to=PT0S"))),(0,a.kt)("p",null,"As mentioned earlier, the total time window requested cannot exceed 96 hours (4 days) or start earlier than 1 week ago."),(0,a.kt)("p",null,"Limitations to be aware of"),(0,a.kt)("p",null,"When it comes to job executions, our platform tracks state change events. A side-effect of this is that in extreme cases of jobs with very significant numbers or steps or far too frequent executions the events for the requested time window may have to be automatically trimmed to the latest 10,000. This guarantees an up-to-date view but may be missing job runs that started near the beginning of the window. In this edge case the problem can be side-stepped by splitting the window to more requests (e.g. 2 + 2 days)."),(0,a.kt)("h3",{id:"retrieving-information-about-a-specific-job-run"},"Retrieving information about a specific job run"),(0,a.kt)("p",null,"Can be invoked as:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/msc/v1/organizations/{organizationId}/jobs/v1/runs/{runId}")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"runId")," is a hashed value that can be found within results of job run listing queries. The extra information that this endpoint returns (compared to job listing results) is the list of steps in that job run and their state, alongside their inter-dependencies."),(0,a.kt)("h3",{id:"retrieving-steps-of-a-specific-job-run"},"Retrieving steps of a specific job run"),(0,a.kt)("p",null,"If it is preferred to get only the steps for a job run, without the information already contained within the job runs list, one can use the respective endpoint:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/msc/v1/organizations/{organizationId}/jobs/v1/runs/{runId}/steps")),(0,a.kt)("h3",{id:"retrieving-detailed-information-about-a-specific-step-execution"},"Retrieving detailed information about a specific step execution"),(0,a.kt)("p",null,"Finally, one may wish to get the complete information about the execution of a single step. This may be useful, for instance, if the job failed on that step and the standard output or standard error of the step is of interest. To get that, one can invoke the respective endpoint:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/msc/v1/organizations/{organizationId}/jobs/v1/runs/{runId}/steps/{stepName}")))}c.isMDXComponent=!0},20080:(e,t,n)=>{n.d(t,{ZP:()=>r});var i=n(87462),a=(n(67294),n(3905));const o={toc:[{value:"Obtaining an API key",id:"obtaining-an-api-key",level:2}]};function r(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"obtaining-an-api-key"},"Obtaining an API key"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://console.snowplowanalytics.com/credentials"},"Create a new api key for your organization in console"),"."),(0,a.kt)("p",null,"Use the generated api key to obtain an authorization token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n  --header 'X-API-Key: $API_KEY' \\\n  https://console.snowplowanalytics.com/api/msc/v1/organizations/$ORGANIZATION_ID/credentials/v2/token\n")),(0,a.kt)("p",null,"This command will return an access token wrapped in json."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"accessToken":"<access token value>"}\n')),(0,a.kt)("p",null,"You may then use this access token value to supply authorization headers for subsequent api requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n  --header 'authorization: Bearer $ACCESS_TOKEN_VALUE'\n")))}r.isMDXComponent=!0},64700:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/orgID-abcb03ac4037410de585e7079489d91c.png"}}]);