import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/user.model.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to Mongo DB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

// List of allowed origins
const allowedOrigins = ['http://localhost:3001', 'http://localhost:3000', 'http://localhost:5173'];

// Dynamic CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    console.log('Origin:', origin); // Debugging the origin
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the origin
    } else {
      callback(new Error('Not allowed by CORS')); // Reject the origin
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'], // Ensure OPTIONS method is allowed
  allowedHeaders: ['Content-Type'], // Allowed headers
}));

// Pre-flight OPTIONS request handler
app.options('*', cors());

// Parse JSON request bodies
app.use(express.json());

// Route to handle user form submissions
app.post('/api/users', async (req, res) => {
  try {
    const { username, lastName, email, dateOfBirth, phone, state, privacy } = req.body;

    console.log(privacy)
    if (!username || !lastName || !email || !dateOfBirth || !phone || !state) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newUser = new User({ username, lastName, email, dateOfBirth, phone, state, privacy });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// import express from 'express';

// dotenv.config();  // ovo smo koristili da bi mogli da za konekciju mongo db da sakrijemo url adresu.
// // Kreirali smo .env fajl u root folderu i onda smo u varijabli MONGO definasli url baze podataka koju smo kreirali na MongoDb profilu projekta

// // db
// mongoose.connect(process.env.MONGO).then(() => {
//     console.log('Connected to Mongo DB');  // .then(() => ) ..... provera da smo se stvarno konektovali sa MongoDb-em
// }).catch((err) => {  // u slucaju da nismo konektovani, da nam uhvati gresku
//     console.log(err);
// });

// // Creating application:
// const app = express();

// // kreiramo rikvestove
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });