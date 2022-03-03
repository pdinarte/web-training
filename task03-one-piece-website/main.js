const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.show-text');

readMoreBtn.addEventListener('click', (e)=>{
  text.classList.toggle('visible');
   if(readMoreBtn.innerText === 'Read All'){
     //readMoreBtn.innerText = 'Read Less';
     readMoreBtn.innerHTML = readMoreBtn.innerHTML.replace('Read All', 'Read Less');
     readMoreBtn.innerHTML = readMoreBtn.innerHTML.replace('fa-chevron-down', 'fa-chevron-up');
   } else {
     //readMoreBtn.innerText = 'Read All';
     readMoreBtn.innerHTML = readMoreBtn.innerHTML.replace('Read Less', 'Read All');
     readMoreBtn.innerHTML = readMoreBtn.innerHTML.replace('fa-chevron-up', 'fa-chevron-down');
   }
})