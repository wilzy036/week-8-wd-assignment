// ------------------- Mobile Navigation Toggle -------------------
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// ------------------- Booking Form Validation -------------------
const bookingForm = document.querySelector('.contact-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e){
    let valid = true;
    const name = bookingForm.querySelector('input[name="name"]');
    const email = bookingForm.querySelector('input[name="email"]');
    const room = bookingForm.querySelector('select[name="room"]');
    
    if(name.value.trim() === "") { valid = false; alert("Please enter your name"); }
    if(email.value.trim() === "") { valid = false; alert("Please enter your email"); }
    if(room.value === "") { valid = false; alert("Please select a room"); }
    
    if(!valid) e.preventDefault();
  });
}
