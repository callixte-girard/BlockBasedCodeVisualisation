(this.webpackJsonpjs2blockly=this.webpackJsonpjs2blockly||[]).push([[0],{101:function(e,t,a){},108:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(95),l=a.n(o),s=(a(101),a(6)),i=a(7),c=a(9),u=a(8),m=a(10),p=a(21),h=a.n(p),f=(a(108),a(40)),E=a(41),v=a.n(E),d=a(29),y=a.n(d),b="--------------------------------------------------------------------------",g="***************************************************************************",k={height:500,width:500,color:"#e7e0e0",background:"#1a1818",font:"comic-sans-ms",border:"1px solid black",display:"inline-block"},x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).exampleCode="put your js code here...",a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("textarea",{style:k,placeholder:this.exampleCode,onChange:this.props.updateCode})}}]),t}(r.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateBlocksFromXml",value:function(e){h.a.getMainWorkspace().clear();try{h.a.Xml.appendDomToWorkspace(h.a.Xml.textToDom(e),h.a.getMainWorkspace())}catch(t){}}},{key:"componentWillUpdate",value:function(e,t,a){this.updateBlocksFromXml(e.xmlContent)}},{key:"render",value:function(){return r.a.createElement("div",{id:"blocklyDiv",style:k})}}]),t}(r.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,null,[{key:"forVariableDeclaration",value:function(e,t){var a,n;return n=r.a.createElement("field",{name:"VAR"},e),a=void 0!==t?[n,r.a.createElement("value",{name:"VALUE"},t)]:[n],r.a.createElement("block",{type:"variables_set"},a)}},{key:"forVariableUpdate",value:function(e,t){return r.a.createElement("block",{type:"math_change"},r.a.createElement("field",{name:"VAR"},e),r.a.createElement("value",{name:"DELTA"},t))}},{key:"forIfStatement",value:function(e,t){var a=[],n=e.length-1,o=t.length-e.length;a.push(r.a.createElement("mutation",{elseif:n,else:o}));for(var l=0;l<e.length;l++){var s=e[l],i=t[l];a=a.concat([r.a.createElement("value",{name:"IF"+l},s),r.a.createElement("statement",{name:"DO"+l},i)])}try{a.push(r.a.createElement("statement",{name:"ELSE"},t[e.length]))}catch(c){}return r.a.createElement("block",{type:"controls_if"},a)}},{key:"forWhileStatement",value:function(e,t){return r.a.createElement("block",{type:"controls_whileUntil"},r.a.createElement("field",{name:"MODE"},"WHILE"),r.a.createElement("value",{name:"BOOL"},e),r.a.createElement("statement",{name:"DO"},t))}},{key:"forForStatement",value:function(e,t,a,n,o){return r.a.createElement("block",{type:"controls_for"},r.a.createElement("field",{name:"VAR"},e),r.a.createElement("value",{name:"FROM"},t),r.a.createElement("value",{name:"TO"},a),r.a.createElement("value",{name:"BY"},n),r.a.createElement("statement",{name:"DO"},o))}},{key:"for1ArgExpression",value:function(e,t){var a;return a=C[t],console.log("blocklyType:",a),r.a.createElement("block",{type:a},r.a.createElement("value",{name:"BOOL"},e))}},{key:"for2ArgsExpression",value:function(e,t,a){var n,o;return o=j[a],n=A[a],console.log("blocklyOp:",o),console.log("blocklyType:",n),"="===a?r.a.createElement("block",{type:n}):r.a.createElement("block",{type:n},r.a.createElement("value",{name:"A"},e),r.a.createElement("value",{name:"B"},t),r.a.createElement("field",{name:"OP"},o))}},{key:"forEndExpression",value:function(e,t){var a,n;if("Identifier"===e)a="variables_get",n="VAR";else if("Literal"===e)if(null===t)a="logic_null";else switch(typeof t){case"number":a="math_number",n="NUM";break;case"string":a="text",n="TEXT";break;case"boolean":a="logic_boolean",n="BOOL"}var o="";return null!==n&&(o=r.a.createElement("field",{name:n},t.toString())),r.a.createElement("block",{type:a},o)}}]),t}(r.a.Component),j={"===":"EQ","==":"EQ","!==":"NEQ","!=":"NEQ","<":"LT","<=":"LTE",">":"GT",">=":"GTE","+":"ADD","-":"MINUS","*":"MULTIPLY","/":"DIVIDE","**":"POWER","&&":"AND","||":"OR"},C={"!":"logic_negate"},A={"===":"logic_compare","==":"logic_compare","!==":"logic_compare","!=":"logic_compare","<":"logic_compare","<=":"logic_compare",">":"logic_compare",">=":"logic_compare","+":"math_arithmetic","-":"math_arithmetic","*":"math_arithmetic","/":"math_arithmetic","**":"math_arithmetic","&&":"logic_operation","||":"logic_operation"};var I=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,null,[{key:"parseListStatements",value:function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a],r=n.type;if(r.includes("Statement")){console.log("statementType:",r);var o=void 0,l=void 0;if("ExpressionStatement"===r){var s=n.expression,i=s.type,c=s.operator;if("AssignmentExpression"===i){var u=s.left,m=s.right,p=u.name;if("="===c)l=this.parseExpression(m),o=S.forVariableDeclaration(p,l);else if("+="===c||"-="===c){var h=m.value;o=this.parseUpdateStatement(p,h,c)}}else if("UpdateExpression"===i){var f=s.argument.name,E=1;c.includes("-")&&(E=-E),o=this.parseUpdateStatement(f,E,c)}}else"IfStatement"===r?o=this.parseIfStatement(n):"WhileStatement"===r?o=this.parseWhileStatement(n):"ForStatement"===r&&(o=this.parseForStatement(n));t.push(o)}else if(r.includes("Declaration")&&"VariableDeclaration"===r)for(var v=n.declarations,d=0;d<v.length;d++){var y,g=v[d],k=void 0,x=void 0,O=g.id,j=g.init;console.log("variableName"+d.toString()+":",O),console.log("variableValue"+d.toString()+":",j),y=O.name;try{x=this.parseExpression(j),k=S.forVariableDeclaration(y,x)}catch(C){k=S.forVariableDeclaration(y)}t.push(k)}console.log(b)}return t=_.nextifyXmlStatementListIntoSingleBlock(t)}},{key:"parseUpdateStatement",value:function(e,t,a){"-="===a&&(t=-t);var n=S.forEndExpression("Literal",t);return S.forVariableUpdate(e,n)}},{key:"parseWhileStatement",value:function(e){var t=e.test,a=e.body;console.log("statementCondition:",t);var n=this.parseExpression(t),r=this.parseAutonomousStatementInstructions(a);return S.forWhileStatement(n,r)}},{key:"parseIfStatement",value:function(e){var t=[],a=[],n=e.test,r=e.consequent;t.push(this.parseExpression(n)),a.push(this.parseAutonomousStatementInstructions(r));try{for(var o=e.alternate;"IfStatement"===o.type;)try{var l=o.test,s=o.consequent;t.push(this.parseExpression(l)),a.push(this.parseAutonomousStatementInstructions(s)),o=o.alternate}catch(i){}a.push(this.parseAutonomousStatementInstructions(o))}catch(c){}return S.forIfStatement(t,a)}},{key:"parseForStatement",value:function(e){var t,a,n,r,o=e.init,l=e.test,s=e.update,i=e.body;if("VariableDeclaration"===o.type){var c=o.declarations[0];t=c.id.name,a=c.init.value}else"AssignmentExpression"===o.type&&(t=o.left.name,a=o.right.value);n=l.right.value;var u=l.operator;"AssignmentExpression"===s.type?r=s.right.value:"UpdateExpression"===s.type&&(r=1),s.operator.includes("-")&&(r=-r),console.log(t,a,n,r);var m,p,h,f=[];return f.push(this.parseAutonomousStatementInstructions(i)),(n>=a&&u.includes("<")||n<=a&&u.includes(">"))&&(m=S.forEndExpression("Literal",a),p=S.forEndExpression("Literal",n),h=S.forEndExpression("Literal",r)),S.forForStatement(t,m,p,h,f)}},{key:"parseAutonomousStatementInstructions",value:function(e){var t=e.body;return console.log("statementInstructions:",t),this.parseListStatements(t)}},{key:"parseExpression",value:function(e){return e.type.includes("Expression")?this.parseHostExpression(e):this.parseEndExpression(e)}},{key:"parseHostExpression",value:function(e){var t,a=e.type,n=e.operator;if(console.log("expressionType:",a),console.log("expressionOperator:",n),"UnaryExpression"===a){var r=e.argument,o=this.parseExpression(r);t=S.for1ArgExpression(o,n)}else if("LogicalExpression"===a||"BinaryExpression"===a){var l=e.left,s=e.right,i=this.parseExpression(l),c=this.parseExpression(s);t=S.for2ArgsExpression(i,c,n)}else"AssignmentExpression"!==a&&"UpdateExpression"!==a||console.log("!!! UNEXPECTED SITUATION !!!");return t}},{key:"parseEndExpression",value:function(e){var t,a,n=e.type;return"Literal"===n?a="value":"Identifier"===n&&(a="name"),t=e[a],console.log("endExpression:",n,t),S.forEndExpression(n,t)}}]),t}(r.a.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,null,[{key:"nextifyXmlStatementListIntoSingleBlock",value:function(e){for(var t=e.length-1;t>0;t--){var a=e[t],n=e[t-1],o=n.props.type,l=n.props.children;n=r.a.createElement("block",{type:o},l,r.a.createElement("next",null,a),"}"),e[t-1]=n,console.log(b)}return e[0]}},{key:"generateBlocksFromParsedContent",value:function(e){var t=r.a.createElement("xml",{xmlns:"http://www.w3.org/1999/xhtml"},I.parseListStatements(e));return console.log(b),console.log("xml_main (stringified) :",y()(t)),t}}]),t}(r.a.Component),D=a(181),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={parsedContent:null,xmlContent:""},a.updateCode=a.updateCode.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateCode",value:function(e){var t=e.target.value;try{var a=this.syntaxicAnalysis(t);console.log(g),console.log("programBody:",a),console.log(g);var n=_.generateBlocksFromParsedContent(a),r=v.a.renderToStaticMarkup(n);this.setState({parsedContent:a,xmlContent:r})}catch(o){this.setState({parsedContent:null,xmlContent:""})}}},{key:"syntaxicAnalysis",value:function(e){try{return D.parse(e).body}catch(t){}}},{key:"lexicalAnalysis",value:function(e){try{return D.tokenize(e)}catch(t){}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,{exampleCode:this.exampleCode,updateCode:this.updateCode}),r.a.createElement(O,{xmlContent:this.state.xmlContent}))}}]),t}(r.a.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){h.a.inject("blocklyDiv",{toolbox:document.getElementById("toolbox")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"HEY GUYS :)"),r.a.createElement("h4",null,"Enjoy visualising horribly-indented code with this fantastic app ;)")),r.a.createElement("br",null),r.a.createElement(L,{className:"main-container"}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},96:function(e,t,a){e.exports=a(182)}},[[96,1,2]]]);
//# sourceMappingURL=main.d664a5ee.chunk.js.map