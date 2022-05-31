var a=[];
function checks(id){
    a.push(id);
}
async function mulDel(){
    console.log(a);
    for(let i of a){
       await fetch(`/deleteTask/?id=${i}`);
    }
window.location.reload();
}