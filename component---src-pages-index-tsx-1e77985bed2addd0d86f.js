(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QeBL:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("Wbzz"),c=a("Z9I9"),l=a("soUV"),o=a("3mGJ"),s=a("yE/o"),u=a("aQu0"),d=(a("RIqP"),a("pVnL")),m=a.n(d),p=a("lwsE"),b=a.n(p),v=a("W8MJ"),h=a.n(v),f=a("a1gu"),E=a.n(f),O=a("Nsbk"),j=a.n(O),g=a("PJYZ"),y=a.n(g),N=a("7W2i"),q=a.n(N),k=a("lSNA"),x=a.n(k),w=a("Og4/"),C=a.n(w),P=a("J2iB"),I=a.n(P),L=a("TSYQ"),A=a.n(L),z=(a("17x9"),a("1yEx")),T=a("H+2d"),D=a("ZeOK"),R=a("ICNK"),G=a("Y53p"),J=a("MZgk"),V=a("D1pA"),K=a("MqQV");function B(e){var t=e.children,a=e.className,i=e.content,r=e.hidden,c=e.visible,l=A()(Object(D.a)(c,"visible"),Object(D.a)(r,"hidden"),"content",a),o=Object(R.a)(B,e),s=Object(G.a)(B,e);return n.a.createElement(s,m()({},o,{className:l}),T.a.isNil(t)?i:t)}B.handledProps=["as","children","className","content","hidden","visible"],B.propTypes={};var Q=B,S=a("3WF5"),W=a.n(S);function Z(e){var t=e.attached,a=e.basic,i=e.buttons,r=e.children,c=e.className,l=e.color,o=e.compact,s=e.content,u=e.floated,d=e.fluid,p=e.icon,b=e.inverted,v=e.labeled,h=e.negative,f=e.positive,E=e.primary,O=e.secondary,j=e.size,g=e.toggle,y=e.vertical,N=e.widths,q=A()("ui",l,j,Object(D.a)(a,"basic"),Object(D.a)(o,"compact"),Object(D.a)(d,"fluid"),Object(D.a)(p,"icon"),Object(D.a)(b,"inverted"),Object(D.a)(v,"labeled"),Object(D.a)(h,"negative"),Object(D.a)(f,"positive"),Object(D.a)(E,"primary"),Object(D.a)(O,"secondary"),Object(D.a)(g,"toggle"),Object(D.a)(y,"vertical"),Object(D.b)(t,"attached"),Object(D.e)(u,"floated"),Object(D.g)(N),"buttons",c),k=Object(R.a)(Z,e),x=Object(G.a)(Z,e);return I()(i)?n.a.createElement(x,m()({},k,{className:q}),T.a.isNil(r)?s:r):n.a.createElement(x,m()({},k,{className:q}),W()(i,(function(e){return H.create(e)})))}Z.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],Z.propTypes={};var M=Z;function Y(e){var t=e.className,a=e.text,i=A()("or",t),r=Object(R.a)(Y,e),c=Object(G.a)(Y,e);return n.a.createElement(c,m()({},r,{className:i,"data-text":a}))}Y.handledProps=["as","className","text"],Y.propTypes={};var U=Y,F=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=E()(this,(e=j()(t)).call.apply(e,[this].concat(r))),x()(y()(a),"ref",Object(i.createRef)()),x()(y()(a),"computeElementType",(function(){var e=a.props,t=e.attached,i=e.label;if(!I()(t)||!I()(i))return"div"})),x()(y()(a),"computeTabIndex",(function(e){var t=a.props,i=t.disabled,n=t.tabIndex;return I()(n)?i?-1:"div"===e?0:void 0:n})),x()(y()(a),"focus",(function(){return C()(a.ref.current,"focus")})),x()(y()(a),"handleClick",(function(e){a.props.disabled?e.preventDefault():C()(a.props,"onClick",e,a.props)})),x()(y()(a),"hasIconClass",(function(){var e=a.props,t=e.labelPosition,i=e.children,n=e.content,r=e.icon;return!0===r||r&&(t||T.a.isNil(i)&&I()(n))})),a}return q()(t,e),h()(t,[{key:"computeButtonAriaRole",value:function(e){var t=this.props.role;return I()(t)?"button"!==e?"button":void 0:t}},{key:"render",value:function(){var e=this.props,a=e.active,i=e.animated,r=e.attached,c=e.basic,l=e.children,o=e.circular,s=e.className,u=e.color,d=e.compact,p=e.content,b=e.disabled,v=e.floated,h=e.fluid,f=e.icon,E=e.inverted,O=e.label,j=e.labelPosition,g=e.loading,y=e.negative,N=e.positive,q=e.primary,k=e.secondary,x=e.size,w=e.toggle,C=A()(u,x,Object(D.a)(a,"active"),Object(D.a)(c,"basic"),Object(D.a)(o,"circular"),Object(D.a)(d,"compact"),Object(D.a)(h,"fluid"),Object(D.a)(this.hasIconClass(),"icon"),Object(D.a)(E,"inverted"),Object(D.a)(g,"loading"),Object(D.a)(y,"negative"),Object(D.a)(N,"positive"),Object(D.a)(q,"primary"),Object(D.a)(k,"secondary"),Object(D.a)(w,"toggle"),Object(D.b)(i,"animated"),Object(D.b)(r,"attached")),P=A()(Object(D.b)(j||!!O,"labeled")),L=A()(Object(D.a)(b,"disabled"),Object(D.e)(v,"floated")),J=Object(R.a)(t,this.props),B=Object(G.a)(t,this.props,this.computeElementType),Q=this.computeTabIndex(B);if(!I()(O)){var S=A()("ui",C,"button",s),W=A()("ui",P,"button",s,L),Z=K.a.create(O,{defaultProps:{basic:!0,pointing:"left"===j?"right":"left"},autoGenerateKey:!1});return n.a.createElement(B,m()({},J,{className:W,onClick:this.handleClick}),"left"===j&&Z,n.a.createElement(z.a,{innerRef:this.ref},n.a.createElement("button",{className:S,"aria-pressed":w?!!a:void 0,disabled:b,tabIndex:Q},V.a.create(f,{autoGenerateKey:!1})," ",p)),("right"===j||!j)&&Z)}var M=A()("ui",C,L,P,"button",s),Y=!T.a.isNil(l),U=this.computeButtonAriaRole(B);return n.a.createElement(z.a,{innerRef:this.ref},n.a.createElement(B,m()({},J,{className:M,"aria-pressed":w?!!a:void 0,disabled:b&&"button"===B||void 0,onClick:this.handleClick,role:U,tabIndex:Q}),Y&&l,!Y&&V.a.create(f,{autoGenerateKey:!1}),!Y&&p))}}]),t}(i.Component);x()(F,"defaultProps",{as:"button"}),x()(F,"Content",Q),x()(F,"Group",M),x()(F,"Or",U),x()(F,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]),F.propTypes={},F.create=Object(J.c)(F,(function(e){return{content:e}}));var H=F,X=a("+6Dn");t.default=Object(l.b)((function(e){return i.createElement("div",null,i.createElement(o.a,{vertical:!0,inverted:!0,textAlign:"center",className:"masthead"},i.createElement(c.a,{Link:r.Link,pathname:e.location.pathname,items:l.a,inverted:!0}),i.createElement(s.a,{text:!0},i.createElement(u.a,{inverted:!0,as:"h1"},"Gatsby 2.0 - Starter kit"),i.createElement(u.a,{inverted:!0,as:"h2"},"Typescript - Jest - Semantic UI"),i.createElement(H,{primary:!0,size:"huge"},"Get started!"))),i.createElement(o.a,{vertical:!0,className:"stripe"},i.createElement(X.a,{stackable:!0,verticalAlign:"middle",className:"container"},i.createElement(X.a.Row,null,i.createElement(X.a.Column,{width:"8"},i.createElement(u.a,null,"Lorem ipsum"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),i.createElement(u.a,null,"Dolor sit amet"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.")),i.createElement(X.a.Column,{width:"6",floated:"right"},i.createElement(u.a,null,"Lorem ipsum"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),i.createElement(u.a,null,"Dolor sit amet"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."))))),i.createElement(o.a,{vertical:!0,className:"stripe alternate feature"},i.createElement(X.a,{columns:"3",textAlign:"center",divided:!0,relaxed:!0,stackable:!0,className:"container"},i.createElement(X.a.Row,null,i.createElement(X.a.Column,null,i.createElement(u.a,{icon:!0},i.createElement(V.a,{name:"wizard"}),"A kind of magic!"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),i.createElement(X.a.Column,null,i.createElement(u.a,{icon:!0},i.createElement(V.a,{name:"wizard"}),"A kind of magic!"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),i.createElement(X.a.Column,null,i.createElement(u.a,{icon:!0},i.createElement(V.a,{name:"wizard"}),"A kind of magic!"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat."))))))}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1e77985bed2addd0d86f.js.map