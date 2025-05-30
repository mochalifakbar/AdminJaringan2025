// backend_app/server.js
require('dotenv').config(); // Muat variabel lingkungan dari .env
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // Path ke konfigurasi Sequelize Anda
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Aktifkan CORS untuk semua rute
app.use(express.json()); // Untuk parsing application/json
app.use(express.urlencoded({ extended: true })); // Untuk parsing application/x-www-form-urlencoded

// Routes
app.use('/api/products', productRoutes);
// Tambahkan rute lain di sini (customers, orders, etc.)

app.get('/', (req, res) => {
    res.send('ERN Backend is running!');
});

// Sinkronisasi database dan jalankan server
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
        // Untuk development, Anda mungkin ingin sinkronisasi model:
        // sequelize.sync() // Hati-hati, ini bisa mengubah skema. Untuk production gunakan migrasi.
        //   .then(() => console.log('Models synchronized with database.'))
        //   .catch(err => console.error('Unable to synchronize models:', err));

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log(`Connect to frontend at http://localhost:3000 (if running separately)`);
            console.log(`API available at http://localhost:${PORT}/api/products`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });