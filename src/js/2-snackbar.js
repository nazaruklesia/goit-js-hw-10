

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    

        const delay = event.target.elements.delay.value;
    const promiseState = event.target.elements.state.value;



    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {

        if (promiseState === "fulfilled") {
            resolve(delay);
        } else {
            reject(delay);
            }
        }, delay)
        console.log(promise);
    });

    promise
        .then(delay => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topRight",
            });
        })
        .catch(delay => {
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                position: "topRight",
            });
        })
        .finally(() => form.reset());
}

