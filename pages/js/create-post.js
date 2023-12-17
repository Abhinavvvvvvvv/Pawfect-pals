document.getElementById("createPostForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Your form submission logic here
  
    document.querySelector(".create-post-section").style.animation = "bounce 0.5s ease-in-out";
  
    setTimeout(function () {
      document.querySelector(".create-post-section").style.animation = "none";
    }, 500);
  });
  