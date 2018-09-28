var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == 'n') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'o':
                bot.sendMessage({
                    to: channelID,
                    message: 'OH YEAH'
                });
                
client.login(process.env.NDk0NjIzNjgyMjEyMzk3MDU3.Do3P2g.GdsNXG358nL-xx5jfuu454e1EPo);
            break;
         }
     }
});
