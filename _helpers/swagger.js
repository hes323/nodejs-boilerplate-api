const express = require('express');
const router = express.Router();
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = YAML.load('./swagger.yaml');

module.exports = router; {
    router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
};