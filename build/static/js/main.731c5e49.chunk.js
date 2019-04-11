(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},167:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(55),l=a.n(r),i=(a(95),a(96),a(65)),c=a(21),o=a.n(c),u=(a(97),function(e){return s.a.createElement(o.a,null,s.a.createElement("h1",null,"Welcome to TeachMe"),s.a.createElement("p",null,"Teach Me is a software project designed to connect users to teach each other creative skills. Teach Me provides creatively skilled individuals (musicians, artists etc.) with an additional source of income, while allowing non-skilled individuals to explore skills that they might be interested in learning."),s.a.createElement("hr",null),s.a.createElement("p",{className:"bold-text"},"This website is still under consturction. Please come back later :)"))}),m=(a(98),function(e){return s.a.createElement(o.a,null,s.a.createElement("h1",null,"Oops"),s.a.createElement("p",null,"That's a 404 error - It seems that we cannot find the page you requested."))}),h=a(5),d=a(6),p=a(8),g=a(7),E=a(9),v=a(24),f=a.n(v),b=a(33),y=a.n(b),C=a(22),O=a.n(C),j=a(26),k=a.n(j),N=a(15),S=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(O.a,null,s.a.createElement(O.a.Body,null,s.a.createElement(O.a.Img,{className:"instructor-img",src:"/images/default-user.png"}),s.a.createElement(O.a.Title,null,this.props.title),s.a.createElement(O.a.Text,null,this.props.description),s.a.createElement(O.a.Text,{className:"italics-text"},"Price: $",this.props.price," | Rating: ",this.props.rating," | Category: ",this.props.category),s.a.createElement(N.LinkContainer,{to:"/classes/"+this.props.slug},s.a.createElement(k.a,{variant:"info"},"See Class Details"))))}}]),t}(n.Component),w=a(171),R=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={maxPrice:"Max Price...",minRating:"Min Rating...",classCategory:"Class Category..."},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"filterResults",value:function(e){var t=this,a=e.target.id;"maxPrice"===a?this.setState({maxPrice:e.target.value},function(){t.props.filterResults(t.state)}):"minRating"===a?this.setState({minRating:e.target.value},function(){t.props.filterResults(t.state)}):this.setState({classCategory:e.target.value},function(){t.props.filterResults(t.state)})}},{key:"render",value:function(){return s.a.createElement(w.a,{className:"class-filter"},s.a.createElement(w.a.Group,{controlId:"maxPrice",onChange:this.filterResults.bind(this)},s.a.createElement(w.a.Control,{as:"select"},s.a.createElement("option",{value:void 0},"Max Price..."),s.a.createElement("option",{value:50},"$50"),s.a.createElement("option",{value:100},"$100"))),s.a.createElement(w.a.Group,{controlId:"minRating",onChange:this.filterResults.bind(this)},s.a.createElement(w.a.Control,{as:"select"},s.a.createElement("option",{value:void 0},"Min Rating..."),s.a.createElement("option",null,"8"),s.a.createElement("option",null,"9"))),s.a.createElement(w.a.Group,{controlId:"classCategory",onChange:this.filterResults.bind(this)},s.a.createElement(w.a.Control,{as:"select"},s.a.createElement("option",{value:void 0},"Class Category..."),s.a.createElement("option",null,"Music"),s.a.createElement("option",null,"Art"),s.a.createElement("option",null,"Language"))))}}]),t}(n.Component),T=(a(107),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={classListing:[],allClasses:[],activePage:1,showWarning:!1},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/classes").then(function(e){return e.json()}).then(function(t){return e.setState({classListing:t,allClasses:t})})}},{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"filterResults",value:function(e){console.log(e);for(var t=this.state.allClasses,a=[],n=0;n<t.length;n++){var s=!0,r=t[n];"Max Price..."!==e.maxPrice&&r.price>parseFloat(e.maxPrice)&&(s=!1),"Min Rating..."!==e.minRating&&r.rating<parseFloat(e.minRating)&&(s=!1),"Class Category..."!==e.classCategory&&r.category!==e.classCategory&&(s=!1),s&&a.push(r)}console.log(a.length),0===a.length?this.setState({showWarning:!0,classListing:a,activePage:1}):this.setState({showWarning:!1,classListing:a,activePage:1})}},{key:"render",value:function(){var e=this.state.classListing.map(function(e,t){return s.a.createElement(S,{key:t,title:e.name,description:e.description,price:e.price,instructor:e.instructor,rating:e.rating,category:e.category,slug:e._id})}),t=4*(this.state.activePage-1),a=t+4,n=e.slice(t,a),r=Math.min(5,e.length/4+1);return s.a.createElement("div",{className:"class-listing-container"},s.a.createElement(o.a,null,s.a.createElement("h1",null,"Available Classes"),s.a.createElement("p",null,"Below is the list of classes that are available on TeachMe.")),s.a.createElement("div",{className:"filter-container"},s.a.createElement(R,{filterResults:this.filterResults.bind(this)})),s.a.createElement("div",{className:"class-listing-display"},n,this.state.showWarning?s.a.createElement(f.a,{variant:"danger"},"It seems that we don't have any classes that satisfy your filter. Try resetting the filter to see more results!"):null,s.a.createElement("div",{className:"pagination-container"},s.a.createElement(y.a,{activePage:this.state.activePage,itemsCountPerPage:4,totalItemsCount:e.length,pageRangeDisplayed:r,onChange:this.handlePageChange.bind(this)}))))}}]),t}(n.Component)),x=a(12),I=a(83),P=a(18),L=a(38),D=a.n(L),M=function(e){e?D.a.defaults.headers.common.Authorization=e:delete D.a.defaults.headers.common.Authorization},W=a(49),_=a.n(W),A=function(e){return{type:"SET_CURRENT_USER",payload:e}},q=function(){return function(e){localStorage.removeItem("jwtToken"),M(!1),e(A({}))}},U=a(2),F=a.n(U),V=(a(142),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a.handleCancel=a.handleCancel.bind(Object(x.a)(Object(x.a)(a))),a.state={successRedirect:void 0},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated||this.props.history.push("/login")}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData(e.target),n={},s=!0,r=!1,l=void 0;try{for(var i,c=a.entries()[Symbol.iterator]();!(s=(i=c.next()).done);s=!0){var o=i.value;n[o[0]]=o[1]}}catch(m){r=!0,l=m}finally{try{s||null==c.return||c.return()}finally{if(r)throw l}}var u=this.props.match.params.instructorId;n.instructorId=u,console.log(n),fetch("/api/create-class/",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return t.setState({successRedirect:e})})}},{key:"handleCancel",value:function(e){this.setState({successRedirect:{result:"cancelled"}})}},{key:"render",value:function(){return!this.state.successRedirect||"success"!==this.state.successRedirect.result&&"cancelled"!==this.state.successRedirect.result?s.a.createElement("div",{id:"submit-form"},s.a.createElement("h3",null,"Create a Class"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,"Name"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",name:"name",required:!0}),s.a.createElement("br",null),s.a.createElement("label",null,"Description"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",name:"description",required:!0}),s.a.createElement("br",null),s.a.createElement("label",null,"Price"),s.a.createElement("br",null),s.a.createElement("input",{type:"number",name:"price",required:!0}),s.a.createElement("br",null),s.a.createElement("label",null,"Proposed Schedule"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",name:"proposedSchedule",required:!0}),s.a.createElement("br",null),s.a.createElement("label",null,"Category"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",name:"category",required:!0}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Publish"}),s.a.createElement("input",{type:"button",value:"Cancel",onClick:this.handleCancel}))):s.a.createElement(I.a,{to:"/home"})}}]),t}(n.Component)),B=(a(143),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={class:{},successRedirect:void 0},a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a.handleCancel=a.handleCancel.bind(Object(x.a)(Object(x.a)(a))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="/api/edit-class/"+this.props.match.params.classId;console.log(t),fetch(t).then(function(e){return e.json()}).then(function(t){return e.setState({class:t[0]})})}},{key:"handleSubmit",value:function(e){var t=this;this.setState({successRedirect:{result:"success"}}),console.log(e.target),e.preventDefault();var a=new FormData(e.target),n={},s=!0,r=!1,l=void 0;try{for(var i,c=a.entries()[Symbol.iterator]();!(s=(i=c.next()).done);s=!0){var o=i.value;n[o[0]]=o[1]}}catch(m){r=!0,l=m}finally{try{s||null==c.return||c.return()}finally{if(r)throw l}}console.log(n);var u=this.props.match.params.classId;fetch("/api/edit-class/"+u,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return t.setState({successRedirect:e})})}},{key:"handleCancel",value:function(e){this.setState({successRedirect:{result:"cancelled"}})}},{key:"render",value:function(){return!this.state.successRedirect||"success"!==this.state.successRedirect.result&&"cancelled"!==this.state.successRedirect.result?s.a.createElement("div",{id:"edit-form"},s.a.createElement("h3",null,"Edit the Class"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,"Name"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",name:"name",defaultValue:this.state.class.name,required:!0}),s.a.createElement("br",null),s.a.createElement("label",null,"Description"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",name:"description",defaultValue:this.state.class.description,required:!0}),s.a.createElement("br",null),s.a.createElement("label",null,"Price"),s.a.createElement("br",null),s.a.createElement("input",{type:"number",name:"price",defaultValue:this.state.class.price,required:!0}),s.a.createElement("br",null),s.a.createElement("label",null,"Proposed Schedule"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",name:"proposedSchedule",defaultValue:this.state.class.proposedSchedule,required:!0}),s.a.createElement("br",null),s.a.createElement("label",null,"Category"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",name:"category",defaultValue:this.state.class.category,required:!0}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Publish"}),s.a.createElement("input",{type:"button",value:"Cancel",onClick:this.handleCancel}))):s.a.createElement(I.a,{to:"/home"})}}]),t}(n.Component)),G=(a(144),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={IsReadOnly:!0,imageIsReadOnly:!0,userName:"",userEmail:"",successCheck:void 0},a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a.handleNameChange=a.handleNameChange.bind(Object(x.a)(Object(x.a)(a))),a.handleEmailChange=a.handleEmailChange.bind(Object(x.a)(Object(x.a)(a))),a.handleEditClick=a.handleEditClick.bind(Object(x.a)(Object(x.a)(a))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="/api/my-account/"+this.props.match.params.userId;console.log(t),fetch(t).then(function(e){return e.json()}).then(function(t){return e.setState({userName:t[0].name,userEmail:t[0].email})})}},{key:"handleNameChange",value:function(e){this.setState({userName:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({userEmail:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;this.setState({successCheck:{result:"success"}}),alert("A new profile is submitted! "),e.preventDefault();var a=new FormData(e.target),n={},s=!0,r=!1,l=void 0;try{for(var i,c=a.entries()[Symbol.iterator]();!(s=(i=c.next()).done);s=!0){var o=i.value;n[o[0]]=o[1]}}catch(m){r=!0,l=m}finally{try{s||null==c.return||c.return()}finally{if(r)throw l}}console.log(n);var u=this.props.match.params.userId;fetch("/api/my-account/"+u,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return t.setState({successCheck:e})})}},{key:"handleEditClick",value:function(e){this.setState({IsReadOnly:!1})}},{key:"render",value:function(){return console.log(this.state.userEmail),s.a.createElement("div",{className:"myaccount-page"},s.a.createElement("h3",null,"My Account Page"),s.a.createElement("br",null),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,"Name"),s.a.createElement("input",{type:"text",name:"name",value:this.state.userName,readOnly:this.state.IsReadOnly,onChange:this.handleNameChange,required:!0}),s.a.createElement("input",{type:"button",name:"editname",value:"Edit",onClick:this.handleEditClick}),s.a.createElement("br",null),s.a.createElement("label",null,"Email"),s.a.createElement("input",{type:"text",name:"email",value:this.state.userEmail,readOnly:this.state.IsReadOnly,onChange:this.handleEmailChange,required:!0}),s.a.createElement("input",{type:"button",name:"editemail",value:"Edit",onClick:this.handleEditClick}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Submit"})),s.a.createElement("input",{type:"button",name:"viewclasshistory",value:"View Class History"}))}}]),t}(n.Component)),H=a(27),J=a.n(H),$=(a(145),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={userID:void 0,classListing:[],allClasses:[],activePage:1,filterWarning:!1,noTeachClassWarning:!1,noTakeClassWarning:!1},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"displayTeach",value:function(){var e=this,t="/api/class-history-teach/"+this.state.userID;fetch(t).then(function(e){return e.json()}).then(function(t){0===t.length?e.setState({noTeachClassWarning:!0,noTakeClassWarning:!1,classListing:t,allClasses:t}):e.setState({noTeachClassWarning:!1,noTakeClassWarning:!1,classListing:t,allClasses:t})})}},{key:"displayTake",value:function(){var e=this,t="/api/class-history-take/"+this.state.userID;fetch(t).then(function(e){return e.json()}).then(function(t){0===t.length?e.setState({noTakeClassWarning:!0,noTeachClassWarning:!1,classListing:t,allClasses:t}):e.setState({noTakeClassWarning:!1,noTeachClassWarning:!1,classListing:t,allClasses:t})})}},{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated?this.setState({userID:this.props.auth.user.id},function(){this.displayTeach()}):this.props.history.push("/login")}},{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"filterResults",value:function(e){for(var t=this.state.allClasses,a=[],n=0;n<t.length;n++){var s=!0,r=t[n];"Max Price..."!==e.maxPrice&&r.price>parseFloat(e.maxPrice)&&(s=!1),"Min Rating..."!==e.minRating&&r.rating<parseFloat(e.minRating)&&(s=!1),"Class Category..."!==e.classCategory&&r.category!==e.classCategory&&(s=!1),s&&a.push(r)}0===a.length?this.setState({filterWarning:!0,classListing:a,activePage:1}):this.setState({filterWarning:!1,classListing:a,activePage:1})}},{key:"render",value:function(){var e=this.state.classListing.map(function(e,t){return s.a.createElement(S,{key:t,title:e.name,description:e.description,price:e.price,instructor:e.instructor,rating:e.rating,category:e.category,slug:e._id})}),t=4*(this.state.activePage-1),a=t+4,n=e.slice(t,a),r=Math.min(5,e.length/4+1);return s.a.createElement("div",{className:"class-history-container"},s.a.createElement(o.a,null,s.a.createElement("h1",null,"My Class History"),s.a.createElement("p",null,"Below are the classes you have either taught or taken at TeachMe.")),s.a.createElement(J.a,{fill:!0,variant:"tabs",defaultActiveKey:"teach",className:"class-history-nav"},s.a.createElement(J.a.Item,null,s.a.createElement(J.a.Link,{eventKey:"teach",onSelect:this.displayTeach.bind(this)},"Classes I Teach")),s.a.createElement(J.a.Item,null,s.a.createElement(J.a.Link,{eventKey:"take",onSelect:this.displayTake.bind(this)},"Classes I Take"))),s.a.createElement("div",{className:"filter-container filter-container-ch"},s.a.createElement(R,{filterResults:this.filterResults.bind(this)})),s.a.createElement("div",{className:"class-listing-display"},n,this.state.noTakeClassWarning?s.a.createElement(f.a,{variant:"danger"},"It seems that you have no registered class at this time. Go to the class listing page and register for a new class!"):null,this.state.noTeachClassWarning?s.a.createElement(f.a,{variant:"danger"},"It seems that you are not teaching any class at this time."):null,this.state.filterWarning?s.a.createElement(f.a,{variant:"danger"},"It seems that we don't have any classes that satisfy your filter. Try resetting the filter to see more results!"):null,s.a.createElement("div",{className:"pagination-container"},s.a.createElement(y.a,{activePage:this.state.activePage,itemsCountPerPage:4,totalItemsCount:e.length,pageRangeDisplayed:r,onChange:this.handlePageChange.bind(this)}))))}}]),t}(n.Component)),X=Object(P.b)(function(e){return{auth:e.auth}})($),K=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(O.a,null,s.a.createElement(O.a.Body,null,s.a.createElement(O.a.Img,{className:"instructor-img",src:"/images/default-user.png"}),s.a.createElement(O.a.Title,null,this.props.name),s.a.createElement(O.a.Text,null,this.props.introduction),s.a.createElement(O.a.Text,{className:"italics-text"},"Rating: ",this.props.rating),s.a.createElement(N.LinkContainer,{to:"/instructors/"+this.props.slug},s.a.createElement(k.a,{variant:"info"},"See Instructor Details"))))}}]),t}(n.Component),z=(a(154),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={instructorListing:[],allInstructors:[],activePage:1,showWarning:!1,instructorName:""},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=[{_id:"5c8420601c9d440000dc7530",userID:"5ca7c1b41c9d44000002a798",rating:4,sumOfRating:20,numOfRating:5,credentials:"Professional Tennis Player",introduction:"hi",name:"A"},{_id:"5ca68e2b1c9d440000d6ec74",userID:"5c8060e6ea8bdc07cd5e06a2",credentials:"wut",introduction:"hi",rating:4.2,sumOfRating:100,numOfRating:24,name:"Sameer Tulshyan"}];this.setState({instructorListing:e,allInstructors:e})}},{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"render",value:function(){var e=this.state.instructorListing.map(function(e,t){return s.a.createElement(K,{key:t,name:e.name,introduction:e.introduction,rating:e.rating,slug:e._id})}),t=4*(this.state.activePage-1),a=t+4,n=e.slice(t,a),r=Math.min(5,e.length/4+1);return s.a.createElement("div",{className:"instructor-listing-container"},s.a.createElement(o.a,null,s.a.createElement("h1",null,"Instructors"),s.a.createElement("p",null,"Below is the list of instructors on TeachMe.")),s.a.createElement("div",{className:"instructor-listing-display"},n,this.state.showWarning?s.a.createElement(f.a,{variant:"danger"},"It seems that we don't have any instructors that satisfy your filter. Try resetting the filter to see more results!"):null,s.a.createElement("div",{className:"pagination-container"},s.a.createElement(y.a,{activePage:this.state.activePage,itemsCountPerPage:4,totalItemsCount:e.length,pageRangeDisplayed:r,onChange:this.handlePageChange.bind(this)}))))}}]),t}(n.Component)),Y=a(41),Q=a.n(Y),Z=a(25),ee=a.n(Z),te=(a(155),function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.auth.isAuthenticated?(console.log(this.props.auth),s.a.createElement(Q.a,{bg:"primary",variant:"dark"},s.a.createElement(N.LinkContainer,{to:"/home"},s.a.createElement(Q.a.Brand,null,"TeachMe")),s.a.createElement(J.a,{className:"mr-auto"},s.a.createElement(N.LinkContainer,{to:"/home"},s.a.createElement(ee.a,{className:"nav-link"},"Home")),s.a.createElement(N.LinkContainer,{to:"/classes"},s.a.createElement(ee.a,{className:"nav-link"},"Class Listing")),s.a.createElement(N.LinkContainer,{to:"/teach-others"},s.a.createElement(ee.a,{className:"nav-link"},"Teach Others")),s.a.createElement(N.LinkContainer,{to:"/about"},s.a.createElement(ee.a,{className:"nav-link"},"About"))),s.a.createElement(J.a,null,s.a.createElement(N.LinkContainer,{to:"/dashboard"},s.a.createElement(ee.a,{className:"nav-link"},"Hello ",this.props.auth.user.name)),s.a.createElement(N.LinkContainer,{to:"/class-history"},s.a.createElement(ee.a,{className:"nav-link"},"My Class History"))))):s.a.createElement(Q.a,{bg:"primary",variant:"dark"},s.a.createElement(N.LinkContainer,{to:"/home"},s.a.createElement(Q.a.Brand,null,"TeachMe")),s.a.createElement(J.a,{className:"mr-auto"},s.a.createElement(N.LinkContainer,{to:"/home"},s.a.createElement(ee.a,{className:"nav-link"},"Home")),s.a.createElement(N.LinkContainer,{to:"/classes"},s.a.createElement(ee.a,{className:"nav-link"},"Class Listing")),s.a.createElement(N.LinkContainer,{to:"/teach-others"},s.a.createElement(ee.a,{className:"nav-link"},"Teach Others")),s.a.createElement(N.LinkContainer,{to:"/about"},s.a.createElement(ee.a,{className:"nav-link"},"About"))),s.a.createElement(J.a,null,s.a.createElement(N.LinkContainer,{to:"/login"},s.a.createElement(k.a,{variant:"outline-light"},"Log In")),s.a.createElement(N.LinkContainer,{to:"/register"},s.a.createElement(k.a,{variant:"outline-light"},"Sign Up"))))}}]),t}(n.Component)),ae=Object(P.b)(function(e){return{auth:e.auth}})(te),ne=a(37),se=a(39),re=(a(161),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).onChange=function(t){e.setState(Object(ne.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},s.a.createElement("div",{className:"col s8 offset-s2"},s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("h4",null,s.a.createElement("b",null,"Login")," below"),s.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",s.a.createElement(se.a,{to:"/register"},"Register"))),s.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:F()("",{invalid:e.email||e.emailnotfound})}),s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:F()("",{invalid:e.password||e.passwordincorrect})}),s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable"},"Login"))))))}}]),t}(n.Component)),le=Object(P.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){D.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),M(a);var n=_()(a);t(A(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(re),ie=a(85),ce=(a(162),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).onChange=function(t){e.setState(Object(ne.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},s.a.createElement("div",{className:"col s8 offset-s2"},s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("h4",null,s.a.createElement("b",null,"Register")," below"),s.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",s.a.createElement(se.a,{to:"/login"},"Log in"))),s.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:F()("",{invalid:e.name})}),s.a.createElement("label",{htmlFor:"name"},"Name"),s.a.createElement("span",{className:"red-text"},e.name)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:F()("",{invalid:e.email})}),s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("span",{className:"red-text"},e.email)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:F()("",{invalid:e.password})}),s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("span",{className:"red-text"},e.password)),s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:F()("",{invalid:e.password2})}),s.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),s.a.createElement("span",{className:"red-text"},e.password2)),s.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},s.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable"},"Sign up"))))))}}]),t}(n.Component)),oe=Object(P.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){D.a.post("/api/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(ie.a)(ce)),ue=a(84),me=a(45),he=a(42),de=a.n(he),pe=a(59),ge=a.n(pe),Ee=(a(163),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={currentClass:{},successRedirect:{},loginRequired:!1,classNotRegistered:!1},a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a.handleWithdraw=a.handleWithdraw.bind(Object(x.a)(Object(x.a)(a))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"handleSubmit",value:function(){var e=this,t=this.props.match.params.classId;if(this.props.auth.isAuthenticated){var a={};a.userID=this.props.auth.user.id,a.classID=t;fetch("/api/register-class",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){return e.setState({successRedirect:t})})}else this.setState({loginRequired:!0}),setTimeout(function(){e.props.history.push("/login")},2e3)}},{key:"handleWithdraw",value:function(){var e=this,t=this.props.match.params.classId;if(this.props.auth.isAuthenticated){var a={};a.userID=this.props.auth.user.id,a.classID=t;fetch("/api/drop-class",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){return e.setState({successRedirect:t})})}else this.setState({loginRequired:!0}),setTimeout(function(){e.props.history.push("/login")},2e3)}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.classId;fetch("/api/classes/"+t).then(function(e){return e.json()}).then(function(t){return e.setState({currentClass:t})})}},{key:"render",value:function(){var e=this.state.currentClass;return this.state.successRedirect.result,s.a.createElement("div",{className:"detail-page-container"},s.a.createElement(o.a,null,s.a.createElement("h1",null,"Class Detail: ",e.name),s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"detail-container"},s.a.createElement(de.a,null,s.a.createElement(ge.a,{sm:5},s.a.createElement("div",{className:"detail-image-container"},s.a.createElement("img",{alt:"instructor profile",src:"/images/default-user.png",className:"instructor-image"}),s.a.createElement("p",null,"Class taught by:"),s.a.createElement(N.LinkContainer,{to:"/instructor/"+e.instructorID,className:"instructor-link"},s.a.createElement("h5",null,e.instructorName)))),s.a.createElement(ge.a,{sm:7},s.a.createElement("div",{className:"detail-text-container"},s.a.createElement("h3",null,"About"),s.a.createElement("p",null,e.about),s.a.createElement("h3",null,"Pricing"),s.a.createElement("p",null,"$",e.price),s.a.createElement("h3",null,"Proposed Class Schedule"),s.a.createElement("p",null,e.proposedSchedule),s.a.createElement("h3",null,"Class Category"),s.a.createElement("p",null,e.category)))),s.a.createElement(de.a,null,s.a.createElement("div",{className:"alerts-container"},"success"===this.state.successRedirect.status?s.a.createElement(f.a,{variant:"success",className:"success-alert"},"You have successfully ",this.state.successRedirect.result," this class!"):null,"error"===this.state.successRedirect.status?s.a.createElement(f.a,{variant:"danger",className:"error-alert"},"Oops, it seems that we have encountered a problem: ",this.state.successRedirect.result):null,this.state.loginRequired?s.a.createElement(f.a,{variant:"danger",className:"login-alert"},"It seems that you have not logged in. We are now taking you to the log in page."):null)),s.a.createElement(de.a,null,s.a.createElement("div",{className:"detail-buttons-container"},s.a.createElement(k.a,{onClick:this.handleSubmit,variant:"info"},"Register now!"),s.a.createElement(k.a,{onClick:this.handleWithdraw,variant:"warning"},"Withdraw from Class"),s.a.createElement(k.a,{variant:"info",disabled:!0},"Contact Instructor (Coming Soon)"))),s.a.createElement(de.a,null,s.a.createElement("div",{className:"detail-comments-container"}))))}}]),t}(n.Component)),ve=Object(P.b)(function(e){return{auth:e.auth}})(Ee),fe=a(89),be=Object(P.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(fe.a)(e,["component","auth"]);return s.a.createElement(me.a,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?s.a.createElement(t,e):s.a.createElement(I.a,{to:"/login"})}}))}),ye=(a(164),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return s.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 center-align"},s.a.createElement("h4",null,s.a.createElement("b",null,"Hey there,")," ",e.name.split(" ")[0],s.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into Teach Me")),s.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable"},"Logout"))))}}]),t}(n.Component)),Ce=Object(P.b)(function(e){return{auth:e.auth}},{logoutUser:q})(ye),Oe=a(60),je=a.n(Oe),ke=(a(166),a(167),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={instructor:{}},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"instructorRating",value:function(){var e=this.state.instructor;return e.sumOfRating/e.numOfRating}},{key:"rateInstructor",value:function(e){var t=this.props.match.params.instructorId;fetch("/api/instructor/"+t+"/rating",{method:"POST",body:e}).then(function(e){})}},{key:"addComment",value:function(e){var t=this.props.match.params.instructorId;fetch("/api/instructor/"+t+"/add_comment",{method:"POST",body:e}).then(function(e){})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.instructorId;fetch("/api/instructor/"+t+"/info").then(function(e){return e.json()}).then(function(t){return e.setState({instructor:t[0]})})}},{key:"render",value:function(){var e=this.state.instructor;return void 0===e.name?s.a.createElement("div",{className:"instructor-profile-page"},s.a.createElement("h4",null,"Loading...")):s.a.createElement("div",{className:"instructor-profile-page"},s.a.createElement("h3",{className:"title"},"Instructor ",e.name),s.a.createElement("h4",null,"Students Rating"),s.a.createElement(je.a,{total:5,rating:this.instructorRating()}),s.a.createElement("hr",null),s.a.createElement("h4",null,"Description"),s.a.createElement("p",null,e.description),s.a.createElement("hr",null),s.a.createElement("div",null,s.a.createElement("strong",null,"Rating:"),"  He/She is a ",s.a.createElement(je.a,{total:5,onRate:this.rateInstructor()})," Instructor."),s.a.createElement("hr",null),s.a.createElement("h4",null,"Comments"),s.a.createElement("br",null),void 0===e.comments?s.a.createElement("div",{className:"no-comments"},"No comments yet."):e.comments.map(function(e){return s.a.createElement("div",{className:"comment"},s.a.createElement("span",{className:"comment-name"},e.name),s.a.createElement("br",null),s.a.createElement("span",{className:"comment-content"},e.content),s.a.createElement("br",null),s.a.createElement("span",{className:"comment-date"},e.date))}))}}]),t}(n.Component)),Ne=a(29),Se=a(88),we=a(61),Re=a(168),Te={isAuthenticated:!1,user:{},loading:!1},xe={},Ie=Object(Ne.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(we.a)({},e,{isAuthenticated:!Re(t.payload),user:t.payload});case"USER_LOADING":return Object(we.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),Pe=[Se.a],Le=Object(Ne.e)(Ie,{},Object(Ne.d)(Ne.a.apply(void 0,Pe),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()||Ne.d));if(localStorage.jwtToken){var De=localStorage.jwtToken;M(De);var Me=_()(De);Le.dispatch(A(Me));var We=Date.now()/1e3;Me.exp<We&&(Le.dispatch(q()),window.location.href="./login")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(function(){return s.a.createElement(P.a,{store:Le},s.a.createElement(i.a,null,s.a.createElement("div",null,s.a.createElement(ae,null),s.a.createElement(ue.a,null,s.a.createElement(be,{exact:!0,path:"/dashboard",component:Ce}),s.a.createElement(me.a,{exact:!0,path:"/home",component:u}),s.a.createElement(me.a,{exact:!0,path:"/"},s.a.createElement(I.a,{to:"/home"})),s.a.createElement(me.a,{exact:!0,path:"/classes",component:T}),s.a.createElement(me.a,{exact:!0,path:"/classes/:classId",component:ve}),s.a.createElement(me.a,{exact:!0,path:"/create-class/:instructorId",component:V}),s.a.createElement(me.a,{exact:!0,path:"/edit-class/:classId",component:B}),s.a.createElement(me.a,{exact:!0,path:"/my-account/:userId",component:G}),s.a.createElement(me.a,{exact:!0,path:"/class-history",component:X}),s.a.createElement(me.a,{exact:!0,path:"/instructors",component:z}),s.a.createElement(me.a,{exact:!0,path:"/login",component:le}),s.a.createElement(me.a,{exact:!0,path:"/register",component:oe}),s.a.createElement(me.a,{exact:!0,path:"/instructor/:userId/info",component:ke}),s.a.createElement(me.a,{component:m})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,a){e.exports=a(169)},95:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.731c5e49.chunk.js.map