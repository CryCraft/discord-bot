import pixal from 'pixal';
import fetch from 'node-fetch';

export default class status extends pixal.Command {
  constructor() {
    super('status', 'Get crycraft server status');
  }

  run(msg) {
    fetch('https://mcapi.us/server/status?ip=play.crycraft.eu')
      .then(data => data.json())
      .then(json => {
        const color = json.online ? '#78b159' : '#f4900c';
        const status = { title: json.online ? ':green_circle: **ONLINE**' : ':fire: **OFFLINE**', description: json.online ? 'Just come online!' : 'Och de server staat in de hens.', inline: false };
        const players = { title: ':desktop: **PLAYERS**', description: `**${json.players.now}** / ${json.players.max}`, inline: false };
        const embed = new pixal.Embed('**play.crycraft.eu**', '', color, msg.author, [status, players]);
        msg.channel.send(embed);
      })
  }
}
