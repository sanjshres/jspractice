function fibo(j) {
    var arry = [0, 1];
    var i = 1;
    if (j == 1) {
        return [0];
    }
    if (j == 2) {
        return [0, 1];
    }
    while (i <= j - 2) {
        var n = arry.length;
        var m = n - 1;
        var z = arry[m];

        var d = arry[m] + arry[m - 1];
        arry.push(d);
        i++;
    }
    return (arry);
}
fibo(10)

