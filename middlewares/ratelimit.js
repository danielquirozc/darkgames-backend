import { rateLimit } from 'express-rate-limit'

export const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, 
	limit: 50, 
	legacyHeaders: true,
	validate: { xForwardedForHeader: false },
	standardHeaders: true 
})