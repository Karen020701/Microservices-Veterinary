const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Services API',
      version: '1.0.0',
      description: 'API RESTful para gestionar información de servicios'
    },
    servers: [
      {
        url: 'http://localhost:3017/clinic'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
