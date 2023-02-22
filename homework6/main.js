// make the location input box disappear when the auto-detect checkedbox is checked
const autochecked = document.getElementById("autochecked");

// if(autochecked.checked){
//     var locationInput = document.getElementById("locationInput");
//     locationInput.style.display = "none";
//     locationInput.value = "";
// }else{
//     var locationInput = document.getElementById("locationInput");
//     locationInput.style.display = "block";
//     locationInput.value = "";
// }
autochecked.onclick = function(){
    if(autochecked.checked){
        var locationInput = document.getElementById("locationInput");
        locationInput.style.display = "none";
        locationInput.value = "";
        autochecked.style.float = "left";
    }else{
        var locationInput = document.getElementById("locationInput");
        locationInput.style.display = "block";
    }
}

