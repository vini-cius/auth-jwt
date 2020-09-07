import React from 'react';

import { HomePage } from './styles';

import serviceImg from '../../assets/services.svg';

const Home: React.FC = () => {
	return (
		<HomePage>
			<h1 className="title">Bem-vindo, <br /> Vinicius !</h1>

			<img
				src={serviceImg}
				className="service-img"
				alt="Atendimento"
			/>

			<article>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam mollitia
					cupiditate quisquam aliquam a quos iste ex porro voluptates! Ullam repudiandae
					consectetur inventore quae iusto suscipit expedita.
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam mollitia
					cupiditate quisquam aliquam a quos iste ex porro voluptates! Ullam repudiandae
					consectetur inventore quae iusto suscipit expedita ex beatae!.
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam mollitia
					cupiditate quisquam aliquam a quos iste ex porro voluptates! Ullam repudiandae
					consectetur inventore quae iusto suscipit expedita ex beatae!.
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam mollitia
					cupiditate quisquam aliquam a quos iste ex porro voluptates! Ullam repudiandae
					consectetur inventore quae iusto suscipit expedita ex beatae!.
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam mollitia
					cupiditate quisquam aliquam a quos iste ex porro voluptates! Ullam repudiandae
					consectetur inventore quae iusto suscipit expedita ex beatae!.
				</p>
			</article>
		</HomePage>
	);
}

export default Home;
