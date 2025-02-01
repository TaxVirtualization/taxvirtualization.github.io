function checkRecaptcha() 
{
  //used to check if captcha is verified on client end
  var response = grecaptcha.getResponse();
  
  //if captcha is not filled
  if(response.length == 0) 
  { 
    //reCaptcha not verified message is displayed
    alert("Please fill out CAPTCHA"); 

    //needed to prevent submission
    const form = document.querySelector('form');

    //prevents submission of form for failing to fill out CAPTCHA
    form.addEventListener('submit', (e) => {e.preventDefault();});
    
    //reloads page and makes person refill form
    location.reload();
  }
  //else if captcha is filled
  else 
  { 
      //const form = document.querySelector('form');
      //form.addEventListener('submit', (e));

    //const fd = new FormData(e.target);
    //const params = new URLSearchParams(fd);


    //fetch('https://docs.google.com/forms/d/e/1FAIpQLSclKHo7ZVcOUeGEe6FulYnD4AkDtiya-ycOzEOyEvvEwxQ6aQ/formResponse', {

        //method: "POST",
       // body: params,
    
    //});

  }
}