# Environmental Awareness Web App

## Overview
An interactive web app that educates users on environmental issues by displaying categorized facts with images and sources. Users can filter facts, like them, and toggle dark mode for accessibility.

## Features
- **Fact Display**: Fetch and display categorized facts.
- **Category Filtering**: Select topics of interest.
- **Like Button**: Engage with facts.
- **Dark Mode**: Switch themes.
- **Responsive Design**: Works on all devices.

## Technologies Used
- **HTML, CSS, JavaScript** for UI and interactivity.
- **JSON Server** for API data.

## API Data
- Fetched from: `https://json-server-1-bbxp.onrender.com/Information`
- Sample JSON:
  ```json
  [{ "category": "Climate Change", "image": "image.jpg", "facts": [{ "fact": "Global temperatures have risen by 1.2°C.", "source": "https://climate.nasa.gov" }] }]
  ```

## Installation & Setup
1. Clone the repo:  
   ```sh
   git clone https://github.com/your-username/environmental-awareness-app.git
   ```
2. Navigate to project folder:  
   ```sh
   cd environmental-awareness-app
   ```
3. (Optional) Install `json-server` and run locally:  
   ```sh
   npm install -g json-server
   json-server --watch db.json --port 5000
   ```
4. Open `index.html` in a browser.

## Usage
- Select a category to filter facts.
- Click "Like" to engage.
- Toggle dark mode for better viewing.

## Event Listeners
- `DOMContentLoaded`: Load facts.
- `change` (categoryFilter): Filter by category.
- `click` (like button): Increase like count.
- `click` (darkModeToggle): Toggle theme.

## Challenges & Solutions
- **API Downtime**: Added error handling.
- **Data Handling**: Ensured proper JSON parsing.
- **Performance**: Used event delegation for efficiency.

## Future Enhancements
- User authentication for saved likes.
- Comments section.
- Improved UI animations.

## License
Open-source under the [MIT License](LICENSE).

