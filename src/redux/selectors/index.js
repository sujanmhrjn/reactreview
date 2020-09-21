export const getCurrentDate = () => {
	var months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];
	let d = new Date();
	return d.getDate() + " " + months[d.getMonth()];
};
