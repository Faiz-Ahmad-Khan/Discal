(this.webpackJsonpmyfirstreactapp=this.webpackJsonpmyfirstreactapp||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),c=a.n(s),o=(a(20),a(21),a(22),a(12)),r=a(9),i=a(10),u=a(13),m=a(11),h=a(3),p=a(14),d=a(1),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleDiscount=function(e){a.setState({discount:e.target.value},(function(){a.calculate(),console.log(a.state.discount)}))},a.handleTax=function(e){a.setState({tax:e.target.value},(function(){a.calculate(),console.log(a.state.tax)}))},a.state={costs:[""],discount:"",tax:"",newCosts:[null]},a.calculate=a.calculate.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"calculate",value:function(e){var t=0;if(this.state.costs.forEach((function(e){return t+=e?parseInt(e):0})),NaN!==t){var a=parseInt(t)-parseInt(this.state.discount||0)+parseInt(this.state.tax||0);console.log(a);var n=this.state.costs.map((function(e,n){var l=e/t*100;console.log(Math.round(l));var s=l/100*a;return console.log(Math.round(s)),Math.round(s)}));this.setState({newCosts:n})}}},{key:"addClick1",value:function(){this.setState({costs:[].concat(Object(o.a)(this.state.costs),[""])})}},{key:"handleChange1",value:function(e,t){var a=this;this.state.costs[t]=e.target.value,this.setState({costs:this.state.costs},(function(){a.calculate()}))}},{key:"handleRemove1",value:function(e,t){var a=this;this.state.costs.splice(t,1),console.log(this.state.costs,"$$$$"),this.setState({costs:this.state.costs},(function(){a.calculate()}))}},{key:"render",value:function(){var e=this,t=0,a=0,n=this.state.newCosts;return l.a.createElement("div",null,l.a.createElement(d.Grid,null,l.a.createElement(d.Row,null,l.a.createElement(d.Col,{xs:12},l.a.createElement("h1",{style:{fontFamily:"Open Sans",fontSize:"48px",fontWeight:"bold"}},"Discal",l.a.createElement("span",{style:{fontFamily:"Open Sans",fontSize:"15px",fontWeight:"normal",fontStyle:"italic",color:"green",marginLeft:"10px"}},"Helps to find the discounted price"))),l.a.createElement(d.Col,{xs:6,className:"verticalLine"},l.a.createElement(d.Row,null,l.a.createElement(d.Col,{xs:12},l.a.createElement("h2",{className:"columnFont"},"Items"))),this.state.costs.map((function(t,a){return l.a.createElement(d.Row,{key:a,bottom:"xs"},l.a.createElement(d.Col,{xs:4},l.a.createElement("input",{type:"text",placeholder:"Item Name",className:"calcInput"})),l.a.createElement(d.Col,{xs:4},l.a.createElement("input",{type:"number",placeholder:"Enter Amount:",size:"20",onChange:function(t){return e.handleChange1(t,a)},value:t,className:"calcInput rupee"})),l.a.createElement(d.Col,{xs:4},1===e.state.costs.length?l.a.createElement("button",{disabled:!0,onClick:function(t){return e.handleRemove1(t)},className:"deleteButtons disabledButtons"},"Delete"):l.a.createElement("button",{onClick:function(t){return e.handleRemove1(t,a)},className:"deleteButtons"},"Delete")))})),l.a.createElement(d.Row,null,l.a.createElement(d.Col,{xs:3},l.a.createElement("button",{onClick:function(t){return e.addClick1(t)},className:"addNewButtons"},"Add More")),l.a.createElement(d.Col,{xs:5},l.a.createElement("p",{style:{textAlign:"left",fontSize:"30px",fontWeight:"bold",marginTop:"60px"}},"Total Amount:")),l.a.createElement(d.Col,{xs:4},l.a.createElement("h1",{name:"total",className:"calcInput columnFont totalRupee"},parseInt(this.state.costs)&&parseInt(this.state.costs.map((function(e){return t+=e?parseInt(e):0})))&&parseInt(t)||0)))),l.a.createElement(d.Col,{xs:5,xsOffset:1},l.a.createElement(d.Row,null,l.a.createElement(d.Col,{xs:12},l.a.createElement("h2",{className:"columnFont"},"Effective Price"))),n.map((function(e,t){return l.a.createElement(d.Row,{key:t},l.a.createElement(d.Col,{xs:8},l.a.createElement("h1",{name:"effectivePrice",className:"calcInput columnFont effectivePrice"},parseFloat(e)||0)))})),l.a.createElement(d.Row,null,l.a.createElement(d.Col,{xs:8},l.a.createElement("p",{style:{textAlign:"left",fontSize:"30px",fontWeight:"bold",marginTop:"35px"}},"Total Effective Price:")),l.a.createElement(d.Col,{xs:4},l.a.createElement("h1",{name:"effectivePrice",className:"calcInput columnFont effectivePrice"},parseInt(n)&&parseInt(n.map((function(e){return a+=e?parseInt(e):0})))&&parseInt(a)||0)))),l.a.createElement(d.Col,{xs:12},l.a.createElement(d.Row,null,l.a.createElement(d.Col,{xs:12},l.a.createElement(d.Row,null,l.a.createElement(d.Col,{xs:3},l.a.createElement("h2",{className:"columnFont"},"Total Discount:")),l.a.createElement(d.Col,{xs:3},l.a.createElement("input",{type:"number",placeholder:"Enter Discount Amount",value:this.state.discount,name:"discount",onChange:this.handleDiscount,className:"discountInput rupee"}))),l.a.createElement(d.Row,null,l.a.createElement(d.Col,{xs:3},l.a.createElement("h2",{className:"columnFont"},"Total Tax:")),l.a.createElement(d.Col,{xs:3},l.a.createElement("input",{type:"number",placeholder:"Enter Tax Amount",value:this.state.tax,name:"tax",onChange:this.handleTax,className:"taxInput rupee"}))),l.a.createElement(d.Row,null,l.a.createElement(d.Col,{xs:3},l.a.createElement("h2",{style:{textAlign:"left",fontSize:"30px",fontWeight:"bold",marginTop:"35px"}},"Total Amount Paid:")),l.a.createElement(d.Col,{xs:3},l.a.createElement("h1",{name:"discountedPrice",className:"calcInput columnFont discountedPrice"},parseInt(t)-parseInt(this.state.discount||0)+parseInt(this.state.tax||0))))))))),l.a.createElement("div",{className:"footer"},"Created by - Faiz Ahmad Khan"))}}]),t}(l.a.Component);var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.5d6049dc.chunk.js.map