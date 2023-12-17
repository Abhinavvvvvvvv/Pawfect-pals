// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Fetch user information and populate the page
    // This is a placeholder, replace with actual data retrieval logic
    document.getElementById("email").innerText = "adityaasingh9428@gmail.com";
    document.getElementById("phone").innerText = "7828640211";
    document.getElementById("username").innerText = "Aditya Singh";
    document.getElementById("bio").innerText = "Hey there! I'm Aditya Singh, a 21-year-old Computer Science major with a passion for all things tech. From coding challenges to exploring the latest innovations, I'm always hungry to learn and stay ahead of the curve. Beyond the screen, you'll often find me at dog parks, surrounded by the joy and warmth of big, fluffy dogs – my absolute favorites. Join me on this tech-fueled journey where I balance algorithms with the unconditional love of my furry companions. 🚀🐾";
    document.getElementById("petType").innerText = "A 2 year Golden Retreiver and A 15 year old German Shepherd";
});

function updateBio() {
    var newBio = document.getElementById("bio").value;
    // Perform AJAX or fetch requests to update the user's bio
    // Optionally, update the displayed bio on success
}
