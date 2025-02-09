# Riff Raff Deciders Radio

Welcome to Riff Raff Deciders Radio, your go-to streaming radio station! This project is designed to provide a seamless listening experience with a focus on user engagement and mobile accessibility.

## Features

- **Streaming Audio**: Enjoy a variety of music and shows streamed directly to your device.
- **User Authentication**: Users can register and log in to personalize their experience.
- **Mobile Friendly**: The application is designed to be fully responsive, ensuring a great experience on mobile devices.
- **Dynamic Layout**: The layout adapts to different screen sizes, making it easy to navigate on any device.

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

- **public/index.html**: The main HTML file for the client application.
- **src/components**: Contains React components for the application:
  - `RadioPlayer.jsx`: Handles audio playback.
  - `UserAuth.jsx`: Manages user authentication.
  - `MobileLayout.jsx`: Provides a responsive layout for mobile devices.
- **src/App.jsx**: The main application component.
- **src/index.jsx**: Entry point for the React application.
- **src/styles/main.css**: CSS styles for the application.

### Server

- **controllers/radioController.js**: Logic for streaming audio and managing radio operations.
- **models/User.js**: Defines the user schema for authentication.
- **routes/api.js**: API routes for user authentication and streaming.
- **app.js**: Main entry point for the server application.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/riff-raff-deciders-radio.git
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd riff-raff-deciders-radio/client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

4. Start the server:
   ```
   node app.js
   ```

5. Start the client application:
   ```
   cd ../client
   npm start
   ```

## Contributing

We welcome contributions to improve Riff Raff Deciders Radio! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.