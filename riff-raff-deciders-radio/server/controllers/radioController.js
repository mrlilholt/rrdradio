import { Stream } from 'stream';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

// Replace the express Router logic with standalone controller functions

export const streamRadio = (req, res) => {
  // Replace with your actual streaming logic
  const audioStream = new Stream(); // Placeholder stream; implement real logic here
  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Transfer-Encoding': 'chunked',
  });

  audioStream.on('data', (chunk) => {
    res.write(chunk);
  });

  audioStream.on('end', () => {
    res.end();
  });
};

export const registerUser = (req, res) => {
  const newUser = req.body; // Assuming user data is sent in the request body
  // Implement database saving logic here
  res.status(201).json(newUser);
};

export const loginUser = (req, res) => {
  // Implement login logic here
  res.status(200).json({ message: 'User logged in' });
};

export const generateSignature = (req, res) => {
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto
    .createHash('sha1')
    .update(`timestamp=${timestamp}${apiSecret}`)
    .digest('hex');
  res.json({ timestamp, signature });
};

// Export an object with the controller functions as default so that the import in api.js works
export default { registerUser, loginUser, streamRadio, generateSignature };