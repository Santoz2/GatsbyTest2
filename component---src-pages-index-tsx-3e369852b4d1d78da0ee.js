(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QeBL:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("Wbzz"),c=a("Z9I9"),l=a("soUV"),o=a("3mGJ"),s=a("yE/o"),u=a("aQu0"),d=(a("RIqP"),a("pVnL")),m=a.n(d),p=a("lwsE"),b=a.n(p),v=a("W8MJ"),h=a.n(v),f=a("a1gu"),E=a.n(f),O=a("Nsbk"),g=a.n(O),j=a("PJYZ"),y=a.n(j),N=a("7W2i"),q=a.n(N),k=a("lSNA"),w=a.n(k),x=a("Og4/"),C=a.n(x),P=a("J2iB"),L=a.n(P),I=a("TSYQ"),A=a.n(I),z=(a("17x9"),a("1yEx")),T=a("H+2d"),D=a("ZeOK"),R=a("ICNK"),G=a("Y53p"),J=a("MZgk"),V=a("D1pA"),B=a("MqQV");function K(e){var t=e.children,a=e.className,i=e.content,r=e.hidden,c=e.visible,l=A()(Object(D.a)(c,"visible"),Object(D.a)(r,"hidden"),"content",a),o=Object(R.a)(K,e),s=Object(G.a)(K,e);return n.a.createElement(s,m()({},o,{className:l}),T.a.isNil(t)?i:t)}K.handledProps=["as","children","className","content","hidden","visible"],K.propTypes={};var Q=K,W=a("3WF5"),Z=a.n(W);function M(e){var t=e.attached,a=e.basic,i=e.buttons,r=e.children,c=e.className,l=e.color,o=e.compact,s=e.content,u=e.floated,d=e.fluid,p=e.icon,b=e.inverted,v=e.labeled,h=e.negative,f=e.positive,E=e.primary,O=e.secondary,g=e.size,j=e.toggle,y=e.vertical,N=e.widths,q=A()("ui",l,g,Object(D.a)(a,"basic"),Object(D.a)(o,"compact"),Object(D.a)(d,"fluid"),Object(D.a)(p,"icon"),Object(D.a)(b,"inverted"),Object(D.a)(v,"labeled"),Object(D.a)(h,"negative"),Object(D.a)(f,"positive"),Object(D.a)(E,"primary"),Object(D.a)(O,"secondary"),Object(D.a)(j,"toggle"),Object(D.a)(y,"vertical"),Object(D.b)(t,"attached"),Object(D.e)(u,"floated"),Object(D.g)(N),"buttons",c),k=Object(R.a)(M,e),w=Object(G.a)(M,e);return L()(i)?n.a.createElement(w,m()({},k,{className:q}),T.a.isNil(r)?s:r):n.a.createElement(w,m()({},k,{className:q}),Z()(i,(function(e){return U.create(e)})))}M.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],M.propTypes={};var Y=M;function S(e){var t=e.className,a=e.text,i=A()("or",t),r=Object(R.a)(S,e),c=Object(G.a)(S,e);return n.a.createElement(c,m()({},r,{className:i,"data-text":a}))}S.handledProps=["as","className","text"],S.propTypes={};var F=S,H=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=E()(this,(e=g()(t)).call.apply(e,[this].concat(r))),w()(y()(a),"ref",Object(i.createRef)()),w()(y()(a),"computeElementType",(function(){var e=a.props,t=e.attached,i=e.label;if(!L()(t)||!L()(i))return"div"})),w()(y()(a),"computeTabIndex",(function(e){var t=a.props,i=t.disabled,n=t.tabIndex;return L()(n)?i?-1:"div"===e?0:void 0:n})),w()(y()(a),"focus",(function(){return C()(a.ref.current,"focus")})),w()(y()(a),"handleClick",(function(e){a.props.disabled?e.preventDefault():C()(a.props,"onClick",e,a.props)})),w()(y()(a),"hasIconClass",(function(){var e=a.props,t=e.labelPosition,i=e.children,n=e.content,r=e.icon;return!0===r||r&&(t||T.a.isNil(i)&&L()(n))})),a}return q()(t,e),h()(t,[{key:"computeButtonAriaRole",value:function(e){var t=this.props.role;return L()(t)?"button"!==e?"button":void 0:t}},{key:"render",value:function(){var e=this.props,a=e.active,i=e.animated,r=e.attached,c=e.basic,l=e.children,o=e.circular,s=e.className,u=e.color,d=e.compact,p=e.content,b=e.disabled,v=e.floated,h=e.fluid,f=e.icon,E=e.inverted,O=e.label,g=e.labelPosition,j=e.loading,y=e.negative,N=e.positive,q=e.primary,k=e.secondary,w=e.size,x=e.toggle,C=A()(u,w,Object(D.a)(a,"active"),Object(D.a)(c,"basic"),Object(D.a)(o,"circular"),Object(D.a)(d,"compact"),Object(D.a)(h,"fluid"),Object(D.a)(this.hasIconClass(),"icon"),Object(D.a)(E,"inverted"),Object(D.a)(j,"loading"),Object(D.a)(y,"negative"),Object(D.a)(N,"positive"),Object(D.a)(q,"primary"),Object(D.a)(k,"secondary"),Object(D.a)(x,"toggle"),Object(D.b)(i,"animated"),Object(D.b)(r,"attached")),P=A()(Object(D.b)(g||!!O,"labeled")),I=A()(Object(D.a)(b,"disabled"),Object(D.e)(v,"floated")),J=Object(R.a)(t,this.props),K=Object(G.a)(t,this.props,this.computeElementType),Q=this.computeTabIndex(K);if(!L()(O)){var W=A()("ui",C,"button",s),Z=A()("ui",P,"button",s,I),M=B.a.create(O,{defaultProps:{basic:!0,pointing:"left"===g?"right":"left"},autoGenerateKey:!1});return n.a.createElement(K,m()({},J,{className:Z,onClick:this.handleClick}),"left"===g&&M,n.a.createElement(z.a,{innerRef:this.ref},n.a.createElement("button",{className:W,"aria-pressed":x?!!a:void 0,disabled:b,tabIndex:Q},V.a.create(f,{autoGenerateKey:!1})," ",p)),("right"===g||!g)&&M)}var Y=A()("ui",C,I,P,"button",s),S=!T.a.isNil(l),F=this.computeButtonAriaRole(K);return n.a.createElement(z.a,{innerRef:this.ref},n.a.createElement(K,m()({},J,{className:Y,"aria-pressed":x?!!a:void 0,disabled:b&&"button"===K||void 0,onClick:this.handleClick,role:F,tabIndex:Q}),S&&l,!S&&V.a.create(f,{autoGenerateKey:!1}),!S&&p))}}]),t}(i.Component);w()(H,"defaultProps",{as:"button"}),w()(H,"Content",Q),w()(H,"Group",Y),w()(H,"Or",F),w()(H,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]),H.propTypes={},H.create=Object(J.c)(H,(function(e){return{content:e}}));var U=H,X=a("+6Dn");t.default=Object(l.b)((function(e){return i.createElement("div",null,i.createElement(o.a,{vertical:!0,inverted:!0,textAlign:"center",className:"masthead"},i.createElement(c.a,{Link:r.Link,pathname:e.location.pathname,items:l.a,inverted:!0}),i.createElement(s.a,{text:!0},i.createElement(u.a,{inverted:!0,as:"h1"},"Empowering the Environment, Together"),i.createElement(u.a,{inverted:!0,as:"h2"},"Build a community of climate enthusiasts, challenge your friends, and create change."),i.createElement(U,{primary:!0,size:"huge"},"Get started!"))),i.createElement(o.a,{vertical:!0,className:"stripe"},i.createElement(X.a,{stackable:!0,verticalAlign:"middle",className:"container"},i.createElement(X.a.Row,null,i.createElement(X.a.Column,{width:"8"},i.createElement(u.a,null,"Lorem ipsum"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),i.createElement(u.a,null,"Dolor sit amet"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.")),i.createElement(X.a.Column,{width:"6",floated:"right"},i.createElement(u.a,null,"Lorem ipsum"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),i.createElement(u.a,null,"Dolor sit amet"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."))))),i.createElement(o.a,{vertical:!0,className:"stripe alternate feature"},i.createElement(X.a,{columns:"3",textAlign:"center",divided:!0,relaxed:!0,stackable:!0,className:"container"},i.createElement(X.a.Row,null,i.createElement(X.a.Column,null,i.createElement(u.a,{icon:!0},i.createElement(V.a,{name:"wizard"}),"A kind of magic!"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),i.createElement(X.a.Column,null,i.createElement(u.a,{icon:!0},i.createElement(V.a,{name:"wizard"}),"A kind of magic!"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),i.createElement(X.a.Column,null,i.createElement(u.a,{icon:!0},i.createElement(V.a,{name:"wizard"}),"A kind of magic!"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat."))))))}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3e369852b4d1d78da0ee.js.map