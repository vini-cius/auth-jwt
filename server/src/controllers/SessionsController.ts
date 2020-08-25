import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '@models/User';

const userModel = new UserModel();

export default class SessionController {
	async auth(req: Request, res: Response) {
		const { cpf_cnpj, password } = req.body;

		const user = await userModel.findOne(cpf_cnpj);

		if (!user) {
			return res.status(404).send('User not found');
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) {
			return res.status(404).send('User or password Incorrect');
		}

		return res.json({
			token: jwt.sign(
				{ userId: user.id_user },
				process.env.APP_SECRET,
				{ expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) }
			)
		});
	}
}
