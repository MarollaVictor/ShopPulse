// debug-env.js
require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('MONGODB_URI_TEST:', process.env.MONGODB_URI_TEST);
console.log('JWT_SECRET:', process.env.JWT_SECRET);