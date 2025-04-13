// lib/supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = 'https://mtvwhmakigwwusbdzoih.supabase.co';  
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dndobWFraWd3d3VzYmR6b2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1Mjg1ODUsImV4cCI6MjA2MDEwNDU4NX0._AqApKkOUMFX5YTsfoTu5GJJNugj_87IL_9w_OgJSUw'; 
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
