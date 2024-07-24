const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const accesoriesRoutes = require('./routes/accesoriesRoutes');
const cors = require('cors');

const app = express();
const port = 3007;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use('/clinic', accesoriesRoutes);
app.use('/clinic-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Veterinary service listening at http://localhost:${port}`);
});
