import rateLimit from "express-rate-limit";

const createLimiter = (windowMs, max, message) =>
  rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        success: false,
        message,
      });
    },
  });

/* ISSUE ROUTES */

export const nearbyIssuesLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many nearby issue requests. Please try again later."
);

export const createIssueLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many issue creation requests. Please try again later."
);

export const upvoteLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many upvote requests. Please try again later."
);

export const issueDetailsLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many issue detail requests. Please try again later."
);

export const issueStatusLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many status update requests. Please try again later."
);

/* SEARCH ROUTES */

export const searchLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many search requests. Please try again later."
);

export const searchSuggestionsLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many search suggestion requests. Please try again later."
);

export const popularSearchesLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many popular search requests. Please try again later."
);

/* WORKER ROUTES */

export const workerProfileLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many worker profile requests. Please try again later."
);

export const workerListLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many worker listing requests. Please try again later."
);

export const workerDetailsLimiter = createLimiter(
  15 * 60 * 1000,
  30,
  "Too many worker detail requests. Please try again later."
);