📡 **Service Communication**
<hr>
<br>
⚫All microservices communicate through the API Gateway using **express-http-proxy**.

⚫Internal services communicate asynchronously via RabbitMQ using **amqplib**.
API Gateway acts as a centralized entry point for all external client requests.
<br>

⚙️ **Core Technologies & Modules**
<hr>

🛠 **Framework & Communication**

⚫**Express.js** – Backend framework for building services.

⚫**express-http-proxy** – Proxies and routes requests in the api-gateway.

⚫**amqplib (RabbitMQ)** – Enables message passing between services.
<br>
🧠 **Database & ORM** 
<hr>
<br>

⚫**MongoDB** – Primary database.

⚫**Mongoose** – ODM used for schema modeling and interacting with MongoDB.
<br>

🔐 **Authentication & Security**
<hr>

⚫jsonwebtoken (**JWT**) – For secure authentication and access control.

⚫**Helmet** – Adds HTTP headers for improved security.

⚫**CORS** – Enables cross-origin resource sharing.
<br>

🧪 **Validation & Middleware**
<hr>

⚫**Joi** – For validating request bodies, params, and queries.

⚫Express Middleware – Used extensively for logging, error handling, rate limiting, and validation.
<br>

🚦 **Rate Limiting & Caching**

<hr>

⚫**Express Rate Limit** – To limit repeated requests to APIs.

⚫**rate-limit-redis** – Redis integration for distributed rate limiting.

⚫**Redis** – Used for caching, token storage, and message throttling.
<br>

📜 **Logging**
<hr>

⚫Winston – Powerful and customizable logging library used across services for error, info, and debug logs.