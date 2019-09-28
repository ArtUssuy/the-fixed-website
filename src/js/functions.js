(() => {

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


})()