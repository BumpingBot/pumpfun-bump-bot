const { Keypair, PublicKey } = require('@solana/web3.js');
const dotenv = require('dotenv');
const { getSolanaBalance, bump } = require('./util');
const chalk = require('chalk');
const bs58 = require('bs58').default
dotenv.config()

async function main() {

    const BUY_AMOUNT = parseFloat(process.env.BUY_AMOUNT)
    const PRIVATE_KEY = process.env.PRIVATE_KEY
    const INTERVAL_MS = parseInt(process.env.INTERVAL) * 1000
    const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS

    const keypair = Keypair.fromSecretKey(
        new Uint8Array(bs58.decode(process.env.PRIVATE_KEY))
    );

    const balance = await getSolanaBalance(keypair.publicKey)
    if (balance < BUY_AMOUNT + 0.01) {
        console.log(chalk.red('Insufficient SOL amount, deposit SOL to your wallet'))
        return
    }

    while (true) {
        const bumping = await bump({
            signer: PRIVATE_KEY,
            mint: TOKEN_ADDRESS,
            buy_amount: BUY_AMOUNT
        })

        if (bumping.success) {
            console.log(chalk.green(`\nbumping success\nhttps://solscan.io/tx/${bumping.txHash}\n`))
        }
        else {
            console.log(chalk.red('bumping failed'))
        }

        await new Promise(r => setTimeout(r, INTERVAL_MS));
    }

}

main()
