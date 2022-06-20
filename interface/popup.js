/*---- Popup Script ----*/

const selectType = document.getElementById('type')
const selectSize = document.getElementById('size')
const inputData = document.getElementById('data')

const btnAdd = document.getElementById('add')
const btnDelet = document.getElementById('delet')
const btnClean = document.getElementById('clean')

let qrcodeContent = document.getElementById('app')

btnAdd.addEventListener('click', function () {
  console.log("onPopup....Requesting")

  const data = {
    type: selectType.options[selectType.selectedIndex].value,
    size: selectSize.options[selectSize.selectedIndex].value,
    content: inputData.value
  }

  //Sending menssage to background script
  chrome.runtime.sendMessage({
    from: 'popup',
    subject: 'generate',
    payload: data,

  }, function (response) {
    //Receiving menssage from background script
    renderImage(response)
  })
})

function renderImage(response) {
  console.log("onPopup....Receiving", response)

  qrcodeContent.innerHTML = null

  const div = document.createElement('div')
  div.classList.add('qrcode-container')

  const img = document.createElement('img')
  img.src = response.url
  img.setAttribute('class', 'qrcode-image')

  if (response.adjust) {
    img.classList.add('retract')
  } else {
    img.classList.add('normal')
  }

  div.append(img)
  qrcodeContent.append(div)
}

btnClean.addEventListener('click', function () {
  qrcodeContent.innerHTML = null
})

btnDelet.addEventListener('click', function () {
  inputData.value = null
})



