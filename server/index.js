import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express()



app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  })

  

app.use(bodyParser.json({limit: "30mb", extended : true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}))
app.use(cors())

app.use('/posts', postRoutes)

// connect with db
const CONNECTION_URL = 'mongodb+srv://arkadiusz:arkadiusz@cluster0.3unu5qt.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3001

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
