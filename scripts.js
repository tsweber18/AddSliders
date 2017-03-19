function initializeRed() {
    document.title = 'Homework Sucks';
    var redDiv = document.createElement('div');
    redDiv.setAttribute('class', 'red');
    document.body.appendChild(redDiv);
    redDiv.setAttribute('id', 'fib');
}

function initializeYellow() {
    var yellowDiv = document.createElement('div');
    yellowDiv.setAttribute('class', 'yellow');
    document.body.appendChild(yellowDiv);
    yellowDiv.setAttribute('id', 'fib');
}

function initializeBlue() {
    var blueDiv = document.createElement('div');
    blueDiv.setAttribute('class', 'blue');
    document.body.appendChild(blueDiv);
    blueDiv.setAttribute('id', 'fib');
}

initializeRed();
initializeYellow();
initializeBlue();

function fibCount(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");

    if (n < 2) {
        if (n === 1) {
            value = 1;
        }
        else if (n === 0) {
            value = 0;
        }
        var p = document.createElement('p');
        p.innerHTML = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else {
        var left = fibCount(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " fib-left");

        var right = fibCount(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " fib-right");

        value = left.value + right.value;
        p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var fib = function (n, node) {
    var tree = fibCount(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "fib");
};

var style = document.createElement('style');

var styleText = "#fib {";
styleText += "   display: inline-block;";
styleText += "   width: 40000px;";
styleText += "}";
styleText += "";
styleText += ".fib{";
styleText += "   background-color:rgba(60,60,60,0.2);";
styleText += "}";
styleText += "";
styleText += ".fib-middle{";
styleText += "text-align: center;";
styleText += "display: inline-block;";
styleText += "margin-left: 4px;";
styleText += "margin-right: 4px;";
styleText += "}";
styleText += "";
styleText += ".fib-left {";
//styleText += "   float:left;";
styleText += " text-align: center;";
styleText += "   display: inline-block;";
styleText += "   margin-right: 4px;";
styleText += "}";
styleText += "";
styleText += ".fib-right {";
styleText += " text-align: center;";
//styleText += "	float: right;";
styleText += "	display: inline-block;";
styleText += "	margin-left: 4px;";
styleText += "}";
styleText += "";
styleText += ".shadowed {";
styleText += "	text-shadow: 1px 1px 2px black;";
styleText += "	color:       white;";
styleText += "}";
styleText += ".stuff-box {";
styleText += "	font-family: 'helvetica neue', helvetica, sans-sif;";
styleText += "	letter-spacing: 1px;";
styleText += "	text-transform: capitalize;";
styleText += "	text-align: center;";
styleText += "	padding: 3px 10px;";
styleText += "	margin: 10px;";
styleText += "	cursor: pointer;";
styleText += "	border-radius: 10px;";
styleText += "	border-width: 2px;";
styleText += "	border-style: solid;";
styleText += "}";
styleText += "";
styleText += ".red {";
styleText += "	border-color: rgb(255,0,0);";
styleText += "	background:   rgb(180,60,60);";
//styleText+=	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" ;
styleText += "}";
styleText += "";
styleText += ".yellow {";
styleText += "	border-color: rgb(255,255,0);";
styleText += "	background:   rgb(180,180,60);";
//styleText+=	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" ;
styleText += "}";
styleText += "";
styleText += ".blue {";
styleText += "	border-color: rgb(0,0,255);";
styleText += "	background:   rgb(60,60,180);";
//styleText+=	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" ;
styleText += "}";
styleText += "";
styleText += ".green {";
styleText += "	border-color: rgb(0,255,0);";
styleText += "	background:   rgb(60,180,60);";
//styleText+=	"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);";
styleText += "}";

style.textContent = styleText;
document.querySelector('body').appendChild(style);

// (function (color, id) {
//     var div = document.createElement('div');
//     div.setAttribute('class', color + ' shadowed stuff-box');
//     div.setAttribute('id', id);
//     document.body.appendChild(div);
// }('red', 'fib'));



fib(11, document.querySelector(' .red'));

// var divMakerMaker = function (color, id) {
//     return function () {
//         var div = document.createElement('div');
//         div.setAttribute('class', color + 'shadowed stuff-box');
//         div.setAttribute('id', id);
//         document.body.appendChild(div);
//     };
// };

function tribHelper(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");

    if (n < 3) {
        if (n === 2) {
            value = 1;
        }
        else if (n === 1) {
            value = 0;
        }
        else if (n === 0) {
            value = 0;
        }
        var p = document.createElement('p');
        p.innerHTML = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else {
        var left = tribHelper(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " fib-left");

        var middle = tribHelper(n - 2);
        clas = middle.html.getAttribute("class");
        middle.html.setAttribute("class", clas + " fib-middle");

        var right = tribHelper(n - 3);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " fib-right");

        value = left.value + middle.value + right.value;
        p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(middle.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var trib = function (n, node) {
    var tree = tribHelper(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "fib");
};
trib(11, document.querySelector(' .yellow'));

function pellHelper(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");

    if (n < 2) {
        if (n === 1) {
            value = 1;
        }
        else if (n === 0) {
            value = 0;
        }
        var p = document.createElement('p');
        p.innerHTML = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else {
        var left = pellHelper(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " fib-left");

        var right = pellHelper(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " fib-right");

        value = (2 * (left.value)) + right.value;
        p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var pell = function (n, node) {
    var tree = pellHelper(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "fib");
}

pell(11, document.querySelector('.blue'));