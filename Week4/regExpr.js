var str = Nate;
var regExpr = /Nate/;
var p = document.querySelector("p");

p.innerHTML = regExpr.test(str);