✅ **This is the active / canonical FlightSage repo. All new work will be done here.**
# FlightSage AI ✈️

[![Python Version](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub contributors](https://img.shields.io/github/contributors/mastephenson12/flightsage-ai)](https://github.com/mastephenson12/flightsage-ai/graphs/contributors)

**An intelligent engine for analyzing flight data, enhancing aviation safety, and providing travel insights through modern APIs.**

FlightSage AI is a Python-based project designed to connect to various aviation and travel APIs. It aims to provide a modular framework for fetching, processing, and analyzing flight-related data.

## Features

*   **Modular API Connectors:** Easily add new data sources for flights, airports, and safety data.
*   **Data Processing:** Standardize and clean data from multiple APIs into a consistent format.
*   **Extensible:** Built to be expanded with machine learning models for predictions, data analysis notebooks, or a web interface.

## Getting Started

### Prerequisites

*   Python 3.9+
*   An editor like VS Code

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mastephenson12/flightsage-ai.git
    cd flightsage-ai
    ```

2.  **Create and activate a virtual environment:**
    *   **Windows:**
        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```
    *   **macOS / Linux:**
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## Project Roadmap

*   [x] Initial project setup and structure.
*   [ ] Develop the first API connector (e.g., AviationStack, Amadeus).
*   [ ] Implement data models for flights, airports, and aircraft.
*   [ ] Add data processing and analysis examples in Jupyter Notebooks.
*   [ ] Build a simple web interface with Flask or FastAPI.

## How to Contribute

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
