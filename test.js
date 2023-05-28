let priceobj = 45687
// function bignumberwithbrucets(number1){
//     const array1 = number1.toString().split('').reverse();
//     if (array1.length>3&&array1.l)
//     console.log(array1)
   
//     }
// bignumberwithbrucets(priceobj);

function numtostringwithcomma(num) {
    const str = num?.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}
console.log(numtostringwithcomma(priceobj))
   