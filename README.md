
# Pumpfun Bump Bot - Optimized Bump Bot for pump.fun

Free to use bumping/bump bot for pump.fun!

This bot perform buy and sell in same transaction on pump.fun.
It can be used to be displayed on the main page of pump.fun site.
![GitHub Repo stars](https://img.shields.io/github/stars/BumpingBot/pumpfun-bump-bot)
![X (formerly Twitter) URL](https://img.shields.io/twitter/url?url=https%3A%2F%2Fx.com%2BumpingBot&label=Twitter%2FX)

This bot supports:
 - Buy & Sell in same transaction
 - Customizable bump interval
 - Customizable bump amount

> [!CAUTION] 
> Do not use your main wallet with this bot, since you have to expose your private key to your command line and if your computer gets/is compromissed, attackers can read your private key from the command line history or the environment variables.

> [!CAUTION] 
> If you somehow lose your money while using this bot, it is not our fault. We use this bot ourselves in exact this version and we do our best to provide a functioning bot, but in any case of malfunctioning or misonfiguration it is possible to lose your money. So be careful and check always if you got everything correct, before you start the bot!

## Download the Bot

If you have git installed on your computer you can fetch the content of this repository with the command :

    git clone https://github.com/BumpingBot/pumpfun-bump-bot.git

Else, you can download the repository in a zip here
[https://github.com/BumpingBot/pumpfun-bump-bot/archive/refs/heads/main.zip](https://github.com/BumpingBot/pumpfun-bump-bot/archive/refs/heads/main.zip)

## Environment Setup

This bot running under node js, so you need to install node js

 - For Windows :  [https://nodejs.org/dist/v22.2.0/node-v22.2.0-x64.msi](https://nodejs.org/dist/v22.2.0/node-v22.2.0-x64.msi)
 - For MacOS :  [https://nodejs.org/dist/v22.2.0/node-v22.2.0.pkg](https://nodejs.org/dist/v22.2.0/node-v22.2.0.pkg)
 - For Linux, execute in a terminal :
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && nvm install 22
```
To check if nodejs is installed :
-    On Windows, open a cmd.exe, and run the command :
```node -v ```
-    On MacOs & linux, open a terminal, and run the same command :
```node -v```

## Dependency Installation
In a cmd.exe or a terminal, go to the folder of the pump-fun-bump-bot with the command :
```
cd /path/to/the/folder
```
Then, in your cmd.exe / terminal, start the command :
```
npm install
```
It should install all the dependencies in a new folder named "node_modules".

## Start the Bot

You have five things to setup :
-   The RPC endpoint to connect you to the Solana blockchain (Quicknode, Helius Alchemy provide good free RPC endpoints)
-  The private key of the wallet who will buy and sell
-  The contract address of the token you want to bump
- The bump amount
- The bump interval

The variables are on the `.env` file :
```
RPC=<your rpc quicknode/alchemy/ankr/helius here>
PRIVATE_KEY=<your private key here>
INTERVAL=<bump interval in second>
TOKEN_ADDRESS=<your token address here>
BUY_AMOUNT=<your bump amount here>
```

To run the bump bot, in a cmd.exe or a terminal, start the command:
```
npm run bump
```
And it's all. The bot will perform buy & sell on same transaction

Happy bumping!
