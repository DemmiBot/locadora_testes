const express = require('express')
const { PrismaClient, Prisma } = require('@prisma/client')

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

/*
    Movie: title:String, Genre:String, Status:Boolean
*/

// Create
app.post('/movies', async (req, res) => {
    const movie = await prisma.movie.create({ data:req.body })
    res.json(movie)
})

// Read all
app.get('/movies', async (req, res) => {
    const movies = await prisma.movie.findMany();
    res.json(movies);
})

// Read one
app.get('/movies/:id', async (req, res) => {
    const movie = await prisma.movie.findUnique({ where: { id: Number(req.params.id)}});
    res.json(movie);
})

// Update
app.put('/movies/:id', async (req, res) => {
    const movie = await prisma.movie.update({
        where: { id: Number(req.params.id)},
        data: req.body,
    });
    req.json(item);
})

// Delete
app.delete('/movies/:id', async (req, res) => {
    await prisma.movie.delete({where : {id: Number(req.params.id)}});
    req.json({message: 'Deleted successfully'});
})

app.use()

// Start
app.listen(3000, () => console.log("Server running on http://localhost:3000"));