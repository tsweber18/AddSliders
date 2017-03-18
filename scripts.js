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
        var clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " fib-right");
        
        value = left.value+right.value;
        var p = document.createElement('p');
        p.innerHTML = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return {'value':value, 'html': div};
}

var fib = function(n, node){
    var tree = fibCount(n)
        node.appendChild(tree.html);
        node.setAttribute("id", "fib");
}


fib(6, document.querySelector(' .red'));