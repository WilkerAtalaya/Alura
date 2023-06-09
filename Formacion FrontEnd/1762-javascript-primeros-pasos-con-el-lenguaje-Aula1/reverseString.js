function main() {
    var s = document.getElementById("id1").value;
    console.log(s);
    alert(s);
    reverseString(s);
}


function reverseString(s) {
    try{
        let a = new Array();
        a = s.split("");
        alert(a.reverse().join(''));
    }catch(error){
        console.log(error.message);
        console.log(s);
    }

}