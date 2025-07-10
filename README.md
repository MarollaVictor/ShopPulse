# ShopPulse Backend
Author: Marolla VictorProject: ALX Backend SpecializationDate: July 10, 2025
ShopPulse is a robust backend for a multi-vendor e-commerce platform, enabling customers to browse products, vendors to manage stores, and admins to oversee operations. Built with Node.js, Express, and MongoDB Atlas, it features secure authentication, vendor APIs, and interactive documentation.
Features

User Authentication: Secure registration and login with JWT and bcrypt (/api/auth/register, /api/auth/login).
Vendor Management: Create and manage vendor stores with commission rates (/api/vendors).
Database: MongoDB Atlas with separate shoppulse (production) and shoppulse-test (testing) databases.
API Documentation: Swagger UI for interactive endpoint exploration (/api-docs).
Testing: Unit tests with Jest and Supertest for reliable API functionality.
Scalability: Modular structure for future frontend integration.

Tech Stack

Runtime: Node.js v22.16.0
Framework: Express
Database: MongoDB Atlas with Mongoose
Authentication: JSON Web Tokens (JWT), bcrypt
Documentation: Swagger UI, swagger-jsdoc
Testing: Jest, Supertest
Development: Nodemon, WSL Ubuntu

Project Structure
ShopPulse/
├── config/
│   └── db.js           # MongoDB Atlas connection
├── models/
│   ├── User.js         # User schema
│   ├── Role.js         # Role schema
│   └── Vendor.js       # Vendor schema
├── routes/
│   ├── auth.js         # Authentication endpoints
│   └── vendors.js      # Vendor endpoints
├── tests/
│   ├── auth.test.js    # Authentication tests
│   └── vendors.test.js # Vendor tests
├── .env                # Environment variables
├── index.js            # Server entry point
├── swagger.js          # Swagger configuration
├── README.md           # Project documentation
└── shoppulse_demo.mp4  # Video demo

Setup Instructions

Clone the Repository:
git clone https://github.com/[YourUsername]/ShopPulse
cd ShopPulse


Install Dependencies:
npm install


Configure Environment Variables:Create a .env file in the root directory:
PORT=3000
MONGODB_URI=mongodb://<user>:<pass>@<shard1>,<shard2>,<shard3>/shoppulse?ssl=true&replicaSet=atlas-xxx-shard-0&authSource=admin&retryWrites=true&w=majority
MONGODB_URI_TEST=mongodb://<user>:<pass>@<shard1>,<shard2>,<shard3>/shoppulse-test?ssl=true&replicaSet=atlas-xxx-shard-0&authSource=admin&retryWrites=true&w=majority
JWT_SECRET=7b9f8a3c4d5e6f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3

Replace <user>, <pass>, <shard1>, <shard2>, <shard3>, and atlas-xxx with your MongoDB Atlas credentials.

Run the Server:
npm run dev

Access at http://localhost:3000.

View API Documentation:Open http://localhost:3000/api-docs in a browser.

Run Tests:
npm test



API Endpoints

Authentication:
POST /api/auth/register: Register a user (name, email, username, password, roleName).
POST /api/auth/login: Login and receive JWT (email, password).


Vendors:
POST /api/vendors: Create a vendor store (userId, storeName, commissionRate).


Documentation:
GET /api-docs: Swagger UI for all endpoints.



Challenges and Solutions

DNS Issue (querySrv ENOTFOUND): Resolved by switching to a non-SRV MongoDB Atlas connection string and configuring WSL DNS (/etc/resolv.conf with Cloudflare DNS: 1.1.1.1, 1.0.0.1).
Module Errors (MODULE_NOT_FOUND): Fixed by verifying file paths for routes/auth.js, models/User.js, and others.
MongoDB Connection (MongoParseError): Corrected deprecated options in config/db.js and standardized MONGODB_URI.
Environment Variables: Debugged MONGO_URI undefined by ensuring dotenv loaded .env correctly.
WSL Setup: Used mongosh and updated Node.js dependencies to resolve compatibility issues.

Demo
Watch shoppulse_demo.mp4 for a walkthrough of the app idea, development process, and live API demonstration, including:

Starting the server (npm run dev).
Testing authentication and vendor APIs with curl/Postman.
Exploring Swagger UI (/api-docs).
Running Jest tests (npm test).

Future Improvements

Add product and order management APIs.
Integrate a frontend (e.g., React).
Implement role-based access control (RBAC).
Enhance test coverage for edge cases.

Acknowledgments
Thank you to ALX for the opportunity to build this project, and to the community for resources on Node.js, MongoDB, and WSL debugging.