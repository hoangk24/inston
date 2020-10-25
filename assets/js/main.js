const header = {
    init: function() {
        this.headerClickbar('.header .header__search i', '.header .header__search .form');
        this.headerScroll('.header', '.backtotop');
        this.backtotopclick('.backtotop');
        this.header__clickmenu('.header .header__bars', '.header .header__right .header__menu', '.close__menu');
    },
    headerClickbar: function(btn, form) {
        let button = document.querySelector(btn);
        let layout = document.querySelector(form);

        button.addEventListener("click", function() {
            layout.classList.toggle('form__active');
        })
    },
    headerScroll: function(wrap, backtotop) {
        let header = document.querySelector(wrap);
        let height = header.offsetHeight;
        let back = document.querySelector(backtotop);
        window.addEventListener('scroll', function() {
            if (this.window.scrollY > height) {
                header.classList.add('header__active');
                back.classList.add('backtotop__active');
            } else {
                header.classList.remove('header__active');
                back.classList.remove('backtotop__active');
            }
        })
    },
    backtotopclick: function(button) {
        let btn = document.querySelector(button);
        btn.addEventListener('click', function() {
            window.scrollTo(0, 0);
        })
    },
    header__clickmenu: function(button, layout, close) {
        let btn = document.querySelector(button);
        let seft = document.querySelector(layout);
        let btnX = document.querySelector(close);
        btn.addEventListener('click', function() {
            seft.classList.toggle('active__menu');
        })
        btnX.addEventListener('click', function() {
            seft.classList.remove('active__menu');
        })

    }
}
header.init();



const countdown = {
    init: function() {
        this.count('.help', '.number-count');
    },

    count: function(wrap, count) {
        let seft = document.querySelector(wrap);
        let numbers = seft.querySelectorAll(count);
        numbers.forEach((item, i) => {
            item[i] = parseInt(item.innerHTML);
            var index = 0;
            setInterval(function() {
                if (index < item[i]) {
                    index++;
                    item.innerHTML = index + '%';
                }
            }, 50)
        });

    }
}
countdown.init();