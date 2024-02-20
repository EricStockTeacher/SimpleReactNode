import express from 'express';

const app = express();

app.get('/api/message', (req, res) => {
    res.send("Hello Class");
})

app.listen(8000, () => console.log(`Running on port 8000`));