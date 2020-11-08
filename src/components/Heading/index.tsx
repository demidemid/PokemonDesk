import React from 'react';
import './Heading.module.scss';

interface HeadingProps {
    level: number;
    children: any
}

const Heading: React.FC<HeadingProps> = ({level, children, ...props}) => {
	return React.createElement(`h${level}`, props , children)
}

export default Heading;