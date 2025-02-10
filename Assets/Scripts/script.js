document.getElementById('signupForm').addEventListener('submit', async (event) => {
  event.preventDefault();  

  const firstName = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;
  const email = document.querySelector('input[id="Email"]').value;
  const password = document.querySelector('input[name="Password"]').value;
  const gender = document.querySelector('input[name="Gender"]:checked').value;

  try {
    const response = await fetch('http://mybackend.great-site.net/connect.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
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
      alert('Sign-up successful!');
      window.location.href = "/welcome";  // Optional redirect
    } else {
      alert('Sign-up failed: ' + result.message);
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
    console.error('Error:', error);
  }
});

function appendJobs() {
    // Get what the user typed
    const userQuery = document.getElementById("userQuery").value.trim();
    
    // Append the word 'jobs' to the query
    // e.g. if user typed "marketing", final query becomes "marketing jobs"
    const withJobs = userQuery ? `${userQuery} jobs` : 'jobs';
  
    // Put it in the hidden field so the form sends "q=marketing jobs"
    document.getElementById("finalQuery").value = withJobs;
  }
  

