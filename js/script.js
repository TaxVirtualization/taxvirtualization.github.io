const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse.length > 0){
        throw new Error("Captcha not complete");
    }


    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);


    fetch('https://docs.google.com/forms/d/e/1FAIpQLSclKHo7ZVcOUeGEe6FulYnD4AkDtiya-ycOzEOyEvvEwxQ6aQ/formResponse', {

        method: "POST",
        body: params,
    
    })

    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    
    window.location.href = "submit.html";
});