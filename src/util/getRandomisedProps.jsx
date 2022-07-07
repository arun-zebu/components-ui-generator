const getRandomisedProps = props => {
	return props[Math.floor(Math.random() * props.length)];
};

export default getRandomisedProps;
