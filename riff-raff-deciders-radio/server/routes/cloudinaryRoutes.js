// filepath: /Users/alilholt/rrdradio/riff-raff-deciders-radio/server/routes/cloudinaryRoutes.js
import express from "express";
import { fetchPlaylists } from "../controllers/cloudinaryController.js";

const router = express.Router();

router.get("/playlists", fetchPlaylists);

export default router;