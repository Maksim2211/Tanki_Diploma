document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form form");
    const inputs = form.querySelectorAll("input, textarea");
    const submitButton = form.querySelector("button");

    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        if (allFilled) {
            submitButton.classList.add("active");
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.classList.remove("active");
            submitButton.setAttribute("disabled", "true");
        }
    }

    // Додаємо перевірку на зміну полів
    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    // Додаємо обробник відправки форми
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Запобігаємо стандартному надсиланню форми

        // Відображаємо модальне вікно
        document.getElementById('modal-overlay').style.display = 'block';
        document.getElementById('success-modal').style.display = 'block';
        
        setTimeout(() => {
            document.getElementById('modal-overlay').style.opacity = '1';
            document.getElementById('success-modal').style.opacity = '1';
        }, 50);
    });

    // Закриття модального вікна
    document.querySelector("#success-modal button").addEventListener("click", function() {
        document.getElementById('modal-overlay').style.opacity = '0';
        document.getElementById('success-modal').style.opacity = '0';

        setTimeout(() => {
            document.getElementById('modal-overlay').style.display = 'none';
            document.getElementById('success-modal').style.display = 'none';

            // Очистка форми після закриття модального вікна
            form.reset();
            checkInputs();
        }, 300);
    });
});
