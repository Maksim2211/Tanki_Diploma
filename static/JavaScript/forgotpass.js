document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("index-modal");
  const forgotLink = document.querySelector(".index-remember-forgot a");
  const closeBtn = document.querySelector(".index-modal .index-close");

  if (forgotLink && modal && closeBtn) {
    forgotLink.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
