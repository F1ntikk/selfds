const Discord = require('discord.js');
 
const bot = new Discord.Client();
const at = '';
 
bot.on('ready', () => {
    console.log("I am ready");
});
 
bot.on('message', message => {
	if(message.channel.id !== '701043252845084735')return; {
     	if (message.attachments.size > 0) {
     	 console.log(message.attachments);
     	 if(message.content == ""){
     	 	bot.channels.get('701204169138372671').send(message.attachments.first().url);
     	 	
     	 
           }
           else
              {bot.channels.get('701204169138372671').send(message.attachments.first().url);
                bot.channels.get('701204169138372671').send(message.content);}



          } else {
           	console.log(message.content);
           		bot.channels.get('701204169138372671').send(message.content)} ;}
});
 
bot.login("NzAxMDQzMDA2Mjg2OTg3MzA0.XprvWw.WxaDq0aVwV3hjhOyZK8KHuDmAlw");