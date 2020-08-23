import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';

import {
	Head, Container, ButtonExit, MenuSection
} from './styles';

export default function Header() {
	const [toggleMenu, setToggleMenu] = useState(false);

	const navItems = [
		{ name: 'Contact', link: '/contact' },
		{ name: 'Service', link: '/service' },
		{ name: 'Chat', link: '/chat' },
		{ name: 'Profile', link: '/profile' },
	]

	function handleToggleMenu() {
		document.body.style.overflow = toggleMenu ? "hidden" : "initial"

		document.querySelector(".menu-toggle")
			.setAttribute("aria-pressed", toggleMenu ? "false" : "true");

		setToggleMenu(!toggleMenu);
	}

	return (
		<Head>
			<Container>
				<Link to="/">
					<GiCoffeeCup
						size={40}
						color="#FFFFFF"
						role="img"
						className="logo"
					/>
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
					<FaPowerOff size={25} color="#fff" />
				</ButtonExit>
			</Container>
		</Head>
	);
}
