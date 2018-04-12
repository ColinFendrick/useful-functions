const camelToSentence = str => {
	const sentence = str.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1');
	return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`;
};