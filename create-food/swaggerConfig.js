const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Veterinary API',
      version: '1.0.0',
      description: 'API RESTful para clinica veterinaria'
    },
    servers: [
      {
        url: 'http://localhost:3003/clinic'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
