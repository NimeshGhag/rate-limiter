# rate-limiter

A small Express.js example demonstrating request rate limiting using `express-rate-limit`.

## Description

This project shows how to apply a rate limiter middleware in an Express app. The limiter is configured in `src/middlewares/limiter.middleware.js` and is applied globally as well as on the `/api/auth` routes.

## Features

- Global rate limiting for all routes
- Route-level rate limiting for specific endpoints (example: `/api/auth/register`)

## Prerequisites

- Node.js 14+ (Node 18+ recommended)
- npm

## Install

Install project dependencies:

```
npm install
```

## Run

Start the server with:

```
node server.js
```

The app listens via `server.js` (which imports `src/app.js`).

## How it works

- The limiter is defined in `src/middlewares/limiter.middleware.js` using `express-rate-limit`.
- In `src/app.js` the middleware is applied with `app.use(limiter)` (global) and also mounted on `/api/auth`.
- Example route: `GET /api/auth/register` in `src/routes/auth.route.js` uses the limiter.

Key limiter options used:

- `windowMs`: 1 _ 6 _ 1000 (6 seconds)
- `max`: 5 requests per window
- `message`: Custom response when limit is exceeded

Adjust these values in `src/middlewares/limiter.middleware.js` to fit your needs.

## Project structure

- `server.js` — server bootstrap
- `src/app.js` — Express app setup
- `src/middlewares/limiter.middleware.js` — rate limiter configuration
- `src/routes/auth.route.js` — example auth route

## Dependencies

See `package.json` for dependencies used (`express`, `express-rate-limit`, `dotenv`).

## License

ISC
