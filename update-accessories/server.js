const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const accessoryRoutes = require('./routes/accessoryRoutes');
const cors = require('cors');


const app = express();
const port = 3014;

app.use(cors({
  origin: 'htt://localhost:3000/'
}));

app.use(bodyParser.json());
app.use('/clinic', accessoryRoutes);
app.use('/clinic-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Accessories update service listening at http://localhost:${port}`);
});
