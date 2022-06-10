let selectedImages = [];
let isComparisonSelected = false;

function startComparison() {
  document.getElementById("comparison-button").style.display = "block";
  document.getElementById("Compare").style.display = "none";
  isComparisonSelected = true;
  document.getElementById("Sort").style.marginLeft="-40%";
  document.getElementById("productlink").style.display = "none";
}

function closeComparison() {
  document.getElementById("comparison-button").style.display = "none";
  document.getElementById("Compare").style.display = "block";
  isComparisonSelected = false;
  ["p1", "p4"].map((id) => {
    document.getElementById(id).style.border = "none";
  });
  selectedImages = [];
  document.getElementById("Sort").style.marginLeft="0%";
  document.getElementById("productlink").style.display = "block";
}

function selectImages(elmID) {
  if (selectedImages.length < 2 && isComparisonSelected) {
    const elem = document.getElementById(elmID);
    elem.style.border = "1.5px solid #d7ca89";
    elem.style.borderRadius = "20px";
    selectedImages.push(elem.src);
  }
}

function compareElements() {
  if (selectedImages.length === 0) {
    document.getElementById('no-car-selected').style.display = "block";
    document.body.style.overflow = "hidden";
  } else if (selectedImages.length === 1) {
    document.getElementById('one-car-selected').style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    sessionStorage.setItem("selectedImages", JSON.stringify(selectedImages));
    window.location.href = window.location.origin + "/comparison.html";
  }
}

function closeError() {
  document.getElementById('no-car-selected').style.display = "none";
  document.getElementById('one-car-selected').style.display = "none";
  ["p1", "p4"].map((id) => {
    document.getElementById(id).style.border = "none";
  });
  selectedImages = [];
  document.body.style.overflow = "auto";
}
