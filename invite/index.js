function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


window.addEventListener('load', async (event) => {
    await sleep(1000)
    window.location.href = "https://discord.com/oauth2/authorize?client_id=896250399584051240&permissions=328602217846&scope=bot%20applications.commands"
   });