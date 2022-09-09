"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[45583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(n),c=o,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={title:"sql-runner: Mobile data model",date:"2020-10-30",sidebar_position:10},l=void 0,r={unversionedId:"modeling-your-data/the-snowplow-mobile-data-model/sql-runner-mobile-data-model/index",id:"modeling-your-data/the-snowplow-mobile-data-model/sql-runner-mobile-data-model/index",title:"sql-runner: Mobile data model",description:"Overview",source:"@site/docs/modeling-your-data/the-snowplow-mobile-data-model/sql-runner-mobile-data-model/index.md",sourceDirName:"modeling-your-data/the-snowplow-mobile-data-model/sql-runner-mobile-data-model",slug:"/modeling-your-data/the-snowplow-mobile-data-model/sql-runner-mobile-data-model/",permalink:"/docs/modeling-your-data/the-snowplow-mobile-data-model/sql-runner-mobile-data-model/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/modeling-your-data/the-snowplow-mobile-data-model/sql-runner-mobile-data-model/index.md",tags:[],version:"current",lastUpdatedAt:1662725915,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:10,frontMatter:{title:"sql-runner: Mobile data model",date:"2020-10-30",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"The Snowplow mobile data model",permalink:"/docs/modeling-your-data/the-snowplow-mobile-data-model/"},next:{title:"dbt: Mobile data model",permalink:"/docs/modeling-your-data/the-snowplow-mobile-data-model/dbt-mobile-data-model/"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Supported Warehouses",id:"supported-warehouses",level:4},{value:"Requirements",id:"requirements",level:4},{value:"Quick start",id:"quick-start",level:2},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Playbook Configuration",id:"playbook-configuration",level:4},{value:"Setting Schemas",id:"setting-schemas",level:5},{value:"Base Module",id:"base-module",level:5},{value:"Optional Modules",id:"optional-modules",level:5},{value:"Running the model",id:"running-the-model",level:4},{value:"Authentication",id:"authentication",level:5},{value:"Execution",id:"execution",level:5},{value:"Authentication",id:"authentication-1",level:5},{value:"Execution",id:"execution-1",level:5},{value:"Backfilling",id:"backfilling",level:4},{value:"Testing",id:"testing",level:4},{value:"Advanced Configurations",id:"advanced-configurations",level:4},{value:"Technical architecture",id:"technical-architecture",level:2},{value:"The entire model",id:"the-entire-model",level:4},{value:"The individual modules",id:"the-individual-modules",level:4},{value:"Customizing the model",id:"customizing-the-model",level:2},{value:"Metadata",id:"metadata",level:2}],u={toc:d};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Snowplow mobile data model processes and aggregates data collected by the Snowplow ",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/"},"iOS")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/"},"Android")," mobile trackers into a set of derived tables - screen views, sessions and users - with each table generated by its respective module."),(0,o.kt)("p",null,"In addition to these 'standard' modules there are optional modules that can be enabled depending on your tracker implementation. Currently there is only one such optional module, Application Errors, which provides application crash reporting. These modules produce their own derived output table, as well as being aggregated and joined into 'standard' modules such as sessions for high level KPIs. As the tracker's functionality continues to expand, so will this library of optional modules."),(0,o.kt)("p",null,"Unlike the ",(0,o.kt)("a",{parentName:"p",href:"/docs/modeling-your-data/the-snowplow-web-data-model/"},"web model")," the level of aggregation is not linear, as shown in the diagram below. This allows the sessions module to consume events other than just screen views, such as app installs or crashes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Web vs Mobile",src:n(89882).Z,width:"5962",height:"2683"})),(0,o.kt)("p",null,"The model runs incrementally, only processing new events (and events that have previously been modeled but are part of screen views, sessions or users for which/whom there is new information) with every run. The incremental logic is separate from the logic that calculates the tables so as to make customization of the model easier. More information on the model structure and customization options can be found below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Snowplow mobile data model v1.0.0 can be found in the\xa0",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/snowplow/data-models/tree/master"},"snowplow/data-models GitHub repository"),".")),(0,o.kt)("h4",{id:"supported-warehouses"},"Supported Warehouses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Redshift"),(0,o.kt)("li",{parentName:"ul"},"BigQuery"),(0,o.kt)("li",{parentName:"ul"},"Snowflake")),(0,o.kt)("h4",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Snowplow ",(0,o.kt)("a",{parentName:"li",href:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/"},"Android")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/"},"iOS")," mobile tracker version 1.1.0 or later implemented."),(0,o.kt)("li",{parentName:"ul"},"Mobile session context enabled."),(0,o.kt)("li",{parentName:"ul"},"Screen view events enabled.")),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/sql-runner"},"SQL-runner"),"\xa0is installed."),(0,o.kt)("li",{parentName:"ul"},"Snowplow ",(0,o.kt)("a",{parentName:"li",href:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/"},"Android")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/"},"iOS")," mobile tracker implemented with mobile events dataset present in a database.")),(0,o.kt)("h4",{id:"playbook-configuration"},"Playbook Configuration"),(0,o.kt)("h5",{id:"setting-schemas"},"Setting Schemas"),(0,o.kt)("p",null,"For all playbooks within ",(0,o.kt)("inlineCode",{parentName:"p"},"mobile/v1/{warehouse}/sql-runner/playbooks/standard"),", configure the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"input_schema")," - Set to the schema containing your Snowplow events data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scratch_schema")," - Set to the scratch/staging schema to contain the intermediate tables generated by this model. Create if required."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"output_schema")," - Set to a schema to contain the model's final output tables (",(0,o.kt)("inlineCode",{parentName:"li"},"mobile_screen_views"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"mobile_sessions")," etc.)")),(0,o.kt)("h5",{id:"base-module"},"Base Module"),(0,o.kt)("p",null,"Within the base module's main playbook, ",(0,o.kt)("inlineCode",{parentName:"p"},"01-base-main.yml.tmpl"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"start_date")," as desired."),(0,o.kt)("li",{parentName:"ol"},"Enable the following contexts as desired by setting to ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Mobile - Device type, OS etc."),(0,o.kt)("li",{parentName:"ul"},"Geolocation - Device latitude, longitude, bearing etc."),(0,o.kt)("li",{parentName:"ul"},"Application - App version and build."),(0,o.kt)("li",{parentName:"ul"},"Screen - Screen details associated with a mobile event."))),(0,o.kt)("li",{parentName:"ol"},"Adjust filtering of events if required:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"platform_filters"),": Default - ",(0,o.kt)("inlineCode",{parentName:"li"},"platform = 'mob'"),". Override if required."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app_id"),": Default - No filter on ",(0,o.kt)("inlineCode",{parentName:"li"},"app_id"),". Add if required.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# 01-base-main.yml.tmpl\n:variables:\n   ...\n   :start_date:         2020-01-01 #Set as required\n   ...\n   #Enable contexts if desired\n   :mobile_context: false \n   :geolocation_context: false\n   :application_context: false\n   :screen_context: false\n   :platform_filters: [] #Override default if required e.g. ['mob','tv']\n   :app_id_filters: [] #Add app_id filter if required e.g ['my_app']\n")),(0,o.kt)("p",null,"The remaining variables are set to the recommended defaults. For more information please see the base module's README within the playbooks directory."),(0,o.kt)("h5",{id:"optional-modules"},"Optional Modules"),(0,o.kt)("p",null,"Optional modules are disabled by default. Please enable where appropriate by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled: true")," in the main playbook of each module."),(0,o.kt)("h4",{id:"running-the-model"},"Running the model"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#tablocally"},"Locally"),(0,o.kt)("a",{parentName:"p",href:"#tabin-orchestration"},"In orchestration")),(0,o.kt)("h5",{id:"authentication"},"Authentication"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set database password as an environmental variable.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Redshift: Set environmental variable, ",(0,o.kt)("inlineCode",{parentName:"li"},"REDSHIFT_PASSWORD"),", to your database password."),(0,o.kt)("li",{parentName:"ul"},"BigQuery: Set environmental variable, ",(0,o.kt)("inlineCode",{parentName:"li"},"GOOGLE_APPLICATION_CREDENTIALS"),", to the path of your GBQ json credential file"),(0,o.kt)("li",{parentName:"ul"},"Snowflake: Set environmental variable, ",(0,o.kt)("inlineCode",{parentName:"li"},"SNOWFLAKE_PASSWORD"),", to your database password."))),(0,o.kt)("li",{parentName:"ol"},"Fill in the relevant template in ",(0,o.kt)("inlineCode",{parentName:"li"},".scripts/templates")," with your database details.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Redshift & Snowflake: Leave ",(0,o.kt)("inlineCode",{parentName:"li"},"PASSWORD_PLACEHOLDER")," as is. This placeholder will be replaced at run time with the credentials from env var ",(0,o.kt)("inlineCode",{parentName:"li"},"{WAREHOUSE}_PASSWORD"),", set in step 1.")))),(0,o.kt)("h5",{id:"execution"},"Execution"),(0,o.kt)("p",null,"For a full run of the model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bash .scripts/run_config.sh -b ~/pathTo/sql-runner -c mobile/v1/{warehouse}/sql-runner/configs/datamodeling.json -t .scripts/templates/{warehouse}.yml.tmpl;\n")),(0,o.kt)("p",null,"For more details please see the README within the ",(0,o.kt)("inlineCode",{parentName:"p"},".scripts")," directory."),(0,o.kt)("h5",{id:"authentication-1"},"Authentication"),(0,o.kt)("p",null,"For each playbook within ",(0,o.kt)("inlineCode",{parentName:"p"},"mobile/v1/{warehouse}/sql-runner/playbooks/standard")," fill in your database connection details. For more details please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/modeling-your-data/setup-and-run-sql-runner/#target-configuration"},"SQL Runner Docs"),"."),(0,o.kt)("h5",{id:"execution-1"},"Execution"),(0,o.kt)("p",null,"There are many tools available to schedule and run SQL jobs such as the mobile model. While these tools differ in operation the basic principles to running the mobile model should be similar."),(0,o.kt)("p",null,"A series of tasks will need to be set to execute SQL Runner against each individual playbook of the model in turn. For example, to run the main playbook of the base module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bash {sql-runner-path} -playbook sql-runner/playbooks/standard/01-base/01-base-main.yml.tmpl -sqlroot sql-runner/sql\n")),(0,o.kt)("p",null,"The correct order of playbook execution and the dependancies between them can be determined from the datamodeling config file within the repo."),(0,o.kt)("h4",{id:"backfilling"},"Backfilling"),(0,o.kt)("p",null,"By default when first running the model, events will be processed in 7 day increments beginning at the ",(0,o.kt)("inlineCode",{parentName:"p"},"start_date")," set in the base module's playbook, ",(0,o.kt)("inlineCode",{parentName:"p"},"01-base-main.yml.tmpl"),", as described above. To backfill data faster, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"update_cadence_days")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"01-base-main.yml.tmpl")," to required number of days. Once backfilled, it is recommended to set ",(0,o.kt)("inlineCode",{parentName:"p"},"update_cadence_days")," back to 7 days for performance."),(0,o.kt)("h4",{id:"testing"},"Testing"),(0,o.kt)("p",null,"The mobile model comes with a suite of data validation checks to ensure the model is running as intended. These checks are performed by ",(0,o.kt)("a",{parentName:"p",href:"https://greatexpectations.io/"},"Great Expectations"),". The tests were used during the model's development and are not required to run the mobile model. If desired, they can however be used during the deployment of the mobile model on your own Snowplow dataset to validate the output. For further details please refer to the README in the ",(0,o.kt)("inlineCode",{parentName:"p"},".scripts")," directory."),(0,o.kt)("h4",{id:"advanced-configurations"},"Advanced Configurations"),(0,o.kt)("p",null,"This quick start guide covers the implementation process for the majority of use cases. Further configurations can be made such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Running specific modules more frequently than others."),(0,o.kt)("li",{parentName:"ul"},"Running specific modules only."),(0,o.kt)("li",{parentName:"ul"},"Adjusting table scan limits.")),(0,o.kt)("p",null,"For further details please refer to the READMEs within each module's playbook directory."),(0,o.kt)("h2",{id:"technical-architecture"},"Technical architecture"),(0,o.kt)("h4",{id:"the-entire-model"},"The entire model"),(0,o.kt)("p",null,"This model consists of a series of modules, each is idempotent and can be run on independent schedules, and each produces a table which serves as the input to the next module."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(10655).Z,width:"3357",height:"4765"})),(0,o.kt)("h4",{id:"the-individual-modules"},"The individual modules"),(0,o.kt)("p",null,"The \u2018standard\u2019 modules can be thought of as source code for the core logic of the model, which Snowplow maintains. These modules carry out the incremental logic in such a way as custom modules can be written to plug into the model\u2019s structure, without needing to write a parallel incremental logic. We recommend that all customisations are written in this way, which allows us to safely maintain and roll out updates to the model, without impact on dependent custom SQL. For more information on this, jump to the section on customizing the model below."),(0,o.kt)("p",null,"Each module produces a table which acts as the input to the subsequent module (the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"_staged"),"\xa0tables), and updates a production table \u2013 with the exception of the base module, which takes atomic data as its input, and does not update a production table."),(0,o.kt)("p",null,"Each module comes with a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"99-{module}-complete playbook"),", which marks that module complete by updating any relevant manifests, and truncating the input, and cleaning up temporary tables. The complete steps may be run at the end of each module, or at the end of the run."),(0,o.kt)("p",null,"More detail on each module can be found in the relevant READMEs in the\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/data-models/tree/master"},"GitHub repository"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(42750).Z,width:"4830",height:"3312"})),(0,o.kt)("p",null,"Architecture of an individual mobile module"),(0,o.kt)("h2",{id:"customizing-the-model"},"Customizing the model"),(0,o.kt)("p",null,"Custom modules can fit into the incremental structure by consuming the same inputs, and running before the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"99-{module}-complete"),"\xa0playbook runs. Custom modules may also consume and intermediary tables of the standard module, which will not be dropped until the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"99-{module}-complete"),"\xa0playbook runs."),(0,o.kt)("p",null,"Any custom SQL that depends on a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"_staged"),"\xa0table as its input should run before the complete step of the module which handles that same input. For example, custom logic which takes mobile","_","events","_","staged as an input should run before the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"99-sessions-complete"),"\xa0playbook which truncates mobile","_","events","_","staged."),(0,o.kt)("p",null,"An example custom module has been included in ",(0,o.kt)("inlineCode",{parentName:"p"},"mobile/v1/redshift/sql-runner/sql/custom"),". In this module we:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read screen views from ",(0,o.kt)("inlineCode",{parentName:"li"},"scratch.mobile_screen_views_staged"),"."),(0,o.kt)("li",{parentName:"ol"},"Aggregate screen views to one row per ",(0,o.kt)("inlineCode",{parentName:"li"},"session_id"),"."),(0,o.kt)("li",{parentName:"ol"},"Delete and insert into the output table ",(0,o.kt)("inlineCode",{parentName:"li"},"derived.session_goals"),". This table can then be joined onto ",(0,o.kt)("inlineCode",{parentName:"li"},"derived.mobile_sessions")," on ",(0,o.kt)("inlineCode",{parentName:"li"},"session_id"),".")),(0,o.kt)("p",null,"The playbooks should then be run in the following order:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"standard/01-base/01-base-main\nstandard/01-base/99-base-complete\nstandard/02-screen-views/01-screen-views-main\nstandard/02-screen-views/99-screen-views-complete\nstandard/03-optional-modules/01-app-errors/01-app-errors-main\nstandard/03-optional-modules/01-app-errors/99-app-errors-complete\nstandard/04-sessions/01-sessions-main\ncustom/04-session-goals/01-session-goals-main\ncustom/04-session-goals/01-session-goals-complete\nstandard/04-sessions/01-sessions-complete\n")),(0,o.kt)("p",null,"An example of this can be seen in the ",(0,o.kt)("inlineCode",{parentName:"p"},"datamodeling_custom_module.json")," file within the config directory."),(0,o.kt)("p",null,"Custom modules can also be created with their own independent manifesting logic, in which case they are more complex, but don\u2019t rely on the standard modules."),(0,o.kt)("p",null,"More information on customizing the Snowplow mobile data model can be found in the custom module ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/data-models/blob/master/mobile/v1/redshift/sql-runner/sql/custom/README.md"},"README"),"."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"Metadata is logged in the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"{{.output_schema}}.datamodel_metadata{{.entropy}}"),"\xa0table, per-module and per-run. A persistent ID is created, so that separate modules within the same run may be identified."))}m.isMDXComponent=!0},10655:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mobile_full_model_structure-ee33577d65c009462e5a236bf9a6e92f.jpg"},42750:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_model_module-1-630f2fc2a9282fd3089910576d1c4c0b.jpg"},89882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_vs_mobile-c178efd12abd487001ed45f836868293.jpg"}}]);