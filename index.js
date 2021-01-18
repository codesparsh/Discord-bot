
require('dotenv').config();
const axios = require('axios');

const express = require('express');
const Discord = require('discord.js');
const https = require('https');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async msg => {

    if (msg.content.startsWith('Bot!')) {
      var url;
      var str;
      var content = msg.content.substring(4,msg.content.length);
      content = content.split(' ').join('+');
      console.log(content);
      axios.get(`https://pixabay.com/api/?key=19929994-600d536324e19af54c13f167c&q=${content}`)
      .then((res)=>{
        var url;
        url =res.data.hits[Math.floor(Math.random() * res.data.hits.length)]["webformatURL"];
        msg.reply('Here\'s your image',{files:[url]})
      }).catch(error => {
        console.log(error);
        msg.reply('There was an error');
      });
    }
    
});

