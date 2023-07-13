document.addEventListener("DOMContentLoaded", function() {
    const clickbar = document.getElementById("bar-click");
    const rightbar = document.getElementById("down-right-head");
  
    clickbar.addEventListener("click", function() {
      rightbar.style.display="flex";
    });
  });
  