(this.webpackJsonpms=this.webpackJsonpms||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/bomb.9703aa7c.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/flag.c71b9d14.svg"},,,function(e,t,a){e.exports=a.p+"static/media/in-love.f350c24f.svg"},function(e,t,a){e.exports=a.p+"static/media/sad.44bda2f3.svg"},function(e,t,a){e.exports=a.p+"static/media/happy.63d6e061.svg"},function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),i=(a(20),a(4)),c=a.n(i),s=a(1);var m=function(){var e=Object(s.c)((function(e){return e})),t=Object(s.b)();return r.a.createElement("div",{className:e.darkmode?"dark":""},r.a.createElement("header",{className:"header",style:{display:"flex","margin-bottom":"15px","justify-content":"space-between"}},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:c.a,style:{margin:"10px"},height:"40px",width:"40px",className:"App-logo",alt:"logo"}),r.a.createElement("h2",{style:{"margin-top":"18px"}},"MINESWEEPER")),r.a.createElement("div",{className:e.darkmode?"dark":""},r.a.createElement("button",{onClick:function(e){return t({type:"DARKMODE"})},className:"headerButton"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-moon c-button__icon"},r.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))),e.instructions&&r.a.createElement("div",{className:e.darkmode?"dark card":"card"},r.a.createElement("strong",{className:"textCenter"},r.a.createElement("p",null,"How to play?")),r.a.createElement("span",null,"Contrary to popular belief, it's actually quite simple."),r.a.createElement("ul",null,r.a.createElement("li",null,' Click a square, you get a number. That number is the number of how many mines are surrounding it. If you find the mine, you can open "unopened" squares around it, opening more areas.'),r.a.createElement("li",null,"Enabling the ",r.a.createElement("i",null,"flag mode")," will flag the block rather than opening when you click on a block."),r.a.createElement("li",null,"Open all the blocks with out mines to get chicken dinner. \ud83d\ude0b")),r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Minesweeper_(video_game)",target:"_blank"},r.a.createElement("span",null,"Read More"))),r.a.createElement("span",{onClick:function(e){return t({type:"INSTRUCTIONS"})},className:"how",style:{float:"right"}},"?"))))},u=(a(27),a(9)),d=a.n(u),p=a(12),f=a.n(p),g=a(13),E=a.n(g),h=a(14),v=a.n(h);var b=function(){var e=Object(s.c)((function(e){return e})),t=Object(s.b)(),a=function(e){return function(e,t){return{type:"REVEAL",rowNum:parseInt(e),colNum:parseInt(t)}}(e.target.dataset.i,e.target.dataset.j)},n=function(e){return function(e,t){return{type:"FLAG",rowNum:parseInt(e),colNum:parseInt(t)}}(e.target.dataset.i,e.target.dataset.j)},o=function(e,t){var a={};return e.revealed&&(a["box-shadow"]=t?"inset 3px 3px 6px rgb(52, 52, 49), inset -3px -3px 6px #000000":"inset 3px 3px 6px #bec3c9, inset -3px -3px 6px #ffffff",a["font-weight"]="bold"),1===e.value&&(a.color="green"),2===e.value&&(a.color="#D69E2E"),e.value>=3&&(a.color="red"),a};return r.a.createElement("div",{className:e.darkmode?"dark":""},r.a.createElement("div",{className:"App"},e.blasted&&r.a.createElement("span",null,"Game over, Please try again!"),e.remaining===e.mines&&r.a.createElement("h4",null,"Great Game!"),r.a.createElement("section",{className:e.darkmode?"App__buttons dark":"App__buttons"},r.a.createElement("button",{onClick:function(e){return t({type:"RESET"})}},e.blasted?r.a.createElement("img",{width:"15px",height:"15px",src:E.a,alt:"sad",style:{"margin-right":"5px"}}):e.remaining===e.mines?r.a.createElement("img",{width:"15px",height:"15px",alt:"cool",src:f.a,style:{"margin-right":"5px"}}):r.a.createElement("img",{width:"15px",height:"15px",alt:"reset",src:v.a,style:{"margin-right":"5px"}}),"Reset"),r.a.createElement("button",{style:function(e,t){var a={};return e&&(a["box-shadow"]=t?"inset 3px 3px 6px rgb(52, 52, 49), inset -3px -3px 6px #000000":"inset 3px 3px 6px #bec3c9, inset -3px -3px 6px #ffffff",a.color="#F56565"),a}(e.flagMode,e.darkmode),onClick:function(e){return t({type:"TOGGLEFLAGMODE"})}},r.a.createElement("img",{width:"15px",height:"15px",src:d.a,alt:"flag"})," Flag Mode")),r.a.createElement("div",{className:"grid"},r.a.createElement("table",null,r.a.createElement("tbody",null,e.grid.map((function(l,i){var s=l.map((function(l,s){return r.a.createElement("td",{key:s},r.a.createElement("button",{"data-i":i,"data-j":s,style:o(l,e.darkmode),onClick:function(r){return t(e.flagMode?n(r):a(r))},disabled:e.blasted||l.revealed||e.remaining===e.mines},l.revealed?l.mine?r.a.createElement("img",{"data-i":i,"data-j":s,width:"20px",height:"20px",src:c.a}):0===l.value?"":l.value:l.flagged?r.a.createElement("img",{"data-i":i,"data-j":s,width:"15px",height:"15px",src:d.a}):" "))}));return r.a.createElement("tr",{key:i},s)})))))))},x=a(5),w=a(2),k=10,y=10,N=10;function O(e,t){return{mine:!1,value:0,revealed:!1,rowNum:e,colNum:t,flagged:!1}}var j=function(e,t,a){k=e,y=t,N=a;var n=function(e,t){for(var a=new Array(e),n=0;n<a.length;n++)a[n]=new Array(t);return a}(e,t);return function(e){for(var t=0;t<y;t++)for(var a=0;a<k;a++)e[t][a]=new O(t,a)}(n),function(e){for(var t=[],a=0;a<k;a++)for(var n=0;n<y;n++)t.push([a,n]);for(var r=0;r<N;r++){var o=Math.floor(Math.random()*t.length),l=t[o],i=l[0],c=l[1];t.splice(o,1),e[i][c].mine=!0}}(n),function(e){for(var t=0;t<k;t++)for(var a=0;a<y;a++){var n=e[t][a];if(n.mine)n.value="M";else for(var r=-1;r<=1;r++){var o=t+r;if(!(o<0||o>=k))for(var l=-1;l<=1;l++){var i=a+l;if(!(i<0||i>=y))e[o][i].mine&&n.value++}}}}(n),{rows:k,cols:y,mines:N,grid:n,blasted:!1,remaining:k*y,flagMode:!1,darkmode:!1,instructions:!1}};var _=function(e,t){switch(t.type){case"DARKMODE":var a=document.documentElement;return e.darkmode?a.style.setProperty("--main-bg-color","#E0E5EC"):a.style.setProperty("--main-bg-color","#181818"),Object(w.a)(Object(w.a)({},e),{},{darkmode:!e.darkmode});case"REVEAL":return function e(t,a,n){var r=t.grid;if(!r[a][n].flagged&&(t.remaining--,r[a][n].revealed=!0,"M"===r[a][n].value&&(t.blasted=!0),0===r[a][n].value))for(var o=-1;o<=1;o++){var l=a+o;if(!(l<0||l>=r.length))for(var i=-1;i<=1;i++){var c=n+i;c<0||c>=r[l].length||(r[l][c].revealed||e(t,l,c))}}return t}(Object.assign({},e),t.rowNum,t.colNum);case"RESET":return function(e){var t=j(e.rows,e.cols,e.mines);return t.darkmode=e.darkmode,t}(e);case"TOGGLEFLAGMODE":return Object(w.a)(Object(w.a)({},e),{},{flagMode:!e.flagMode});case"INSTRUCTIONS":return Object(w.a)(Object(w.a)({},e),{},{instructions:!e.instructions});case"FLAG":return Object(w.a)(Object(w.a)({},e),{},{grid:(n=e.grid,r=t.rowNum,o=t.colNum,n[r][o].flagged=!n[r][o].flagged,n)});default:return e}var n,r,o},M=Object(x.b)(_,j(10,10,20),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var A=function(){return r.a.createElement("div",null,r.a.createElement(s.a,{store:M},r.a.createElement(m,null)),r.a.createElement(s.a,{store:M},r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.b8cab07d.chunk.js.map