
const displayMenuImages = async () => {
    

    const menuItems = document.querySelectorAll('.menu-text');
    console.log(menuItems);

    menuItems.forEach((menu) => {
        menu.textContent = menu.textContent.toUpperCase();

        menu.addEventListener('mouseover', (e) => {
        
          let img = menu.nextElementSibling
        img.classList.add('appear');

        }, {once: true});
    });
};

export default displayMenuImages;
