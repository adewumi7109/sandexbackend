// lib/supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;


