# Riff Raff Deciders Radio Server

## Overview
Riff Raff Deciders Radio is a streaming radio station application that allows users to listen to live radio broadcasts and manage their accounts. This server-side application handles user authentication, streaming audio, and API routes for the client application.

## Features
- User authentication (login and registration)
- Streaming audio functionality
- RESTful API for client-server communication

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (for user data storage)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/riff-raff-deciders-radio.git
   ```
2. Navigate to the server directory:
   ```
   cd riff-raff-deciders-radio/server
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the server directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

### Running the Server
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:5000`.

## API Endpoints
- **POST /api/register**: Register a new user
- **POST /api/login**: Authenticate a user
- **GET /api/stream**: Get the streaming audio URL

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.