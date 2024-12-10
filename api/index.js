import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/user.model.js';

// Učitaj .env fajl
dotenv.config();

// Povezivanje na MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to Mongo DB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

// Lista dozvoljenih izvora (origina)
const allowedOrigins = [
  'http://localhost:3001', // Lokalni frontend za razvoj
  'http://localhost:3000', // Lokalni frontend za razvoj
  'https://www.viatec.rs', // Tvoj frontend domen
];

// Dinamički CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    console.log('Origin:', origin); // Debugging origina
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Dozvoli origin
    } else {
      callback(new Error('Not allowed by CORS')); // Odbij origin
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'], // Osiguraj da je metoda OPTIONS dozvoljena
  allowedHeaders: ['Content-Type'], // Dozvoljeni zaglavlja
}));

// Pre-flight OPTIONS request handler
app.options('*', cors());

// Parsiranje JSON tela zahteva
app.use(express.json());

// Ruta za obradu slanja forme korisnika
app.post('/api/users', async (req, res) => {
  try {
    const { username, lastName, email, dateOfBirth, phone, state, privacy } = req.body;

    console.log(privacy);
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

// Startovanje servera
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
