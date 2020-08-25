import db from '../database/connection';
import encrypt from '../utils/encrypt';

interface UserProps {
	cpf_cnpj: string;
	name: string;
	email: string;
	password: string;
}

export default class UserModel {
	async create(user: UserProps) {
		const { cpf_cnpj, name, email } = user;
		let { password } = user;

		const passwordHash = encrypt(password);

		password = undefined;

		try {
			const insertedUser = await db('users').insert({
				cpf_cnpj,
				name,
				email,
				password: passwordHash
			}).returning('user_id');

			return insertedUser;

		} catch (error) {
			console.log(error);
		}
	}

	async findOne(cpfCnpj: string) {
		const user = await db('users')
			.where('cpf_cnpj', cpfCnpj)
			.select('cpf_cnpj', 'password')
			.first();

		return user;
	}

	async index() {
		try {
			const users = await db.select('*').from('users');

			return users;

		} catch (error) {
			console.log(error);
		}
	}
}
