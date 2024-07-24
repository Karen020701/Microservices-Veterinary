const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const medicinesRoutes = require('./routes/medicinesRoutes');
const cors = require('cors');

const app = express();
const port = 3009;

app.use(cors({
  origin: 'http://veterinary-balance-1049781827.us-east-2.elb.amazonaws.com'
}));

app.use(bodyParser.json());
app.use('/clinic', medicinesRoutes);
app.use('/clinic-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Veterinary service listening at http://localhost:${port}`);
});
