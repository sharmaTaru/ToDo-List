
// taking the id of every task so that only selected tasks can be deleted 
var a = [];
function checks(id) {
    a.push(id);    
}
async function mulDel() {
    console.log(a);
    for (let i of a) {
        await fetch(`/deleteTask/?id=${i}`);
    }
    window.location.reload();
}
// setting minimum date to today's date so no one can enter task in past time
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (mm < 10)
    mm = '0' + mm.toString();
if (dd < 10)
    dd = '0' + dd.toString();
var curDate = yyyy + '-' + mm + '-' + dd;
document.getElementById('date').setAttribute('min', curDate);
