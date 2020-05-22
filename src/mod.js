import pixal from 'pixal';
import status from './commands/status.js'

const config = { prefix: '.', owner: '294217592007163905' };
const client = new pixal.Client(process.env.TOKEN, config);

client.setPresence({ status: 'online', type: 'WATCHING', name: '!status' });

client.addCommand(new pixal.help);
client.addCommand(new status);