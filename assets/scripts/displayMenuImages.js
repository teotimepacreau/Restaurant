
const displayMenuImages = async () => {
    

    const menuItems = document.querySelectorAll('.menu-items');
    console.log(menuItems);

    menuItems.forEach((menu) => {
        menu.textContent = menu.textContent.toUpperCase();

        menu.addEventListener('mouseover', (e) => {
            const wordsOfTheMenu = e.target.textContent;
            const wordArray = wordsOfTheMenu.split(' ');
            const firstWord = wordArray[0];


            const imgPath = `/assets/img/${firstWord}.webp`;
            const img = document.createElement('img')
            img.id = "menuImage"
            img.src = imgPath;
            menu.appendChild(img)

            // Add the appear class after appending the image to ensure the transition effect
      img.onload = () => {
        img.classList.add('appear');
      };
        }, {once: true});
    });
};

export default displayMenuImages;
