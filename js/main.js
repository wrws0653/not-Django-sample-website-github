'use strict'

const loadingTime = (Math.floor(Math.random() * 3) + 2) * 1000;
const loadingid = document.getElementById('loading');

const webStorage = function(){
  if(sessionStorage.getItem('access')){
      loadingid.classList.add('loadedsometimes');
  } else {
    sessionStorage.setItem('access', 0);
     function loading() {
      loadingid.classList.add('loadedfirst');
    }
    setTimeout(loading, loadingTime);
  }
}
webStorage();