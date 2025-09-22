# Country Information - React + Vite

This project is part of the **Fullstack Open Course** (Part 2: Country Information).  
It is a **React frontend** built with **Vite** and uses the **OpenWeather API** to fetch weather data for selected countries.

---

## Setup

### 1. Install dependencies
```bash
yarn install

---
### 2. Configure Environment Variables

The project requires an **OpenWeather API key**.

- Create a `.env` file in the project root.

- Add your API key:

VITE_SOME_KEY=YOUR_OPENWEATHER_API_KEY

- Access the key in code:

const api_key = import.meta.env.VITE_SOME_KEY;

- Run the development server
```bash
yarn dev
