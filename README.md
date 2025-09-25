# Transfermarkt API Client

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js)
![Axios](https://img.shields.io/badge/Axios-^1.12.2-blue?style=for-the-badge&logo=axios)
![Node-Cache](https://img.shields.io/badge/Node--Cache-^5.1.2-orange?style=for-the-badge&logo=npm)

A lightweight and efficient Node.js client designed to interact with the (unofficial) Transfermarkt API.  
This project enables fetching detailed data on players, clubs, competitions, matches, referees, coaches, and stadiums, incorporating an integrated caching system to optimize performance and reduce redundant requests.

---

## 📚 Table of Contents

- [📝 Project Overview](#-project-overview)
- [🌟 Features](#-features)
- [🚀 Installation](#-installation)
- [💡 Usage](#-usage)
  - [Basic Example: Fetching Player Profile](#basic-example-fetching-player-profile)
  - [Available Services](#available-services)
  - [Caching Mechanism](#caching-mechanism)
  - [Error Handling](#error-handling)
- [🌐 API Endpoints](#-api-endpoints)
- [🤝 Contribution](#-contribution)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
- [🔗 References](#-references)

---

## 📝 Project Overview

This project serves as a robust client for accessing comprehensive football data from Transfermarkt.  
It leverages modern JavaScript features and popular libraries like `axios` for HTTP requests and `node-cache` for efficient data caching.  
The modular design ensures easy integration and scalability, making it suitable for applications requiring football statistics and information.

---

## 🌟 Features

- **Player Profile Search**: Retrieve extensive information about any football player, including biographical data, market value, and club history.
- **Club Data**: Access detailed information about football clubs, such as squad lists, historical data, and current standings.
- **Competition Information**: Query data for various leagues and tournaments worldwide.
- **Match Details**: Obtain information about specific matches, including scores, lineups, and events.
- **Referee and Coach Profiles**: Get data on professional referees and coaches.
- **Stadium Data**: Information about football stadiums, including capacity and location.
- **Integrated Caching**: Utilizes `node-cache` to store API responses, significantly improving response times and reducing the load on the Transfermarkt servers. Configurable TTL (Time To Live) for cached data.
- **Optimized Requests**: Built with `axios` for efficient HTTP requests, including request timeouts and robust error handling.
- **Modular Design**: Services are organized into separate modules (`club.js`, `player.js`, etc.) for better maintainability and ease of use.

---

## 🚀 Installation

To integrate this API client into your project, follow these steps:

1. **Clone the repository** (or download the ZIP file and extract it):

   ```bash
   git clone https://github.com/wcarmesini/transfermarkt_api_client.git
   cd transfermarkt_api_client
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

---

## 💡 Usage

The API client is modular and straightforward to use.  
You can import specific service functions or the `tmapi` module directly.

### Basic Example: Fetching Player Profile

Create a file named `example.js` (or similar) and add the following code:

```javascript
import { playerProfile } from './src/services/index.js';
import util from 'node:util';

// Fetch the profile of the player with ID 28003 (Lionel Messi, example only)
const result = await playerProfile(28003);

// Print the result to the console in a readable format
console.log(util.inspect(result, { showHidden: false, depth: null, colors: true }));
```

To run the example:

```bash
node example.js
```

---

### Available Services

All services are centrally exported via `src/services/index.js`.  
You can import them as needed:

```javascript
import { 
  playerProfile, 
  clubInfo, 
  competitionTable, 
  gameDetails, 
  refereeProfile, 
  coachProfile, 
  stadiumInfo 
} from './src/services/index.js';

// Example of using other services
const club = await clubInfo(4); // FC Barcelona (ID 4)
const competition = await competitionTable(null, 'GB1'); // Premier League
```

#### Service Structure

- `src/services/club.js`: Club-related functions (e.g., `clubInfo`).
- `src/services/coach.js`: Coach-related functions (e.g., `coachProfile`).
- `src/services/competition.js`: Competition-related functions (e.g., `competitionTable`).
- `src/services/game.js`: Match-related functions (e.g., `gameDetails`).
- `src/services/general.js`: General utility functions (if any).
- `src/services/player.js`: Player-related functions (e.g., `playerProfile`).
- `src/services/referee.js`: Referee-related functions (e.g., `refereeProfile`).
- `src/services/stadium.js`: Stadium-related functions (e.g., `stadiumInfo`).

---

### Caching Mechanism

The client uses `node-cache` to cache API responses for a default period of **5 minutes (300 seconds)**.  
This means that repeated requests to the same endpoint within this period will return cached data, significantly improving response times and reducing external calls.

You can adjust the TTL (Time To Live) in `src/tmapi.js`:

```javascript
// Simple cache (default TTL: 5 minutes)
const cache = new NodeCache({ stdTTL: 300 }); // Change 300 to desired seconds
```

---

### Error Handling

The `fetchTm` function in `src/tmapi.js` includes basic error handling.  
If an API request fails, it logs the error to the console and returns `null`.

Example:

```javascript
try {
  const result = await playerProfile(99999999); // Non-existent player ID
  if (result) {
    console.log(result);
  } else {
    console.log('Player not found or API error occurred.');
  }
} catch (error) {
  console.error('An unexpected error occurred:', error);
}
```

---

## 🌐 API Endpoints

The client interacts with the base URL:

```
https://tmapi-alpha.transfermarkt.technology/
```

Examples of endpoints:
- `player/28003` → Player profile (Lionel Messi)
- `clubs/4` → Club information (FC Barcelona)
- `competition/GB1` → Competition details (Premier League)

⚠️ **Note**: This project relies on an **unofficial API**. Endpoints may change without prior notice.

---

## 🤝 Contribution

Contributions are welcome!  
Feel free to open issues to report bugs, suggest new features, or submit pull requests.

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and ensure the code runs without errors:
   ```bash
   npm install && node example.js
   ```
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Wilson Valentim Carmesini**  
- GitHub: [@wcarmesini](https://github.com/wcarmesini)

---

## 🔗 References

- [Transfermarkt Official Website](https://www.transfermarkt.com/)
- [Axios GitHub Repository](https://axios-http.com/)
- [Node-Cache npm Package](https://www.npmjs.com/package/node-cache)
