(this["webpackJsonpmine-sweeper"]=this["webpackJsonpmine-sweeper"]||[]).push([[0],{13:function(e,r,t){},8:function(e,r,t){"use strict";t.r(r);var a=t(3),s=t(4),n=t(6),i=t(5),u=t(1),d=t.n(u),h=t(7),o=t.n(h),c=(t(13),t(0));function l(e){return Object(c.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var q=function(e){Object(n.a)(t,e);var r=Object(i.a)(t);function t(){return Object(a.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"renderSquare",value:function(e){var r=this;return Object(c.jsx)(l,{value:this.props.squares[e],onClick:function(){return r.props.onClick(e)}})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(7),this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(14),this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19),this.renderSquare(20)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24),this.renderSquare(25),this.renderSquare(26),this.renderSquare(27)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(28),this.renderSquare(29),this.renderSquare(30),this.renderSquare(31),this.renderSquare(32),this.renderSquare(33),this.renderSquare(34)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(35),this.renderSquare(36),this.renderSquare(37),this.renderSquare(38),this.renderSquare(39),this.renderSquare(40),this.renderSquare(41)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(42),this.renderSquare(43),this.renderSquare(44),this.renderSquare(45),this.renderSquare(46),this.renderSquare(47),this.renderSquare(48)]})]})}}]),t}(d.a.Component);function S(e){return[Math.floor(e/7)+1,e%7+1]}var b=function(e){Object(n.a)(t,e);var r=Object(i.a)(t);function t(e){var s;Object(a.a)(this,t),s=r.call(this,e);for(var n=Array(49).fill(0),i=0;i<Math.floor(49/3);i++)n[Math.floor(49*Math.random())]=1;for(var u,d,h=0,o=0;o<49;o++)if(1!=n[o]){h+=1;for(var c=S(o),l=c[0],q=c[1],b=0,j=-1;j<=1;j++)for(var v=-1;v<=1;v++)0==j&&0==v||1>l+j||l+j>7||1>q+v||q+v>7||1==n[(u=l+j,d=q+v,7*(u-1)+d-1)]&&b++;n[o]=-b}return s.state={squares:Array(49).fill(null),berried:Array(49).fill(!1),bombs:n,turnCount:0,noBombCount:h,status:"Hello, world!"},s}return Object(s.a)(t,[{key:"handleSquare",value:function(e){var r=S(e);r[0],r[1];if(!this.state.berried[e]&&!(e<0||49<=e))if(1!=this.state.bombs[e]){var t=this.state.squares.slice(),a=this.state.berried.slice(),s=this.state.noBombCount;a[e]=!0,t[e]=String(-1*this.state.bombs[e]),--s<=0&&alert("Game Clear!  Conguraturation!!"),this.setState({squares:t,berried:a,noBombCount:s})}else alert("Game Over!")}},{key:"render",value:function(){var e=this,r=this.state.status,t=this.state.squares;return Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("div",{className:"game-board",children:Object(c.jsx)(q,{squares:t,onClick:function(r){return e.handleSquare(r)}})}),Object(c.jsx)("div",{className:"game-info",children:Object(c.jsx)("div",{children:r})})]})}}]),t}(d.a.Component);o.a.render(Object(c.jsx)(b,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.74182a93.chunk.js.map