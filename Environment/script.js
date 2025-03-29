document.addEventListener("DOMContentLoaded", () => {
    const factsContainer = document.getElementById("factsContainer");
    const categoryFilter = document.getElementById("categoryFilter");
    const darkModeToggle = document.getElementById("darkModeToggle");
    let environmentalFacts = [];

    // Fetch data asynchronously
    async function fetchData() {
        try {
            // 使用 Render 部署的服务器地址
            const response = await fetch("https://json-server-1-bbxp.onrender.com/Information");
            const data = await response.json();
            environmentalFacts = data; // No need for `.Information`
            populateCategories();
            displayFacts(environmentalFacts);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Populate category dropdown
    function populateCategories() {
        const categories = ["All", ...new Set(environmentalFacts.map(fact => fact.category))];
        categoryFilter.innerHTML = categories.map(category => `<option value="${category}">${category}</option>`).join("");
    }

    // Display facts dynamically
    function displayFacts(facts) {
        factsContainer.innerHTML = facts.map(fact => `
            <div class="fact-card">
                <img src="${fact.image || 'default-image.jpg'}" alt="${fact.category}" class="fact-image">
                <h3>${fact.category}</h3>
                <ul>
                    ${fact.facts.map(f => `<li>${f.fact || "No fact available"} ${f.source ? `<a href="${f.source}" target="_blank">(Source)</a>` : ""}</li>`).join("")}
                </ul>
                <button class="like-btn" data-category="${fact.category}">&#x1F44D; <span class="like-count">0</span></button>
            </div>
        `).join("");
    }

    // Filter facts by category
    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        const filteredFacts = selectedCategory === "All" ? environmentalFacts : environmentalFacts.filter(fact => fact.category === selectedCategory);
        displayFacts(filteredFacts);
    });

    // Dark mode toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Like button functionality (Event Delegation)
    factsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("like-btn")) {
            const likeCount = event.target.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        }
    });

    // Initialize data fetching
    fetchData();
});