$(document).ready(function() {
    $('#main-toggler')[0].onclick = function () {
        this.parentNode.style.outline = 'none';
        this.classList.toggle("change");
    }
});