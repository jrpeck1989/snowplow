"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[78381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(v,s(s({ref:t},p),{},{components:n})):a.createElement(v,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Snowplow event extractor",date:"2021-03-26",sidebar_position:1040},s=void 0,i={unversionedId:"modeling-your-data/analytics-sdk/analytics-sdk-net/snowplow-event-extractor/index",id:"modeling-your-data/analytics-sdk/analytics-sdk-net/snowplow-event-extractor/index",title:"Snowplow event extractor",description:"Overview",source:"@site/docs/modeling-your-data/analytics-sdk/analytics-sdk-net/snowplow-event-extractor/index.md",sourceDirName:"modeling-your-data/analytics-sdk/analytics-sdk-net/snowplow-event-extractor",slug:"/modeling-your-data/analytics-sdk/analytics-sdk-net/snowplow-event-extractor/",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-net/snowplow-event-extractor/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/modeling-your-data/analytics-sdk/analytics-sdk-net/snowplow-event-extractor/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:1040,frontMatter:{title:"Snowplow event extractor",date:"2021-03-26",sidebar_position:1040},sidebar:"defaultSidebar",previous:{title:"Analytics SDK - .NET",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-net/"},next:{title:"Forwarding events to Destinations",permalink:"/docs/forwarding-events-to-destinations/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Event Extractor",id:"event-extractor",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-in/solutions/data-lake/"},"Azure Data Lake")," is a secure and scalable data storage and analytics service. ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-in/services/data-lake-analytics/"},"Azure Data Lake Analytics")," includes ",(0,r.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/visualstudio/2015/09/28/introducing-u-sql-a-language-that-makes-big-data-processing-easy/"},"U-SQL"),", a big-data query language for writing queries that analyze data."),(0,r.kt)("h2",{id:"event-extractor"},"Event Extractor"),(0,r.kt)("p",null,"Snowplow Event Extractor is an ADLA custom extractor that allows you to parse ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/understanding-your-pipeline/canonical-event/"},"Snowplow enriched events")),". Snowplow\u2019s enrichment process outputs enriched events in a TSV format consisting of 131 fields."),(0,r.kt)("p",null,"EventExtractor implements IExtractor interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[SqlUserDefinedExtractor]\npublic class EventExtractor : IExtractor\n{\n    private static readonly string ROW_DELIMITER = '\\t';\n\n    public override IEnumerable<IRow> Extract(IUnstructuredReader input, IUpdatableRow output)\n    {\n       //split the input based on ROW_DELIMITER\n       //set the output data on the output object\n       //EventExtractor only outputs columns and values that are defined with the output. \n    }\n}\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Following is base U-SQL script that uses a Event Extractor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'DECLARE @input_file string = @"\\snowplow\\event.tsv";\n\n@rs0 =\n    EXTRACT\n        app_id string,\n        platform string\n    FROM @input_file\n    USING new Snowplow.EventExtractor();\n')),(0,r.kt)("p",null,"The most complex piece of processing is the handling of the self-describing JSONs found in the enriched event's unstruct","_","event, contexts and derived","_","contexts fields.",(0,r.kt)("br",{parentName:"p"}),"\n","Consider contexts found in the tsv:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    'schema': 'iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0',\n    'data': [{\n        'schema': 'iglu:org.schema/WebPage/jsonschema/1-0-0',\n        'data': {\n            'genre': 'blog',\n            'inLanguage': 'en-US',\n            'datePublished': '2014-11-06T00:00:00Z',\n            'author': 'Devesh Shetty',\n            'breadcrumb': ['blog', 'releases']\n        }\n    }, {\n        'schema': 'iglu:org.w3/PerformanceTiming/jsonschema/1-0-0',\n        'data': {\n            'navigationStart': 1415358089861,\n            'unloadEventStart': 1415358090270,\n            'unloadEventEnd': 1415358090287,\n            'redirectStart': 0,\n            'redirectEnd': 0\n        }\n    }]\n}\n")),(0,r.kt)("p",null,"One of the ways to fetch data from context would be to use user-defined function(UDF):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'DECLARE @input_file string = @"\\snowplow\\event.tsv";\n\n//extract context from tsv\n@rs0 =\n    EXTRACT\n        context string\n    FROM @input_file\n    USING new Snowplow.EventExtractor();\n\n/*\ncontext has nested data array\n*/\n@parseData =\n    SELECT Microsoft.Analytics.Samples.Formats.Json.JsonFunctions.JsonTuple(context, "data[*]").Values AS data_arr,\n    FROM @rs0;\n\n/*\nThe nested data array inside context consists of an array from which we parse the inner data field\n*/\n@parseGenre =\n    SELECT Microsoft.Analytics.Samples.Formats.Json.JsonFunctions.JsonTuple(data_arr, "$.data.genre").Values AS genre,\n    FROM @parseData;\n')),(0,r.kt)("p",null,"The above process can get quite complex.",(0,r.kt)("br",{parentName:"p"}),"\n","So to abstract away the complexity, Snowplow Event Extractor follows a simple mapping:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'DECLARE @input_file string = @"\\snowplow\\event.tsv";\n\n//extract genre from context directly\n@rsGenre =\n    EXTRACT\n        context.data.genre\n    FROM @input_file\n    USING new Snowplow.EventExtractor();\n')))}d.isMDXComponent=!0}}]);