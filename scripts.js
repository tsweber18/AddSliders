function fib(n){
    var num;
    var div = document.createElement('div');
    if (n<2){
        if (n===1){
            num=1;
        }
        else if (n===0){
            num=0
        }
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + num;
        //div.appendChild(p);
    }
    else{
        var left = fib(n - 1);
        var right = fib(n - 2);
        
        num = left.num+right.num;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + num;
        //div.appendChild(p);
        
        //div.appendChild(left.html);
        //div.appendChild(right.html);
    }
    return {'num':num, 'html': div};
}