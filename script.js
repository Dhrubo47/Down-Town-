// Menu Bar code 

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Typing Section Code 

const typed = new Typed('.multiple-text', {
  strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weight Lifting', 'Running'],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});




// JavaScript to control modal behavior
const modal = document.getElementById('signupModal');
const joinUsBtn = document.getElementById('joinUsBtn');
const closeBtn = document.querySelector('.close-btn');

// Ensure elements exist before adding event listeners
if (modal && joinUsBtn && closeBtn) {
  // Show the modal when "Join Us" button is clicked
  joinUsBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener('click', () => {
    closeModal();
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Trap focus within the modal
  modal.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      const focusableElements = modal.querySelectorAll('input, button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        // Shift+Tab focuses the last element
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab focuses the first element
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    } else if (event.key === 'Escape') {
      closeModal();
    }
  });
}

// Helper to close the modal
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = ''; // Restore scrolling
}
joinUsBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });




  
  
 