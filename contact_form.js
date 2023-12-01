function form_validation() {
    // Get form inputs
    const name = document.getElementById('full_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone_num = document.getElementById('phone_num').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate name
    if (name === '') {
      document.getElementById('full_name').style.border="red solid 3px";
        return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email').style.border="red solid 3px";
        return false;
    }
    
    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(phone_num)){
        document.getElementById('phone_num').style.border="red solid 3px";
        return false;
    }

    if (message === '') {
        document.getElementById('message').style.border="red solid 3px";
          return false;
      }

    

    // If all validations pass, you can submit the form
    alert('Form submitted successfully!');
    return true;
}