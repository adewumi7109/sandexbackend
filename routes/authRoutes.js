// routes/authRoutes.js
const express = require('express');
const supabase = require('../lib/supabaseClient');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Log in with Supabase
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Successful login, return user data and token
  res.json({
    user: {
      id: data.user.id,
      email: data.user.email,
      role: data.user.role,
      last_sign_in_at: data.user.last_sign_in_at,
      access_token: data.session.access_token, 
      refresh_token: data.session.refresh_token,
    },
    session:{
      
    }

  });
});

module.exports = router;
