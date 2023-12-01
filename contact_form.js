function form_validation() {
    // Get form inputs and remove whitespaces
    const name = document.getElementById('full_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone_num = document.getElementById('phone_num').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation methods which include whether format of input is right or whether it is empty 
    if (name === '') {
      document.getElementById('full_name').style.border="red solid 3px";
        return false;
    }

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

    // form is summitted if every single validation passed 
    alert('Form submitted successfully!');
    return true;
}