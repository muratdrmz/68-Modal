const modalEl=document.querySelector('.modal');
const overlayEl=document.querySelector('.overlay');
const btnClose=document.querySelector('.close-modal');
const btnsOpen=document.querySelectorAll('.show-modal')

console.log(btnsOpen);

function openModal(){
 modalEl.classList.remove('hidden');
 overlayEl.classList.remove('hidden');
}

function closeModal(){
 modalEl.classList.add("hidden");
 overlayEl.classList.add("hidden");
}

btnsOpen.forEach((btnOpen)=>{
 btnOpen.addEventListener('click',openModal)
})

overlayEl.addEventListener('click',closeModal)
btnClose.addEventListener('click',closeModal)

document.addEventListener('keydown',(e)=>{
 if(e.key==='Escape' && !modalEl.classList.contains('hidden')){
  closeModal();
 }
})