(this["webpackJsonpcovid-watcher"]=this["webpackJsonpcovid-watcher"]||[]).push([[0],{135:function(e,t,a){},137:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var c=a(15),n=a.n(c),s=a(33),r=a(0),i=a(17),o=a.n(i),d=a(34),l=a(42),j=a(117),u=a(118),h=(a(135),a(1)),b=function(){return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(l.a.Brand,{children:"COVID-19 Statistics"}),Object(h.jsx)(l.a.Toggle,{}),Object(h.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(h.jsx)(l.a.Text,{children:Object(h.jsx)("a",{href:"https://github.com/ethanrmcdowell/covid-watcher",children:Object(h.jsx)(j.a,{icon:u.a,size:"2x"})})})})]})},O=(a(137),function(){var e,t=(new Date).getDate(),a=(new Date).getMonth(),c=(new Date).getFullYear();switch(a){case 0:e="January";break;case 1:e="February";break;case 2:e="March";break;case 3:e="April";break;case 4:e="May";break;case 5:e="June";break;case 6:case 7:case 8:case 9:case 10:default:e="July"}return Object(h.jsx)("div",{className:"dateContainer",children:Object(h.jsxs)("h1",{className:"dateTitle",children:[e," ",t,", ",c]})})}),v=a(32),p=a(23),f=(a(243),function(e){console.log(p.c.font.family),p.c.font.family="Times New Roman";var t=Object(r.useState)({}),a=Object(v.a)(t,2),c=a[0],n=a[1],s=e.deathData;console.log(s);for(var i=s.timeline.deaths,o=Object.values(i),d=Object.keys(i),l=[],j=1;j<16;j++){var u=o[j]-o[j-1];l.push(u)}return Object(r.useEffect)((function(){n({labels:d,datasets:[{label:"Deaths",data:l,borderColor:"red",backgroundColor:"red",borderWidth:1.5}]})}),[]),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"chartContainer",children:Object(h.jsx)(p.b,{data:c,options:{responsive:!0,title:{text:"THICCNESS SCALE",display:!0},scales:{y:{grace:"0.5%",beginAtZero:!1}}}})})})}),x=(a(244),function(e){var t=e.covidData,a=e.deathData;return t&&a?Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"dataContainer",children:[Object(h.jsx)("h1",{className:"countryHeader",children:"United States:"}),Object(h.jsxs)("h2",{children:["Total Deaths:"," ",t.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(h.jsxs)("h2",{children:["Today Deaths:"," ",t.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(h.jsxs)("h2",{children:["Total Active Cases:"," ",t.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})]}),Object(h.jsx)("div",{className:"dataContainer",children:Object(h.jsx)(f,{deathData:a})})]})]}):Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:"Loading..."})})}),g=a(24),y=(a(245),function(e){return Object(h.jsxs)("div",{className:"dataContainer",children:[Object(h.jsxs)("h2",{className:"stateName",children:[e.stateName," "]}),Object(h.jsxs)("h2",{children:["Deaths Today:"," ",e.deathsToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(h.jsxs)("h2",{children:["Total Deaths:"," ",e.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(h.jsxs)("h2",{children:["Active Cases:"," ",e.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(h.jsxs)("h2",{children:["Total Cases:"," ",e.totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(h.jsx)("p",{className:"smallMessage",children:" *updated every 10 minutes"})]})}),m=(a(246),function(e){console.log(e);var t=e.stateData,a=Object(r.useState)(!1),c=Object(v.a)(a,2),n=c[0],s=c[1],i=Object(r.useState)(),o=Object(v.a)(i,2),d=o[0],l=o[1],j=[];t.forEach((function(e){j.push(e.state)})),j=j.sort();var u=function(e){for(var a=0;a<t.length;a++)if(t[a].state===e)return l(t[a]),console.log(t[a]),t[a]};return t&&e?n?n?Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"dropdownContainer",children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(g.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:"Select a State"}),Object(h.jsx)(g.a.Menu,{children:j.map((function(e){return Object(h.jsx)(g.a.Item,{onClick:function(){s(!0),u(e)},children:e})}))})]})}),Object(h.jsx)(y,{stateName:d.state,deathsToday:d.todayDeaths,deaths:d.deaths,active:d.active,totalCases:d.cases})]}):void 0:Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"dropdownContainer",children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(g.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:"Select State / Territory"}),Object(h.jsx)(g.a.Menu,{children:j.map((function(e){return Object(h.jsx)(g.a.Item,{onClick:function(){s(!0),u(e)},children:e})}))})]})})}):Object(h.jsx)("h2",{children:"Loading..."})}),D=(a(247),function(e){console.log(e.vaccineData.timeline),p.c.font.family="Times New Roman";var t=Object(r.useState)({}),a=Object(v.a)(t,2),c=a[0],n=a[1],s=e.vaccineData.timeline,i=s[s.length-1].total,o=[],d=[];console.log(i);for(var l=0;l<e.vaccineData.timeline.length;l++)o.push(s[l].date),d.push(s[l].daily);return Object(r.useEffect)((function(){n({labels:o,datasets:[{label:"Vaccines Administered",data:d,borderColor:"green",backgroundColor:"green",borderWidth:1.5}]})}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"titleContainer",children:Object(h.jsxs)("h2",{className:"title",children:["Total vaccines administered in the United States:"," ",i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})}),Object(h.jsx)("div",{className:"chartContainer",children:Object(h.jsx)(p.a,{data:c,options:{responsive:!0,title:{text:"THICCNESS SCALE",display:!0},scales:{y:{grace:"30%",beginAtZero:!1}}}})})]})}),w=a(122),C=a(69);a(248);var N=function(){var e=Object(d.b)((function(e){return e.data[0]})),t=Object(d.b)((function(e){return e.data[1]})),a=Object(d.b)((function(e){return e.data[2]})),c=Object(d.b)((function(e){return e.data[3]}));return console.log(c),e&&t&&a&&c?Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(w.a,{defaultActiveKey:"dailyNational",children:[Object(h.jsx)(C.a,{eventKey:"dailyNational",title:"National",children:Object(h.jsx)(x,{covidData:e,deathData:t})}),Object(h.jsx)(C.a,{eventKey:"dailyState",title:"State",children:Object(h.jsx)(m,{stateData:a})}),Object(h.jsx)(C.a,{eventKey:"dailyVaccine",title:"Vaccine",children:Object(h.jsx)(D,{vaccineData:c})})]})]}):Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:"Loading..."})})},S=(a(251),a(40)),T=a(121),A=a(7),k="ADD_FETCHED_DATA",E="ADD_HISTORICAL_DATA",_="ADD_STATE_DATA",B="ADD_VACCINE_DATA";var I=Object(S.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:case E:case _:case B:return[].concat(Object(A.a)(e),[t.payload]);default:return e}}}),L=a(48),M=a.n(L),V=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://disease.sh/v3/covid-19/countries/usa?yesterday=false&twoDaysAgo=false&strict=true&allowNull=false").then((function(e){t({type:k,payload:e.data})})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("https://disease.sh/v3/covid-19/historical/usa?lastdays=16");case 3:a=e.sent,t({type:E,payload:a.data}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},J=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("https://disease.sh/v3/covid-19/states");case 3:a=e.sent,t({type:_,payload:a.data}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},K=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries/usa?lastdays=20&fullData=true");case 3:a=e.sent,t({type:B,payload:a.data}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.c,F=Object(S.d)(I,R(Object(S.a)(T.a)));function U(){return(U=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F.dispatch(V()),F.dispatch(H()),F.dispatch(J()),F.dispatch(K());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return U.apply(this,arguments)})().then(o.a.render(Object(h.jsx)(d.a,{store:F,children:Object(h.jsx)(N,{})}),document.getElementById("root")))}},[[269,1,2]]]);
//# sourceMappingURL=main.9c88dec6.chunk.js.map