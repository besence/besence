function openrule() {
    window.location.href = "serverip.html";
};

document.addEventListener("DOMContentLoaded", function() {
    var fadeElements = document.querySelectorAll(".fade-in-element");
  
    fadeElements.forEach(function(element) {
      element.style.opacity = 1; // 要素を可視にする
    });
  });
  