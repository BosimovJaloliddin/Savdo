"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabParent = document.querySelector(".client-names"),
    tabs = document.querySelectorAll(".client-name"),
    tabsContent = document.querySelectorAll(".client-opinions"),
    barIcon = document.querySelector(".bar-icon i"),
    barMeniu = document.querySelector(".bar-meniu");

  // Modal
  barIcon.addEventListener("click", (i) => {
    barMeniu.classList.toggle("show");
  });

  // Tab
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabs[i].classList.add("active");
  }

  hideTabContent();
  showTabContent();

  tabParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("client-name")) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabContent();
          showTabContent(idx);
        }
      });
    }
  });
});
