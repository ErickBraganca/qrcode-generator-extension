/*---- Background Script ----*/

//Listen event to initialize the extension on installation.
chrome.runtime.onInstalled.addListener(() => {
  console.log("onBackground....Installed")
})

//Listen menssage event from popup to execute HTTP request.
chrome.runtime.onMessage.addListener((request, requester, response) => {
  if ((request.from === 'popup') && (request.subject === 'generate')) {
    console.log("onBackground....Receiving")

    //Passing response as a callback of requestQRCode function
    const inputs = request.payload
    requestQRCode(inputs, response)
  }
  return true
})

//Request function to google chart API.
async function requestQRCode(inputs, callback) {
  const { type, size, content } = inputs

  //Check if the chosen size is larger than the image container in UI
  const isBigger = Number(size) > 150 ? true : false

  //Google chart API parameters
  let data = content
  const encoding = "UTF-8"
  const dimension = `${size}x${size}`

  if (type === "coordinates") {
    data = `https://www.google.com/maps/place/${content}`
  }

  const link = `https://chart.googleapis.com/chart?chs=${dimension}&cht=qr&chl=${data}&choe=${encoding}`
  const response = await fetch(link, { method: "GET" })

  const qrcode = {
    url: response.url,
    adjust: isBigger
  }

  callback(qrcode)
}
