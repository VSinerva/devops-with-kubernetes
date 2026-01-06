const logString = string => {
	const time = new Date();
	console.log(`${time.toISOString()}: ${string}`);
	setTimeout(logString, 5000, string);
}

logString(crypto.randomUUID());
