# discord-bot-template

This github repo is intended for users to quickly and easily setup a discord bot!

Documentation for this repo is a work-in-progress, please pardon any typos. If you catch any mistakes, please file an issue with the specified location that requires correction/improvement.

Please see below for a step-by-step walkthrough of how to setup your discord bot with this framework!

## **Typescript**
If you have experience with typescript and would like to use that, please check out the typescript-converted version of this template, [discord-bot](https://github.com/terzhang/discord-bot) by [terzhang](https://github.com/terzhang)! 

*Would ONLY recommend for people ALREADY familiar with typescript.* 

## **General Information is included after the instructions for setting up the bot!**

# Setting up to run the bot!

## 1. Clone this Repo
Make sure git is installed on your computer. To check if you have git, in the console run
```
git
```
If an error shows up, you will need to install git on your computer. See here for instructions: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Otherwise, open up console/command prompt in the directory you wish to clone this project in.
run the command
```
git clone https://github.com/3chospirits/discord-bot-template.git
```
Now you have all the code in this repo cloned to your computer!!


## 2. Get Node.js and npm
 This bot runs with node.js. You need to have a version of nodejs > 12.x.x to run this bot! You need to make sure you have node.js installed on your computer/server! To check, run

```
node -v
```
If the response is v12.x.x you are all good! If not or if you get an error saying node is not found/not a valid command, then see here for installation instructions:
https://nodejs.org/en/

Once you have nodejs installed, you should have a working version of `npm` also installed with it. Check by running 
```
npm -v
```


## 3. Installing dependencies
This package relies on a couple of npm packages that requires installation before the bot can run. Make sure you have your console path in the same directory as the `package.json` file then run the command
```
npm i
```

## 4. Adding your bot's token
Go to https://discordapp.com/developers/applications/me and login with your discord account. 

Click on `New Application`. Name your application anything you want, (but try to make it unique, if too many bots have the same name, discord won't let you use this username)! 

Next, click on the `Bot` text on the left hand side of the developer panel.

Then click on `Add Bot` and confirm to create your discord bot

Under `TOKEN`, click on the `Copy` button.

Go to `config.js` then paste your bot's token in the `token` string.

**KEEP YOUR BOT'S TOKEN SAFE!! It is the equivalent as the login information for your bot! Anyone with access to the token has full permission to run anything off of your bot!!!**

*If you make a github repo, **make sure it is set to private if it includes your token**

## 5. Adding the bot to a server

To add your bot to a discord server, head back to the discord developer panel. 

Click on `OAuth2` on the left-hand side. 

In the `Scopes` grid of checkboxes, check `bot` and select any permissions you wish to give to the bot. 

Then click on the `Copy` button next to long url in the scopes box and goto the given link to add the bot to your server

## 6. Add yourself to bot admin permissions

Copy your discord user ID then paste it in the bot_admins array inside a string. 

(if you need help finding your user ID, use this tutorial: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

This will give you access to all the commands. 

In commands marked with adminOnly (ping and reload), only users with their ID added to the admins array will be able to run those commands.

## 7. Running the bot

In a console in the directory including the project, run 
```
node index.js
```
If 
```
Commands: Build Success
Events: Build Success
Loading 2 events...
| 1: messageCreate.js loaded!
| 2: ready.js loaded!

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

      Logged in as BotUsername!

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
appears in your console without any additional errors, then **CONGRATULATIONS**! Your bot is not online.

To test if the bot is fully working, go to the server that you added the bot to and type
```
.ping
```
If the bot responds with a message, you are all set!!

# General Information
This bot utilizes a command, event, and functions handler. This allows for the bot's code to be updated live without the need to restart the bot!

Documentation has been added to most of the files explaining  the basic features of the bot. 

## Dev Commands
`ping`
* checks if the bot is online and if the commands are loading in properly
* gives the latency of the bot and discord's api
* shows uptime of bot since last restart

`reload`
* reloads all commands, events, and functions in the three respective folders
* **ONLY RELOADS CODE WITHIN THE commands, events, and functions folders**
* helpful for development to change code of the bot and test without need to restart the entire bot
* Testing:
    * start the bot
    * run `.ping` in discord chat
    * modify the `ping.js` file (like add a symbol before the P in `msg.edit('Pong...`
    * save the ping.js file
    * run `.reload` in discord chat
    * run `.ping` in discord chat
    * observe the changes updated change :)

## Adding your own code

If you would like to add your own code, I'd suggest you read through each file and the documentation to get somewhat of an understanding of how this framework is structured. (you can ignore the `node_modules` folder and the `package.json` and `package-lock.json` folders)

To add your own command, event or function please see the templates in the templates folder and the corresponding documentation for each.

## Hosting
If you are looking for a free host, I would recommend https://glitch.com/

It is extrememly simple to use. Node.js and npm are already pre-installed on their for you, but **before** you run `npm i`, make sure to run `pnpm-enable`

Also, the projects on that site go to sleep after 30 minutes of inactivity. 
To bypass the sleeping, please follow the instructions here:
https://pastebin.com/6R1qUGxN

-----

Another great free host is google's compute engine. 
This WILL require more work than setting up the bot on glitch.com.

It is not recommended for beginners and anyone that do not have a basic understanding of servers and linux terminal commands. 
The `1 F1-micro instance` for google is currently in their `Always-Free` plan at the time of this documentation writing. You will need to provide google with a credit card to activate your account to get this vps. Google will not charge you anything unless you upgrade to a paid plan and use up your other free trial credits. 

Congratulations on reading all the way to the end of the documentation!! I hope you find this package useful to you. If you wish to stay updated on any other coding projects I may open-source, please follow my github!!

Good luck, and have fun coding your discord bot!!
