
require('dotenv').config();
const axios = require('axios');

const express = require('express');
const Discord = require('discord.js');
const https = require('https');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);
// const unitTestChannel = bot.channels.get('unit-test-2')
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


bot.on('message', async msg => {

  if (msg.content.startsWith('meme!') || msg.content.startsWith('Meme!')) {
    var url;
    var str;
    var content = msg.content.substring(5, msg.content.length);
    // axios.get(`https://pixabay.com/api/?key=19929994-600d536324e19af54c13f167c&q=${content}`)
    //   .then((res) => {
    //     var url;
    //     url = res.data.hits[Math.floor(Math.random() * res.data.hits.length)]["webformatURL"];
    //     msg.reply('Here\'s your image', { files: [url] })
    //   }).catch(error => {
    //     console.log(error);
    //     msg.reply('There was an error');
    //   });

    axios.get(`https://www.reddit.com/r/memes.json`)
      .then((res)=>{
        var url;
        // console.log(res);
        url = res.data.data.children[Math.floor(Math.random() * res.data.data.children.length)].data["url_overridden_by_dest"];
        console.log(url);
        msg.reply('Here\'s your meme', { files: [url] })
      }).catch(error => {
            console.log(error);
            msg.reply('No meme found');
          });
    
  }


  // axios.get('https://www.reddit.com/r/memes')
  //   .then((res)=>{
  //     console.log(res);
  //   })

  // if (msg.author.username === 'Jayantrawat23' && msg.author.discriminator === '4273') {
  //   msg.reply('Chup remndi')
  // }

  // if (msg.author.username === 'Jitesh_2000' && msg.author.discriminator === '2943') {
  //   msg.delete({ timeout: 5000 })
  //     .catch(console.error);
  // }

  // var gaaliyan = ['Chumtiya','Humrami','Tatti','Nalle','Gadhe','Goo']
  // if(!(msg.author.username === 'Tircha' && msg.author.discriminator === '1923') && !(msg.author.username === 'Chotes-bot' && msg.author.discriminator === '0339')){
  //     msg.reply(gaaliyan[getRandomInt(5)] + " ho kya ?")

  // }



  // if (msg.author.username === 'Jitesh_2000' && msg.author.discriminator === '2943') {
  //     msg.reply("Kya aap hawas k pujari hain ?")
  // }

});

