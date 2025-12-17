// Enhance images by replacing low-quality image with high-quality version
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img[data-high]");

  images.forEach(img => {
    const highRes = img.getAttribute("data-high");
    if (highRes) {
      img.src = highRes;
    }
  });
});
 const tabs=document.querySelectorAll('.tabs span');
  tabs.forEach(tab=>{
    tab.onclick=()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
    }
  })