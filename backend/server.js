


const express = require('express')
const { PrismaClient, Prisma } = require('@prisma/client')
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

// Create
app.post('/movies', async (req, res, next) => {
    try {
        const movie = await prisma.movie.create({ data: req.body });
        res.json(movie);
    } catch (err) {
        next(err);
    }
})

// Read all
app.get('/movies', async (req, res, next) => {
    try {
        const movies = await prisma.movie.findMany();
        res.json(movies);
    } catch (err) {
        next(err)
    }
})

// Read one
app.get('/movies/:id', async (req, res, next) => {
    try {
        const movie = await prisma.movie.findUnique({ where: { id: Number(req.params.id) } });
        res.json(movie);
    } catch (err) {
        next(err)
    }
})

// Update
app.put('/movies/:id', async (req, res, next) => {
    try {
        const movie = await prisma.movie.update({
            where: { id: Number(req.params.id) },
            data: req.body,
        });
        req.json(item);
    } catch (err) {
        next(err)
    }
})

// Delete
app.delete('/movies/:id', async (req, res, next) => {
    try {
        await prisma.movie.delete({ where: { id: Number(req.params.id) } });
        req.json({ message: 'Deleted successfully' });
    } catch (err) {
        next(err)
    }
})

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all domains (change in production)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Start
app.listen(3000, () => console.log("Server running on http://localhost:3000"));