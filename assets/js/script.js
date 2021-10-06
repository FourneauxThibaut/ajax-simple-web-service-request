const LOADER = () => {
    const xhr = new XMLHttpRequest()
    xhr.onload = reqListener
    xhr.open("get", "https://thatsthespir.it/api", true)
    xhr.send()
}

let reqListener = response => {
    let event = JSON.parse(response.currentTarget.response)

    document.getElementById("author").innerText = event.author
    document.getElementById("quote").innerHTML = event.quote
}
LOADER();