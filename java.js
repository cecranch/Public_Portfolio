$("#contactPanel").click(function(){
    $("#contactForm").toggle();
    console.log("contact form opened");
  });

  $("#aboutPanel").click(function(){
    $("#aboutMe").toggle();
    $("#contactPanel").toggle();
    $("#portfolioPanel").toggle();
    console.log("about me opened");
  });


$("#submit").click(function(){

  Swal.fire({
    type: 'Success',
    title: 'Thanks!',
    text: 'Look forward to chatting with you soon!',
    timer: 5000
  })
});


// @media screen and (max-width: 600px) {
//     .navbar.responsive {position: relative;}
//     .navbar.responsive a.icon {
//       position: absolute;
//       right: 0;
//       top: 0;
//     }
//     .navbar.responsive a {
//       float: none;
//       display: block;
//       text-align: left;
//     }
//   }
