(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){e.exports=n(316)},159:function(e,t,n){},161:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(9),r=n.n(i),c=(n(159),n(134)),s=n(34),l=n.n(s),u=n(70),p=n(65),m=n(66),d=n(68),f=n(67),h=n(69),g=(n(161),n(323)),v=n(324),b=n(321),w=n(10),y=n(72),E=n(318),j=n(322),T=n(319),k=n(320),x=n(3),S=n.n(x);n(162),n(164),n(317);"url-prod"===window.location.hostname?(.1,"server-prod",S.a.initializeApp({})):(.1,"server-dev",S.a.initializeApp({apiKey:"AIzaSyDLieBYpSFU6fyL6EPz4hzEhevkOda27es",authDomain:"movilperu.firebaseapp.com",databaseURL:"https://movilperu.firebaseio.com",projectId:"movilperu",storageBucket:"movilperu.appspot.com",messagingSenderId:"135498032188",appId:"1:135498032188:web:88106717a56fe17b"}));var C=!1;S.a.firestore().collection("versions").onSnapshot(function(){C&&document.location.reload(!0),C=!0});S.a.firestore();var O=S.a.storage(),I=(S.a.auth(),n(135)),A=n(93),P=n.n(A),N=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={imagen:n.props.imagen,loading:!1},n.beforeUploadImage=function(){n.props.titulo&&n.props.subtitulo&&n.props.contenido||v.a.warning("Porfavor completa los campos")},n.uploadImageProfile=function(e){n.setState({loading:!0}),console.log(n.validateExtension(e)),n.validateExtension(e)?n.convertImageToBase64(e):(v.a.error("You can only upload images"),n.setState({loading:!1}))},n.validateExtension=function(e){return/\.(gif|jpg|jpeg|tiff|png)$/i.test(e.name)},n.convertImageToBase64=function(e){var t=new FileReader;t.onload=function(t){var a=t.target.result,o=new Image;o.src=a,o.onload=function(){var t=P.a.resize(o,720,720,P.a.JPEG);n.uploadToStorageAndGetURL(e,t)}},t.readAsDataURL(e)},n.uploadToStorageAndGetURL=function(e,t){var a=n.props.titulo,o="".concat("news/"+a),i=t?O.ref("".concat(o+"/imagen")).putString(t,"data_url"):O.ref("".concat(o+"/imagen")).put(e);Object(I.isEmpty)(i)?console.log("error"):i.on("state_changed",function(){O.ref("".concat(o)).child("imagen").getDownloadURL().then(function(e){n.props.onChange(e),console.log(e)}).then(function(){n.setState({loading:!1})})})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.imagen;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(E.a,{spinning:this.state.loading,size:"large",tip:"Loading..."},o.a.createElement(j.a,{action:this.uploadImageProfile,showUploadList:!1,listType:"picture-card",className:"avatar-uploader",disabled:!this.props.titulo||!this.props.subtitulo||!this.props.contenido},o.a.createElement(T.a,{onClick:function(){return e.beforeUploadImage()},size:100,icon:"user",src:t}))),o.a.createElement(k.a,null))}}]),t}(a.Component),L=function(e,t,n){console.log(e),e.map(function(e){return e.expoToken?fetch("https://exp.host/--/api/v2/push/send",{body:JSON.stringify({to:e.expoToken,title:t,body:n,sound:"default",data:{message:"".concat(t," - ").concat(n)}}),headers:{"Content-Type":"application/json"},method:"POST",mode:"no-cors",sound:!0}):null})},U=g.a.TextArea,z=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={titulo:"",subtitulo:"",contenido:"",imagen:"",usersTokens:[]},n.fetchCreateNews=Object(u.a)(l.a.mark(function e(){var t,a,o,i,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.titulo,o=t.subtitulo,i=t.contenido,r=t.imagen,e.next=3,fetch("http://35.236.27.209/movilPeru/api/controller/create_news.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({titulo:a,subtitulo:o,contenido:i,imagen:r})}).then(function(e){return e.json()}).then(function(e){v.a.warning(e.message)}).then(function(){n.fetchGetTokens()});case 3:case"end":return e.stop()}},e)})),n.fetchGetTokens=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://35.236.27.209/movilPeru/api/controller/get_tokens.php",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){n.setState({usersTokens:e.tokens})}).then(function(){n.sendPushNotifications()});case 2:case"end":return e.stop()}},e)})),n.sendPushNotifications=Object(u.a)(l.a.mark(function e(){var t,a,o,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.state,a=t.usersTokens,o=t.titulo,i=t.subtitulo,L(a,o,i),n.setState({titulo:"",subtitulo:"",contenido:"",imagen:""});case 3:case"end":return e.stop()}},e)})),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"onChangeText",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"render",value:function(){var e=this,t=this.state,n=t.titulo,a=t.subtitulo,i=t.contenido,r=t.imagen;return o.a.createElement("div",{className:"formP"},o.a.createElement(b.a,{onSubmit:this.handleSubmit,className:"login-form"},o.a.createElement(b.a.Item,null,o.a.createElement(g.a,{prefix:o.a.createElement(w.a,{type:"file-text",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Titulo",value:n,onChange:function(t){e.onChangeText("titulo",t.target.value)}})),o.a.createElement(b.a.Item,null,o.a.createElement(g.a,{prefix:o.a.createElement(w.a,{type:"file-text",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Subtitulo",value:a,onChange:function(t){e.onChangeText("subtitulo",t.target.value)}})),o.a.createElement(b.a.Item,null,o.a.createElement(U,{placeholder:"Contenido",rows:5,value:i,onChange:function(t){e.onChangeText("contenido",t.target.value)}})),o.a.createElement(b.a.Item,null,o.a.createElement(N,{type:"documents",imagen:r,titulo:n,subtitulo:a,contenido:i,onChange:function(t){e.setState({imagen:t})}}),o.a.createElement(y.a,{type:"primary",htmlType:"submit",className:"login-form-button",onClick:function(){e.fetchCreateNews()}},"Crear Noticia"))))}}]),t}(o.a.Component),B=b.a.create()(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[154,1,2]]]);
//# sourceMappingURL=main.8dc7f743.chunk.js.map