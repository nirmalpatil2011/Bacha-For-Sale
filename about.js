window.addEventListener("load",()=>{
  const preloader=document.getElementById("preloader");
  setTimeout(()=>{
    preloader.style.opacity="0";
    preloader.style.visibility="hidden";
  },3500);
});
