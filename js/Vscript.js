// ViperScript Skewed Manual Slider 

document.addEventListener('DOMContentLoaded', function(){
  let vswrapper = document.getElementById('vswrapper');
  let vstopLayer = vswrapper.querySelector('.vstop');
  let vshandle = vswrapper.querySelector('.vshandle');
  let skew = 0;
  let delta = 0;

  if(vswrapper.className.indexOf('skewed') !== -1){
    skew = 1000;
  }
  
  vswrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
  
    vshandle.style.left = e.clientX + delta + 'px';

    vstopLayer.style.width= e.clientX + skew + delta + 'px';
  });
});