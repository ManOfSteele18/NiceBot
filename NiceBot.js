const tmi = require('tmi.js');

// Define config options
const optionss = {
	identity: {
		username: <BOT_USERNAME>, // These are environment variables defined in the .env file
		password: <OAUTH_TOKEN>
	},
	channels: [
		<CHANNEL_NAME>
	]
};
      
// Create a client using options
const client = new tmi.client(options);

// Register event handlers
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

function onMessageHandler (target, context, msg, self) {
	if (self) { return; } // Ignore messages from the bot

	// Remove whitespace from chat message
	const commandName = msg.trim();

	// If the command is known, let's execute it
	if (commandName === '!nice') {
		switch(rollDice()) {
			case 1:
				client.say(target, `The votes are in, 1 raccoon and every dog on the planet loves you! RaccAttack BegWan CorgiDerp FrankerZ OhMyDog`);
				break;
			case 2:
				client.say(target, `You're great at being the person Bob Ross and Mr. Rogers knew you could be. CoolStoryBob`);
				break;
			case 3:
				client.say(target, `Cute smile :)`);
				break;
			case 4:
				client.say(target, `You have a secret admirer <3... i-it's not me! Baka!`);
				break;
			case 5:
				client.say(target, `You can do the thing, I believe in you! CoolCat`);
				break;
			case 6:
				client.say(target, `I bet you did/do all your math homework in ink! PogChamp`);
				break;
		}
		
		console.log(`* Executed ${commandName} command`);
	} else {
		console.log(`* Unknown command ${commandName}`);
	}
}
      
function rollDice () {
	const sides = 6;
	return Math.floor(Math.random() * sides) + 1;
}
      
function onConnectedHandler (addr, port) {
	console.log(`* Connected to ${addr}:${port}`);
}