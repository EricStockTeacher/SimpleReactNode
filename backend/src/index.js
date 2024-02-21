import express from 'express';
import client from './mongo.js';

const app = express();

app.use(express.json()) // for parsing application/json

app.get('/api/message', async (req, res) => {
    const database = client.db("Greeting");
    const message = database.collection("Message");

    const docObject = await message.findOne({});
    console.log(docObject);
    res.send(docObject.message);
})

app.post('/api/message', async (req, res) => {
    
        console.log(req.body);
        const database = client.db("Greeting");
        const message = database.collection("Message");

        const filter = {};
        const options = { upsert: true };

        const updateDoc = {
            $set: {
            message: req.body.message
            },
        };

        const result = await message.updateOne(filter, updateDoc, options);
        
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
        
        res.send({ "message": req.body.message});
    
})


app.listen(8000, () => console.log(`Running on port 8000`));