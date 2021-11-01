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

function addToSelect(target, min, max){
    if (!target){
        return false;
    }
    else {

        select = document.getElementById(target);

        for (var i = min; i<=max; i++){
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            select.appendChild(opt);
        }
    }
}
date = new Date().getFullYear()

addToSelect("bd_date", 1,31)
addToSelect("bd_year", date - 13, date + 80)