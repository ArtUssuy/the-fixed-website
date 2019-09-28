(function($){

    const images = [...(document.getElementById("images").children)]
    const numImages = images.length
    const current = Math.floor(Math.random()*numImages)
    const INTERVAL = 5000
    const init_timers = []

    function start() {
        timer = setTimeout(function() {
            images.map((image) => {
                image.classList = "hide"

                subTimer = setTimeout(function(){
                    image.classList = ""
                },2200)

                current = getRandomNext()
                image.classList = "current"
                start()
            })

        }, INTERVAL)
    }

    function getRandomNext(){
        var n = Math.floor(Math.random()*numImages)
        if(n == current){
            while(n == current){
                n = Math.floor(Math.random()*numImages)
            }
        }
        return n
    }

    // 
    // $(window).one('enter.page.bq', function(){

        // init_timers[init_timers.length] = setTimeout(function(){
            // $title.addClass('show');
        // }, 0);

        // init_timers[init_timers.length] = setTimeout(function(){
            // $images.eq(current).addClass('current');
            // start();
        // }, 800);

        // init_timers[init_timers.length] = setTimeout(function(){
            // $('#scroll-info').addClass('show');
        // }, 1300);

        // init_timers[init_timers.length] = setTimeout(addEvents, 2000);
    // }).one('exit.page.bq', function(){
        // removeEvents();
        // stop();
        // for (var i = init_timers.length - 1; i >= 0; i--) {
            // clearTimeout(init_timers[i]);
        // }
    // })



})()

// var timer = subTimer = null;


// function stop(){
//     clearTimeout(timer);
//     clearTimeout(subTimer);
// }


// var init_timers = []
// $(window).one('enter.page.bq', function(){

//     init_timers[init_timers.length] = setTimeout(function(){
//         $title.addClass('show');
//     }, 0);

//     init_timers[init_timers.length] = setTimeout(function(){
//         $images.eq(current).addClass('current');
//         start();
//     }, 800);

//     init_timers[init_timers.length] = setTimeout(function(){
//         $('#scroll-info').addClass('show');
//     }, 1300);

//     init_timers[init_timers.length] = setTimeout(addEvents, 2000);
// }).one('exit.page.bq', function(){
//     removeEvents();
//     stop();
//     for (var i = init_timers.length - 1; i >= 0; i--) {
//         clearTimeout(init_timers[i]);
//     }
// })
