function Result(){
    let tr = "";
    let firstvalue = +document.getElementById("first-value").value
    let secondvalue = +document.getElementById("second-value").value
for(let i = 1; i <= secondvalue; i++ ){
   tr +=`<tr><td>${firstvalue}</td><td>*</td><td>${i}</td><td>=</td><td>${i*firstvalue}</td></tr>`
}
document.getElementById("table").innerHTML = tr
}