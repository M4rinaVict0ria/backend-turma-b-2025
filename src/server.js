import express from 'express'
const server = express();
import RoutesPayment from './routes/payment.routes.js';
import RoutesUser from './routes/users.routes.js';

const PORT = process.env.PORT || 3000;

server.use(express.json());

server.use("/api", RoutesPayment);
server.use("/api", RoutesUser);

server.listen(PORT, ()=>{
	console.log('Server is running on port ${PORT}');
});