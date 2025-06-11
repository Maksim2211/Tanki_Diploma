document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("index-modal");
  const closeBtn = document.querySelector(".index-close");
  const forgotLink = document.getElementById("forgot-password-link");

  const stepLogin = document.getElementById("step-login");
  const stepVerify = document.getElementById("step-verify");

  const loginInput = document.getElementById("recovery-login");
  const emailInput = document.getElementById("recovery-email");
  const verifyKeyInput = document.getElementById("verify-key");

  const sendButton = document.getElementById("sendBtn");
  const verifyButton = document.getElementById("verify-button");

  const sendMessage = document.getElementById("sendMessage");
  const title = document.getElementById("modal-title");

  // Активувати кнопку Send тільки якщо логін і email заповнені
  function updateSendButtonState() {
    sendButton.disabled = !(loginInput.value.trim() && emailInput.value.trim());
  }

  loginInput.addEventListener("input", updateSendButtonState);
  emailInput.addEventListener("input", updateSendButtonState);

  // Відкрити модальне вікно
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    resetModal();
  });

  // Закрити модальне вікно
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрити по кліку за межами
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Перший етап — відправка логіну і email
  sendButton.addEventListener("click", () => {
    const login = loginInput.value.trim();
    const email = emailInput.value.trim();

    if (login && email) {
      // Емуляція відправки
      sendMessage.style.display = "block";
      stepLogin.style.display = "none";
      stepVerify.style.display = "block";
      title.textContent = "Enter Verification Key";
    }
  });

verifyButton.addEventListener("click", () => {
  const key = verifyKeyInput.value.trim();

  if (key) {
    sendMessage.textContent = "✅ Key verified. You may now reset your password.";
    sendMessage.style.display = "block";

    // ⏳ Затримка 3 секунди (3000 мс)
    setTimeout(() => {
      window.location.href = "/templates/resetpassword.html";
    }, 3000);
  } else {
    sendMessage.textContent = "❌ Please enter the verification key.";
    sendMessage.style.display = "block";
  }
});


  // Скинути модальне вікно до початкового стану
  function resetModal() {
    stepLogin.style.display = "block";
    stepVerify.style.display = "none";
    loginInput.value = "";
    emailInput.value = "";
    verifyKeyInput.value = "";
    sendButton.disabled = true;
    sendMessage.style.display = "none";
    sendMessage.textContent = "";
    sendMessage.style.display = "none";
    title.textContent = "Password Recovery";
  }
});
