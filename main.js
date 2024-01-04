import './assets/style.css';

const {default: preload} = await import ('./assets/scripts/preloader.js')
await preload()


const {default: displayMenuImages} = await import ('./assets/scripts/displayMenuImages')

// const {default: animFoodPicturesIfWait} = await import ('./assets/scripts/animFoodPicturesIfWait.js')

// animFoodPicturesIfWait()
displayMenuImages()
