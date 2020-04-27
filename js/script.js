document.getElementById("Submit").onclick=function(){
    console.log("Hej");
    var A = parseInt(document.getElementById("A").value)
    var B = parseInt(document.getElementById("B").value)
    console.log(A,B);
    var C = pythagoras(A,B)
    document.getElementById ("C").innerHTML = C;
}
function pythagoras(A,B){
    return Math.sqrt(Math.pow(A,2) + Math.pow(B,2)) 
}