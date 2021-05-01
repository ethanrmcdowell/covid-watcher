(this["webpackJsonpcovid-watcher"]=this["webpackJsonpcovid-watcher"]||[]).push([[0],{135:function(e,t,a){},137:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var c=a(18),n=a.n(c),s=a(36),r=a(0),i=a(16),d=a.n(i),o=a(38),l=a(40),j=a(117),h=a(118),u=(a(135),a(1)),b=function(){return Object(u.jsxs)(l.a,{children:[Object(u.jsx)(l.a.Brand,{children:"COVID-19 Statistics"}),Object(u.jsx)(l.a.Toggle,{}),Object(u.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(u.jsx)(l.a.Text,{children:Object(u.jsx)("a",{href:"https://github.com/ethanrmcdowell/covid-watcher",children:Object(u.jsx)(j.a,{icon:h.a,size:"2x"})})})})]})},O=(a(137),function(){var e,t=(new Date).getDate(),a=(new Date).getMonth(),c=(new Date).getFullYear();switch(a){case 0:e="January";break;case 1:e="February";break;case 2:e="March";break;case 3:e="April";break;case 4:e="May";break;case 5:e="June";break;case 6:case 7:case 8:case 9:case 10:default:e="July"}return Object(u.jsx)("div",{className:"dateContainer",children:Object(u.jsxs)("h1",{className:"dateTitle",children:[e," ",t,", ",c]})})}),v=a(46),x=a(45),f=(a(243),function(e){console.log(x.b.font.family),x.b.font.family="Times New Roman";var t=Object(r.useState)({}),a=Object(v.a)(t,2),c=a[0],n=a[1],s=e.deathData;console.log(s);for(var i=s.timeline.deaths,d=Object.values(i),o=Object.keys(i),l=[],j=1;j<16;j++){var h=d[j]-d[j-1];l.push(h)}return Object(r.useEffect)((function(){n({labels:o,datasets:[{label:"Deaths",data:l,borderColor:"red",backgroundColor:"red",borderWidth:1.5}]})}),[]),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"chartContainer",children:Object(u.jsx)(x.a,{data:c,options:{responsive:!0,title:{text:"THICCNESS SCALE",display:!0},scales:{y:{grace:"0.5%",beginAtZero:!1}}}})})})}),p=(a(244),function(e){var t=e.covidData,a=e.deathData;return t&&a?Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"dataContainer",children:[Object(u.jsx)("h1",{className:"countryHeader",children:"United States:"}),Object(u.jsxs)("h2",{children:["Total Deaths:"," ",t.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Today Deaths:"," ",t.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Total Active Cases:"," ",t.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})]}),Object(u.jsx)("div",{className:"dataContainer",children:Object(u.jsx)(f,{deathData:a})})]})]}):Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Loading..."})})}),y=a(23),g=(a(245),function(e){return Object(u.jsxs)("div",{className:"dataContainer",children:[Object(u.jsxs)("h2",{className:"stateName",children:[e.stateName," "]}),Object(u.jsxs)("h2",{children:["Deaths Today:"," ",e.deathsToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Total Deaths:"," ",e.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Active Cases:"," ",e.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsxs)("h2",{children:["Total Cases:"," ",e.totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(u.jsx)("p",{className:"smallMessage",children:" *updated every 10 minutes"})]})}),m=(a(246),function(e){console.log(e);var t=e.stateData,a=Object(r.useState)(!1),c=Object(v.a)(a,2),n=c[0],s=c[1],i=Object(r.useState)(),d=Object(v.a)(i,2),o=d[0],l=d[1],j=[];t.forEach((function(e){j.push(e.state)})),j=j.sort();var h=function(e){for(var a=0;a<t.length;a++)if(t[a].state===e)return l(t[a]),console.log(t[a]),t[a]};return t&&e?n?n?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"dropdownContainer",children:Object(u.jsxs)(y.a,{children:[Object(u.jsx)(y.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:"Select a State"}),Object(u.jsx)(y.a.Menu,{children:j.map((function(e){return Object(u.jsx)(y.a.Item,{onClick:function(){s(!0),h(e)},children:e})}))})]})}),Object(u.jsx)(g,{stateName:o.state,deathsToday:o.todayDeaths,deaths:o.deaths,active:o.active,totalCases:o.cases})]}):void 0:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"dropdownContainer",children:Object(u.jsxs)(y.a,{children:[Object(u.jsx)(y.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:"Select State / Territory"}),Object(u.jsx)(y.a.Menu,{children:j.map((function(e){return Object(u.jsx)(y.a.Item,{onClick:function(){s(!0),h(e)},children:e})}))})]})})}):Object(u.jsx)("h2",{children:"Loading..."})}),D=a(122),w=a(69);a(247);var S=function(){var e=Object(o.b)((function(e){return e.data[0]})),t=Object(o.b)((function(e){return e.data[1]})),a=Object(o.b)((function(e){return e.data[2]}));return e&&t&&a?Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(D.a,{defaultActiveKey:"dailyNational",children:[Object(u.jsx)(w.a,{eventKey:"dailyNational",title:"National",children:Object(u.jsx)(p,{covidData:e,deathData:t})}),Object(u.jsx)(w.a,{eventKey:"dailyState",title:"State",children:Object(u.jsx)(m,{stateData:a})}),Object(u.jsx)(w.a,{eventKey:"dailyVaccine",title:"Vaccine",children:Object(u.jsx)("h2",{children:"Daily vaccination numbers."})})]})]}):Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Loading..."})})},N=(a(250),a(37)),T=a(121),C=a(8),k="ADD_FETCHED_DATA",A="ADD_HISTORICAL_DATA",E="ADD_STATE_DATA";var _=Object(N.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:case A:case E:return[].concat(Object(C.a)(e),[t.payload]);default:return e}}}),B=a(68),I=a.n(B),M=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://disease.sh/v3/covid-19/countries/usa?yesterday=false&twoDaysAgo=false&strict=true&allowNull=false").then((function(e){t({type:k,payload:e.data})})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://disease.sh/v3/covid-19/historical/usa?lastdays=16");case 3:a=e.sent,t({type:A,payload:a.data}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},J=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://disease.sh/v3/covid-19/states");case 3:a=e.sent,t({type:E,payload:a.data}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.c,K=Object(N.d)(_,H(Object(N.a)(T.a)));function V(){return(V=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K.dispatch(M()),K.dispatch(L()),K.dispatch(J());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return V.apply(this,arguments)})().then(d.a.render(Object(u.jsx)(o.a,{store:K,children:Object(u.jsx)(S,{})}),document.getElementById("root")))}},[[268,1,2]]]);
//# sourceMappingURL=main.7d58b2a8.chunk.js.map