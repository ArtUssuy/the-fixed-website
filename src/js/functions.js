( () => {

    
    document.addEventListener("DOMContentLoaded", load)

    function load() {
        setTimeout(animateSiteBG, 1000);
        setTimeout(animateSiteName, 1200);
    }



    /* MY ANIMATIONS */
    const animateSiteName = () => {
        const nameLetters = [...(document.getElementsByClassName("letter-name-site"))]
        const subNameLetters = [...(document.getElementsByClassName("letter-subname-site"))]
        const subNameSite = document.getElementById("subNameSite")
        
        nameLetters.map((letter) => { // animate name
            letter.style.opacity = 1;
            letter.style.transform = "scale(1, 1)";
        })

        subNameLetters.map((letter) => { // animate subname
            letter.style.opacity = 1;
        })

        subNameSite.style.opacity = 1; // animate subname wrapper
        subNameSite.style.marginTop = "20px";
    }

    const animateSiteBG = () => {

        const imagesBG = [...(document.getElementsByClassName("bg-image"))]

        function resolveAfter2Seconds(x) {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(x);
              }, 2000);
            });
          }

        const changeOpacityAndTransform = (image, index) => {
            image.style.opacity = 1;
            image.style.transform = "scale(1, 1)";
        }

        async imagesBG.map((image, index) => {
            const x = await resolveAfter2Seconds(10);
            console.log(x); // 10
            changeOpacityAndTransform(image, index)
        })
    }

})()


/*


*/