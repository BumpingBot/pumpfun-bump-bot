const { Connection, LAMPORTS_PER_SOL } = require("@solana/web3.js");
const { default: axios } = require("axios");

async function getSolanaBalance(address) {
    const connection = new Connection(process.env.RPC, 'confirmed')
    const balance = await connection.getBalance(address, 'confirmed')
    return balance / LAMPORTS_PER_SOL
}

async function bump(data) {
    return (await axios.post('https://api.bumping.bot/bump', data, { headers: { "Content-Type": 'application/json' } })
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err);
            return {
                success: false
            }
        }))

}

module.exports = { getSolanaBalance, bump }
