(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r),a=n(8),o=n.n(a),c=(n(13),n(14),n(2)),i=n(3),l=n(6),d=n(5),h=n(4),m=(n(15),function(t){return t.children}),p=(n(16),n(0)),u=function(t){return Object(p.jsx)("div",{className:"Button",children:Object(p.jsx)("button",{onClick:t.clicked,children:t.children})})},g=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).componentDidMount=function(){r.updateWidthHeight(),window.addEventListener("resize",r.updateWidthHeight)},r.getDiameter=function(){var t=r.state,e=t.diameter,n=t.resize,s=r.getMaxResize(n),a=r.matchesWindow(n);return r.state.responsive?window.matchMedia("(min-width: ".concat(s+1,"px)")).matches?a>e?a:e:a:e},r.updateWidthHeight=function(){var t=r.state.beyond,e=r.firstImg.naturalWidth,n=r.firstImg.naturalHeight,s=e/n;0===n&&(s=1.61);var a,o,c,i=r.firstImg.clientWidth,l=Math.round(i/s),d=r.getDiameter();c=t?{width:i+d,height:l+d,top:-d/2,left:-d/2}:{width:i,height:l,top:0,left:0},o=Math.round(l/2)+Math.round(d/2),a=Math.round(i/2)+Math.round(d/2),console.log(a+" cc "+o+s),r.setState({width:i,height:l,dim:d,sensor:c,centerX:a,centerY:o})},r.getMaxResize=function(t){for(var e=t[0].screen,n=0;n<t.length;n++)t[n].screen>e&&(e=t[n].screen);return e},r.matchesWindow=function(t){for(var e=t[0].diameter,n=0;n<t.length;n++)window.matchMedia("(max-width: ".concat(t[n].screen,"px)")).matches&&(e=t[n].diameter);return e},r.HoverSensor=function(t){var e=t.layerX,n=t.layerY;console.log("x"+t.layerX),console.log("y"+t.layerY);var s,a=r.state,o=a.sensor,c=a.dim,i=a.beyond,l=0,d=o.height,h=0,m=o.width,p=c/2;s=i?c/2:0,n>=l+p&&n<=d-p?(r.zoom.style.top="".concat(n-p-s,"px"),r.lastImg.style.top="".concat(-n+p+s,"px")):n<l+p?(r.zoom.style.top="".concat(l-s,"px"),r.lastImg.style.top="".concat(l+s,"px")):n>d-p&&(r.zoom.style.top="".concat(d-c-s,"px"),r.lastImg.style.top="".concat(-d+c+s,"px")),e>=h+p&&e<=m-p?(r.zoom.style.left="".concat(e-p-s,"px"),r.lastImg.style.left="".concat(-e+p+s,"px")):e<h+p?(r.zoom.style.left="".concat(h-s,"px"),r.lastImg.style.left="".concat(h+s,"px")):e>m-p&&(r.zoom.style.left="".concat(m-c-s,"px"),r.lastImg.style.left="".concat(-m+c+s,"px")),r.setState({centerX:t.layerX,centerY:t.layerY})},r.move=function(t){r.state.transform&&r.setState({transform:!1}),r.HoverSensor(t)},r.onLeftPress=function(){r.state.centerX-Math.round(r.state.dim/2)<=0||r.move({layerX:r.state.centerX-10,layerY:r.state.centerY})},r.onRightPress=function(){r.state.centerX>=Math.round(r.state.width)+Math.round(r.state.dim/2)||r.move({layerX:r.state.centerX+10,layerY:r.state.centerY})},r.onTopPress=function(){r.state.centerY-Math.round(r.state.dim/2)<=0||r.move({layerX:r.state.centerX,layerY:r.state.centerY-10})},r.onBottomPress=function(){r.state.centerY>=Math.round(r.state.height)+Math.round(r.state.dim/2)||r.move({layerX:r.state.centerX,layerY:r.state.centerY+10})},r.state={transform:!0,images:r.props.images,cursor:r.props.cursor||!1,diameter:r.props.diameter||150,beyond:r.props.beyond||!1,width:null,height:null,dim:null,type:r.props.type||"circle",sensor:{width:null,height:null,top:null,left:null},responsive:r.props.responsive||!1,resize:r.props.resize||[{screen:1199,diameter:130},{screen:991,diameter:100},{screen:767,diameter:80},{screen:575,diameter:50}],centerX:0,centerY:0},r.move=r.move.bind(Object(h.a)(r)),r}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,r=e.cursor,s=e.transform,a=e.width,o=e.height,c=e.dim,i=(e.sensor,e.type),l=r?"x-ray-photo-parent":"x-ray-photo-parent cursor-none",d=s?"x-ray-last-photo transform":"x-ray-last-photo",h=s?"x-ray-last-photo-img transform":"x-ray-last-photo-img",g={width:"".concat(c,"px"),height:"".concat(c,"px")};return Object(p.jsxs)(m,{children:[Object(p.jsxs)("div",{className:l,children:[Object(p.jsx)("img",{ref:function(e){t.firstImg=e,null!=e&&(console.log(e.naturalHeight+", "+e.naturalWidth+","+e.width),console.log("firstImg is accesable"))},src:n[0],alt:"first-photo",className:"x-ray-first-photo"}),Object(p.jsxs)("div",{ref:function(e){t.zoom=e},className:d,style:g,children:["magnifyingGlass"===i?Object(p.jsx)("div",{className:"magnifyingGlass"}):null,Object(p.jsx)("div",{className:"x-ray-last-photo-img-parent",children:Object(p.jsx)("img",{ref:function(e){t.lastImg=e},style:{width:"".concat(a,"px"),height:"".concat(o,"px")},src:n[1],alt:"last-photo",className:h})})]})]}),Object(p.jsxs)("div",{className:"Buttons",children:[Object(p.jsx)(u,{clicked:this.onLeftPress,children:"Left"}),Object(p.jsx)(u,{clicked:this.onRightPress,children:"Right"}),Object(p.jsx)(u,{clicked:this.onBottomPress,children:"Bottom"}),Object(p.jsx)(u,{clicked:this.onTopPress,children:"Top"})]})]})}}]),n}(r.Component),f=n.p+"static/media/img2.09314abe.png",y=n.p+"static/media/img12.63d98b4d.png",x=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)(g,{images:[f,y],beyond:!0,diameter:200,cursor:!0,responsive:!0,type:"circle",backgroundColor:"#00AAFF",resize:[{screen:1199,diameter:100},{screen:991,diameter:50}]})}}]),n}(r.Component);var j=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(x,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),s(t),a(t),o(t)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.6bd129da.chunk.js.map