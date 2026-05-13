# API Latency Monitor 🚀

![npm version](https://img.shields.io/npm/v/api-latency-monitor)
![license](https://img.shields.io/npm/l/api-latency-monitor)
![downloads](https://img.shields.io/npm/dt/api-latency-monitor)
![node](https://img.shields.io/node/v/api-latency-monitor)
![issues](https://img.shields.io/github/issues/HarshRana446/api-latency-monitor)
![stars](https://img.shields.io/github/stars/HarshRana446/api-latency-monitor)

A lightweight and production-ready Express middleware for monitoring API latency, response times, slow endpoints, and backend performance in Node.js applications.

---

# ✨ Features

- ⚡ Real-time API latency tracking
- 🚨 Automatic slow API detection
- 🎨 Colored terminal logs
- 📊 Status code monitoring
- 🪶 Lightweight middleware
- 🔧 Configurable slow API threshold
- 📈 Backend performance visibility
- 🛠 Easy Express integration
- 🚀 Zero-config setup

---

# ❓ Why API Latency Monitor?

Debugging slow APIs in production is difficult.

Traditional logging systems are often:
- reactive instead of proactive
- difficult to analyze
- missing latency visibility
- hard to monitor in real time

api-latency-monitor solves this by providing:
- instant API response tracking
- real-time slow endpoint detection
- lightweight monitoring
- clean terminal visibility
- minimal setup

---

# 📦 Installation

```bash
npm install api-latency-monitor
```

---

# 🚀 Quick Start

## Basic Usage

```js
const express = require("express");
const monitor = require("api-latency-monitor");

const app = express();

app.use(
  monitor({
    slowThreshold: 1000
  })
);

app.get("/", (req, res) => {

  setTimeout(() => {
    res.send("Fast API");
  }, 300);

});

app.get("/slow", (req, res) => {

  setTimeout(() => {
    res.send("Slow API");
  }, 2000);

});

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
```

---

# 🖥 Example Output

## Fast API

```bash
[GET] / -> 200 -> 302ms
```

---

## Slow API

```bash
⚠️ SLOW API [GET] /slow -> 200 -> 2010ms
```

---

# ⚙️ Configuration

| Option | Type | Default | Description |
|---|---|---|---|
| slowThreshold | number | 1000 | Time in milliseconds after which API is considered slow |

---

# 📚 API

## monitor(options)

### Parameters

```js
{
  slowThreshold: number
}
```

### Returns

Express middleware function.

---

# 🏗 How It Works

The middleware:

1. Captures request start time
2. Waits for response completion
3. Calculates total response time
4. Logs latency information
5. Detects slow endpoints automatically

---

# 📂 Real-World Use Cases

- Detect slow database queries
- Monitor backend performance
- Analyze API bottlenecks
- Debug latency spikes
- Monitor payment APIs
- Improve Express application performance
- Track slow endpoints during development

---

# 🛠 Production Ready

Designed for:
- Express.js applications
- Node.js APIs
- internal services
- microservices
- staging environments
- production deployments

Lightweight architecture ensures minimal runtime overhead.

---

# 📈 Future Roadmap

- [ ] Average response time tracking
- [ ] Request analytics dashboard
- [ ] Error monitoring
- [ ] File logging support
- [ ] Live terminal dashboard
- [ ] WebSocket monitoring
- [ ] Grafana integration
- [ ] Request history tracking
- [ ] Memory usage analytics

---

# 📊 Example Monitoring Scenario

Suppose your application has multiple APIs:

```bash
/users
/login
/products
/orders
/payments
```

The middleware automatically tracks latency for every endpoint and highlights slow APIs instantly.

Example:

```bash
[GET] /users -> 200 -> 120ms

[POST] /login -> 200 -> 95ms

⚠️ SLOW API [GET] /payments -> 200 -> 2200ms
```

---

# 💡 Why Use This Package?

If you want:
- quick API visibility
- lightweight monitoring
- instant latency tracking
- backend debugging
- slow API detection

without using expensive monitoring tools,
this package provides a simple and effective solution.

---

# 🤝 Contributing

Contributions are welcome!

Feel free to:
- open issues
- suggest new features
- submit pull requests

---

# 📄 License

MIT © Harsh Rana

---

# 👨‍💻 Author

Harsh Rana

- GitHub: https://github.com/HarshRana446
- LinkedIn: https://www.linkedin.com/in/harsh-rana-739878302

---

# ⭐ Support

If you found this package useful, consider starring the GitHub repository 🚀