import authMiddleware from "src/middlewares/auth";

import authMiddleware from '@middlewares/auth';

declare global {
	namespace Express {
		interface Request {
			userId: authMiddleware
		}
	}
}
