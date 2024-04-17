const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db');

router.post(
    '/signup',
    async(req, res)=>
    {
        try
        {
            const { username, email, password } = req.body;

            // Check if username or email already exists
            const existingUser = await db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);
            if(existingUser.length > 0)
            {
                return res.status(400).json({message: 'Username or email already exists'});
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert user into database
            await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

            res.status(201).json({ message: 'User registered successfully'});
        } catch (error)
        {
            console.error('Error registering user:', error);
            res.status(500).json({ message: 'Internal server error'});
        }
    });

module.exports = router;