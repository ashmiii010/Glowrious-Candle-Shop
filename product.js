// Set up main image swap for small image cards
       var mainImage = document.getElementById('main-img');
       var smallImages = document.getElementsByClassName('image-card');
     
       for (let i = 0; i < smallImages.length; i++) {
           smallImages[i].onclick = function () {
               const img = smallImages[i].querySelector('img');
               if (img) {
                   mainImage.src = img.src;
               }
           };
       }
     
      

//show the number of count in the shop icon in nav bar, when + icon is clicked the number increases and when - icon is clicked it is decreased
 document.addEventListener('DOMContentLoaded', function () {
 let cartCount = 0;

 const plusBtn = document.querySelector('.single-add-to-cart .fa-plus');
 const minusBtn = document.querySelector('.single-add-to-cart .fa-minus');

 const cartCountDisplay = document.getElementById('cart-count');

 plusBtn.addEventListener('click', function () {
   cartCount++;
   cartCountDisplay.textContent = cartCount;
   cartCountDisplay.style.display = 'inline-flex';
 });

 minusBtn.addEventListener('click', function () {
   if (cartCount > 0) {
     cartCount--;
     cartCountDisplay.textContent = cartCount;

     if (cartCount === 0) {
       cartCountDisplay.style.display = 'none';
     }
   }
 });
});



 // Modal open/close
    const contactModal = document.getElementById('contactModal');
    const closeModalBtn = document.getElementById('closeModal');

    document.querySelectorAll('.contact-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.style.display = 'block';
      });
    });

    closeModalBtn.addEventListener('click', () => {
      contactModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.style.display = 'none';
      }
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      resetErrors();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      let isValid = true;

      if (name === '') {
        showError('nameError', 'Please enter your name');
        isValid = false;
      }
      if (email === '') {
        showError('emailError', 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
      }
      if (subject === '') {
        showError('subjectError', 'Please enter a subject');
        isValid = false;
      }
      if (message === '') {
        showError('messageError', 'Please enter your message');
        isValid = false;
      } else if (message.length < 10) {
        showError('messageError', 'Message should be at least 10 characters');
        isValid = false;
      }

      if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
          contactForm.reset();
          document.getElementById('successMessage').style.display = 'none';
        }, 2000);
      }
    });

    function showError(elementId, message) {
      const errorElement = document.getElementById(elementId);
      errorElement.textContent = message;
      errorElement.style.display = 'block';
      const inputId = elementId.replace('Error', '');
      document.getElementById(inputId).classList.add('error');
    }

    function resetErrors() {
      document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.form-control').forEach(input => input.classList.remove('error'));
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }