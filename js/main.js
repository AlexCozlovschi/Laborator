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

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function testpas(s) {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(s) && s.length > 5;
}

const reg_form = document.getElementById("formR")

reg_form.addEventListener('submit', (event)=>{
    email = reg_form.elements['email'].value
    if (!isEmail(email)){
        alert("Wrong email input")
    }

})

const login = document.getElementById("login_f")
login.addEventListener('submit',(event)=>{
     email = login.elements['log_email'].value
     if (!isEmail(email)){
         alert("Wrong email input")
     }


})

function validat(){
    var email = document.forms["formR"]["email"].value;
    if (!isEmail(email)){
        alert("Wrong email input")
    }

}


