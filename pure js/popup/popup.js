let popup;

document.addEventListener('DOMContentLoaded', () => {
    popup = document.getElementById('modal');
})

function showPopup(){
    popup.style.display = "block";
}

function closePopup(){
    popup.style.display = "none";
}

