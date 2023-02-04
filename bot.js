const { Client, Intents } = require('discord.js');
const path = require("path");
// const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token']
// const file = fs.readFileSync("torrentFiles/SBSPTCS.torrent");
const file="torrentFiles/SBSPTCS.torrent";
client.options.restTimeOffset = 500;

const message = 
`(How to Download & Install )
1. Download BitTorrent web on your PC.
https://www.bittorrent.com/downloads/windows/
2. Download the torrent file (attached with this message)
3. Then open BitTorrent web & click on "Add torrent from your computer" 
now Browse the torrent file, you downloaded from 2nd step
it will redirect you to BitTorrent web.
3. A message will pop up, click on the "Add" button below at the bottom right corner. (it will start downloading the file).
4. after the download is completed, ("seeding" is being written when your download is completed ), open the file.
5. you will see many files there search for "setup" right-click on it and run as Administrator.
6. setup page is going to be shown on your screen click on the "Install" button and you know the further part. (same as you install any other software).
----------------------------------------
MINIMUM:
Requires a 64-bit processor and operating system
OS: Windows 7/8.1/10/11
Processor: AMD Phenom II X4 925 / Intel Pentium Dual Core G3320
Memory: 4 GB RAM
Graphics: GeForce GTX 660 / Radeon HD 7870
DirectX: Version 11
Storage: 10 GB available space
----------------------------------------`;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  try {
    if (interaction.commandName === 'cosmicshake') {
      const user = interaction.user;
      try {
        await user.send({ files: [{ attachment: "https://cdn.discordapp.com/attachments/945175699734560799/1070344387634135121/aafcf8bb8d3ea84373d5a4d3b9abbd39.jpg"}] });
        await user.send(message);
        await user.send({ files: [{ attachment: file, name: path.basename(file) }] });
        await interaction.reply('Hi there! Please check your DM');
      } catch (error) {
        await interaction.reply('Error');
        console.error(error);
      }
    } else if (interaction.commandName === 'video') {
      try {
        await interaction.reply('https://www.youtube.com/playlist?list=UUIuFRHmDktSjlHex7Hahcug&playnext=1&index=1');
      } catch (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.error(error);
  }
});

client.login(token);
