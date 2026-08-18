# Supabase project settings (Project Settings > API)
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
SUPABASE_ANON_KEY=YOUR_ANON_KEY

# JWT secret is verified via Supabase, no separate secret needed

# CORS - your deployed frontend URL(s), comma separated
ALLOWED_ORIGINS=https://avis-call.netlify.app,http://localhost:8080

# TURN server (see backend/README.md for setup - Metered.ca free tier or self-hosted coturn)
TURN_URL=turn:relay.metered.ca:80
TURN_USERNAME=your_turn_username
TURN_CREDENTIAL=your_turn_credential

PORT=4000
