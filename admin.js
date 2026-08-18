const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Service-role client: bypasses RLS. Only ever used server-side.
// This is what makes credit balances tamper-proof - the client
// never talks to Supabase directly for anything that touches credits.
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

module.exports = { supabaseAdmin };
