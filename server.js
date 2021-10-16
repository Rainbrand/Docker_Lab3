import express from "express"
import cors from "cors"

const PORT = 8080

let counter = 0;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8').send(counter.toString()).status(200);
})

app.get("/stat", (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8').send(counter.toString()).status(200);
    counter++;
})

app.get("/about", (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8').send('<h3>Hello, Ilya</h3>').status(200);
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
