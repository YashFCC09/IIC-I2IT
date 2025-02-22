document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("popup-modal");
    const closeButton = document.querySelector(".close-btn");

    // Show modal on page load
    modal.style.display = "block";

    // Close modal when close button is clicked
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

