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
 
const tab = document.querySelectorAll(".tabs span");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    console.log("Selected category:", tab.innerText);
  });
});

const searchBox = document.querySelector(".search");

if (searchBox) {
  searchBox.addEventListener("click", () => {
    if (searchBox.tagName === "DIV") {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Search for Jewellery...";
      input.className = "search-input";
      input.value = "";

      searchBox.replaceWith(input);
      input.focus();
    }
  });
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Button clicked:", btn.innerText);
  });
});

const images = document.querySelectorAll("img");

images.forEach(img => {
  img.onerror = () => {
    img.src = "images/placeholder.jpg";
  };
});

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navigation clicked:", link.innerText);
  });
});

const footer = document.querySelector(".footer-bottom");

if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} / Kilangi`;
}
