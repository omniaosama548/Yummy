
 const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  const navItems = navList.querySelectorAll('li');
  const sideNav=document.getElementById('side-nav')
  let isOpen = false;

  menuToggle.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      navList.classList.add('show');
      sideNav.classList.add('move');
      menuToggle.innerHTML = '<i class="fas fa-times fs-1"></i>';
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 100);
      });
    } else {
      navList.classList.remove('show');
      sideNav.classList.remove('move');
      menuToggle.innerHTML = '<i class="fas fa-bars fs-1"></i>';
      navItems.forEach(item => item.classList.remove('show'));
    }
  });
//form validation
const form = document.getElementById("myForm");
  const submitBtn = document.getElementById("submitBtn");

  const inputs = {
    name: {
      el: document.getElementById("name"),
      error: document.getElementById("nameError"),
      isValid: false,
      validate: (value) => /^[A-Za-z ]+$/.test(value.trim())
    },
    email: {
      el: document.getElementById("email"),
      error: document.getElementById("emailError"),
      isValid: false,
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    },
    phone: {
      el: document.getElementById("phone"),
      error: document.getElementById("phoneError"),
      isValid: false,
      validate: (value) => /^01[0125][0-9]{8}$/.test(value)
    },
    age: {
      el: document.getElementById("age"),
      error: document.getElementById("ageError"),
      isValid: false,
      validate: (value) => value >= 10 && value <= 100
    },
    password: {
      el: document.getElementById("password"),
      error: document.getElementById("passwordError"),
      isValid: false,
      validate: (value) => /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(value)
    },
    confirmPassword: {
      el: document.getElementById("confirmPassword"),
      error: document.getElementById("confirmPasswordError"),
      isValid: false,
      validate: () => inputs.confirmPassword.el.value === inputs.password.el.value && inputs.password.isValid
    },
  };

  function checkFormValidity() {
    const allValid = Object.values(inputs).every((input) => input.isValid);
    submitBtn.disabled = !allValid;
  }

  Object.values(inputs).forEach((inputObj) => {
    inputObj.el.addEventListener("input", () => {
      const value = inputObj.el.value;
      const isValid = inputObj.validate(value);
      inputObj.isValid = isValid;

      if (value !== "") {
        inputObj.error.classList.toggle("d-none", isValid);
      } else {
        inputObj.error.classList.add("d-none");
      }

      checkFormValidity();
    });
  });

  

//handle icon eye
document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", function () {
      const input = document.querySelector(this.getAttribute("toggle"));
      if (input.type === "password") {
        input.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
      }
    });
  });
form.addEventListener("submit", (e) => {
  e.preventDefault();

  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Form submitted successfully!',
    confirmButtonColor: '#d33'
  });
});
