// JavaScript File: script.js
document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Search Destination Functionality
    document.querySelector(".search-bar button").addEventListener("click", function () {
        const searchInput = document.querySelector(".search-bar input").value;
        if (searchInput.trim() !== "") {
            alert(`Searching for: ${searchInput}`);
        } else {
            alert("Please enter a destination.");
        }
    });

    // Dynamic Featured Places List
    const featuredPlaces = [
        "New Zealand",
        "Santorini, Greece",
        "Paris, France",
        "Thailand",
        "Bali, Indonesia",
        "Rome, Italy"
    ];
    
    const placesContainer = document.querySelector(".places");
    placesContainer.innerHTML = "";
    
    featuredPlaces.forEach(place => {
        const placeDiv = document.createElement("div");
        placeDiv.classList.add("place");
        placeDiv.textContent = place;
        placeDiv.addEventListener("click", () => alert(`Explore ${place}`));
        placesContainer.appendChild(placeDiv);
    });
});