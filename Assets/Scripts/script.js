function appendJobs() {
    // Get what the user typed
    const userQuery = document.getElementById("userQuery").value.trim();
    
    // Append the word 'jobs' to the query
    // e.g. if user typed "marketing", final query becomes "marketing jobs"
    const withJobs = userQuery ? `${userQuery} jobs` : 'jobs';
  
    // Put it in the hidden field so the form sends "q=marketing jobs"
    document.getElementById("finalQuery").value = withJobs;
  }
  