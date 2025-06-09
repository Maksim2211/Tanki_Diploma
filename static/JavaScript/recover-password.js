document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("index-modal");
  const forgotLink = document.querySelector(".index-remember-forgot a");
  const closeBtn = document.querySelector(".index-modal .index-close");
  const sendBtn = document.getElementById("sendBtn");
  const loginInput = document.getElementById("recovery-login");
  const emailInput = document.getElementById("recovery-email");
  const message = document.getElementById("sendMessage");

  // Відкриття модального вікна
  if (forgotLink && modal && closeBtn) {
    forgotLink.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      resetModal();
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        resetModal();
      }
    });
  }

  // Увімкнення/вимкнення кнопки "Send"
  function validate() {
    const login = loginInput.value.trim();
    const email = emailInput.value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    sendBtn.disabled = !(login && validEmail);
  }

  function resetModal() {
    loginInput.value = "";
    emailInput.value = "";
    sendBtn.disabled = true;
    message.style.display = "none";
  }

  if (loginInput && emailInput && sendBtn) {
    loginInput.addEventListener("input", validate);
    emailInput.addEventListener("input", validate);
  }

  // Показ повідомлення після натискання "Send"
  sendBtn.addEventListener("click", function () {
    message.style.display = "block";
    setTimeout(() => {
      message.style.display = "none";
      modal.style.display = "none";
      resetModal();
    }, 3000);
  });
});
