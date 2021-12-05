require('dotenv').config(); //initialize dotenv
const Perspective = require('perspective-api-client');
const perspective = new Perspective({apiKey: process.env.PERSPECTIVE_API_KEY});
const { Client, Intents } = require('discord.js'); //import discord.js

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const formatDistance = require('date-fns/formatDistance');
let timeMelKickedLast = new Date();

function randomMessage(messages) {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.author == client.user) {
        return;
    }
    switch (msg.content.toLowerCase().trim()) {
        case ("/kick mel"): {
        if (!msg.member.permissions.has('MOVE_MEMBERS'))
            return msg.reply(
                "you are not STRONG enough to kick mel",
            );
            const guild = client.guilds.cache.get(process.env.GUILD_ID);
            const mel = guild.members.fetch(process.env.USER_ID);
            mel.then(user => user.voice.disconnect());
            const timeSinceMelKicked = formatDistance(timeMelKickedLast, new Date(), { addSuffix: true });
            msg.reply(`Mel was last kicked ${timeSinceMelKicked} and the timer has been reset.`);
            timeMelKickedLast = new Date();
            return;
        } 
        case ("mel moment"): {
            msg.reply("mel moment.");
            return;
        }
    }
    if (msg.content.toLowerCase().includes("mel")) {
        (async () => {
            const text = msg.content;
            try {
                const result = await perspective.analyze(text, {attributes: ['TOXICITY', 'THREAT', 'FLIRTATION']});
                const toxicity = result.attributeScores.TOXICITY.summaryScore.value;
                const threat = result.attributeScores.THREAT.summaryScore.value;
                const flirtation = result.attributeScores.FLIRTATION.summaryScore.value;

                if (threat > 0.7) {
                    const messages = [
                        "please don't hurt me!",
                        "threats will get you nowhere",
                        "bullying is against the code of conduct!"
                    ]
                    return msg.reply(randomMessage(messages));
                } else if (flirtation > 0.7) {
                    return msg.reply(";)")
                } else if (toxicity > 0.7) {
                    const messages = [
                        "that's a bit rude, isn't it?",
                        "hey... that was rude",
                        "keep your toxicity to yourself next time"
                    ]
                    return msg.reply(randomMessage(messages));
                }
                else {
                    const messages = [
                        "i'm mel!",
                        "i love mel",
                        "what do you need?"
                    ]
                    return msg.reply(randomMessage(messages));
                }
            } catch (err) {
                console.error(err);
                return msg.reply("i'm mel!");
            }
        })();
        return;
    }
});


//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token