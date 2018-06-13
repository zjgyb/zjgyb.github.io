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
});