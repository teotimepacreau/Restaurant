const intersection = ()=> {
    const sections = document.querySelectorAll('section')
    console.log(sections)

    const homepage = document.querySelector('#homepage')

    const circleSun = document.querySelector('#circle-sun')

    const sectionTwo = document.querySelector('#content')

    const nav = document.querySelector('#index-nav')

    const options = {
        root: null,// c'est l'élément qui est utilisée comme zone d'affichage pour évaluer la visibilité de la cible. Doit être un ancêtre de la cible. Par défaut "null" donc c'est le viewport.
        threshold: 0.65,//échelle de 0 à 1. 0 par défaut signifie que dès qu'on voit un micro bout de l'intersection ça se déclenche. 1 signifie qu'il vaut voir l'entièreté de l'intersection pour que ça se déclenche. 0.25 signifie qu'il faut voir 25% de la section pour que ça se déclenche.
        rootMargin:  "0px 0px 0px 0px",//applique une distance à partir de laquelle l'IntersectionObserve se déclenche, par défaut 0, là si on met -200px ça se déclenchera 200px AU DESSUS de la ligne. Marche que en px ou %. Marche aussi de la droite vers la gauche si on fait du sidescrolling.
      };

      const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry =>{
          console.log(entry.target);//permet d'avoir juste la section ciblée dans la console 
        if(!entry.isIntersecting){
            return

        }

        homepage.before(nav)
        nav.classList.add('style-as-background')
       
        });
    },options);
    
    // sections.forEach(section => {//pour appliquer l'action à la NodeList
    //   observer.observe(section);
    // });
    
    observer.observe(sectionTwo);
    
    
    //si on veut faire en sorte que le style ne revienne pas à son état initial quand on remonte la page on peut mettre observer.unobserve(entry.target): en dessous le classList.toggle
}

export default intersection