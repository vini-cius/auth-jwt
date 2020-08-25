import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) return res.status(401).send('Unauthorized');

	const token = authHeader.replace('Bearer', '').trim();

	try {
		jwt.verify(token, process.env.APP_SECRET, (error, decoded) => {
			if (error) return res.status(500).json({ auth: false, message: 'Failed to authenticate'});

			req.userId = (<any>decoded).id;
		});

		return next();

	} catch (error) {
		return res.sendStatus(401).send('Invalid Token');
	}
}

export default authMiddleware;
