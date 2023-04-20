const burger_button = document.querySelector('#burger-button');
const close_button = document.querySelector('#close-button');
const sidebar_overlay = document.querySelector('.sidebar-overlay');
const nav_ul = document.querySelector('.nav-list');

burger_button.addEventListener('click', function() {
  nav_ul.classList.toggle('nav-slide');
  sidebar_overlay.classList.toggle('sidebar-overlay-active');
});

close_button.addEventListener('click', function() {
  nav_ul.classList.toggle('nav-slide');
  sidebar_overlay.classList.toggle('sidebar-overlay-active');
});

sidebar_overlay.addEventListener('click', function() {
  nav_ul.classList.toggle('nav-slide');
  sidebar_overlay.classList.toggle('sidebar-overlay-active');
});

if(window.screen.width > 768){
  nav_ul.classList.remove('nav-slide');
  sidebar_overlay.classList.remove('sidebar-overlay-active');
}

// FORM VALIDATION
function validateForm()
{
  // NAME
  let error = [];
  if(fullName.value === '' || fullName.value < 3) error.push('Name is invalid! (length >= 3)');

  // EMAIL
  let flag = 0
  if(email.value.includes('.com') && email.value.includes('@')) flag ++;
  if(email.value === '' || flag === 0) error.push('\nEmail is invalid!');

  // PHONE NUMBER
  if((phoneNumber.value.length > 13 && phoneNumber.value.length < 7) || isNaN(phoneNumber.value) || phoneNumber.value[0] !== '0') error.push('\nPhone number is invalid! (length 7-12, starts with 0)')

  // PREFERENCE
  if(ramen.checked === false && dryRamen.checked === false) error.push('\nPreference is isvalid! (select one)');

  // AGREEMENT
  if(agreeCheck.checked === false) error.push('\nAgreement in isvalid! (check agreement)');

  if(error.length === 0){
    alert("validations passed");
    return true;
  }else{
    alert(error);
    return false;
  }
}