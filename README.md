# mel-bot [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [How to Contribute](#how-to-contribute)
* [Contact](#contact)

## Description
A discord bot that kicks me from the call and calls out my friends for being rude. It was my first time making a discord bot, and my first time using Google's Perspective API.

## Installation
Navigate to ```./mel-bot```

Run the following command from the terminal: 

```npm install```

## Usage
To run the bot from your local machine, use the following steps:

1. Create a new discord bot using the discord developer portal. You can follow the instructions given [here](https://buddy.works/tutorials/how-to-build-a-discord-bot-in-node-js-for-beginners). Follow steps 1 to 2.

2. Create a .env file using the template from .env.EXAMPLE.    
    - Client token: Navigate to the [Discord Developer Portal](https://discord.com/developers/applications) and click "bot" on the right hand menu. For the bot you have just created, copy and paste the token into the .env file where specified.
    - Guild ID: With your Discord in developer mode, right click on the server you want the bot to be in, and click "copy ID". Paste this ID as the guild ID in the .env file.
    - Perspective API Key: Follow the intructions [here](https://developers.perspectiveapi.com/s/docs) to set up Perspective API and request an API key, which will be pasted into the .env file.
    - User ID: With your Discord in developer mode, right click on your own icon in a server, and click "copy ID". Paste this ID as the user ID in the .env file.

3. Navigate to ```./mel-bot``` and run the following command: 

```node index```

4. Your bot is now live and ready to go!

## License 
This project is covered under the MIT License: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## How to Contribute
Fork the repository or contact me using the details shown below

## Contact
Please feel free to contact me through GitHub or email, using the following details: 

Email: mel.jack.developer@gmail.com

GitHub: [meljack1](https://github.com/meljack1/)
