function fibCount(n){
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");
    
    if (n<2){
        if (n===1){
            value=1;
        }
        else if (n===0){
            value=0;
        }
        var p = document.createElement('p');
        p.innerHTML = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else{
        var left = fibCount(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " fib-left");
        
        var right = fibCount(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " fib-right");
        
        value = left.value+right.value;
        p = document.createElement('p');
        p.innerHTML = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return {'value':value, 'html': div};
}

var fib = function(n, node){
    var tree = fibCount(n);
        node.appendChild(tree.html);
        node.setAttribute("id", "fib");
};

var style = document.createElement('style');
style.textContent=
    "#fib {" +
    "   display: inline-block;" +
    "   width: 20000px;" +
    "}"+
    "" +
    ".fib{"+
    "   background-color:rgba{0,0,255,0.1);"+
    "}" +
    ""+
    ".fib-left {" +
    "   float:left;"+
    "   display: inline-block;" +
    "   margin-right: 4px;"+
    "}"+
    ""+
    ".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}" +
	"" +
	".red {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,60,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	"" +
	".yellow {" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	"" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,60,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}" +
	"" +
	".green {" +
	"	border-color: rgb(0,255,0);" +
	"	background:   rgb(60,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
	"}";

document.querySelector('body').appendChild(style);

(function(color, id){
    var div = document.createElement('div');
    div.setAttribute('class', color + ' shadowed stuff-box');
    div.setAttribute('id', id);
    document.body.appendChild(div);
}('red', 'fib'));



fib(6, document.querySelector(' .red'));

var divMakerMaker = function(color, id){
    return function(){
        var div = document.createElement('div');
        div.setAttribute('class', color + 'shadowed stuff-box');
        div.setAttribute('id',id);
        document.body.appendChild(div);
    };
};

var bluDiv=divMakerMaker('blue', 'fib');
var yellowDiv = divMakerMaker('yellow', 'yomama');

bluDiv();
yellowDiv();

fib(10, document.querySelector('.blue'));
fib(11, document.querySelector('.yellow'));