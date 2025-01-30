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

    .then(res => 
    {
        res.json()
        window.location.href = "submit.html";
    })

    .then(data => console.log(data))
    .catch(err => console.error(err))
    
    //Find out how to make submitting redirect to the submit page and still submit the data, currently the code below breaks this functionality
    //window.location.href = "submit.html";
});