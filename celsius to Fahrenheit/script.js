function celisus() {
    let inputval = Number(document.getElementById("input").value);
    let f = (inputval - 32) * (5 / 9);
    let result = document.getElementById("result").innerHTML = f.toFixed(3) + " celsius";
    

}
