function ShowAndHide() {
    var x = document.getElementById('profile');
    let chev_down = document.getElementById('down-chevron');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}