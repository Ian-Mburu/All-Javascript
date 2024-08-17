// input validation

let x = document.getElementById('mynum').ariaValueMax;

try {
    if (x == "") throw 'empty';        //error cases
    if (isNaN (x)) throw 'not a number';
    x = Number(x)
    if (x > 10) throw 'too high';
}
catch(err) {
    document.write('input is' + err)
    console.error(err)
}
finally {
    document.write('</br />Done-p')
}