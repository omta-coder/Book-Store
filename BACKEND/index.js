import express from 'express'
import 'dotenv/config';
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute.js'

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

//connect to mongodb
mongoose.connect(process.env.MONGODB)
.then(()=>console.log('Connected to MongoDB'))
.catch((error)=>console.error(error))

//defining routes
app.use('/book', bookRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
