let count = 0;
function myFunction(id) {

    if ( document.getElementById(id).innerHTML === "Like"){
        count = 0;
    }
    else {count = parseInt(document.getElementById(id).innerHTML)}
    count+=1;
    document.getElementById(id).innerHTML = count;

}

var state=false;
function expand(){
    if(state==false){
        document.getElementById("submenu-1").style.display="none";
        state = true;
    }
    else{
        document.getElementById("submenu-1").style.display="inline-table";
        state=false;
    }
}
