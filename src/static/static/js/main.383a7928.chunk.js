(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),c=a.n(i),o=(a(91),a(20)),l=a(21),m=a(23),s=a(22),u=a(24),p=a(35),d=a(81),g=a.n(d),E=a(83),h=a.n(E),f=a(82),b=a.n(f),y=a(11),v=a.n(y),j=a(13),I=a(3),O=a.n(I),C=a(7),w=a.n(C),N=a(79),S=a.n(N),D=a(85),k=a(77),R=a.n(k),x=a(74),A=a.n(x),L=a(75),F=a(36),T=a.n(F),z=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(O.a,{container:!0,direction:"column"},e.map(function(e){return r.a.createElement(O.a,{item:!0},r.a.createElement(v.a,{gutterBottom:!0},e.class," : ",e.confidence))}))}}]),t}(r.a.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.imageSrc,a=e.data,n=e.classes;return r.a.createElement(T.a,{className:n.card},r.a.createElement(O.a,{container:!0,direction:"column",spacing:24,justify:"center"},r.a.createElement(O.a,{item:!0,className:n.imageContainer},r.a.createElement("img",{className:n.image,src:t,alt:"Uploaded file"})),r.a.createElement(O.a,{item:!0},a.length>0?r.a.createElement(z,{data:a}):r.a.createElement("label",null,"No class found in the Image"))))}}]),t}(n.PureComponent),G=Object(j.withStyles)(function(e){return{card:{padding:12,borderRadius:7,maxWidth:640},cardActions:{display:"flex",justifyContent:"flex-end"},text:{width:"calc(100% - 24px);",height:40*e.spacing.unit,backgroundColor:"#eee",borderRadius:5,padding:10},image:{maxHeight:"100%",maxWidth:"100%"},imageContainer:{backgroundColor:"#eee"}}})(B),U=a(78),P=a.n(U),W="/scan",M={status:"NEW",image:null,data:[],filename:""},J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).statusTypes=["NEW","READING","UPLOADING","SUCCESS","FAILED","REJECTED","FILELIMIT"],a.state=M,a.onDrop=function(e,t){var n=e[0];if(n)if(n.size>2097152)a.setState({status:"FILELIMIT"});else{a.setState({status:"READING",filename:n.name});var r=new FileReader;r.readAsDataURL(n),r.onloadend=function(e){return a.setState(function(e){var t=e.status;return{image:r.result,status:"READING"===t?"UPLOADING":t}})};var i=new FormData;i.append("image",n),A.a.post(W,i,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(i._boundary)}}).then(function(e){var t=e.data;a.setState({data:t,status:"SUCCESS"})}).catch(function(e){a.setState({status:"FAILED"})})}else(n=t[0])&&a.setState({status:"REJECTED",filename:n.name})},a.handleNew=function(){return a.setState(M)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.status,n=t.filename,i=t.image,c=t.data,o=r.a.createElement(R.a,{variant:"outlined",color:"primary",onClick:this.handleNew},"Try New");switch(a){case"READING":case"UPLOADING":return r.a.createElement(O.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(O.a,{item:!0},r.a.createElement(P.a,{thickness:5})),r.a.createElement(O.a,{item:!0},r.a.createElement(v.a,{variant:"h4"},"Scanning the image",r.a.createElement("strong",null,n))));case"SUCCESS":return r.a.createElement(O.a,{container:!0,direction:"column",spacing:24,alignItems:"center"},r.a.createElement(O.a,{item:!0},o),r.a.createElement(O.a,{item:!0},r.a.createElement(G,{imageSrc:i,data:c})),r.a.createElement(O.a,{item:!0},o));case"FAILED":case"REJECTED":return r.a.createElement(O.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(O.a,{item:!0},r.a.createElement(v.a,{variant:"h5",gutterBottom:!0},"FAILED"===a?"Failed to scan the image ":"File type is not supported ",r.a.createElement("strong",null,n))),r.a.createElement(O.a,{item:!0},o));default:return r.a.createElement("div",null,r.a.createElement(D.a,{onDrop:this.onDrop,accept:"image/*",multiple:!1},function(t){var a=t.getRootProps,n=t.getInputProps,i=t.isDragActive;return r.a.createElement(O.a,Object.assign({container:!0,direction:"column",alignItems:"center"},a(),{className:w()(e.dropzone,Object(p.a)({},e.activeDropzone,i))}),r.a.createElement("input",n()),r.a.createElement(O.a,{item:!0},r.a.createElement(S.a,{className:e.icon})),!L.isMobile&&r.a.createElement(O.a,{item:!0},r.a.createElement(v.a,{variant:"h5",color:"textSecondary"},"DRAG & DROP")),r.a.createElement(O.a,{item:!0},r.a.createElement(v.a,{variant:"h6"},"Click to select an image file")))}),r.a.createElement(v.a,{variant:"caption",color:"FILELIMIT"===a?"error":"default",className:e.limit},"Filesize limit: < 2MB"))}}}]),t}(r.a.Component),_=Object(j.withStyles)(function(e){return{dropzone:{cursor:"pointer",padding:3*e.spacing.unit,borderColor:e.palette.primary.main,borderStyle:"dashed",borderWidth:3,borderRadius:10},activeDropzone:{backgroundColor:e.palette.primary[100]},icon:{color:e.palette.primary.main,fontSize:60},limit:{display:"flex",justifyContent:"flex-end"}}})(J),q=a(80),H=a.n(q);var V=Object(j.withStyles)({card:{maxWidth:345},media:{objectFit:"cover"}})(function(e){var t=e.classes,a=e.image_path,n=e.title;return r.a.createElement(T.a,{className:t.card},r.a.createElement(H.a,{component:"img",alt:n,className:t.media,height:"140",image:a,title:n}))}),Z=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{position:"static",className:e.appBar},r.a.createElement(b.a,null,r.a.createElement(h.a,{className:e.icon}),r.a.createElement(v.a,{variant:"h6",color:"inherit",noWrap:!0},"Bear Classification"))),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroUnit},r.a.createElement("div",{className:e.heroContent},r.a.createElement(v.a,{component:"h2",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Teddy | Grizzley | Black"),r.a.createElement(v.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Classifies given image file to one of the above categories. Go ahead and drop an image below to try it out.")),r.a.createElement("div",{className:e.mainImage},r.a.createElement(O.a,{container:!0,direction:"row",alignItems:"center",justify:"center",spacing:40},r.a.createElement(O.a,{item:!0},r.a.createElement(V,{image_path:"/img/teddy.png",title:"Teddy"})),r.a.createElement(O.a,{item:!0},r.a.createElement(V,{image_path:"/img/grizzly.png",title:"Grizzly"})),r.a.createElement(O.a,{item:!0},r.a.createElement(V,{image_path:"/img/black.png",title:"Black"}))))),r.a.createElement("div",{className:e.layout},r.a.createElement(_,{onImage:this.showImage}))),r.a.createElement("footer",{className:e.footer},r.a.createElement(v.a,{variant:"h6",align:"center",gutterBottom:!0},"\xa9 Zero")))}}]),t}(r.a.Component),$=Object(j.withStyles)(function(e){return{appBar:{position:"static"},icon:{marginRight:2*e.spacing.unit},heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{margin:"0 auto",padding:"".concat(2*e.spacing.unit,"px 0 ").concat(e.spacing.unit,"px")},layout:Object(p.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,backgroundColor:e.palette.background.paper},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),footer:{padding:3*e.spacing.unit,paddingTop:6*e.spacing.unit},mainImage:{backgroundColor:"#aaa",padding:20,marginBottom:5*e.spacing.unit}}})(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(84),Q=a.n(K),X=Object(j.createMuiTheme)({palette:{primary:Q.a},typography:{useNextVariants:!0}});c.a.render(r.a.createElement(j.MuiThemeProvider,{theme:X},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,a){e.exports=a(208)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.383a7928.chunk.js.map