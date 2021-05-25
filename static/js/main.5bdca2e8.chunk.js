(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{55:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(12),a=n.n(o),u=n(7),i=n(8),b=n(10),s=n(9),j=n(3),l=n(6),h=n(11),f=n.n(h),d=n(2),O=Object(d.b)("phonebook/fetchContactRequest"),p=Object(d.b)("phonebook/fetchContactSuccess"),m=Object(d.b)("phonebook/fetchContactError"),v=Object(d.b)("phonebook/addContactRequest"),C=Object(d.b)("phonebook/addContactSuccess"),k=Object(d.b)("phonebook/addContactError"),g=Object(d.b)("phonebook/deleteContactRequest"),x=Object(d.b)("phonebook/deleteContactSuccess"),y=Object(d.b)("phonebook/deleteContactError"),S=Object(d.b)("phonebook/changeFilter");f.a.defaults.baseURL="http://localhost:4444";var w,A,R=function(){return function(t){return t(O()),f.a.get("/contacts").then((function(e){var n=e.data;return t(p(n))})).catch((function(e){return t(m(e))}))}},q=function(t){return function(e){return e(v()),f.a.post("/contacts",t).then((function(t){var n=t.data;return e(C(n))})).catch((function(t){return e(k(t))}))}},N=function(t){return function(e){return e(g()),f.a.delete("/contacts/".concat(t)).then((function(){return e(x(t))})).catch((function(t){return e(y(t))}))}},L=n(13),z=function(t){return t.phonebook.contacts},E=(Object(L.a)([z,function(t){return t.phonebook.filter}],(function(t,e){var n=e.toString().toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),z),F=n(58),J=n(1),M=function(t){Object(b.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={id:Object(F.a)(),name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,r=n.value;t.setState(Object(j.a)({},c,r))},t.handleSubmit=function(e){e.preventDefault(),t.handleCheckUniqueContact(t.state.name)||t.props.onSubmit(t.state),t.reset()},t.handleCheckUniqueContact=function(e){var n=t.props.contacts.find((function(t){return t.name===e}));if(n)return alert("Contact is already exist"),n},t.reset=function(){t.setState({id:Object(F.a)(),name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(J.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(J.jsxs)("label",{children:["Name",Object(J.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(J.jsxs)("label",{children:["Number",Object(J.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(J.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),T=Object(l.b)((function(t){return{contacts:E(t)}}),(function(t){return{onSubmit:function(e){t(q(e))}}}))(M),U=function(t){Object(b.a)(n,t);var e=Object(s.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this;return Object(J.jsx)("ul",{children:this.props.contacts.map((function(e){return Object(J.jsxs)("li",{children:[Object(J.jsxs)("p",{children:["\ud83d\udcf1 ",e.name,": ",e.number]}),Object(J.jsx)("button",{className:"btnRemove",onClick:function(){t.props.onRemove(e.id)},children:"Remove"})]},e.id)}))})}}]),n}(c.Component),Z=function(t,e){var n=e.toString().toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},B=Object(l.b)((function(t){var e=t.phonebook,n=e.contacts,c=e.filter;return{contacts:Z(n,c)}}),(function(t){return{fetchContacts:function(){t(R())},onRemove:function(e){t(N(e))}}}))(U),D=Object(l.b)(null,(function(t){return{onChange:function(e){return t(S(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(J.jsxs)("label",{className:"form",children:["Find contacts by name",Object(J.jsx)("input",{value:e,onChange:n})]})})),I=(n(55),n(25)),P=n(5),$=Object(d.c)([],(w={},Object(j.a)(w,p,(function(t,e){return e.payload})),Object(j.a)(w,C,(function(t,e){var n=e.payload;return[].concat(Object(I.a)(t),[n])})),Object(j.a)(w,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),G=Object(d.c)(!1,(A={},Object(j.a)(A,O,(function(){return!0})),Object(j.a)(A,p,(function(){return!1})),Object(j.a)(A,m,(function(){return!1})),Object(j.a)(A,v,(function(){return!0})),Object(j.a)(A,C,(function(){return!1})),Object(j.a)(A,k,(function(){return!1})),Object(j.a)(A,g,(function(){return!0})),Object(j.a)(A,x,(function(){return!1})),Object(j.a)(A,y,(function(){return!1})),A)),H=Object(d.c)("",Object(j.a)({},S,(function(t,e){return e.payload}))),K=Object(P.b)({contacts:$,filter:H,loading:G}),Q=Object(d.a)({reducer:{phonebook:K},devTools:!1}),V=function(t){Object(b.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(J.jsx)(l.a,{store:Q,children:Object(J.jsxs)("div",{className:"app",children:[Object(J.jsx)("h1",{children:"Phonebook"}),Object(J.jsx)(T,{}),Object(J.jsx)("h2",{children:"Contacts"}),Object(J.jsx)(D,{}),Object(J.jsx)(B,{})]})})}}]),n}(c.Component);a.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(V,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.5bdca2e8.chunk.js.map