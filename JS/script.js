/* Mobile Navigation Toggle */
const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('header');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });
}

/* Room Slider  */
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) return;
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);

  // Auto slide every 5 seconds
  setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 5000);
}

/* Booking Form Validation */
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('roomType').value;

    if (!name || !email || !checkin || !checkout || !guests || !roomType) {
      alert('Please fill in all required fields.');
      return;
    }

    if (new Date(checkin) >= new Date(checkout)) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');
      return;
    }

    alert('Booking submitted successfully! We will contact you soon.');
    bookingForm.reset();
  });
}
