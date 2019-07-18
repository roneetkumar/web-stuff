
function $(ele) {
    return document.querySelector(ele);
}

$('button').onclick = function () {


    let box = $('.box-1');

    if (box.classList.contains('slide')) {
        box.classList.remove('slide');
        setTimeout(function () {
            box.classList.toggle('slide');
        }, 300);
    } else {
        box.classList.add('slide');
    }

}
