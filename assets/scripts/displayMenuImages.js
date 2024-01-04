
const displayMenuImages = async () => {
    

    const menuItems = document.querySelectorAll('.menu-items');

    menuItems.forEach((menu) => {

        menu.addEventListener('mouseover', (e) => {
        
          const aliment = menu.firstElementChild.textContent

            const imgPath = `/assets/img/${aliment}.webp`;
            const img = document.querySelector('#food-img')

            img.src = imgPath

        })
    });
};

export default displayMenuImages;
