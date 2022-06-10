function openPopup() {
    document.getElementById("reserve-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("reserve-popup").style.display = "none";
}
  
function confirmPopup1() {
    document.getElementById("reserve-popup").style.display = "none";
    document.getElementById("recorded").style.display = "block";
}

function confirmPopup2() {
    document.getElementById("recorded").style.display = "none";
}