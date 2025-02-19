
// ------scope----
//  The limits in which a variable exists.


//  type in scope
// Gobal scope
// Local scope


// -------Gobal scope-----

// Variables declared outside any function or block are accessible everywhere.
var scope = "Golbal";

console.log(scope);
function access() {
    console.log(scope);
}
access();
    
    // ------Local scope
// Variables declared inside a function are only accessible within that function.



function goo() {
    var p = 'Kite';
    console.log( p);
}

goo();          
console.log(p); 