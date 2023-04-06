const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/example.json');

const express = require('express');
const app = express()
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

// const apikeyMiddleware = (req, res, next) => {
//     const apikey = req.get['api-key'];
//     if (!apikey || apikey !== 'Ashestt'){
//         return res.status(401).json({ message: "Unauthorized" });
//     } 
//     next();
// };
// server.use(jsonServer.defaults());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// server.use(apikeyMiddleware);
// server.use(router);

app.listen(3001, ()=> { console.log('server running')})