import bcrypt from 'bcryptjs';

export default function encrypt(string:string) {
	const hash = bcrypt.hashSync(string, 8);

	string = undefined;

	return hash;
}
