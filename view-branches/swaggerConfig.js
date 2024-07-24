const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Branches API',
      version: '1.0.0',
      description: 'API RESTful para gestionar información de sucursales'
    },
    servers: [
      {
        url: 'http://localhost:3010/clinic'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
