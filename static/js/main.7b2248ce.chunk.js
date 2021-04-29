(this["webpackJsonpcovid-watcher"]=this["webpackJsonpcovid-watcher"]||[]).push([[0],{121:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},233:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var c=a(17),n=a.n(c),r=a(33),s=a(0),i=a(15),d=a.n(i),o=a(35),l=a(74),h=a(42),u=a(1),j=function(){return Object(u.jsxs)(l.a,{bg:"light",variant:"light",children:[Object(u.jsx)(l.a.Brand,{children:"COVID.WATCHER"}),Object(u.jsxs)(h.a,{className:"mr-auto",children:[Object(u.jsx)(h.a.Link,{href:"/covid-watcher",children:"Home"}),Object(u.jsx)(h.a.Link,{href:"/covid-watcher/state",children:"States"}),Object(u.jsx)(h.a.Link,{href:"/covid-watcher/about",children:"About"})]})]})},b=(a(121),function(){var e,t=(new Date).getDate(),a=(new Date).getMonth(),c=(new Date).getFullYear();switch(a){case 0:e="January";break;case 1:e="February";break;case 2:e="March";break;case 3:e="April";break;case 4:e="May";break;case 5:e="June";break;case 6:case 7:case 8:case 9:case 10:default:e="July"}return Object(u.jsx)("div",{className:"dateContainer",children:Object(u.jsxs)("h1",{className:"dateTitle",children:[e," ",t,", ",c]})})}),O=a(41),v=a(107),p=(a(228),function(e){var t=Object(s.useState)({}),a=Object(O.a)(t,2),c=a[0],n=a[1],r=e.deathData;console.log(r);for(var i=r.timeline.deaths,d=Object.values(i),o=Object.keys(i),l=[],h=1;h<16;h++){var j=d[h]-d[h-1];l.push(j)}return Object(s.useEffect)((function(){n({labels:o,datasets:[{label:"Deaths",data:l,borderColor:"red",backgroundColor:"red",borderWidth:1.5}]})}),[]),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"chartContainer",children:Object(u.jsx)(v.a,{data:c,options:{responsive:!0,title:{text:"THICCNESS SCALE",display:!0},scales:{y:{grace:"0.5%",beginAtZero:!1}}}})})})}),f=(a(229),function(e){var t=e.covidData,a=e.deathData;return t&&a?Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"dataContainer",children:[Object(u.jsx)("h1",{className:"countryHeader",children:"United States:"}),Object(u.jsxs)("h2",{children:["Total Deaths:"," ",t.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Today Deaths:"," ",t.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Total Active Cases:"," ",t.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})]}),Object(u.jsx)("div",{className:"dataContainer",children:Object(u.jsx)(p,{deathData:a})})]})]}):Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Loading..."})})}),x=a(21),g=(a(230),function(e){return Object(u.jsxs)("div",{className:"dataContainer",children:[Object(u.jsxs)("h2",{children:[e.stateName," "]}),Object(u.jsxs)("h2",{children:["Deaths Today:"," ",e.deathsToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Total Deaths:"," ",e.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Active Cases:"," ",e.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Total Cases:"," ",e.totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsx)("p",{className:"smallMessage",children:" *updated every 10 minutes"})]})}),y=(a(231),function(e){var t=e.stateData,a=Object(s.useState)(!1),c=Object(O.a)(a,2),n=c[0],r=c[1],i=Object(s.useState)(),d=Object(O.a)(i,2),o=d[0],l=d[1],h=[];t.forEach((function(e){h.push(e.state)})),h=h.sort();var j=function(e){for(var a=0;a<t.length;a++)if(t[a].state===e)return l(t[a]),console.log(t[a]),t[a]};return n?n?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"dropdownContainer",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:"Select a State"}),Object(u.jsx)(x.a.Menu,{children:h.map((function(e){return Object(u.jsx)(x.a.Item,{onClick:function(){r(!0),j(e)},children:e})}))})]})}),Object(u.jsx)(g,{stateName:o.state,deathsToday:o.todayDeaths,deaths:o.deaths,active:o.active,totalCases:o.cases})]}):void 0:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"dropdownContainer",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:"Select State / Territory"}),Object(u.jsx)(x.a.Menu,{children:h.map((function(e){return Object(u.jsx)(x.a.Item,{onClick:function(){r(!0),j(e)},children:e})}))})]})})})});a(233);var D=function(){var e=Object(o.b)((function(e){return e.data[0]})),t=Object(o.b)((function(e){return e.data[1]})),a=Object(o.b)((function(e){return e.data[2]}));return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{}),Object(u.jsx)(f,{covidData:e,deathData:t}),Object(u.jsx)(y,{stateData:a})]})},w=(a(234),a(34)),m=a(106),C=a(7),S="ADD_FETCHED_DATA",T="ADD_HISTORICAL_DATA",k="ADD_STATE_DATA";var A=Object(w.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case T:case k:return[].concat(Object(C.a)(e),[t.payload]);default:return e}}}),N=a(57),E=a.n(N),_=function(){return function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://disease.sh/v3/covid-19/countries/usa?yesterday=false&twoDaysAgo=false&strict=true&allowNull=false").then((function(e){t({type:S,payload:e.data})})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(){return function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://disease.sh/v3/covid-19/historical/usa?lastdays=16");case 3:a=e.sent,t({type:T,payload:a.data}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://disease.sh/v3/covid-19/states");case 3:a=e.sent,t({type:k,payload:a.data}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.c,M=Object(w.d)(A,L(Object(w.a)(m.a)));function H(){return(H=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.dispatch(_()),M.dispatch(B()),M.dispatch(I());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return H.apply(this,arguments)})().then(d.a.render(Object(u.jsx)(o.a,{store:M,children:Object(u.jsx)(D,{})}),document.getElementById("root")))}},[[253,1,2]]]);
//# sourceMappingURL=main.7b2248ce.chunk.js.map