import db from '../database/connection';

export default class UserModel {
	async create(user) {
		const {
			cpf_cnpj,
			name,
			email,
			password
		} = user;

		try {
			const insertedUser = await db('users').insert({
				cpf_cnpj,
				name,
				email,
				password
			}).returning('user_id');

			return insertedUser;

		} catch (error) {
			console.log(error);
		}
	}
}
