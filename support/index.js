function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


window.addEventListener('load', async (event) => {
    await sleep(1000)
    window.location.href = "https://discord.com/invite/4WGagA2dBk"
   });