import  { Router } from 'express'
import path from 'path'
const router = Router()
import apiRoutes from './api'


// API Routes
router.use("/api", apiRoutes);

// directs to the client if no api routes are hit
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
