(() => {


    // *********** BG FUNCTIONS
    const images = [...(document.getElementById("images").children)]
    let currentImage = ""
    const randomImage = Math.floor(Math.random() * images.length)

    document.addEventListener("DOMContentLoaded", function() {
		setTimeout(function() {
            images[randomImage].classList = " current"
			start()
		}, 800)
    })

    function start() {
		setTimeout(function(){
            let oldImage = currentImage !== "" ? currentImage : Math.floor(Math.random() * images.length) 

            images.map((image) => {
                image.classList = ""
            })

            images[oldImage].classList += " hide"
            
			setTimeout(function(){
                images[oldImage].classList = ""
            }, 2200)
            
            currentImage = randomNext(oldImage)
            images[currentImage].classList += " current"
			start()

		}, 3000)
    }

    function randomNext(oldImage) {
        let newImage = Math.floor(Math.random() * images.length)
        if(newImage == oldImage) {
            while(newImage == oldImage) {
                newImage = Math.floor(Math.random() * images.length)
            }
        } 
        return newImage
    }

    // ********** TITLE FUNCTIONS
    document.addEventListener("DOMContentLoaded", function() {
        
        const siteName = [...(document.getElementById("site-name").children)]
        const siteSubName = [...(document.getElementById("site-subname").children)]
        siteName.map((letter) => {
            let delayValue = 100 * (Math.floor(Math.random() * siteName.length))
            letter.style.transitionDelay = `${delayValue}ms`
            letter.style.opacity = 1
            letter.style.transform = "scale(1.3, 1.3)"
        })
        siteSubName.map((letter) => {
            letter.style.transform = "translate(0, 80px)"
            letter.style.opacity = 1
        })

    })


    // ********** click Window
    setTimeout(clickWindow, 2000)

    function clickWindow() {
        window.addEventListener("click", function() {
            console.log("scrolling...")
        })

    }
    
})()