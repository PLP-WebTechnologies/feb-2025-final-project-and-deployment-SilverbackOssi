// Image slider functionality
const sliderImages = ['images/slide1.jpg', 'images/slide2.jpg', 'images/slide3.jpg'];
let current = 0;

document.getElementById('nextSlide')?.addEventListener('click', () => {
  current = (current + 1) % sliderImages.length;
  document.getElementById('sliderImage').src = sliderImages[current];
});

// Form validation
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields!');
    return;
  }

  if (!email.includes('@')) {
    alert('Enter a valid email address!');
    return;
  }

  alert('Message sent successfully!');
});
