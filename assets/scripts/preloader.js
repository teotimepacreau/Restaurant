import gsap from "gsap"

const preload = async () => {
    const animeHomepage = async () => {
        await startLoader();
    
        let homeAnim = document.querySelectorAll('.home-anim');
        homeAnim.forEach((element, index)=> {
            gsap.fromTo(element, { y: "-10dvh", opacity: 0, duration: .2, ease: "power4.out" }, {y: "0dvh", opacity: 1, delay: index * 1});
        })
    };
    
    const startLoader = async () => {
        let counter = document.querySelector('.counter');
    
        let currentValue = 0;
    
        async function updateCounter() {
            return new Promise(resolve => {//obligé de wrapper dans une Promise car setTimeout est non bloquant (le reste du code continuerait sinon à s'éxecuter en attendant que le délai s'écoule)
                if (currentValue === 100) {
                    gsap.to('.loader', {
                        y: '100dvh',
                        duration: .8,
                        ease: "power4.in",
                        display: "none"
                    });
                    setTimeout(function () {
                        document.body.style.overflow = "unset";
                        document.body.style.overflowX = "hidden";
                        resolve(); // Resolve the promise when the animation is complete
                    }, 800);
                    return;
                }
    
                currentValue += Math.floor(Math.random() * 10) + 1;
    
                if (currentValue > 100) {
                    currentValue = 100;
                }
    
                counter.textContent = currentValue;
    
                let delay = Math.floor(Math.random() * 200) + 50;
    
                setTimeout(() => {
                    updateCounter().then(resolve);
                }, delay);
            });
        }
    
        await updateCounter();
    };
    
    animeHomepage();
    
      
}

export default preload