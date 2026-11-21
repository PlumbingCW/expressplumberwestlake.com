(function(){
  var root=document.documentElement;
  var BP=768;
  function setOpen(open){
    root.classList.toggle('mob-open',open);
    root.style.overflow=open?'hidden':'';
    var t=document.querySelector('.menu-toggle');
    if(t){t.setAttribute('aria-expanded',open?'true':'false');}
    var d=document.getElementById('mob-drawer');
    if(d){d.setAttribute('aria-hidden',open?'false':'true');}
  }
  document.addEventListener('click',function(e){
    var t=e.target.closest?e.target.closest('.menu-toggle,.mob-close,.mob-overlay,.mob-drawer a'):null;
    if(!t)return;
    if(t.classList.contains('menu-toggle')){setOpen(!root.classList.contains('mob-open'));return;}
    setOpen(false);
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&root.classList.contains('mob-open')){setOpen(false);}});
  window.addEventListener('resize',function(){if(window.innerWidth>BP&&root.classList.contains('mob-open')){setOpen(false);}});
  var qs=document.querySelectorAll('.faq-q');
  for(var i=0;i<qs.length;i++){
    qs[i].addEventListener('click',function(){
      var btn=this,panel=document.getElementById(btn.getAttribute('aria-controls'));
      var open=btn.getAttribute('aria-expanded')==='true';
      btn.setAttribute('aria-expanded',open?'false':'true');
      panel.style.maxHeight=open?'0px':panel.scrollHeight+'px';
    });
  }
})();
