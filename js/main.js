// JavaScript that changes the h1-headline based on a parameter in the URL. 
// E.g. "index.html?headline=banana" will change the headline to "banana"

window.onload = function() {

    var getQueryString = function ( field, url ) 
            {
                var href = url ? url : window.location.href;
                var reg = new RegExp( '[?]' + field + '=([^&#]*)', 'i' );
                var string = reg.exec(href);
                return string ? string[1] : null;
            };

            var queryString = getQueryString('headline');
            console.log(queryString);
            if (queryString){document.querySelector("h1").innerHTML = queryString;}

            var mySwiper = new Swiper ('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
               

                breakpoints: {
                    // when window width is <= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 1
                        
                    },

                    // when window width is <= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 1

                    },

                    // when window width is <= 1280px
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 1
                    },
                },
              });
}