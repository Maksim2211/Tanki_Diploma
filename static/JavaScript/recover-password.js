document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("index-modal");
  const closeBtn = document.querySelector(".index-close");
  const forgotLink = document.getElementById("forgot-password-link");

  const stepLogin = document.getElementById("step-login");
  const stepVerify = document.getElementById("step-verify");
  const stepReset = document.getElementById("step-reset"); // ✅ додано 3-й крок

  const loginInput = document.getElementById("recovery-login");
  const emailInput = document.getElementById("recovery-email");
  const verifyKeyInput = document.getElementById("verify-key");
  const newPasswordInput = document.getElementById("new-password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const sendButton = document.getElementById("sendBtn");
  const verifyButton = document.getElementById("verify-button");
  const resetButton = document.getElementById("reset-button"); // ✅ кнопка для submit пароля

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
      // TODO: Запит на сервер, що надіслати код на email
      sendMessage.style.display = "block";
      sendMessage.textContent = "✅ Instructions sent to your email.";

      stepLogin.style.display = "none";
      stepVerify.style.display = "block";
      title.textContent = "Enter Verification Key";
    }
  });

  // Другий етап — перевірка ключа
  verifyButton.addEventListener("click", () => {
    const key = verifyKeyInput.value.trim();

    if (key) {
      localStorage.setItem("recovery_code", key);

      sendMessage.textContent = "✅ Key verified. You may now reset your password.";
      sendMessage.style.display = "block";

      // Затримка для користувача
      setTimeout(() => {
        stepVerify.style.display = "none";
        stepReset.style.display = "block";
        sendMessage.style.display = "none";
        title.textContent = "Reset Password";
      }, 2000);

    } else {
      sendMessage.textContent = "❌ Please enter the verification key.";
      sendMessage.style.display = "block";
    }
  });

  // Третій етап — відправка нового пароля
    resetButton.addEventListener("click", () => {
      const newPassword = newPasswordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
      const recoveryCode = localStorage.getItem("recovery_code");

      if (newPassword && confirmPassword && newPassword === confirmPassword) {
        // TODO: відправити newPassword + recoveryCode на бекенд
        sendMessage.textContent = "✅ Password successfully reset!";
        sendMessage.style.display = "block";

       // Закриваємо тільки якщо все правильно
        setTimeout(() => {
          modal.style.display = "none";
       }, 2000);

      } else {
        sendMessage.textContent = "❌ Passwords do not match!";
        sendMessage.style.display = "block";

        // ❌ НЕ ЗАКРИВАЄМО модалку!
      }
    });


  // Скинути модальне вікно до початкового стану
  function resetModal() {
    stepLogin.style.display = "block";
    stepVerify.style.display = "none";
    stepReset.style.display = "none"; // ✅ скидаємо третій етап

    loginInput.value = "";
    emailInput.value = "";
    verifyKeyInput.value = "";
    newPasswordInput.value = "";
    confirmPasswordInput.value = "";

    sendButton.disabled = true;
    sendMessage.style.display = "none";
    sendMessage.textContent = "";
    title.textContent = "Password Recovery";
  }
});
