/* toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*scroll selection active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });


/* sticky navbar*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window,scrollY > 100);

/* remove toggle icon and navbar when click navbar link (scroll)*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/* scroll reveal */
 ScrollReveal ({
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin : 'top'});
 ScrollReveal().reveal('.home-img, .contact form', {origin : 'bottom'});
 ScrollReveal().reveal('.home-content h1', {origin : 'left'});
 ScrollReveal().reveal('.home-content p', {origin : 'right'});


 /* typed js*/

 const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist', 'Data Scientist','Data Scientist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });


 function clearForm() {
    // Get a reference to the form
    var form = document.getElementById("contactForm");

    // Reset the form to clear the entered data
    form.reset();
}

 function Send(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var emailsubject = document.getElementById("emailsubject").value;
    var message = document.getElementById("message").value;

    var body = "Name:"+ name + "<br/> Email:" + email + "<br/> Mobile No:" + number + "<br/>Message:" + message;
    console.log(body);

    Email.send({
    SecureToken : process.env.GITHUB_SECRET_CONTACT_FORM_TOKEN,
    To : "inquiries1424@gmail.com",
    From : "inquiries1424@gmail.com",
    Subject : emailsubject,
    Body : body
    }).then(

        message =>{
            if(message=='OK'){
                swal("Successful!", "Your Data Successfully Received!", "success");
            }
            else{
                swal("Something Wrong", "Your Data is not Received!", "error");
            }
        }
        );

    clearForm();

}

            // Get all input elements and the button
            var inputElements = document.querySelectorAll('.input-box input, textarea');
        
            // Add event listeners for mouseover, mouseout, touchstart, and touchend
            inputElements.forEach(function (element) {
                element.addEventListener('mouseover', function () {
                    handleHover(element);
                });
        
                element.addEventListener('mouseout', function () {
                    handleUnhover(element);
                });
        
                element.addEventListener('touchstart', function () {
                    handleHover(element);
                });
        
                element.addEventListener('touchend', function () {
                    handleUnhover(element);
                });
            });