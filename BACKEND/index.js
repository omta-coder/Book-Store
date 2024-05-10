import express from 'express'
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;


//connect to mongodb
mongoose.connect(process.env.MONGODB)
.then(()=>console.log('Connected to MongoDB'))
.catch((error)=>console.error(error))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
