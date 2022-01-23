const copy = async () => {
	await navigator.clipboard.writeText(text);
	alert("Text copied");
};
