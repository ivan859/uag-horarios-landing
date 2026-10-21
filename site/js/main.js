// Horarios UAG — galleries, calendar scrollytelling, nav highlight
(function(){
  // galleries
  document.querySelectorAll('[data-gallery]').forEach(function(g){
    var track=g.querySelector('.track');
    g.querySelectorAll('.g-ctrl button').forEach(function(b){
      b.addEventListener('click',function(){
        var fig=track.querySelector('figure'); var step=fig?fig.getBoundingClientRect().width+20:400;
        track.scrollBy({left:step*Number(b.dataset.dir),behavior:'smooth'});
      });
    });
  });
  // calendar scrollytelling
  var steps=[].slice.call(document.querySelectorAll('.step'));
  var imgs=[].slice.call(document.querySelectorAll('.stage .imgs img'));
  function activate(i){
    steps.forEach(function(s,k){s.classList.toggle('on',k===i)});
    imgs.forEach(function(m,k){m.classList.toggle('on',k===i)});
  }
  if('IntersectionObserver' in window && steps.length){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ activate(Number(e.target.dataset.img)); } });
    },{rootMargin:'-45% 0px -45% 0px'});
    steps.forEach(function(s){io.observe(s)});
  }
  // nav highlight
  var links=[].slice.call(document.querySelectorAll('.nav a.link'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))}).filter(Boolean);
  if('IntersectionObserver' in window){
    var io2=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ links.forEach(function(a){a.setAttribute('aria-current', a.getAttribute('href')==='#'+e.target.id ? 'true':'false')}); } });
    },{rootMargin:'-30% 0px -65% 0px'});
    secs.forEach(function(s){io2.observe(s)});
  }
  // hero image settles flat as you scroll
  var hero=document.getElementById('heroShot');
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(hero&&!reduce){
    var onScroll=function(){ var y=Math.min(window.scrollY,400); var t=(1-y/400); hero.style.transform='perspective(1400px) rotateX('+(t*10).toFixed(2)+'deg)'; };
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  }
})();
