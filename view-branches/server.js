const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const branchRoutes = require('./routes/branchRoutes');
const cors = require('cors');

const app = express();
const port = 3010;

app.use(cors({
  origin: 'htt://localhost:3000/'
}));


app.use(bodyParser.json());
app.use('/clinic', branchRoutes);
app.use('/clinic-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Branches service listening at http://localhost:${port}`);
});
