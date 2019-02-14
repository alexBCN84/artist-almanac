(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,n){e.exports=n(297)},167:function(e,t,n){},169:function(e,t,n){},197:function(e,t,n){},199:function(e,t,n){},204:function(e,t){},206:function(e,t){},241:function(e,t){},242:function(e,t){},297:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(123),i=n.n(o),l=n(38),c=n(15),s=(n(167),n(25)),u=n(26),d=n(29),p=n(27),f=n(30),m=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={error:null,errorInfo:null},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0,errorInfo:t}),console.log(t)}},{key:"render",value:function(){return this.state.errorInfo?a.a.createElement("div",null,a.a.createElement("h2",null,"Something went wrong."),a.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),a.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(r.Component),h=(n(169),n(121)),b=n.n(h),g=n(157),v=n(1),E=n(125),y=n(122),O=n.n(y),w=function(e,t){return t.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})},x="M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z",_="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z",j=function(e){var t={svg:Object(v.a)({display:"inline-block",verticalAlign:"middle"},e.style),path:{fill:e.color}};return a.a.createElement("svg",{style:t.svg,width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),viewBox:"0 0 1024 1024"},a.a.createElement("path",{style:t.path,d:e.icon}))};j.defaultProps={size:16};var k=function(e){return a.a.createElement("a",{style:Object(v.a)({},e.style),href:e.href},a.a.createElement(j,{icon:x,color:"#fff",size:30,style:{backgroundColor:"#3C5B96",borderRadius:3}}))},A=function(e){return a.a.createElement("a",{style:Object(v.a)({},e.style),href:e.href},a.a.createElement(j,{icon:_,color:"#757575",size:30,style:{display:"inline-block",width:"1.5em",height:"1.5em",strokeWidth:0,backgroundColor:"rgba(0, 0, 0, 0)"}}))},S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).fetchArtistData=function(){var e=Object(E.a)(b.a.mark(function e(t){var r,a,o,i,l,c,s,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements.artist.value,e.next=4,O.a.get("https://rest.bandsintown.com/artists/".concat(r,"?app_id=fortuna"));case 4:return a=e.sent,e.next=7,O.a.get("https://rest.bandsintown.com/artists/".concat(r,"/events?app_id=fortuna"));case 7:o=e.sent,i=a.data,l=o.data,c=w(i,["name","id","image_url","facebook_page_url","upcoming_event_count"]),s=l.map(function(e){return{id:e.id,venue:e.venue.name,city:e.venue.city,country:e.venue.country,date:e.datetime}}),u={profile:Object(v.a)({},c),events:Object(g.a)(s)},n.persistData(u),n.refs.artist.value="";case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.persistData=function(e){if(n.props.storedArtists.length>0){var t=e.profile.id;return n.props.storedArtists.map(function(e){return e.profile_id}).includes(t)?null:n.props.onStoreArtist(e)}n.props.onStoreArtist(e)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.fetchArtistData},a.a.createElement("div",null,a.a.createElement("input",{style:{position:"relative",fontSize:16,color:"#8f8f8f",fontWeight:500,height:40,marginTop:15,width:"100%",border:"1px solid #cdcdcd",borderRadius:5,boxShadow:"0 1px 3px 0 rgba(0,0,0,.08)",padding:"0 10px 0 37px",outline:"none",boxSizing:"border-box",backgroundColor:"transparent"},ref:"artist",type:"text",name:"artist",placeholder:"enter artist name"}),a.a.createElement("button",{style:{position:"absolute",top:40,right:20,border:"none",backgroundColor:"transparent",outline:0},id:"get-artist",type:"submit"},a.a.createElement(A,null))))}}]),t}(r.Component),R=Object(c.b)(function(e){return{storedArtists:e.art.artists}},function(e){return{onStoreArtist:function(t){return e({type:"ADD_ARTIST",artist:t})}}})(S),C=function(e){var t=Object(v.a)({margin:"1rem 0",padding:"1em 1em",boxShadow:"0 1px 2px 0 rgba(34,36,38,.15)",backgroundColor:"#fff",borderRadius:".28571429rem",border:"1px solid rgba(34,36,38,.15)",height:450,overflowY:"hidden"},e.style);return a.a.createElement("article",{style:t},e.children)},D=function(e){var t=function(e){var t=e.substring(0,10).split("-"),n={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},r=t[2],a=parseInt(t[1],10).toString(),o=t[0],i="";for(var l in n)a===l&&(i=n[l]);return{day:r,month:i,year:o}}(e.date),n={position:"relative",width:"90%",margin:"5%",border:"1px solid #57B3B1",backgroundColor:"#57B3B1",boxShadow:"0 3px 15px 0 rgba(0,0,0,.09)",borderRadius:4},r={position:"absolute",right:5,top:3,color:"#fff",fontSize:10},o={backgroundColor:"#fff",color:"#57B3B1",paddingLeft:5,paddingRight:5,borderLeft:"1px solid rgba(0,0,0,.09)",borderRight:"1px solid rgba(0,0,0,.09)",borderRadius:4},i={position:"absolute",display:"inline-block",color:"#fff",fontSize:15,left:10,fontWeight:800};return a.a.createElement("section",{style:Object(v.a)({},n)},a.a.createElement("span",{id:"day",style:Object(v.a)({},i)},t.day),a.a.createElement("span",{id:"month",style:Object(v.a)({},o)},t.month),a.a.createElement("span",{id:"year",style:Object(v.a)({},r)},t.year))},M=function(e){var t={display:"inline-block",width:"50%",paddingBottom:5,backgroundColor:"#E4E4E4"},n={card:{height:50},text:{fontSize:"2vh"}};return a.a.createElement("section",{style:{position:"relative",borderRadius:4,boxShadow:"0 3px 15px 0 rgba(0,0,0,.09)",overflow:"hidden",width:"100%",height:"100%"}},a.a.createElement("div",{style:t},a.a.createElement("strong",{style:{marginLeft:3,fontSize:9,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",textAlign:"right"}},e.city)),a.a.createElement("div",{style:t},a.a.createElement("span",{style:{fontSize:7,justifyContent:"right",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",textAlign:"right"}},e.country)),a.a.createElement("div",{style:n.card},a.a.createElement("p",{style:n.text},e.venue)),a.a.createElement(D,{date:e.date}))},T=function(e){var t={position:"relative",width:"100%",height:200,backgroundImage:""!==e.profile_image&&"url(".concat(e.profile_image,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",borderRadius:2};return a.a.createElement("section",null,a.a.createElement("header",{style:t},""!==e.profile_facebook&&a.a.createElement(k,{style:{position:"absolute",top:5,right:5},href:e.profile_facebook})),a.a.createElement("h1",{style:{color:"#57B3B1",fontFamily:"'Rajdhani', sans-serif",fontSize:20,fontWeight:400,marginTop:5,letterSpacing:3.5}},e.profile_name),a.a.createElement("p",{style:{color:"#A8A8A8",fontSize:".8em",marginTop:-20}},e.profile_upcoming_event_count>1?"".concat(e.profile_upcoming_event_count," upcoming events"):1===e.profile_upcoming_event_count?"1 upcoming event":"No upcoming events"))},B=function(e){return e.children},z=function(e){return a.a.createElement(B,null,e.children)},I=n(13),F=n(21),W="@media screen and (min-width: 0px)",L="@media screen and (min-width: 480px)",J="@media screen and (min-width: 768px)",N="@media screen and (min-width: 1024px)",H="@media screen and (min-width: 1280px)",P=Object(F.a)(function(e){var t={width:"100%",maxWidth:(e.fullWidth?"100%":e.maxWidth&&e.maxWidth)||"1200px",margin:"0 auto"},n=e.children,r=a.a.Children.map(n,function(t){return a.a.cloneElement(t,{gutters:e.gutters,reverse:e.reverse})});return a.a.createElement("div",{style:Object(v.a)({},t,e.style)},r)}),V=Object(F.a)(function(e){var t=e.align&&"left"===e.align?"flex-start":e.align&&"right"===e.align?"flex-end":"space-between"===e.align||"space-around"===e.align||"space-evenly"===e.align?e.align:"center",n={marginLeft:e.gutters?-e.gutters/2:-16,marginRight:e.gutters?-e.gutters/2:-16,padding:0,display:"flex",flexWrap:"wrap",justifyContent:t,flexFlow:e.reverse?"row-reverse wrap":"wrap"},r=e.children,o=a.a.Children.map(r,function(t){return a.a.cloneElement(t,{gutters:e.gutters,totalCols:e.totalCols||12})});return a.a.createElement("div",{style:Object(v.a)({},n,e.style)},o)}),q=Object(F.a)(function(e){var t,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=100/t;if(0===e)return 0;if(e<0||e%1!==0)return function(){throw"".concat(e," is not a valid number for this row")}();if(e>t)return function(){throw"the maximum number of columns for this row is ".concat(t)}();var a=void 0===e?null:{width:"".concat(r*e,"%")},o=void 0===n?null:{marginLeft:"".concat(r*n,"%")};return Object(v.a)({display:0===e?"none":"block"},a,o)},r=e.width,o=e.mobile,i=e.phablet,l=e.tablet,c=e.desktop,s=e.wideDesktop,u=e.totalCols,d=e.offset,p=e.mobileOffset,f=e.phabletOffset,m=e.tabletOffset,h=e.desktopOffset,b=e.wideDesktopOffset;if(void 0===r&&void 0===o&&void 0===i&&void 0===l&&void 0===c&&void 0===s)return function(){throw"Use at least one of the following props to assign column span: width, mobile, phablet, tablet, desktop, wideDesktop."}();var g=Object(v.a)({position:"relative",padding:0===e.gutters?0:e.gutters/2||16},n(r,u,d),(t={},Object(I.a)(t,W,Object(v.a)({},n(o,u,p))),Object(I.a)(t,L,Object(v.a)({},n(i,u,f))),Object(I.a)(t,J,Object(v.a)({},n(l,u,m))),Object(I.a)(t,N,Object(v.a)({},n(c,u,h))),Object(I.a)(t,H,Object(v.a)({},n(s,u,b))),t));return a.a.createElement("div",{style:Object(v.a)({},g,e.style)},e.children)}),K=Object(c.b)(function(e){return{storedArtists:e.art.artists}},function(e){return{onRemoveArtist:function(t){return e({type:"REMOVE_ARTIST",artistId:t})},onAddEventsToModal:function(t){return e({type:"ADD_ARTIST_TO_MODAL",add_artist:t})},onRemoveArtistFromModal:function(){return e({type:"REMOVE_ARTIST_FROM_MODAL"})}}})(function(e){var t={padding:7,lineHeight:"1.4em",fontSize:".8em",color:"#fff",fontWeight:800,textAlign:"center",borderRadius:4,border:"1px solid #000",width:"80%",outline:0},n={width:"100%",padding:7,backgroundColor:"#1B1C1C",lineHeight:"1.4em",fontSize:".8em",color:"#fff",textAlign:"center",borderRadius:4,border:"1px solid #000"},r=Object(v.a)({},t,{backgroundColor:"#E55451",border:"1px solid #E55451"}),o=Object(v.a)({},t,{margin:20,backgroundColor:"#57B3B1",border:"1px solid #57B3B1",textTransform:"uppercase"});return a.a.createElement(P,null,a.a.createElement(V,null,e.storedArtists.map(function(t){return a.a.createElement(q,{mobile:12,phablet:6,tablet:5,desktop:3,key:t.id},a.a.createElement(C,null,a.a.createElement(T,w(t,["profile_facebook","profile_id","profile_image","profile_name","profile_upcoming_event_count"])),a.a.createElement(z,null,a.a.createElement(P,{gutters:10},a.a.createElement(V,null,function(e){var t=e.events;return 0===t.length?a.a.createElement(q,{mobile:8},a.a.createElement("p",{style:n},"There are no upcoming events for ",e.profile_name)):t.length>2?t.slice(0,2).map(function(e){return a.a.createElement(q,{mobile:5,key:e.id},a.a.createElement(M,e))}):void 0}(t))),t.events.length>=2&&a.a.createElement("button",{onClick:function(){return e.onAddEventsToModal(t.events)},style:o},"See all the events"))),a.a.createElement("button",{style:r,onClick:function(){return e.onRemoveArtist(t.id)}},"Remove ".concat(t.profile_name)))})))}),Q=n(117),U=function(e){var t=Object(v.a)({backgroundColor:"#2D2D2D",heigth:"auto",minHeight:50,padding:"20px 20%",borderTop:"1px solid rgba(34,36,38,.15)",color:"#fff",fontFamily:"'Merriweather', serif"},e.style);return a.a.createElement("footer",{style:t},a.a.createElement(P,null,a.a.createElement(V,null,a.a.createElement(q,{mobile:12},a.a.createElement("p",null,"to find more about popular events in your city visit")),a.a.createElement(q,{mobile:12},a.a.createElement("a",{style:{textDecoration:"none",color:"#2D2D2D",letterSpacing:1.5,padding:10,backgroundColor:"#fff",border:"1px solid rgba(34,36,38,.15)",boxShadow:"0 1px 2px 0 rgba(34,36,38,.15)",borderRadius:5},href:"https://www.bandsintown.com/"},a.a.createElement("strong",null,"Brandsintown"))))))},X=function(e){var t=Object(v.a)({backgroundColor:"#F2F3F5"},e.style);return a.a.createElement("div",{style:t},e.children,a.a.createElement(U,null))},Y=Object(F.a)(function(e){var t,n=Object(v.a)((t={width:"100%",zIndex:"2",position:"fixed",backgroundColor:"#fff",borderBottom:"1px solid #cdcdcd"},Object(I.a)(t,W,{height:"200px"}),Object(I.a)(t,J,{height:"100px"}),t),e.style);return a.a.createElement("header",{style:n},a.a.createElement(P,{style:{width:"90%"}},a.a.createElement(V,null,a.a.createElement(q,{mobile:12,tablet:6},a.a.createElement("h1",{style:{fontFamily:"'Raleway', sans-serif",color:"#57B3B1",fontWeight:800,marginTop:10}},"The Artist Almanac")),a.a.createElement(q,{mobile:8,tablet:4},e.children))))}),$=function(e){var t=Object(v.a)({backgroundColor:"#EDEDED",paddingBottom:60},e.style);return a.a.createElement("div",{style:t},e.children)},G=function(){var e={color:"#fff",textShadow:"0 1px 2px 0 rgba(34,36,38,.15)",fontFamily:"'Abel', sans-serif",fontWeight:800,letterSpacing:2,textTransform:"uppercase",fontSize:"1.5em"};return a.a.createElement("section",{style:{width:"100%",height:"50vh",paddingTop:"30vh",backgroundImage:"url('https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",backgroundSize:"cover",backgroundAttachment:"fixed"}},a.a.createElement("h1",{style:e},"Find your favourite Artists"),a.a.createElement("h1",{style:e},"Access their Facebook Profiles"),a.a.createElement("h1",{style:e},"Keep up with their upcoming events"))},Z=(n(197),Object(c.b)(null,function(e){return{onRemoveArtistFromModal:function(){return e({type:"REMOVE_ARTIST_FROM_MODAL"})}}})(function(e){return a.a.createElement("div",{className:"Modal ModalOpen"},a.a.createElement(z,{style:{position:"relative"}},a.a.createElement(P,{gutters:10},a.a.createElement(V,null,e.events.map(function(e){return a.a.createElement(q,{mobile:12,phablet:5,tablet:3,key:e.id},a.a.createElement(M,Object.assign({style:{height:"auto"}},e)))})))),a.a.createElement("button",{style:{position:"absolute",top:0,left:0,padding:7,lineHeight:"1.4em",color:"#fff",fontWeight:800,textAlign:"center",boxShadow:"0 3px 15px 0 rgba(0,0,0,.09)",backgroundColor:"#57B3B1",fontSize:10,outline:0},onClick:e.onRemoveArtistFromModal}," X"))})),ee=(n(199),function(e){var t=["Backdrop",e.show?"BackdropOpen":"BackdropClosed"];return a.a.createElement("div",{className:t.join(" ")})}),te=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(Q.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(X,null,this.props.isModalOpen&&a.a.createElement(B,null,a.a.createElement(Z,{events:this.props.eventsInModal})," ",a.a.createElement(ee,{show:this.props.isModalOpen})),a.a.createElement(Y,null,a.a.createElement(m,null,a.a.createElement(R,null))),a.a.createElement(G,null),this.props.storedArtists.length>0&&a.a.createElement($,null,a.a.createElement(m,null,a.a.createElement(K,null))))))}}]),t}(r.Component),ne=Object(c.b)(function(e){return{storedArtists:e.art.artists,eventsInModal:e.mod.events_in_modal,isModalOpen:e.mod.is_modal_open}})(te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=n(154),ae={artists:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ARTIST":return Object(v.a)({},e,{artists:e.artists.concat({id:Object(re.v4)(),profile_name:t.artist.profile.name,profile_id:t.artist.profile.id,profile_image:t.artist.profile.image_url,profile_facebook:t.artist.profile.facebook_page_url,profile_upcoming_event_count:t.artist.profile.upcoming_event_count,events:t.artist.events})});case"REMOVE_ARTIST":var n=e.artists.filter(function(e){return e.id!==t.artistId});return Object(v.a)({},e,{artists:n})}return e},ie={events_in_modal:[],is_modal_open:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ARTIST_TO_MODAL":return Object(v.a)({},e,{is_modal_open:!0,events_in_modal:t.add_artist});case"REMOVE_ARTIST_FROM_MODAL":return Object(v.a)({},e,{is_modal_open:!1,events_in_modal:[]})}return e},ce=n(155),se=n.n(ce),ue=n(156),de=n.n(ue);se.a.load({google:{families:["Major Mono Display","cursive","PT Sans","sans-serif","Comfortaa","Rajdhani","Merriweather","Raleway","Abel"]}});var pe=Object(l.b)({art:oe,mod:le}),fe=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),me=Object(l.c)(pe,fe);me.subscribe(de()(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}(me.getState())},1e3)),i.a.render(a.a.createElement(c.a,{store:me},a.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,2,1]]]);
//# sourceMappingURL=main.a76a535f.chunk.js.map