(this["webpackJsonpmaterial-pg-01"]=this["webpackJsonpmaterial-pg-01"]||[]).push([[0],{71:function(e,t,a){e.exports=a(87)},76:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},78:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(76),a(77),a(78),a(52),a(5)),s=a(123),l=a(119),u=a(118),m=a(121),p=a(115),d=a(122),h=a(34),v=a.n(h),f=a(88),g=a(116),y=a(117);Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),Object(c.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(m.a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(36),k=a.n(b),E=a(45),x=a(46),w=a(47),B=a(53),C=a(51),O=a(50),j=a(120),A=a(49),I=a.n(A),D=a(48);function N(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(p.a,{color:"inherit",href:"https://audible-tools.github.io/"},"audible-tools")," ",(new Date).getFullYear(),".")}var W=function(e){Object(B.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).DarkerDisabledTextField=Object(c.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(m.a),n.setChecksum=function(e){e.length>40||n.setState({checksum:e})},n.isChecksumValid=function(){var e=n.state.checksum;return RegExp("[a-f0-9]{40}").test(e)},n.isInputInvalid=function(){var e=n.state.checksum;return!(!e||""===e)&&!n.isChecksumValid()},n.requestActivationBytes=function(){var e=n.state.checksum;fetch("https://aaxactivationserviceapi.azurewebsites.net/api/v2/activation/"+e).then((function(e){return e.json()})).then((function(e){var t=e.success;e.activationBytes;!0===t?n.setState({activationBytes:e.activationBytes}):n.setState({activationBytes:"UNKNOWN"})}),(function(e){n.setState({activationBytes:"UNKNOWN"})}))},n.acceptFile=function(){var e=Object(E.a)(k.a.mark((function e(t){var a,r,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=t[0]).name.endsWith(".aax")){e.next=4;break}return alert("FileType not supported!"),e.abrupt("return");case 4:return r=a.slice(653,673),e.t0=n,e.next=8,r.arrayBuffer();case 8:e.t1=e.sent,i=e.t0.buf2hex.call(e.t0,e.t1),n.setChecksum(i),n.requestActivationBytes();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={checksum:""},n}return Object(w.a)(a,[{key:"buf2hex",value:function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.checksum,i=a.activationBytes;return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(s.a,{className:t.avatar},r.a.createElement(v.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"AAX Checksum Resolver"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(O.a,{noClick:!0,onDrop:function(t){console.log(t),e.acceptFile(t)}},(function(t){var a=t.getRootProps,i=t.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",a(),r.a.createElement("input",i()),r.a.createElement(m.a,{error:e.isInputInvalid(),variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"checksum",label:"Checksum or Drag&Drop .aax file -",name:"checksum",autoComplete:"checksum",autoFocus:!0,onChange:function(t){return e.setChecksum(t.target.value)},value:n})))})),r.a.createElement(l.a,{fullWidth:!0,variant:"contained",onClick:function(){e.requestActivationBytes()},disabled:!this.isChecksumValid()},"Request Activation Bytes"),r.a.createElement(this.DarkerDisabledTextField,{value:i,disabled:!0,variant:"outlined",margin:"normal",fullWidth:!0,id:"activationBytes",label:i?"":"Activation Bytes",name:"activationBytes",autoComplete:"activationBytes","aria-readonly":!0,InputProps:{readOnly:!0,endAdornment:r.a.createElement(D.CopyToClipboard,{text:i},r.a.createElement(j.a,null,r.a.createElement(I.a,null)))}}))),r.a.createElement(d.a,{mt:1},r.a.createElement(N,null)))}}]),a}(r.a.Component),T=Object(c.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}}))(W),F=a(37);F.a.initialize("UA-174657678-1"),F.a.pageview(window.location.pathname+window.location.search),o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.13030202.chunk.js.map