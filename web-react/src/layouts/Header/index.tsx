import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Head, Container, ButtonExit, MenuSection
} from './styles';

import { ReactComponent as CoffeeIcon } from '../../assets/icons/coffee-cup.svg';
import { ReactComponent as PowerIcon } from '../../assets/icons/power.svg';

const Header: React.FC = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);

	const navItems = [
		{ name: 'Contact', link: '/contact' },
		{ name: 'Service', link: '/service' },
		{ name: 'Chat', link: '/chat' },
		{ name: 'Profile', link: '/profile' },
	];

	function handleToggleMenu() {
		document.body.style.overflow = toggleMenu ? "initial" : "hidden";

		document.querySelector(".menu-toggle")!
			.setAttribute("aria-pressed", toggleMenu ? "false" : "true");

		setToggleMenu(!toggleMenu);
	}

	return (
		<Head>
			<Container>
				<Link to="/" className="logo">
					<CoffeeIcon />
				</Link>

				<MenuSection toggle={toggleMenu}>
					<div
						className="menu-toggle"
						onClick={handleToggleMenu}
						aria-label="Abrir/Fechar Menu"
						role="button"
					>
						<span></span>
						<span></span>
						<span></span>
					</div>

					<nav>
						<ul>
							{navItems.map(navItem => (
								<li key={navItem.name} onClick={handleToggleMenu}>
									<Link to={navItem.link}>{navItem.name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</MenuSection>

				<ButtonExit aria-label="Sair">
					<PowerIcon />
				</ButtonExit>
			</Container>
		</Head>
	);
}

export default Header;
