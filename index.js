'use strict';

// get environment variables from .env or server's environment file
require('dotenv').config();
console.log('Node is running on '+process.env.NODE_ENV+' environment...');
