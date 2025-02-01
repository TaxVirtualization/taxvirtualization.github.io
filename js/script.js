function checkRecaptcha() 
{
  //used to check if captcha is verified on client end
  var response = grecaptcha.getResponse();
  
  //if captcha is not filled go through this to stop bots
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
  

  //otherwise the script will not run and the form is submitted
  
}