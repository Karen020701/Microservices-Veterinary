const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const accesoriesRoutes = require('./routes/accesoriesRoutes');
const cors = require('cors');

const app = express();
const port = 3008;

app.use(cors({
  origin: 'http://veterinary-balance-1049781827.us-east-2.elb.amazonaws.com'
}));

app.use(bodyParser.json());
app.use('/clinic', accesoriesRoutes);
app.use('/clinic-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Microservice list accesories listening at http://localhost:${port}`);
});
