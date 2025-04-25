document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.iambutton');
    if (button) {
      button.addEventListener('click', () => {
        console.log('Button clicked!');
      });
    }
  });
  