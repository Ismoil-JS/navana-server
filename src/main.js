import express from 'express';
import cors from 'cors';
import { router } from './routes/routes.js';

const app = express();

// Middleware
app.use(express.json({ limit: '100mb' })); //  payload size limit to 100MB
app.use(express.urlencoded({ extended: true, limit: '10mb' })); //  limit for url-encoded data
app.use(cors());

// all routes
app.use('/api', router);

// default route
app.get('/', (_, res) => {
    res.send('This is a server for Navana Holdings Ltd.');
});

// 404 route handler
app.use('*', (_, res) => {
    res.status(404).send('404! Page not found with this route!');
});

const PORT = process.env.APP_PORT || 9000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})