(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"/4ef":function(e,t,a){},"0v46":function(e,t,a){},N1om:function(e,t,a){var n=a("sgoq")((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=n},XFRJ:function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("aHCT"),a("y7hu"),a("m4Pe");var n=a("jsr+"),r=a("Wbzz"),o=a("q1tI"),l=a.n(o),i=a("u1fg");var c=function(e){var t,a=e.className,o=e.wrapperClassName,c=e.link,s=e.content,u=e.stack,m=e.bold,p=e.thickBorder,d=e.upperCase,g=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),h=l.a.createElement("div",{className:"arrow__container arrows--horizontal "+a},s.map((function(e,t){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===i.black?"white":i.black};return l.a.createElement("div",Object.assign({key:"arrow"+t,className:"arrow__wrapper"},g),l.a.createElement("div",{className:"arrow__rectangle "+(m?"bold":"")+" "+(p?"arrow__rectangle--thick-border":""),style:a},e.link?l.a.createElement(r.Link,{to:e.link},d?e.text.toUpperCase():e.text):d?e.text.toUpperCase():e.text),l.a.createElement("div",{className:"arrow__point "+(p?"arrow__point--thick-border":""),style:a}))})));return u||c?!u&&c?t=l.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},l.a.createElement(r.Link,{to:c,style:{display:"inline-block"}},h)):u&&(t=l.a.createElement("div",{className:"col-10 spacing--after "+o},l.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map((function(e){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===i.black?"white":i.black};return l.a.createElement(r.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+a},g),l.a.createElement(n.a,{flex:!0,className:"arrow__rectangle",style:t},l.a.createElement("p",{className:"arrow--stacked-title"},l.a.createElement("span",null,e.text))),l.a.createElement("div",{className:"arrow__point",style:t}))}))))):t=l.a.createElement("div",{className:"col-10 spacing--after"},h),t};c.defaultProps={className:"",wrapperClassName:""},t.a=c},Zosa:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise",9:"light-green",10:"green"}},gqR3:function(e,t){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on Javascript based modern web development by University of Helsinki and Houston Inc.."}},jyfX:function(e,t,a){var n=a("sZCt")("kebabCase",a("N1om"),a("Eszj"));n.placeholder=a("wuTn"),e.exports=n},kl3L:function(e,t,a){"use strict";a("q8oJ"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("gu/5"),a("eoYm"),a("l54/");var n=a("jsr+"),r=a("Wbzz"),o=a("q1tI"),l=a.n(o),i=a("ymbu"),c=a.n(i),s=a("c7NW"),u=a.n(s),m=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},p=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},d=function(e,t){return Object.keys(c.a[t]).includes(e.toString())},g=function(e,t,a){return p(e)in c.a[a][t]},h=function(e,t,a){return!e&&d(t+1,a)||e&&g(e,t,a)},b=function(e){return"en"===e||"zh"===e?"Part":"Osa"},f=function(e){return"en"===e?"Previous part":"zh"===e?"上一部分":"Edellinen osa"},k=function(e){return"en"===e?"Next part":"zh"===e?"下一部分":"Seuraava osa"},v=function(e){return"/"+("en"===e?"en/part":"zh"===e?"zh/part":"osa")},y=function(e){var t=e.part,a=e.letter,o=e.lang;return l.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!a&&d(t-1,o)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+v(o)+(t-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,b(o)," ",t-1),l.a.createElement("b",null,f(o)))),h(a,t,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):a?"a"!==a?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+v(o)+t+"/"+u()(c.a[o][t][m(a)]),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,b(o)," ",""+t+m(a)),l.a.createElement("b",null,f(o)))),h(a,t,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):d(t-1,o)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+v(o)+(t-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,b(o)," ",t-1),l.a.createElement("b",null,f(o)))),h(a,t,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):l.a.createElement(n.a,{className:"push-right-1"}):l.a.createElement(n.a,{className:"push-right-1"}),!a&&d(t+1,o)?l.a.createElement(r.Link,{to:""+v(o)+(t+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,b(o)," ",t+1),l.a.createElement("b",null,k(o)))):a?g(a,t,o)?l.a.createElement(r.Link,{to:""+v(o)+t+"/"+u()(c.a[o][t][p(a)]),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,b(o)," ",""+t+p(a)),l.a.createElement("b",null,k(o)))):d(t+1,o)?l.a.createElement(r.Link,{to:""+v(o)+(t+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,b(o)," ",t+1),l.a.createElement("b",null,k(o)))):l.a.createElement(n.a,{className:"push-left-1"}):l.a.createElement(n.a,{className:"push-left-1"}))};y.defaultProps={part:void 0,letter:void 0},t.a=y},"l54/":function(e,t,a){},m4Pe:function(e,t,a){},tkMx:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F})),a.d(t,"contentPageQuery",(function(){return O}));a("q8oJ"),a("8npG"),a("m210"),a("4DPX"),a("rzGZ"),a("pJf4"),a("YbXK"),a("cFtU"),a("xPXs");var n=a("q1tI"),r=a.n(n),o=a("XFRJ"),l=a("y2O/"),i=a.n(l),c=a("mt4B"),s=(a("/4ef"),a("jsr+")),u=function(e){var t=e.part,a=e.letter,n=e.lang,o="en"===n||"zh"===n?"part"+t:"osa"+t;return r.a.createElement(s.a,{flex:!0,className:"container spacing",centered:!0},r.a.createElement("a",{className:"edit-link",target:"__BLANK",href:"zh"===n?"https://github.com/RichardStark/fullstack-hy2020.github.io/edit/source/src/content/"+t+"/"+n+"/"+o+a+".md":"https://github.com/fullstack-hy2020/fullstack-hy2020.github.io/edit/source/src/content/"+t+"/"+n+"/"+o+a+".md"},r.a.createElement("span",null,"en"===n?"Propose changes to material":"zh"===n?"对讲课材料提出建议":"Ehdota muutosta materiaalin sisältöön")))},m=a("CN8t"),p=a("Bl7J"),d=a("76ZC"),g=a.n(d),h=a("kl3L"),b=a("vrFN"),f=(a("0v46"),a("XSxc")),k=a("Wbzz"),v=a("jyfX"),y=a.n(v),E=a("ymbu"),N=a.n(E),w=a("c7NW"),C=a.n(w);var x=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).componentDidMount=function(){var e=Array.from(document.querySelectorAll("h3")).map((function(e){return e.id=y()(e.innerText),e.classList.add("offset"),{text:e.innerText,id:e.id,level:e.nodeName}}));a.setState({headings:e}),window.addEventListener("scroll",a.scrollHandler)},a.scrollHandler=function(){a.scrollTimer&&clearTimeout(a.scrollTimer),a.scrollTimer=setTimeout((function(){var e=window.scrollY,t=a.state.headings[0],n=a.state.headings,r=Array.isArray(n),o=0;for(n=r?n:n[Symbol.iterator]();;){var l;if(r){if(o>=n.length)break;l=n[o++]}else{if((o=n.next()).done)break;l=o.value}var i=l,c=document.getElementById(i.id);if(c&&c.offsetTop>=e)break;t=i}a.state.selectedItem!==t.id&&a.setState({selectedItem:t.id})}),50)},a.loopThroughPartsNode=function(e){var t=a.state.headings,n=a.props,o=n.part,l=n.letter,i=n.currentPath,c=n.currentPartTitle,s=n.colorCode,u=n.lang,m=[];for(var p in e)c!==e[p]?m.push(r.a.createElement(k.Link,{key:p,className:"left-navigation-link",style:{borderColor:s},to:"/"+("en"===u?"en/part":"zh"===u?"zh/part":"osa")+o+"/"+C()(e[p])},p+" "+e[p])):m.push(r.a.createElement(f.a,{containerClassName:"accordion--side-navigation",style:{color:s},titleStyle:{backgroundColor:s,borderColor:s},initiallyOpened:!0,key:p,title:l+" "+e[p],selectedItem:a.state.selectedItem,list:t.map((function(e){return{id:e.id,href:i+"#"+e.id,text:e.text}}))}));return m},a.state={headings:[],selectedItem:null},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler)},o.render=function(){var e=this.props.part;return r.a.createElement(s.a,{className:"scroll-navigation-container"},r.a.createElement(s.a,{className:"scroll-navigation-container-inner"},r.a.createElement(s.a,{tag:"ul",dirColumn:!0,className:"scroll-navigation "+this.props.className},this.loopThroughPartsNode(N.a[this.props.lang][e]))))},n}(n.Component);x.defaultProps={className:"",lang:"fi"};var j=x,T=a("K4iA"),L=a("u1fg"),A=a("GkXj"),I=a.n(A),S=a("gqR3"),_=a.n(S),R=a("5I0T"),z=a.n(R),P=a("Zosa"),G=a("33yf"),M=a.n(G);function D(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var F=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleScroll=function(){window.scrollY>300&&!a.state.showArrowUp?a.setState({showArrowUp:!0}):window.scrollY<=300&&a.state.showArrowUp&&a.setState({showArrowUp:!1})},a.state={h1Title:"",otherTitles:"",showArrowUp:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e=Array.from(document.querySelectorAll("a")),t=document.querySelector("h1"),a=document.querySelectorAll("h3"),n=Array.from(a).map((function(e){return e.innerText})),r=this.props.data.markdownRemark.frontmatter;e.map((function(e){return e.style="border-color: "+L[P.a[r.part]],e.classList.contains("language-switcher__language")?e.target=e.target:e.target="_blank",e.onmouseover=function(){e.style.backgroundColor=L[P.a[r.part]]},e.onmouseleave=function(){e.style.backgroundColor="transparent"},null})),this.setState({h1Title:t.innerText,otherTitles:D(n)}),window.addEventListener("scroll",this.handleScroll)},l.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},l.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,a=e.html,n=t.mainImage,l=t.letter,d=t.part,f=t.lang,k=L[P.a[d]],v={replace:function(e){var t=e.type,a=e.name,n=e.attribs,o=e.children;return"tag"===t&&"picture"===a?r.a.createElement("picture",null,r.a.createElement("img",{style:{borderColor:k},alt:"fullstack content",src:o[0].attribs.src})):"tag"===t&&"pre"===a?r.a.createElement("pre",null,I()(o,v)):"tag"===t&&"content"===n.class?r.a.createElement(s.a,{className:"course-content"},r.a.createElement(s.a,{className:"course-content-inner"},I()(o,v))):"tag"===t&&"tasks"===n.class?r.a.createElement(c.a,{style:{backgroundColor:k},className:"spacing tasks content-banner"},r.a.createElement(s.a,{className:"course-content",style:{borderColor:k,backgroundColor:"transparent"}},r.a.createElement(s.a,{className:"course-content-inner"},"pre"===o.name?r.a.createElement("pre",null,I()(o,v)):I()(o,v)))):void 0}};return r.a.createElement(p.a,null,r.a.createElement(b.a,{lang:f,title:"Fullstack "+("en"===f||"zh"===f?"part":"osa")+d+" | "+this.state.h1Title,description:_.a[f],keywords:[].concat(D(z.a),[this.state.h1Title],D(this.state.otherTitles))}),this.state.showArrowUp&&r.a.createElement("div",{className:"arrow-go-up",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},r.a.createElement("img",{src:i.a,alt:"arrow-up"})),r.a.createElement("div",{className:"course-container spacing--after"},r.a.createElement(c.a,{className:"part-main__banner spacing--mobile--small",backgroundColor:k,style:{backgroundImage:"url("+M.a.resolve(n.publicURL)+")",backgroundColor:k}},r.a.createElement("div",{className:"container spacing--after"},r.a.createElement(o.a,{className:"breadcrumb",content:[{backgroundColor:k,text:"Fullstack",link:"/"+("en"===f?"en/":"zh"===f?"zh/":"")+"#course-contents"},{backgroundColor:k,text:("en"===f||"zh"===f?"part":"osa")+" "+d,link:"en"===f?"/en/part"+d:"zh"===f?"/zh/part"+d:"/osa"+d},{backgroundColor:L.black,text:N.a[f][d][l]}]}))),r.a.createElement(s.a,{className:"course"},r.a.createElement(j,{part:d,letter:l,lang:f,currentPartTitle:N.a[f][d][l],currentPath:"/"+("en"===f?"en/part":"zh"===f?"zh/part":"osa")+d+"/"+C()(N.a[f][d][l]),colorCode:k}),r.a.createElement(s.a,{className:"course-content-container"},r.a.createElement(s.a,{className:"course-content",autoBottomMargin:!0},r.a.createElement(s.a,{className:"course-content-inner"},r.a.createElement("p",{className:"col-1 letter",style:{borderColor:k}},l),r.a.createElement(T.a,{headingLevel:"h1",text:N.a[f][d][l]}))),g()(a,v))),r.a.createElement(u,{part:d,letter:l,lang:f}),r.a.createElement(h.a,{part:d,letter:l,lang:f})),r.a.createElement(m.a,{lang:f}))},n}(n.Component),O="3474053423"},xPXs:function(e,t,a){},"y2O/":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"},y7hu:function(e,t,a){"use strict";a("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},ymbu:function(e,t){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"End to end -testaus"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria",c:"Redux-sovelluksen kommunikointi palvelimen kanssa",d:"connect"},7:{a:"React-router",b:"custom-hookit",c:"Lisää tyyleistä",d:"Webpack",e:"Luokkakomponentit, Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"},9:{}},en:{0:{a:"General info",b:"Fundamentals of Web apps"},1:{a:"Introduction to React",b:"JavaScript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{a:"Structure of backend application, introduction to testing",b:"Testing the backend",c:"User administration",d:"Token authentication"},5:{a:"Login in frontend",b:"props.children and proptypes",c:"Testing React apps",d:"End to end -testing"},6:{a:"Flux-architecture and Redux",b:"Many reducers",c:"Communicating with server in a redux application",d:"connect"},7:{a:"React-router",b:"Custom hooks",c:"More about styles",d:"Webpack",e:"Class components, Miscellaneous",f:"Exercises: extending the bloglist"},8:{a:"GraphQL-server",b:"React and GraphQL",c:"Database and user administration",d:"Login and updating the cache",e:"Fragments and subscriptions"},9:{a:"Background and introduction",b:"First steps with Typescript",c:"Typing the express app",d:"React with types"}},zh:{0:{a:"基础知识",b:"Web 应用的基础设施"},1:{a:"React 简介",b:"JavaScript",c:"组件状态，事件处理",d:"深入React 应用调试"},2:{a:"从渲染集合到模块学习",b:"表单",c:"从服务器获取数据",d:"在服务端将数据Alert出来",e:"给React应用加点样式"},3:{a:"Node.js 与 Express",b:"把应用部署到网上",c:"将数据存入MongoDB",d:"ESLint与代码检查"},4:{a:"从后端结构到测试入门",b:"测试后端应用",c:"用户管理",d:"密钥认证"},5:{a:"完成前台的登录功能",b:"props.children 与 proptypes",c:"测试React 应用",d:"端到端测试"},6:{a:"Flux架构与Redux",b:"再来点 reducers",c:"在Redux应用中与后端通信",d:"connect方法"},7:{a:"React-router",b:"自定义 hooks",c:"样式进阶",d:"Webpack",e:"各种各样的Class components",f:"练习：扩展你的博客列表"},8:{a:"GraphQL服务器",b:"React 与 GraphQL",c:"数据库与用户管理",d:"登录与更新缓存",e:"Fragments 与 subscriptions"},9:{a:"背景与介绍",b:"Typescript的一小步",c:"Typescript版的express应用",d:"利用Typescript编写React应用"}}}}}]);
//# sourceMappingURL=component---src-templates-content-template-js-18c29ea199eadf35c089.js.map