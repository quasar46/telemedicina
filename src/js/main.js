$(document).ready(function () {

    const accordion = function () {
        let acc = document.getElementsByClassName("accordion");
        let i;

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
    }
    accordion();

    $('.js-example-basic-single').select2();

    // tabsА
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    let logDate = ['2021/04/20', '2021/04/25']

    // calendar
    $('.datepicker-cal').datepicker({
        onRenderCell: function (date, cellType) {
            if (cellType == 'day' && logDate.includes(moment(date).format('YYYY/MM/DD'))) {
                return {
                    classes: 'exam',
                }
            }
        }
    })

    // popup
    $('#btn-add-pacient').on('click', function () {
        $('#profile-popup').addClass('active');
    })
    $('#btn-next1').on('click', function () {
        $('#profile-popup').removeClass('active');
        $('#general-popup').addClass('active');
    })
    $('#btn-next2').on('click', function () {
        $('#general-popup').removeClass('active');
        $('#gestation-popup').addClass('active');
    })
    $('#btn-next3').on('click', function () {
        $('#gestation-popup').removeClass('active');
        $('#mutation-popup').addClass('active');
    })
    $('#btn-next4').on('click', function () {
        $('#mutation-popup').removeClass('active');
        $('#risk-popup').addClass('active');
    })
    $('#btn-next5').on('click', function () {
        $('#risk-popup').removeClass('active');
    })

    // sublist
    $('.sublist').on('click', function () {
        console.log('adsadsad');
        $(this).children('ul').slideToggle();
    })

    $('.btn--show').on('click', function () {
        $(this).children('.sublist').toggle();
    })

    // show sidebar
    $('.sidebar__show').on('click', function () {
        $('.sidebar').toggleClass('active');
    })

    $('.sidebar__show--green').on('click', function () {
        $('.pacient-aside').toggleClass('active');
    })

    $('.sidebar').removeClass('active');
})

document.addEventListener('DOMContentLoaded', function () {
    new Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'myfirstchart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { year: '2008', value: 20 },
            { year: '2009', value: 10 },
            { year: '2010', value: 5 },
            { year: '2011', value: 5 },
            { year: '2012', value: 20 }
        ],
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
    });
});

// modal 
document.addEventListener('DOMContentLoaded', function () {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');


    /* Перебираем массив кнопок */
    modalButtons.forEach(function (item) {

        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function (e) {

            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();

            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach

    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

}); // end ready