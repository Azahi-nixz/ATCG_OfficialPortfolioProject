import 'dotenv/config';        
import express from 'express'; 
import cors from 'cors';
import pg from 'pg';
const { Pool } = pg;

const app = express();
 
app.use(cors()); 
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Successfully connected to PostgreSQL database!');
  release();
});


app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT uid, pass, email FROM users;');
    res.json(result.rows); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {

    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

 
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = result.rows[0];

    if (user.password === password) {
  
      res.status(200).json({ 
        message: "Login successful", 
        user: { id: user.id, email: user.email } 
      });
    } else {
      
      res.status(401).json({ message: "Invalid email or password" });
    }

  } catch (err) {
    console.error("Database error during login:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

