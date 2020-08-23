import React from 'react';
import { InputBlock } from './styles';

export default function Input({ name, label, className, children, ...rest }) {
	return (
		<InputBlock className={className}>
		  <label htmlFor={name}>{label}</label>
			<input id={name} {...rest} />
			{children}
		</InputBlock>
	);
}
