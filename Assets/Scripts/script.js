const form = document.getElementById('signupForm');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    console.log("✅ Form submission intercepted!"); 

  
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';

    try {
      const response = await fetch('http://mybackend.great-site.net/connect.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        gender: gender
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('✅ Sign-up successful!');
        window.location.href = "/welcome"; 
      } else {
        alert('❌ Sign-up failed: ' + result.message);
      }
    } catch (error) {
      alert('❌ An error occurred. Please try again.');
      console.error('Error:', error);
    }
  });
} else {
  console.error("❌ Form with ID 'signupForm' not found! Check your HTML.");
}

function appendJobs() {
    // Get what the user typed
    const userQuery = document.getElementById("userQuery").value.trim();
    
    // Append the word 'jobs' to the query
    // e.g. if user typed "marketing", final query becomes "marketing jobs"
    const withJobs = userQuery ? `${userQuery} jobs` : 'jobs';
  
    // Put it in the hidden field so the form sends "q=marketing jobs"
    document.getElementById("finalQuery").value = withJobs;
  }
  

