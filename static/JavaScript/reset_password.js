document.addEventListener("DOMContentLoaded", () => {
  // ==== 1) Для головної сторінки: Forgot Password модалка ====

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

  if (loginInput && emailInput) {
    // Якщо модалка є на сторінці

    // Активувати кнопку Send тільки якщо заповнено обидва поля
    function updateSendButtonState() {
      sendButton.disabled = !(loginInput.value.trim() && emailInput.value.trim());
    }

    loginInput.addEventListener("input", updateSendButtonState);
    emailInput.addEventListener("input", updateSendButtonState);

    // Відкрити модалку
    forgotLink.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      resetModal();
    });

    // Закрити модалку
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Закрити по кліку за межами
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    // Перший крок — «Send»
    sendButton.addEventListener("click", () => {
      const login = loginInput.value.trim();
      const email = emailInput.value.trim();
      if (login && email) {
        sendMessage.style.display = "block";
        sendMessage.textContent = "✅ Instructions sent to your email.";
        stepLogin.style.display = "none";
        stepVerify.style.display = "block";
        title.textContent = "Enter Verification Key";
      }
    });

    // Другий крок — «Verify» і переходимо на reset_password.html
    verifyButton.addEventListener("click", () => {
      const key = verifyKeyInput.value.trim();
      if (key) {
        sendMessage.textContent = "✅ Key verified. Redirecting...";
        sendMessage.style.display = "block";

        setTimeout(() => {
          // Якщо файл у тій же папці → посилання без підпапок
          window.location.href = `reset_password.html?recovery_code=${encodeURIComponent(key)}`;
        }, 2000);
      } else {
        sendMessage.textContent = "❌ Please enter the verification key.";
        sendMessage.style.display = "block";
      }
    });

    // Скидання модалки
    function resetModal() {
      stepLogin.style.display = "block";
      stepVerify.style.display = "none";
      loginInput.value = "";
      emailInput.value = "";
      verifyKeyInput.value = "";
      sendButton.disabled = true;
      sendMessage.style.display = "none";
      sendMessage.textContent = "";
      title.textContent = "Password Recovery";
    }
  }

  // ==== 2) Для сторінки reset_password.html ====

  const form = document.getElementById("reset-form");
  const newPasswordInput = document.getElementById("new-password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const errorMessage = document.getElementById("error-message");
  const userIdField = document.getElementById("user-id");
  const recoveryCodeField = document.getElementById("recovery-code");

  if (form) {
    // Отримуємо код з URL
    const urlParams = new URLSearchParams(window.location.search);
    const recoveryCode = urlParams.get("recovery_code");
    const userId = urlParams.get("user_id");

    if (recoveryCode) recoveryCodeField.value = recoveryCode;
    if (userId) userIdField.value = userId;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const newPassword = newPasswordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      if (!newPassword || !confirmPassword) {
        showError("❌ Please fill in all fields.");
        return;
      }

      if (newPassword !== confirmPassword) {
        showError("❌ Passwords do not match.");
        return;
      }

      // Тут можна зробити fetch для збереження пароля, якщо потрібен сервер.
      console.log("✅ New password saved:", newPassword);
      console.log("✅ Recovery code:", recoveryCodeField.value);

      alert("✅ Password successfully reset!");

      // Перекидання назад на index.html
      window.location.href = "index.html";
    });

    function showError(msg) {
      errorMessage.textContent = msg;
      errorMessage.style.display = "block";
    }
  }
});
