window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

//skeleton animation  
const colorsExamples = anime.timeline({
    endDelay: 40,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(8, {easing: 'easeOutQuad'})
  })
  .add({ targets: '.skeleton',  background: ['#F8F8F8'] }, 0)
      
  //#38A4FF
