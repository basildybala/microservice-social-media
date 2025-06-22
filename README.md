
<h1 align="center" >Social Media Microservice </h1>

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

<h2>Project Structure</h2>

├── api-gateway/ <br>
│   └── src/<br>
│       ├── controllers/<br>
│       │   └── gatewayController.js<br>
│       ├── routes/<br>
│       │   └── gatewayRoutes.js<br>
│       ├── middleware/<br>
│       │   ├── authMiddleware.js<br>
│       │   └── errHandler.js<br>
│       ├── utils/<br>
│       │   ├── logger.js<br>
│       │   └── validation.js<br>
│       ├── models/<br>
│       └── server.js<br>
│<br>
├── identity-service/<br>
│   └── src/<br>
│       ├── controllers/<br>
│       │   └── identityController.js<br>
│       ├── routes/<br>
│       │   └── identityRoutes.js<br>
│       ├── middleware/<br>
│       │   ├── authMiddleware.js<br>
│       │   └── errHandler.js<br>
│       ├── utils/<br>
│       │   ├── logger.js<br>
│       │   └── validation.js<br>
│       ├── models/<br>
│       └── server.js<br>
│<br>
├── media-service/<br>
│   └── src/<br>
│       ├── controllers/<br>
│       │   └── mediaController.js<br>
│       ├── routes/<br>
│       │   └── mediaRoutes.js<br>
│       ├── middleware/<br>
│       │   ├── authMiddleware.js<br>
│       │   └── errHandler.js<br>
│       ├── utils/<br>
│       │   ├── logger.js<br>
│       │   └── validation.js<br>
│       ├── models/<br>
│       └── server.js<br>
│<br>
├── post-service/<br>
│   └── src/<br>
│       ├── controllers/<br>
│       │   └── postController.js<br>
│       ├── routes/<br>
│       │   └── postRoutes.js<br>
│       ├── middleware/<br>
│       │   ├── authMiddleware.js<br>
│       │   └── errHandler.js<br>
│       ├── utils/<br>
│       │   ├── logger.js<br>
│       │   └── validation.js<br>
│       ├── models/<br>
│       └── server.js<br>
│<br>
├── search-service/<br>
│   └── src/<br>
│       ├── controllers/<br>
│       │   └── searchController.js<br>
│       ├── routes/<br>
│       │   └── searchRoutes.js<br>
│       ├── middleware/<br>
│       │   ├── authMiddleware.js<br>
│       │   └── errHandler.js<br>
│       ├── utils/<br>
│       │   ├── logger.js<br>
│       │   └── validation.js<br>
│       ├── models/<br>
│       └── server.js<br>
│<br>
├── .gitignore<br>
└── docker-compose.yml<br>


<hr>
