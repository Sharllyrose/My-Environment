document.addEventListener("DOMContentLoaded", () => {
    const filterButton = document.getElementById("sustainable-filter");
    const ecoBar = document.getElementById("eco-bar");
    let filterActive = false;

    const ecoPractices = [
        "Use reusable bags instead of plastic.",
        "Reduce water waste by turning off taps when not in use.",
        "Compost food scraps to reduce landfill waste.",
        "Use energy-efficient LED bulbs.",
        "Walk, bike, or use public transport when possible.",
        "Support brands that prioritize sustainability.",
        "Plant more trees and support reforestation programs.",
        "Reduce, Reuse, Recycle!"
    ];

    function displayPractices() {
        ecoBar.innerHTML = "";
        const filteredPractices = filterActive ? ecoPractices.slice(0, 4) : ecoPractices;
        
        filteredPractices.forEach(practice => {
            const practiceDiv = document.createElement("div");
            practiceDiv.className = "eco-practice";
            practiceDiv.textContent = practice;
            practiceDiv.style.backgroundColor = "#2e8b57";
            practiceDiv.style.color = "white";
            practiceDiv.style.padding = "10px";
            practiceDiv.style.margin = "5px";
            practiceDiv.style.borderRadius = "5px";
            ecoBar.appendChild(practiceDiv);
        });
    }

    filterButton.addEventListener("click", () => {
        filterActive = !filterActive;
        filterButton.textContent = `Filter Sustainable Practices: ${filterActive ? "ON" : "OFF"}`;
        displayPractices();
    });

    displayPractices();
});
