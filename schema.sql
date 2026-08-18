const express = require('express');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

// Returns ICE server config for WebRTC. Google's public STUN server is free
// and works for most connections. TURN is required as a relay fallback for
// users behind symmetric NATs/strict firewalls (common on mobile carrier
// networks in Nigeria) - without it, some calls will simply fail to connect.
// This project uses Metered.ca's TURN service by default; swap the env vars
// for any TURN provider (Twilio, Xirsys, or a self-hosted coturn instance).
router.get('/', requireAuth, (req, res) => {
  const iceServers = [
    { urls: 'stun:stun.l.google.com:19302' },
  ];

  if (process.env.TURN_URL && process.env.TURN_USERNAME) {
    iceServers.push({
      urls: process.env.TURN_URL,
      username: process.env.TURN_USERNAME,
      credential: process.env.TURN_CREDENTIAL,
    });
  }

  res.json({ iceServers });
});

module.exports = router;
