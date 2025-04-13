// api/login.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtvwhmakigwwusbdzoih.supabase.co';  
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dndobWFraWd3d3VzYmR6b2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1Mjg1ODUsImV4cCI6MjA2MDEwNDU4NX0._AqApKkOUMFX5YTsfoTu5GJJNugj_87IL_9w_OgJSUw'; 

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ error: error.message });
  }

  res.status(200).json({
    user: {
        id: data.user.id,
        email: data.user.email,
        role: data.user.role,
        last_sign_in_at: data.user.last_sign_in_at,
        access_token: data.session.access_token, 
        refresh_token: data.session.refresh_token,
      }
  });
}
