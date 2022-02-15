let query

window.addEventListener('load', (event) => {
    query = window.location.href
    console.log(query.replace("http://127.0.0.1:5500/spongebob.html?query=", ''))
    query = query.replace("http://127.0.0.1:5500/spongebob.html?query=", "")
    window.location.href = `https://85ca9b45fbb4.up.railway.app/image/spongebobburn/?text=${query}`;
});

