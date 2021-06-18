function ShowAndHide() {
    var x = document.getElementById('profile');
    let chev_down = document.getElementById('down-chevron');
    
    if (x.style.display == 'none') {
        x.style.display = 'block';
        chev_down.src="./resources/icons/chevron-up.svg";
    } else {
        x.style.display = 'none';
        chev_down.src="./resources/icons/chevron-down (1).svg";
    }
}