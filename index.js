let homeEl=document.getElementById("home-el");
let oppEl=document.getElementById("opp-el");
let count=0;

function add(xyx){
    count = count + xyx;
    homeEl.textContent=count;
}
function opp(values){
    count=count+values;
    oppEl.innerText=count;
}
 
// function addOne () {
 
//     count=count+1;
//     homeEl.textContent=count;
// }
// function add2(){
//     count=count+2;
//     homeEl.textContent=count;
// }
// function add3 (){
//     count=count+3;
//     homeEl.textContent=count;

// }