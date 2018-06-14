$(document).ready(function() {

    function cutCon(obj, num = 10) {
        const len = $(obj).length;
        for (let i = 0; i < len; i++) {
            const val = $(obj)[i].innerHTML;
            if (val.length > num) {
                const newVal = val.substr(0, 10) + '...';
                $(obj)[i].innerHTML = newVal;
            }
        }
    }
    const CONTENT_LEN = 50;
    cutCon('.card_title', CONTENT_LEN);

    // 图片放大
    const modal = document.getElementsByClassName('model-img');
    const img = document.getElementsByClassName('card-img-top');
    $('.card-img-top').on('click', function() {
        const modal = $(this).next();
        modal.css('display', 'block');
        $(this).next().find('img')[0].src = this.src;
        $(this).next().find('span')[0].onclick = function() {
             modal.css('display', 'none');
        }
    });
});