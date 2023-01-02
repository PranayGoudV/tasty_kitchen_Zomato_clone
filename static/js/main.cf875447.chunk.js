(this["webpackJsonptasty-kitchens"]=this["webpackJsonptasty-kitchens"]||[]).push([[0],{46:function(t,e,a){},47:function(t,e,a){},81:function(t,e,a){},82:function(t,e,a){},83:function(t,e,a){},84:function(t,e,a){},85:function(t,e,a){},86:function(t,e,a){},87:function(t,e,a){},88:function(t,e,a){},89:function(t,e,a){},90:function(t,e,a){},91:function(t,e,a){},92:function(t,e,a){"use strict";a.r(e);var s=a(2),n=a.n(s),c=a(34),r=a.n(c),i=a(5),o=a(4),l=a(22),u=a(11),d=a.n(u),m=a(1),j=function(t){return void 0===d.a.get("jwt_token")?Object(m.jsx)(o.a,{to:"/login"}):Object(m.jsx)(o.b,Object(l.a)({},t))},b=a(14),h=a(16),p=a(7),g=a(8),O=a(9),x=a(10),f=(a(46),function(t){Object(O.a)(a,t);var e=Object(x.a)(a);function a(){var t;Object(p.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={username:"",password:"",showSubmitError:!1,errorMsg:""},t.onChangeUsername=function(e){t.setState({username:e.target.value})},t.onChangePassword=function(e){t.setState({password:e.target.value})},t.onSubmitSuccess=function(e){var a=t.props.history;d.a.set("jwt_token",e,{expires:30,path:"/"}),a.replace("/")},t.onSubmitFailure=function(e){t.setState({showSubmitError:!0,errorMsg:e})},t.submitForm=function(){var e=Object(h.a)(Object(b.a)().mark((function e(a){var s,n,c,r,i,o,l;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),s=t.state,n=s.username,c=s.password,r={username:n,password:c},"https://apis.ccbp.in/login",i={method:"POST",body:JSON.stringify(r)},e.next=7,fetch("https://apis.ccbp.in/login",i);case 7:return o=e.sent,e.next=10,o.json();case 10:l=e.sent,!0===o.ok?t.onSubmitSuccess(l.jwt_token):t.onSubmitFailure(l.error_msg);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.renderPasswordField=function(){var e=t.state.password;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{className:"input-label",htmlFor:"password",children:"PASSWORD"}),Object(m.jsx)("input",{type:"password",id:"password",className:"password-input-field",value:e,onChange:t.onChangePassword,placeholder:"Password"})]})},t.renderUsernameField=function(){var e=t.state.username;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{className:"input-label",htmlFor:"username",children:"USERNAME"}),Object(m.jsx)("input",{type:"text",id:"username",className:"username-input-field",value:e,onChange:t.onChangeUsername,placeholder:"Username"})]})},t}return Object(g.a)(a,[{key:"render",value:function(){var t=this.state,e=t.showSubmitError,a=t.errorMsg;return void 0!==d.a.get("jwt_token")?Object(m.jsx)(o.a,{to:"/"}):Object(m.jsxs)("div",{className:"login-form-container",children:[Object(m.jsxs)("div",{className:"landing-container",children:[Object(m.jsx)("p",{className:"login-mobile-text",children:"Login"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/nsp/image/upload/v1635304889/tastyKitchens/LoginMobile_1x_iukq3u.jpg",className:"login-image-mobile",alt:"website login"})]}),Object(m.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(m.jsx)("img",{src:"https://res.cloudinary.com/nsp/image/upload/v1635311275/tastyKitchens/websiteLogo_1x_fzy1tx.png",className:"login-website-logo-desktop-image",alt:"website logo"}),Object(m.jsx)("h1",{className:"tasty-text",children:"Tasty Kitchens"}),Object(m.jsx)("h1",{className:"login-text",children:"Login"}),Object(m.jsx)("div",{className:"input-container",children:this.renderUsernameField()}),Object(m.jsx)("div",{className:"input-container",children:this.renderPasswordField()}),e&&Object(m.jsx)("p",{className:"error-message",children:a}),Object(m.jsx)("button",{type:"submit",className:"login-button",children:"Login"})]}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/nsp/image/upload/v1635305272/tastyKitchens/LoginLarge_1x_gfwe0e.jpg",className:"login-image-desktop",alt:"website login"})]})}}]),a}(s.Component)),v=f,N=(a(47),function(t){Object(O.a)(a,t);var e=Object(x.a)(a);function a(){var t;Object(p.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={isMobileMenuClicked:!1},t.onClickLogout=function(){var e=t.props.history;d.a.remove("jwt_token"),e.replace("/login")},t.onClickMenuBar=function(){t.setState((function(t){return{isMobileMenuClicked:!t.isMobileMenuClicked}}))},t.onCloseClicked=function(){t.setState((function(t){return{isMobileMenuClicked:!t.isMobileMenuClicked}}))},t}return Object(g.a)(a,[{key:"render",value:function(){var t=this.state.isMobileMenuClicked;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("nav",{className:"nav-header",children:Object(m.jsxs)("div",{className:"nav-content",children:[Object(m.jsxs)("div",{className:"nav-bar-mobile-logo-container",children:[Object(m.jsx)(i.b,{to:"/",className:"nav-link",children:Object(m.jsxs)("div",{className:"header-logo-container",children:[Object(m.jsx)("img",{className:"website-logo",src:"https://res.cloudinary.com/nsp/image/upload/v1635311275/tastyKitchens/websiteLogo_1x_fzy1tx.png",alt:"website logo"}),Object(m.jsx)("p",{className:"logo-name",children:"Tasty Kitchens"})]})}),Object(m.jsx)("button",{type:"button",className:"nav-mobile-btn",children:Object(m.jsx)("img",{src:"https://res.cloudinary.com/nsp/image/upload/v1635332660/tastyKitchens/menu_1x_fcu8zv.png",alt:"nav menu",className:"nav-bar-image",onClick:this.onClickMenuBar})})]}),Object(m.jsxs)("div",{className:"nav-bar-large-container",children:[Object(m.jsx)(i.b,{to:"/",className:"nav-link",children:Object(m.jsxs)("div",{className:"header-logo-container",children:[Object(m.jsx)("img",{className:"website-logo",src:"https://res.cloudinary.com/nsp/image/upload/v1635311275/tastyKitchens/websiteLogo_1x_fzy1tx.png",alt:"website logo"}),Object(m.jsx)("p",{className:"logo-name",children:"Tasty Kitchens"})]})}),Object(m.jsxs)("ul",{className:"nav-menu",children:[Object(m.jsx)("li",{className:"nav-menu-item",children:Object(m.jsx)(i.b,{to:"/",className:"nav-link",children:"Home"})}),Object(m.jsx)("li",{className:"nav-menu-item",children:Object(m.jsx)(i.b,{to:"/cart",className:"nav-link",children:"Cart"})})]}),Object(m.jsx)("button",{type:"button",className:"logout-desktop-btn",onClick:this.onClickLogout,children:"Logout"})]})]})}),t&&Object(m.jsx)("div",{className:"nav-mobile-only-menu",children:Object(m.jsxs)("div",{className:"nav-menu-mobile",children:[Object(m.jsxs)("div",{className:"nav-menu-container",children:[Object(m.jsxs)("ul",{className:"nav-menu-list-mobile",children:[Object(m.jsx)("li",{className:"nav-menu-item-mobile",children:Object(m.jsx)(i.b,{to:"/",className:"nav-link",children:"Home"})}),Object(m.jsx)("li",{className:"nav-menu-item-mobile",children:Object(m.jsx)(i.b,{to:"/cart",className:"nav-link",children:"Cart"})})]}),Object(m.jsx)("button",{type:"button",className:"logout-desktop-btn-mobile",onClick:this.onClickLogout,children:"Logout"})]}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/nsp/image/upload/v1635332590/tastyKitchens/Shape_vud3fu.png",alt:"nav close",className:"nav-bar-image",onClick:this.onCloseClicked})]})})]})}}]),a}(s.Component)),y=Object(o.g)(N),S=a(19),k=a.n(S),w=a(36),C=a.n(w),I=(a(81),"INITIAL"),_="SUCCESS",D="FAILURE",F="IN_PROGRESS",L=function(t){Object(O.a)(a,t);var e=Object(x.a)(a);function a(){var t;Object(p.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={sliderImages:[],apiStatus:I},t.getSliderImages=Object(h.a)(Object(b.a)().mark((function e(){var a,s,n,c,r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({apiStatus:F}),a=d.a.get("jwt_token"),"https://apis.ccbp.in/restaurants-list/offers",s={headers:{Authorization:"Bearer ".concat(a)},method:"GET"},e.next=6,fetch("https://apis.ccbp.in/restaurants-list/offers",s);case 6:if(!(n=e.sent).ok){e.next=15;break}return e.next=10,n.json();case 10:c=e.sent,r=c.offers.map((function(t){return{id:t.id,imageUrl:t.image_url}})),t.setState({sliderImages:r,apiStatus:_}),e.next=16;break;case 15:t.setState({apiStatus:D});case 16:case"end":return e.stop()}}),e)}))),t.renderSliderListView=function(){var e=t.state.sliderImages;return Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)(C.a,Object(l.a)(Object(l.a)({},{dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,infinite:!0}),{},{children:e.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"slider-image",src:t.imageUrl,alt:"offer"})},t.id)}))}))})},t.renderFailureView=function(){return Object(m.jsx)("div",{className:"slider-error-view-container",children:Object(m.jsx)("h1",{className:"slider-failure-heading-text",children:"Oops! Something Went Wrong"})})},t.renderLoadingView=function(){return Object(m.jsx)("div",{testid:"restaurants-offers-loader",className:"slider-loader-container",children:Object(m.jsx)(k.a,{type:"Oval",color:"#F7931E",height:"50",width:"50"})})},t.renderAllImages=function(){switch(t.state.apiStatus){case _:return t.renderSliderListView();case D:return t.renderFailureView();case F:return t.renderLoadingView();default:return null}},t}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.getSliderImages()}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"slider-image-container",children:this.renderAllImages()})}}]),a}(s.Component),A=L,P=a(18),q=(a(82),function(t){var e=t.sortByOptions,a=t.activeOptionId;return Object(m.jsxs)("div",{className:"restaurant-header",children:[Object(m.jsxs)("div",{className:"header-text-container",children:[Object(m.jsx)("h1",{className:"restaurant-list-heading",children:"Popular Restaurants"}),Object(m.jsx)("p",{className:"restaurant-list-para",children:"Select Your favourite restaurant special dish and make your day happy..."})]}),Object(m.jsxs)("div",{className:"sort-by-container",children:[Object(m.jsx)(P.b,{className:"sort-by-icon"}),Object(m.jsx)("p",{className:"sort-by",children:"Sort by"}),Object(m.jsx)("select",{className:"sort-by-select",value:a,onChange:function(e){(0,t.changeSortBy)(e.target.value)},children:e.map((function(t){return Object(m.jsx)("option",{value:t.value,className:"select-option",children:t.displayText},t.id)}))})]})]})}),R=a(20),M=(a(83),function(t){var e=t.restaurant,a=e.imageUrl,s=e.name,n=e.cuisine,c=e.rating,r=e.totalReviews,o=e.id;return Object(m.jsx)("li",{testid:"restaurant-item",className:"restaurant-item",children:Object(m.jsxs)(i.b,{to:"/restaurant/".concat(o),className:"link-item",children:[Object(m.jsx)("img",{src:a,alt:"restaurant",className:"restaurant-image"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"restaurant-name",children:s}),Object(m.jsx)("p",{className:"restaurant-cuisine",children:n}),Object(m.jsxs)("div",{className:"rating-container",children:[Object(m.jsx)(R.a,{className:"star"}),Object(m.jsx)("p",{className:"rating",children:c}),Object(m.jsxs)("p",{className:"reviews",children:["(",r," rating)"]})]})]})]})})}),T=(a(84),[{id:0,displayText:"Highest",value:"Highest"},{id:2,displayText:"Lowest",value:"Lowest"}]),U="INITIAL",E="SUCCESS",B="FAILURE",K="IN_PROGRESS",V=function(t){Object(O.a)(a,t);var e=Object(x.a)(a);function a(){var t;Object(p.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={restaurantList:[],activeOptionId:"Lowest",currentPage:0,apiStatus:U},t.getRestaurants=Object(h.a)(Object(b.a)().mark((function e(){var a,s,n,c,r,i,o,l,u;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({apiStatus:K}),a=d.a.get("jwt_token"),s=t.state,n=s.activeOptionId,c=s.currentPage,r="https://apis.ccbp.in/restaurants-list?offset=".concat(9*c,"&limit=9&sort_by_rating=").concat(n),i={headers:{Authorization:"Bearer ".concat(a)},method:"GET"},e.next=7,fetch(r,i);case 7:if(!(o=e.sent).ok){e.next=16;break}return e.next=11,o.json();case 11:l=e.sent,u=l.restaurants.map((function(t){return{name:t.name,cuisine:t.cuisine,id:t.id,imageUrl:t.image_url,rating:t.user_rating.rating,totalReviews:t.user_rating.total_reviews}})),t.setState({restaurantList:u,apiStatus:E}),e.next=17;break;case 16:t.setState({apiStatus:B});case 17:case"end":return e.stop()}}),e)}))),t.changeSortBy=function(e){t.setState({activeOptionId:e},t.getRestaurants)},t.renderRestaurantListView=function(){var e=t.state,a=e.restaurantList,s=e.activeOptionId;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(q,{activeOptionId:s,sortByOptions:T,changeSortBy:t.changeSortBy}),Object(m.jsx)("hr",{className:"hr-line"}),Object(m.jsx)("ul",{className:"restaurant-list",children:a.map((function(t){return Object(m.jsx)(M,{restaurant:t},t.id)}))})]})},t.renderFailureView=function(){return Object(m.jsxs)("div",{className:"restaurant-error-view-container",children:[Object(m.jsx)("img",{src:"https://res.cloudinary.com/djjbttpq0/image/upload/v1641968177/Tasty%20Kitchens/erroring_1x_x7gtp8.png",alt:"restaurants failure",className:"restaurant-failure-img"}),Object(m.jsx)("h1",{className:"restaurant-failure-heading-text",children:"Page Not Found"}),Object(m.jsx)("p",{className:"restaurant-failure-description",children:"we are sorry, the page you requested could not be found Please go back to the homepage"}),Object(m.jsx)("button",{className:"error-button",type:"button",children:"Home Page"})]})},t.renderLoadingView=function(){return Object(m.jsx)("div",{testid:"restaurants-list-loader",className:"restaurant-loader-container",children:Object(m.jsx)(k.a,{type:"Oval",color:"#F7931E",height:"50",width:"50"})})},t.renderRestaurants=function(){switch(t.state.apiStatus){case E:return t.renderRestaurantListView();case B:return t.renderFailureView();case K:return t.renderLoadingView();default:return null}},t.leftArrowClicked=function(){t.state.currentPage>0&&t.setState((function(t){return{currentPage:t.currentPage-1}}),t.getRestaurants)},t.rightArrowClicked=function(){t.state.currentPage<3&&t.setState((function(t){return{currentPage:t.currentPage+1}}),t.getRestaurants)},t}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.getRestaurants()}},{key:"render",value:function(){var t=this.state.currentPage;return Object(m.jsxs)("div",{children:[Object(m.jsx)(A,{}),Object(m.jsxs)("div",{className:"all-restaurant-responsive-container",children:[this.renderRestaurants(),Object(m.jsxs)("div",{className:"restaurant-navigation",children:[Object(m.jsx)("button",{type:"button",className:"arrow-button",testid:"pagination-left-button",onClick:this.leftArrowClicked,children:Object(m.jsx)("img",{src:"https://res.cloudinary.com/nsp/image/upload/v1635835069/tastyKitchens/Icon_1x_iq50dr.png",alt:"",className:"arrow"})}),Object(m.jsx)("span",{testid:"active-page-number",className:"current-page",children:t+1}),Object(m.jsx)("button",{type:"button",className:"arrow-button",testid:"pagination-right-button",onClick:this.rightArrowClicked,children:Object(m.jsx)("img",{src:"https://res.cloudinary.com/nsp/image/upload/v1635835103/tastyKitchens/Icon_1x_n6kori.png",alt:"",className:"arrow"})})]})]})]})}}]),a}(s.Component),J=V,Q=a(23),H=(a(85),function(){return Object(m.jsxs)("div",{className:"footer-container",children:[Object(m.jsxs)("div",{className:"footer-heading-container",children:[Object(m.jsx)("img",{src:"https://res.cloudinary.com/nsp/image/upload/v1635840304/tastyKitchens/logowhite_t8wfhc.png",alt:"website-footer-logo",className:"website-footer-logo"}),Object(m.jsx)("h1",{className:"footer-heading",children:"Tasty Kitchens"})]}),Object(m.jsx)("p",{className:"footer-para",children:"The only thing we are serious about is food. Contact us on"}),Object(m.jsxs)("div",{className:"social-container",children:[Object(m.jsx)(Q.c,{testid:"pintrest-social-icon",className:"social-icon"}),Object(m.jsx)(Q.b,{testid:"instagram-social-icon",className:"social-icon"}),Object(m.jsx)(Q.d,{testid:"twitter-social-icon",className:"social-icon"}),Object(m.jsx)(Q.a,{testid:"facebook-social-icon",className:"social-icon"})]})]})}),z=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(J,{}),Object(m.jsx)(H,{})]})},G=(a(86),function(t){Object(O.a)(a,t);var e=Object(x.a)(a);function a(){var t;Object(p.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={},t.updateLocalStorage=function(){var e=t.state,a=e.isButtonClicked,s=e.itemQuantity,n=t.props.eachFoodItem,c=n.imageUrl,r=n.name,i=n.cost,o=n.id,l=localStorage.getItem("cartData"),u=JSON.parse(l);if(null===u){var d=[];if(!0===a&&s>0){var m={id:o,name:r,cost:i,imageUrl:c,quantity:s};d.push(m),localStorage.setItem("cartData",JSON.stringify(d))}}else{var j=u;if(!0===a){var b={id:o,name:r,cost:i,imageUrl:c,quantity:s},h=j.filter((function(t){return t.id!==o}));h.push(b),localStorage.setItem("cartData",JSON.stringify(h))}else{var p=j.filter((function(t){return t.id!==o}));localStorage.setItem("cartData",JSON.stringify(p))}}},t.onClickedAdd=function(){t.setState({isButtonClicked:!0,itemQuantity:1},t.updateLocalStorage)},t.onMinusClicked=function(){t.state.itemQuantity<2?t.setState({itemQuantity:0,isButtonClicked:!1},t.updateLocalStorage):t.setState((function(t){return{itemQuantity:t.itemQuantity-1,isButtonClicked:!0}}),t.updateLocalStorage)},t.onPlusClicked=function(){var e=t.state.itemQuantity+1;t.setState({itemQuantity:e},t.updateLocalStorage)},t}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.eachFoodItem.id,e=localStorage.getItem("cartData"),a=JSON.parse(e);if(null===a)this.setState({isButtonClicked:!1,itemQuantity:0});else{var s=a.filter((function(e){return e.id===t}));s.length>0&&this.setState({isButtonClicked:!0,itemQuantity:s[0].quantity})}}},{key:"render",value:function(){var t=this.props.eachFoodItem,e=t.imageUrl,a=t.name,s=t.cost,n=t.rating,c=this.state,r=c.isButtonClicked,i=c.itemQuantity;return console.log(r),console.log(i),Object(m.jsxs)("li",{testid:"foodItem",className:"food-item-container",children:[Object(m.jsx)("img",{src:e,alt:"",className:"food-item-image"}),Object(m.jsxs)("div",{className:"food-item-details-container",children:[Object(m.jsx)("h1",{className:"food-item-name",children:a}),Object(m.jsx)("p",{className:"food-item-cost",children:s}),Object(m.jsxs)("div",{className:"rating-container",children:[Object(m.jsx)(R.a,{className:"food-item-star"}),Object(m.jsx)("p",{className:"food-item-rating",children:n})]}),r&&i>0?Object(m.jsxs)("div",{className:"food-item-quantity-container",children:[Object(m.jsx)("button",{testid:"decrement-count",type:"button",className:"minus-button",onClick:this.onMinusClicked,children:"-"}),Object(m.jsx)("p",{testid:"active-count",className:"item-quantity-number",children:i}),Object(m.jsx)("button",{testid:"increment-count",type:"button",className:"plus-button",onClick:this.onPlusClicked,children:"+"})]}):Object(m.jsx)("button",{type:"button",className:"food-item-button",onClick:this.onClickedAdd,children:"Add"})]})]})}}]),a}(s.Component)),Y=G,W=(a(87),"INITIAL"),X="SUCCESS",Z="FAILURE",$="IN_PROGRESS",tt=function(t){Object(O.a)(a,t);var e=Object(x.a)(a);function a(){var t;Object(p.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={restaurantData:{},foodItemData:[],apiStatus:W},t.getFormattedData=function(t){return{id:t.id,imageUrl:t.image_url,rating:t.rating,name:t.name,reviewsCount:t.reviews_count,location:t.location,costForTwo:t.cost_for_two,cuisine:t.cuisine}},t.getFoodItemFormattedData=function(t){return{imageUrl:t.image_url,name:t.name,cost:t.cost,rating:t.rating,id:t.id}},t.getRestaurantData=Object(h.a)(Object(b.a)().mark((function e(){var a,s,n,c,r,i,o,l,u,m;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.match,s=a.params,n=s.id,t.setState({apiStatus:$}),c=d.a.get("jwt_token"),r="https://apis.ccbp.in/restaurants-list/".concat(n),i={headers:{Authorization:"Bearer ".concat(c)},method:"GET"},e.next=9,fetch(r,i);case 9:if(!(o=e.sent).ok){e.next=19;break}return e.next=13,o.json();case 13:l=e.sent,u=t.getFormattedData(l),m=l.food_items.map((function(e){return t.getFoodItemFormattedData(e)})),t.setState({restaurantData:u,foodItemData:m,apiStatus:X}),e.next=20;break;case 19:t.setState({apiStatus:Z});case 20:case"end":return e.stop()}}),e)}))),t.renderRestaurantDetailsView=function(){var e=t.state,a=e.restaurantData,s=e.foodItemData,n=a.imageUrl,c=a.rating,r=a.name,i=a.location,o=a.reviewsCount,l=a.costForTwo,u=a.cuisine;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"specific-restaurant-details-container",children:[Object(m.jsx)("div",{className:"restaurant-banner-container",children:Object(m.jsxs)("div",{className:"banner-responsive-container",children:[Object(m.jsx)("img",{src:n,alt:"restaurant",className:"specific-restaurant-image"}),Object(m.jsxs)("div",{className:"banner-details-container",children:[Object(m.jsx)("h1",{className:"specific-restaurant-name",children:r}),Object(m.jsx)("p",{className:"specific-restaurant-cuisine",children:u}),Object(m.jsx)("p",{className:"specific-restaurant-location",children:i}),Object(m.jsxs)("div",{className:"rating-cost-container",children:[Object(m.jsxs)("div",{className:"specific-restaurant-rating-container",children:[Object(m.jsxs)("div",{className:"rating-container",children:[Object(m.jsx)(R.a,{className:"restaurant-details-star"}),Object(m.jsx)("p",{className:"specific-restaurant-rating",children:c})]}),Object(m.jsxs)("p",{className:"specific-restaurant-reviews",children:[o,"+ Ratings"]})]}),Object(m.jsx)("hr",{className:"line"}),Object(m.jsxs)("div",{className:"cost-container",children:[Object(m.jsx)("p",{className:"specific-restaurant-cost",children:l}),Object(m.jsx)("p",{className:"specific-restaurant-cost-text",children:"Cost for two"})]})]})]})]})}),Object(m.jsx)("ul",{className:"food-item-list-container",children:s.map((function(t){return Object(m.jsx)(Y,{eachFoodItem:t},t.id)}))})]}),Object(m.jsx)(H,{})]})},t.renderLoadingView=function(){return Object(m.jsx)("div",{testid:"restaurant-details-loader",className:"restaurant-loader-container",children:Object(m.jsx)(k.a,{type:"Oval",color:"#F7931E",height:"50",width:"50"})})},t.renderFailureView=function(){return Object(m.jsxs)("div",{className:"restaurant-error-view-container",children:[Object(m.jsx)("img",{src:"https://res.cloudinary.com/nsp/image/upload/v1635664104/tastyKitchens/error_1x_csgpog.png",alt:"restaurants failure",className:"restaurant-failure-img"}),Object(m.jsx)("h1",{className:"restaurant-failure-heading-text",children:"Page Not Found"}),Object(m.jsx)("p",{className:"restaurant-failure-description",children:"we are sorry, the page you requested could not be found\u2028Please go back to the homepage"}),Object(m.jsx)("button",{className:"error-button",type:"button",children:"Home Page"})]})},t.renderRestaurantDetails=function(){switch(t.state.apiStatus){case X:return t.renderRestaurantDetailsView();case Z:return t.renderFailureView();case $:return t.renderLoadingView();default:return null}},t}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.getRestaurantData()}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)("div",{className:"Restaurant-details-container",children:this.renderRestaurantDetails()})]})}}]),a}(s.Component),et=tt,at=(a(88),function(t){Object(O.a)(a,t);var e=Object(x.a)(a);function a(){var t;Object(p.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={},t.updateLocalStorage=function(){var e=t.state.quantity,a=t.props.eachItem,s=a.imageUrl,n=a.name,c=a.cost,r=a.id,i=localStorage.getItem("cartData"),o=JSON.parse(i),l={id:r,name:n,cost:c,imageUrl:s,quantity:e},u=o.filter((function(t){return t.id!==r}));u.push(l),localStorage.setItem("cartData",JSON.stringify(u))},t.onDecrementClicked=function(){var e=t.props,a=e.onChangeTotalAmount,s=e.eachItem,n=e.onDeleteCartItem,c=s.cost,r=s.id;t.state.quantity>1?(a(-1*c),t.setState((function(t){return{quantity:t.quantity-1,totalItemCost:t.totalItemCost-c}}),t.updateLocalStorage)):(a(-1*c),n(r))},t.onIncrementClicked=function(){var e=t.props,a=e.onChangeTotalAmount,s=e.eachItem.cost;a(s),t.setState((function(t){return{quantity:t.quantity+1,totalItemCost:t.totalItemCost+s}}),t.updateLocalStorage)},t}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.eachItem,e=t.cost,a=t.quantity,s=e*a;this.setState({totalItemCost:s,quantity:a})}},{key:"render",value:function(){var t=this.props.eachItem,e=t.imageUrl,a=t.name,s=this.state,n=s.totalItemCost,c=s.quantity;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("li",{testid:"cartItem",className:"mobile-list-cart-item",children:[Object(m.jsx)("img",{className:"mobile-cart-item-image",src:e,alt:e}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"cart-Item-name",children:a}),Object(m.jsxs)("div",{className:"cartItem-quantity-container",children:[Object(m.jsx)("button",{testid:"decrement-quantity",type:"button",className:"decrement-button",onClick:this.onDecrementClicked,children:Object(m.jsx)(P.a,{})}),Object(m.jsx)("span",{testid:"item-quantity",className:"cart-item-quantity",children:c}),Object(m.jsx)("button",{testid:"increment-quantity",type:"button",className:"increment-button",onClick:this.onIncrementClicked,children:Object(m.jsx)(P.c,{})})]}),Object(m.jsxs)("p",{testid:"total-price",className:"cart-item-cost",children:[Object(m.jsx)("span",{children:"\u20b9 "}),n]})]})]}),Object(m.jsxs)("li",{testid:"cartItem",className:"desktop-list-cart-item",children:[Object(m.jsxs)("div",{className:"desktop-item-container",children:[Object(m.jsx)("img",{className:"desktop-cart-item-image",src:e,alt:e}),Object(m.jsx)("h1",{className:"desktop-cart-item-name",children:a})]}),Object(m.jsxs)("div",{className:"desktop-cartItem-quantity-container",children:[Object(m.jsx)("button",{testid:"decrement-quantity",type:"button",className:"decrement-button",onClick:this.onDecrementClicked,children:Object(m.jsx)(P.a,{})}),Object(m.jsx)("span",{testid:"item-quantity",className:"desktop-cart-item-quantity",children:c}),Object(m.jsx)("button",{testid:"increment-quantity",type:"button",className:"increment-button",onClick:this.onIncrementClicked,children:Object(m.jsx)(P.c,{})})]}),Object(m.jsxs)("p",{testid:"total-price",className:"desktop-cart-item-cost",children:[Object(m.jsx)("span",{children:"\u20b9 "}),n]})]})]})}}]),a}(s.Component)),st=at,nt=(a(89),function(t){Object(O.a)(a,t);var e=Object(x.a)(a);function a(){var t;Object(p.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={cartData:[],orderStatus:!1},t.onClickPlaceOrder=function(){localStorage.removeItem("cartData"),t.setState({orderStatus:!0,cartData:[]})},t.onChangeTotalAmount=function(e){t.setState((function(t){return{totalCartAmount:t.totalCartAmount+e}}))},t.updateCartData=function(){var e=t.state.cartData;e.length>0?localStorage.setItem("cartData",JSON.stringify(e)):localStorage.removeItem("cartData")},t.onDeleteCartItem=function(e){var a=t.state.cartData.filter((function(t){return t.id!==e}));t.setState({cartData:a},t.updateCartData)},t}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("cartData"),e=JSON.parse(t);if(null===e||0===e.length)this.setState({cartStatus:!1});else{var a=[];if(e.length>0){e.forEach((function(t){var e=t.cost*t.quantity;a.push(e)}));var s=a.reduce((function(t,e){return t+e}));this.setState({totalCartAmount:s})}this.setState({cartData:e,cartStatus:!0})}}},{key:"render",value:function(){var t=this,e=this.state,a=e.cartData,s=e.cartStatus,n=e.orderStatus,c=e.totalCartAmount;return Object(m.jsx)(m.Fragment,{children:s&&c>0?Object(m.jsx)(m.Fragment,{children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)("div",{className:"order-successful-container",children:Object(m.jsxs)("div",{className:"order-successful-responsive-container",children:[Object(m.jsx)("img",{className:"order-successful-image",src:"https://res.cloudinary.com/nsp/image/upload/v1636426713/tastyKitchens/successful_1x_micicp.png",alt:""}),Object(m.jsx)("h1",{className:"order-successful-heading",children:"Payment Successful"}),Object(m.jsxs)("p",{className:"order-successful-para",children:["Thank you for ordering ",Object(m.jsx)("br",{}),"Your payment is successfully completed."]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{type:"button",className:"order-successful-button",children:"Go To Home Page"})})]})})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{}),Object(m.jsx)("div",{className:"cart-container",children:Object(m.jsxs)("div",{className:"cart-responsive-container",children:[Object(m.jsxs)("ul",{className:"cart-list-container",children:[Object(m.jsxs)("li",{className:"cart-desktop-list-header",children:[Object(m.jsx)("p",{className:"list-header-name",children:"Item"}),Object(m.jsx)("p",{className:"list-header-name",children:"Quantity"}),Object(m.jsx)("p",{className:"list-header-name",children:"Price"})]}),a.map((function(e){return Object(m.jsx)(st,{eachItem:e,onChangeTotalAmount:t.onChangeTotalAmount,onDeleteCartItem:t.onDeleteCartItem},e.id)}))]}),Object(m.jsx)("hr",{className:"cart-line"}),Object(m.jsxs)("div",{className:"total-cart-amount-container",children:[Object(m.jsx)("h1",{className:"total-order-text",children:"Order Total:"}),Object(m.jsxs)("p",{testid:"total-price",className:"total-order-amount",children:["\u20b9",c]})]}),Object(m.jsx)("div",{className:"place-order-button-container",children:Object(m.jsx)("button",{type:"button",className:"cart-place-order-button",onClick:this.onClickPlaceOrder,children:"Place Order"})})]})}),Object(m.jsx)(H,{})]})}):Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{}),Object(m.jsx)("div",{className:"empty-cart-container",children:Object(m.jsxs)("div",{className:"empty-cart-responsive-container",children:[Object(m.jsx)("img",{className:"empty-cart-image",src:"https://res.cloudinary.com/nsp/image/upload/v1636379708/tastyKitchens/empty_cart_1_1x_o1nekx.png",alt:"empty cart"}),Object(m.jsx)("h1",{className:"empty-cart-heading",children:"No Order Yet!"}),Object(m.jsx)("p",{className:"empty-cart-para",children:"Your cart is empty. Add something from the menu."}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"empty-cart-button",type:"button",children:"Order Now"})})]})})]})})}}]),a}(s.Component)),ct=nt,rt=(a(90),function(){return Object(m.jsxs)("div",{className:"restaurant-error-view-container",children:[Object(m.jsx)("img",{src:"https://res.cloudinary.com/djjbttpq0/image/upload/v1641968177/Tasty%20Kitchens/erroring_1x_x7gtp8.png",alt:"not found",className:"restaurant-failure-img"}),Object(m.jsx)("h1",{className:"restaurant-failure-heading-text",children:"Page Not Found"}),Object(m.jsx)("p",{className:"restaurant-failure-description",children:"we are sorry, the page you requested could not be found Please go back to the homepage"}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"error-button",type:"button",children:"Home Page"})})]})}),it=(a(91),function(){return Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/login",component:v}),Object(m.jsx)(j,{exact:!0,path:"/",component:z}),Object(m.jsx)(j,{exact:!0,path:"/restaurant/:id",component:et}),Object(m.jsx)(j,{exact:!0,path:"/cart",component:ct}),Object(m.jsx)(o.b,{path:"/not-found",component:rt}),Object(m.jsx)(o.a,{to:"not-found"})]})});r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(it,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.cf875447.chunk.js.map