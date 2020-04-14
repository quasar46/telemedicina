var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// inicial select
$(document).ready(function () {
    $('.js-example-basic-single').select2();
});

// calendar
$(document).ready(function () {
    $('.datepicker').datepicker({
        startDate: new Date('Mart 12, 2020')
    })

    const $datepicker = $('.js-datepicker');
    const curentTime = $datepicker.val().split('.')
    let datepicker = $datepicker.datepicker({
        startDate: new Date(curentTime[2], curentTime[1] - 1, curentTime[0])
    });
    datepicker.selectDate(new Date(curentTime[2], curentTime[1] - 1, curentTime[0]));
})

$('.closed-popup').on('click', function () {
    $('.popup').removeClass('active');
})
