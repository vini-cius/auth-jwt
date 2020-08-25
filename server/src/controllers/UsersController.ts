import { Request, Response } from 'express';
import UserModel from '@models/User';

const userModel = new UserModel();

export default class UsersController {
	async create(req: Request, res: Response){
		const newUser = await userModel.create(req.body);

		return res.json(newUser);
	}

	async index(req: Request, res: Response){
		const users = await userModel.index();

		return res.json(users);
	}
}
