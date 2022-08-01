function chuyentien(){
    let tien = +(document.getElementById("tien").value);
    let chuyenu =+(document.getElementById("chuyenu").value);
    let usd =+(document.getElementById("usd").value);
    let giatri = tien * usd 
    document.getElementById("giatri").innerHTML=tien + " USD bằng " + giatri + " VND ";
}