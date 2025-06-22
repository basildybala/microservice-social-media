
<h1 align="center" >Social Media Microservice </h1>

📁 <h2>Project Structure</h2>

├── api-gateway/
│   └── src/
│       ├── controllers/
│       │   └── gatewayController.js
│       ├── routes/
│       │   └── gatewayRoutes.js
│       ├── middleware/
│       │   ├── authMiddleware.js
│       │   └── errHandler.js
│       ├── utils/
│       │   ├── logger.js
│       │   └── validation.js
│       ├── models/
│       └── server.js
│
├── identity-service/
│   └── src/
│       ├── controllers/
│       │   └── identityController.js
│       ├── routes/
│       │   └── identityRoutes.js
│       ├── middleware/
│       │   ├── authMiddleware.js
│       │   └── errHandler.js
│       ├── utils/
│       │   ├── logger.js
│       │   └── validation.js
│       ├── models/
│       └── server.js
│
├── media-service/
│   └── src/
│       ├── controllers/
│       │   └── mediaController.js
│       ├── routes/
│       │   └── mediaRoutes.js
│       ├── middleware/
│       │   ├── authMiddleware.js
│       │   └── errHandler.js
│       ├── utils/
│       │   ├── logger.js
│       │   └── validation.js
│       ├── models/
│       └── server.js
│
├── post-service/
│   └── src/
│       ├── controllers/
│       │   └── postController.js
│       ├── routes/
│       │   └── postRoutes.js
│       ├── middleware/
│       │   ├── authMiddleware.js
│       │   └── errHandler.js
│       ├── utils/
│       │   ├── logger.js
│       │   └── validation.js
│       ├── models/
│       └── server.js
│
├── search-service/
│   └── src/
│       ├── controllers/
│       │   └── searchController.js
│       ├── routes/
│       │   └── searchRoutes.js
│       ├── middleware/
│       │   ├── authMiddleware.js
│       │   └── errHandler.js
│       ├── utils/
│       │   ├── logger.js
│       │   └── validation.js
│       ├── models/
│       └── server.js
│
├── .gitignore
└── docker-compose.yml


<hr>

📡 **Service Communication**
<br>

⚫All microservices communicate through the API Gateway using **express-http-proxy**.

⚫Internal services communicate asynchronously via RabbitMQ using **amqplib**.
API Gateway acts as a centralized entry point for all external client requests.
<br>

<hr>

⚙️ **Core Technologies & Modules**

🛠 **Framework & Communication**

⚫**Express.js** – Backend framework for building services.

⚫**express-http-proxy** – Proxies and routes requests in the api-gateway.

⚫**amqplib (RabbitMQ)** – Enables message passing between services.
<br>
<hr>

🧠 **Database & ORM** 
<br>

⚫**MongoDB** – Primary database.

⚫**Mongoose** – ODM used for schema modeling and interacting with MongoDB.
<br>

<hr>

🔐 **Authentication & Security**

⚫jsonwebtoken (**JWT**) – For secure authentication and access control.

⚫**Helmet** – Adds HTTP headers for improved security.

⚫**CORS** – Enables cross-origin resource sharing.
<br>

<hr>

🧪 **Validation & Middleware**

⚫**Joi** – For validating request bodies, params, and queries.

⚫Express Middleware – Used extensively for logging, error handling, rate limiting, and validation.
<br>

<hr>

🚦 **Rate Limiting & Caching**


⚫**Express Rate Limit** – To limit repeated requests to APIs.

⚫**rate-limit-redis** – Redis integration for distributed rate limiting.

⚫**Redis** – Used for caching, token storage, and message throttling.
<br>

<hr>

📜 **Logging**

⚫Winston – Powerful and customizable logging library used across services for error, info, and debug logs.