document.body.style.backgroundColor = "black";
document.body.style.color = "green";
document.body.style.fontSize = '36px'
document.body.style.fontFamily = 'monospace'

async function displayMess(mess){
    text = document.createElement("p",)
    text.innerHTML = ">>> " + mess 
    document.body.append(text)

    const id = setInterval(() => {
        if (text.innerText.endsWith("...")){
            text.innerText = '>>> ' + mess}
        else {text.innerText += '.'}
    }, 300);

    return new Promise((resolve) => {
        const r = Math.random() * 3 + 1;
        setTimeout(() => {
            text.innerText = mess
            resolve(id)
        }, r * 1000);
    }, )
}

async function main() {
    const messages = ["You are being hacked", "Reading password protected files", "Sending files to server", "Clearing History", "Files Locked"]
    for (const mess of messages) {
        clearInterval(await displayMess(mess))
    }
}
main();
