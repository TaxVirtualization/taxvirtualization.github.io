function checkRecaptcha() 
{
  var response = grecaptcha.getResponse();
  if(response.length == 0) 
  { 
    //reCaptcha not verified
    alert("no pass"); 

      const form = document.querySelector('form');

      form.addEventListener('submit', (e) => {e.preventDefault();});
  }
  else 
  { 
      const form = document.querySelector('form');
      form.addEventListener('submit', (e));
    //reCaptch verified
    alert("pass"); 
      const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);


    fetch('https://docs.google.com/forms/d/e/1FAIpQLSclKHo7ZVcOUeGEe6FulYnD4AkDtiya-ycOzEOyEvvEwxQ6aQ/formResponse', {

        method: "POST",
        body: params,
    
    });

  }
}