$("#contact").click(function(){
    $("#contactForm").toggle();
    console.log("contact form opened");
  });



$("#submit").click(function(){

  Swal.fire({
    type: 'success',
    title: 'Thanks!',
    text: 'Look forward to chatting with you soon!',
    timer: 5000
  })
});
