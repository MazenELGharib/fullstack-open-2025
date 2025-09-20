# Country Information - React + Vite

This project is part of the **Fullstack Open 2025** course (Part 2: Country Information).  
It is a **React frontend** built with **Vite** and uses the **OpenWeather API** to fetch weather data for selected countries.

---

## Setup

### 1. Install dependencies

yarn install

---
### 2. Configure Environment Variables

The project requires an **OpenWeather API key**.

1. Create a `.env` file in the project root.

2.Add your API key:

VITE_SOME_KEY=YOUR_OPENWEATHER_API_KEY

3.Access the key in code:

const api_key = import.meta.env.VITE_SOME_KEY;

4. Run the development server

yarn dev
