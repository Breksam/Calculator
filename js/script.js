// determine the equation and get result
function result() {
    field.value= eval(field.value).toFixed(1);
}

// delete one by one from input value
function deleteNum(){
    let num = document.getElementById("field").value;
    let deletenum= num.substring(0, num.length - 1);
    document.getElementById("field").value = deletenum; 
}


