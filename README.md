# API Latency Monitor

![npm version](https://img.shields.io/npm/v/api-latency-monitor)
![license](https://img.shields.io/npm/l/api-latency-monitor)
![downloads](https://img.shields.io/npm/dw/api-latency-monitor)

A lightweight Express middleware to monitor API response times and detect slow endpoints in real time.

---

## Features

- ⚡ Real-time API latency tracking
- 🚨 Detect slow APIs automatically
- 🎨 Colored terminal logs
- 📊 Status code monitoring
- 🪶 Lightweight and simple integration
- 🔧 Configurable slow API threshold

---

# Installation

```bash
npm install api-latency-monitor
```

---

# Usage

## Basic Example

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

# Example Output

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

# Options

| Option | Type | Default | Description |
|---|---|---|---|
| slowThreshold | number | 1000 | Time in ms after which API is marked as slow |

---

# API

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

# Why use this?

Monitoring API latency helps identify:
- slow database queries
- inefficient routes
- heavy backend processing
- performance bottlenecks

This package provides a quick and lightweight way to monitor Express API performance directly from the terminal.

---

# Future Improvements

- 📈 Average response time tracking
- 📊 Live dashboard
- 📁 File logging
- 📡 WebSocket monitoring
- 🌐 Grafana integration
- 🧠 Request analytics

---

# License

MIT © Harsh Rana

---

# Author

Harsh Rana

- GitHub: https://github.com/HarshRana446
- LinkedIn: https://www.linkedin.com/in/harsh-rana-739878302