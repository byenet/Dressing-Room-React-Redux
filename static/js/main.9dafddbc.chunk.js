(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{1:function(e,t,a){e.exports={contain:"style_contain__EEUqg",body:"style_body__meFlg",bikinitop:"style_bikinitop__3REba",bikinibottom:"style_bikinibottom__2fJ5i",model:"style_model__DNqP9",feetleft:"style_feetleft__14hID",feetright:"style_feetright__3OaBU",hairstyle:"style_hairstyle__34QyH",handbagStyle:"style_handbagStyle__1PKL4",feetStyle:"style_feetStyle__31SmX",necklace:"style_necklace__XVOE-"}},16:function(e,t,a){e.exports=a(32)},21:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),c=a(8),n=a.n(c),s=(a(21),a(2)),l=a(3),r=a(5),g=a(4),m=function(e){Object(r.a)(a,e);var t=Object(g.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"card hovercard p-3 w-100"},o.a.createElement("div",{className:"card-background"}),o.a.createElement("div",{className:"useravatar"},o.a.createElement("img",{alt:"cybersoft.edu.vn",src:"images/cybersoft.png"})),o.a.createElement("div",{className:"card-info"}," ",o.a.createElement("span",{className:"card-title"},"CyberSoft.edu.vn - \u0110\xe0o t\u1ea1o chuy\xean gia l\u1eadp tr\xecnh - D\u1ef1 \xe1n th\u1eed \u0111\u1ed3 tr\u1ef1c tuy\u1ebfn - Virtual Dressing Room")))),o.a.createElement("hr",{className:"style13"}))}}]),a}(i.Component),p=function(e){Object(r.a)(a,e);var t=Object(g.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("hr",{className:"style13 p-1"}),o.a.createElement("div",{className:"card hovercard"},o.a.createElement("div",{className:"card-info"}," ",o.a.createElement("span",{className:"card-title"},"@Copyright 2018- CyberSoft.edu.vn - MyClass.vn"))))}}]),a}(i.Component),d=a(6),u=function(e){Object(r.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o)))._chooseCategory=function(t){e.props.dispatch({type:"SET_CATEGORY",payload:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"btn-group"},this.props.categoryList.map((function(t,a){return o.a.createElement("button",{onClick:function(){return e._chooseCategory(t.type)},className:e.props.choosenCategory===t.type?"btn btn-primary":"btn btn-outline-primary",key:a},t.showName)})))}}]),a}(i.Component),h=Object(d.b)((function(e){return{categoryList:e.categories,choosenCategory:e.choosenCategory}}),null)(u),b=function(e){Object(r.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o)))._chooseCloth=function(t){e.props.dispatch({type:"SET_CLOTH",payload:{type:t.type,img:t.imgSrc_png}})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.name,i=t.imgSrc_jpg;return o.a.createElement("div",{className:"card p-2 my-2"},o.a.createElement("img",{src:i,alt:"dressing room image"}),o.a.createElement("p",null,a),o.a.createElement("button",{onClick:function(){return e._chooseCloth(e.props.item)},className:"btn btn-success"},"Th\u1eed \u0111\u1ed3"))}}]),a}(i.Component),_=Object(d.b)()(b),y=function(e){Object(r.a)(a,e);var t=Object(g.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row"},this.props.productList.filter((function(t){return t.type===e.props.choosenCategory})).map((function(e,t){return o.a.createElement("div",{className:"col-4",key:t},o.a.createElement(_,{item:e}))})))}}]),a}(i.Component),k=Object(d.b)((function(e){return{productList:e.products,choosenCategory:e.choosenCategory}}),null)(y),j=a(1),S=a.n(j),v=function(e){Object(r.a)(a,e);var t=Object(g.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state={contain:"images/background/background_998.jpg",body:"images/allbody/bodynew.png",bikinitop:"images/allbody/bikini_branew.png",bikinibottom:"images/allbody/bikini_pantsnew.png",model:"images/model/1000new.png",feetleft:"images/allbody/feet_high_leftnew.png",feetright:"images/allbody/feet_high_rightnew.png"},i}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:S.a.contain,style:{background:"url(".concat(this.state.contain,")")}},o.a.createElement("div",{className:S.a.body,style:{background:"url(".concat(this.state.body,")")}}),o.a.createElement("div",{className:S.a.model,style:{background:"url(".concat(this.state.model,")")}}),o.a.createElement("div",{className:S.a.bikinitop,style:{background:"url(".concat(this.state.bikinitop,")")}}),o.a.createElement("div",{className:S.a.bikinibottom,style:{background:"url(".concat(this.state.bikinibottom,")"),zIndex:2}}),o.a.createElement("div",{className:S.a.feetleft,style:{background:"url(".concat(this.state.feetleft,")")}}),o.a.createElement("div",{className:S.a.feetright,style:{background:"url(".concat(this.state.feetright,")")}}),o.a.createElement("div",{className:S.a.bikinitop,style:{backgroundImage:"url(".concat(this.props.model.topclothes,")"),backgroundSize:"cover",zIndex:5}}),o.a.createElement("div",{className:S.a.bikinibottom,style:{backgroundImage:"url(".concat(this.props.model.botclothes,")"),backgroundSize:"cover",zIndex:4}}),o.a.createElement("div",{className:S.a.contain,style:{backgroundImage:"url(".concat(this.props.model.background,")"),backgroundSize:"cover",zIndex:1}}),o.a.createElement("div",{className:S.a.hairstyle,style:{backgroundImage:"url(".concat(this.props.model.hairstyle,")")}}),o.a.createElement("div",{className:S.a.handbagStyle,style:{backgroundImage:"url(".concat(this.props.model.handbags,")")}}),o.a.createElement("div",{className:S.a.feetStyle,style:{backgroundImage:"url(".concat(this.props.model.shoes,")")}}),o.a.createElement("div",{className:S.a.necklace,style:{backgroundImage:"url(".concat(this.props.model.necklaces,")")}}))}}]),a}(i.Component),f=Object(d.b)((function(e){return{model:e.model}}),null)(v),E=function(e){Object(r.a)(a,e);var t=Object(g.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-7"},o.a.createElement(h,null),o.a.createElement(k,null)),o.a.createElement("div",{className:"col-5 mt-5"},o.a.createElement(f,null)))),o.a.createElement(p,null))}}]),a}(i.Component);var w=function(){return o.a.createElement("div",null,o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(27),a(28),a(29);var N=a(7),O=[{id:"topcloth_1",type:"topclothes",name:"Top Cloth 1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth1_show.jpg",imgSrc_png:"./images/clothes/topcloth1.png"},{id:"topcloth_2",type:"topclothes",name:"Top Cloth 2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth2_show.jpg",imgSrc_png:"./images/clothes/topcloth2.png"},{id:"topcloth_3",type:"topclothes",name:"Top Cloth 3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth3_show.jpg",imgSrc_png:"./images/clothes/topcloth3.png"},{id:"topcloth_4",type:"topclothes",name:"Top Cloth 4",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth4_show.jpg",imgSrc_png:"./images/clothes/topcloth4.png"},{id:"topcloth_5",type:"topclothes",name:"Top Cloth 5",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth5_show.jpg",imgSrc_png:"./images/clothes/topcloth5.png"},{id:"topcloth_6",type:"topclothes",name:"Top Cloth ",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth6_show.jpg",imgSrc_png:"./images/clothes/topcloth6.png"},{id:"botcloth_1",type:"botclothes",name:"Bot Cloth 1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth1_show.jpg",imgSrc_png:"./images/clothes/botcloth1.png"},{id:"botcloth_2",type:"botclothes",name:"Bot Cloth 2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth2_show.jpg",imgSrc_png:"./images/clothes/botcloth2.png"},{id:"botcloth_3",type:"botclothes",name:"Bot Cloth 3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth3_show.jpg",imgSrc_png:"./images/clothes/botcloth3.png"},{id:"botcloth_4",type:"botclothes",name:"Bot Cloth 4",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth4_show.jpg",imgSrc_png:"./images/clothes/botcloth4.png"},{id:"botcloth_5",type:"botclothes",name:"Bot Cloth 5",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth5_show.jpg",imgSrc_png:"./images/clothes/botcloth5.png"},{id:"shoes_1",type:"shoes",name:"Shoes 1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes1_show.jpg",imgSrc_png:"./images/shoes/shoes1.png"},{id:"shoes_2",type:"shoes",name:"Shoes 2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes2_show.jpg",imgSrc_png:"./images/shoes/shoes2.png"},{id:"shoes_3",type:"shoes",name:"Shoes 3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes3_show.jpg",imgSrc_png:"./images/shoes/shoes3.png"},{id:"shoes_4",type:"shoes",name:"Shoes 4",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes4_show.jpg",imgSrc_png:"./images/shoes/shoes4.png"},{id:"shoes_5",type:"shoes",name:"Shoes 5",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes5_show.jpg",imgSrc_png:"./images/shoes/shoes5.png"},{id:"handbag_1",type:"handbags",name:"Handbag 1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/handbags/handbag1_show.jpg",imgSrc_png:"./images/handbags/handbag1.png"},{id:"handbag_2",type:"handbags",name:"Handbag 2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/handbags/handbag2_show.jpg",imgSrc_png:"./images/handbags/handbag2.png"},{id:"handbag_3",type:"handbags",name:"Handbag 3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/handbags/handbag3_show.jpg",imgSrc_png:"./images/handbags/handbag3.png"},{id:"necklace_1",type:"necklaces",name:"Necklace 1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/necklaces/necklace1_show.jpg",imgSrc_png:"./images/necklaces/necklace1.png"},{id:"necklace_2",type:"necklaces",name:"Necklace 2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/necklaces/necklace2_show.jpg",imgSrc_png:"./images/necklaces/necklace2.png"},{id:"necklace_3",type:"necklaces",name:"Necklace 3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/necklaces/necklace3_show.jpg",imgSrc_png:"./images/necklaces/necklace3.png"},{id:"hairstyle_1",type:"hairstyle",name:"Hairstyle 1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/hairstyle/hairstyle1_show.jpg",imgSrc_png:"./images/hairstyle/hairstyle1.png"},{id:"hairstyle_2",type:"hairstyle",name:"Hairstyle 2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/hairstyle/hairstyle2_show.jpg",imgSrc_png:"./images/hairstyle/hairstyle2.png"},{id:"hairstyle_3",type:"hairstyle",name:"Hairstyle 3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/hairstyle/hairstyle3_show.jpg",imgSrc_png:"./images/hairstyle/hairstyle3.png"},{id:"background_1",type:"background",name:"Background 1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background1_show.jpg",imgSrc_png:"./images/background/background1.jpg"},{id:"background_2",type:"background",name:"Background 2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background2_show.jpg",imgSrc_png:"./images/background/background2.jpg"},{id:"background_3",type:"background",name:"Background 3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background3_show.jpg",imgSrc_png:"./images/background/background3.jpg"},{id:"background_4",type:"background",name:"Background 4",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background4_show.jpg",imgSrc_png:"./images/background/background4.jpg"},{id:"background_5",type:"background",name:"Background 5",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background5_show.jpg",imgSrc_png:"./images/background/background5.jpg"},{id:"background_6",type:"background",name:"Background 6",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background6_show.jpg",imgSrc_png:"./images/background/background6.jpg"},{id:"background_7",type:"background",name:"Background 7",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/background/background7_show.jpg",imgSrc_png:"./images/background/background7.jpg"}],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type,e},L=[{tabName:"tabTopClothes",showName:"\xc1o",type:"topclothes"},{tabName:"tabBotClothes",showName:"Qu\u1ea7n",type:"botclothes"},{tabName:"tabShoes",showName:"Gi\xe0y d\xe9p",type:"shoes"},{tabName:"tabHandBags",showName:"T\xfai x\xe1ch",type:"handbags"},{tabName:"tabNecklaces",showName:"D\xe2y chuy\u1ec1n",type:"necklaces"},{tabName:"tabHairStyle",showName:"Ki\u1ec3u t\xf3c",type:"hairstyle"},{tabName:"tabBackground",showName:"N\u1ec1n",type:"background"}],A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return t.type,e},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"topclothes",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return e=t.payload;default:return e}},T=a(15),B={topClothes:"",botClothes:"",shoes:"",handbags:"",necklaces:"",hairstyle:"",background:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CLOTH":return e[t.payload.type]=t.payload.img,Object(T.a)({},e);default:return e}},H=Object(N.b)({products:C,categories:A,choosenCategory:q,model:I}),D=Object(N.c)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(o.a.createElement(d.a,{store:D},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.9dafddbc.chunk.js.map