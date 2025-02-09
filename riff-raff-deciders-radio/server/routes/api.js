import express from 'express';
import radioController from '../controllers/radioController.js'; // Now using ES modules
const router = express.Router();

// Define your API routes here:
router.get('/', (req, res) => {
  res.send('API Root');
});

// User authentication routes
router.post('/register', radioController.registerUser);
router.post('/login', radioController.loginUser);

// Radio streaming routes
router.get('/stream', radioController.streamRadio);

export default router;