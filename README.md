# Weather App

## Overview
This is a simple Weather App built using **React + Vite**. The application allows users to search for a city and get real-time weather data using the **OpenWeather API**.

## Features
- Fetch and display current weather information for any city.
- Uses the OpenWeather API to retrieve weather data.
- Built with **React**, **Vite**, **JavaScript**, **HTML**, and **CSS**.
- Simple and clean UI.

## Tech Stack
- **React + Vite** (Frontend Framework)
- **JavaScript** (Logic Implementation)
- **HTML & CSS** (UI Design)
- **OpenWeather API** (Weather Data)

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [Visual Studio Code](https://code.visualstudio.com/) (Optional, but recommended)

### Steps to Run the Project
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add your OpenWeather API key:
     ```sh
     VITE_APP_ID=your_api_key_here
     ```

4. **Start the Development Server:**
   ```sh
   npm run dev
   ```
   The app should now be running at `http://localhost:5173/` (default Vite port).

## Usage
1. Enter a city name in the search box.
2. Click the search button to fetch weather data.
3. View the temperature, weather condition, and other details.

## API Integration
This app uses the **OpenWeather API** to fetch weather data. Ensure you have an API key by signing up at [OpenWeather](https://openweathermap.org/api).

Example API Request:
```
https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key_here
```

## Deployment
To build the project for production:
```sh
npm run build
```
Then, deploy the `dist` folder to your preferred hosting service.

## License
This project is open-source and available under the **MIT License**.

## Author
Developed by **Your Name**. Feel free to contribute and improve the project!

