const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pet Food API',
      version: '1.0.0',
      description: 'API RESTful para gestionar comida de mascotas'
    },
    servers: [
      {
        url: 'http://localhost:3012/clinic'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
