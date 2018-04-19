"use strict";var App={init:function(){this.handlers()},handlers:function(){$("body").on("click",function(){App.onClick(this)})},onClick:function(n){console.log("Click",n)}};$(document).ready(function(){App.init()});
//# sourceMappingURL=main.js.map
