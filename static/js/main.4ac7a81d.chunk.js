(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),c=t.n(r),o=(t(11),t(1));t(12),t(13);var m=function(e){var a=e.aboutSelected,t=e.contactSelected,n=e.portfolioSelected,r=e.resumeSelected,c=e.setLnkSelected;return l.a.createElement("nav",{className:"navbar"},l.a.createElement("h2",{className:"float-left"},"David de Leon"),l.a.createElement("div",{className:"navbar-nav"},l.a.createElement("ul",{className:"flex-row float-right"},l.a.createElement("li",{className:"nav-item mx-2 ".concat(a&&"navActive")},l.a.createElement("span",{className:"nav-link",onClick:function(){return c(0)}},"About me")),l.a.createElement("li",{className:"nav-item mx-2 ".concat(n&&"navActive")},l.a.createElement("span",{className:"nav-link",onClick:function(){return c(1)}},"Portfolio")),l.a.createElement("li",{className:"nav-item mx-2 ".concat(t&&"navActive")},l.a.createElement("span",{className:"nav-link",onClick:function(){return c(2)}},"Contact")),l.a.createElement("li",{className:"nav-item mx-2 ".concat(r&&"navActive")},l.a.createElement("span",{className:"nav-link",onClick:function(){return c(3)}},"Resume")))))};var i=function(e){var a=e.aboutSelected,t=e.contactSelected,n=e.portfolioSelected,r=e.resumeSelected,c=e.setLnkSelected;return l.a.createElement("header",null,l.a.createElement(m,{aboutSelected:a,contactSelected:t,portfolioSelected:n,resumeSelected:r,setLnkSelected:c}))};var s=function(){return l.a.createElement("div",{className:"pageContent"},l.a.createElement("h2",{className:"pageTitle"},"About me"),l.a.createElement("img",{src:"David.png",width:"60px",alt:"David"}),l.a.createElement("br",null),l.a.createElement("p",null,"Hi, my name is David de Leon, a programmer by trade. Most of my early professional career has been writing code in C and C++. However in the last 15 years I've done mostly web-based development, and so I've used mostly Java or JavaScript. I've had work experience with VBA mostly via MS Access projects. I am currently a Full Stack instructor for ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.trilogyed.com/",className:"link"},"Trilogy"),"."),l.a.createElement("p",null,"My interests include math (I have a master's in mathematics) and chemistry, which explains why I have so many books on math and chemistry. I currently have no pets, but before I did enjoy the company of my cats Sammy and Bonnie. They are now gone, though they lived long for cats."))},u=t(2),E=t(3);var d=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(o.a)(e,2),t=a[0],r=a[1],c=t.name,m=t.email,i=t.message,s=Object(n.useState)(""),d=Object(o.a)(s,2),p=d[0],v=d[1];function h(e){if("email"===e.target.name){var a=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(a),v(a?"":"Your email is invalid")}else e.target.value.length?v(""):v("".concat(e.target.name," is required."));p||r(Object(E.a)(Object(E.a)({},t),{},Object(u.a)({},e.target.name,e.target.value)))}return l.a.createElement("div",{className:"pageContent"},l.a.createElement("h2",{className:"pageTitle","data-testid":"h1tag"},"Contact me"),l.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(t)}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Name: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",defaultValue:c,onBlur:h,name:"name"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email address: "),l.a.createElement("br",null),l.a.createElement("input",{type:"email",defaultValue:m,onBlur:h,name:"email"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"message"},"Message: "),l.a.createElement("br",null),l.a.createElement("textarea",{name:"message",defaultValue:i,onBlur:h,rows:"5"})),l.a.createElement("br",null),p&&l.a.createElement("div",null,l.a.createElement("p",{className:"error-text"},p)),l.a.createElement("button",{className:"btn",type:"submit","data-testid":"buttontag"},"Submit")))};var p=function(e){var a=e.project;return l.a.createElement("div",{className:"project"},l.a.createElement("a",{href:a.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:a.image,width:"400",height:"300",alt:""})))};var v=function(){return l.a.createElement("div",{className:"pageContent"},l.a.createElement("h2",{className:"pageTitle"},"Portfolio"),l.a.createElement(p,{project:{name:"Front End Examples",description:"A medium-sized website with examples of many HTML5 tags, CSS3 and JavaScript, with links to more information.",image:"frontEndSampler.png",onOverImage:"ooFrontEndSampler.png",url:"https://github.com/Ajax10000/Examples"}}))};var h=function(){return l.a.createElement("div",{className:"pageContent"},l.a.createElement("h2",{className:"pageTitle"},"Resume"),l.a.createElement("div",null,l.a.createElement("h2",null,"Education"),l.a.createElement("h3",null,"Texas A&I at Kingsville"),l.a.createElement("p",null,"1981 - 1983",l.a.createElement("br",null),"Now known as ",l.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.tamuk.edu/"},"Texas A&M at Kingsville"),l.a.createElement("br",null),"Majored in Electronic Data Processing",l.a.createElement("br",null),"No degree"),l.a.createElement("h3",null,"Corpus Christi State University"),l.a.createElement("p",null,"1983 - 1985",l.a.createElement("br",null),"Now known as ",l.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://tamucc.edu/"},"Texas A&M at Corpus Christi"),l.a.createElement("br",null),"Majored in Computer Science",l.a.createElement("br",null),"BS in Computer Science",l.a.createElement("br",null)),l.a.createElement("h3",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.osu.edu/"},"Ohio State University")),l.a.createElement("p",null,"1986 - 1989",l.a.createElement("br",null),"Majored in Computer Science",l.a.createElement("br",null),"MS in Computer Science"),l.a.createElement("h3",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.tamu.edu/"},"Texas A&M at College Station")),l.a.createElement("p",null,"1989 - 1992",l.a.createElement("br",null),"Majored in Mathematics",l.a.createElement("br",null),"MS in Mathematics"),l.a.createElement("br",null),l.a.createElement("h2",null,"Skills"),l.a.createElement("div",null,l.a.createElement("h3",null,"Languages"),l.a.createElement("p",null,"C, C++, Java, JavaScript")),l.a.createElement("div",null,l.a.createElement("h3",null,"Web Development"),l.a.createElement("p",null,"HTML5, CSS3, Java, JUnit, Jakarta Struts, JSTL, Hibernate, Spring Framework, JavaScript, jQuery, ESLint, Node, Express, Jest, SVG")),l.a.createElement("div",null,l.a.createElement("h3",null,"Database Development"),l.a.createElement("p",null,"SQL Server, Oracle, DB2, MongoDB, MySQL, PostgreSQL"))))};var b=function(){return l.a.createElement("footer",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Ajax10000"},l.a.createElement("img",{src:"GitHub-Mark-32px.png",alt:"GitHub icon"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.hackerrank.com/david_de_leon_11?hr_r=1"},l.a.createElement("img",{src:"iconfinder_160_Hackerrank_logo_logos_4373713.png",alt:"HackerRank icon"})))};var g=function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),m=Object(o.a)(c,2),u=m[0],E=m[1],p=Object(n.useState)(!1),g=Object(o.a)(p,2),f=g[0],S=g[1],k=Object(n.useState)(!1),w=Object(o.a)(k,2),y=w[0],N=w[1];return l.a.createElement("div",null,l.a.createElement(i,{aboutSelected:t,contactSelected:u,portfolioSelected:f,resumeSelected:y,setLnkSelected:function(e){switch(e){case 0:r(!0),E(!1),S(!1),N(!1);break;case 2:r(!1),E(!0),S(!1),N(!1);break;case 1:r(!1),E(!1),S(!0),N(!1);break;case 3:r(!1),E(!1),S(!1),N(!0);break;default:throw new Error("Unknown link value: "+e)}}}),l.a.createElement("main",{id:"main"},t?l.a.createElement(s,null):l.a.createElement(l.a.Fragment,null),u?l.a.createElement(d,null):l.a.createElement(l.a.Fragment,null),f?l.a.createElement(v,null):l.a.createElement(l.a.Fragment,null),y?l.a.createElement(h,null):l.a.createElement(l.a.Fragment,null)),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.4ac7a81d.chunk.js.map