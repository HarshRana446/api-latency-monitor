const chalk = require("chalk");

function monitor(options = {}) {

    const slowThreshold = options.slowThreshold || 1000;

    return function (req, res, next) {

        const start = Date.now();

        res.on("finish", () => {

            const duration = Date.now() - start;

            const log =
                `[${req.method}] ${req.originalUrl} -> ${res.statusCode} -> ${duration}ms`;

            if (duration > slowThreshold) {

                console.log(
                    chalk.red(`⚠️ SLOW API ${log}`)
                );

            } else {

                console.log(
                    chalk.green(log)
                );

            }

        });

        next();
    };
}

module.exports = monitor;