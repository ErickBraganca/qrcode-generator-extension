<h1 align = "justify">🚦 QR CODE Generator Extension</h1>

<div style="margin: 10px 0 2px 0" class="preview-container">
  <h3 style="margin: 0px">💻 Application Preview</h3>
  <img style="height:500px; border-radius: 10px;" src="https://github.com/ErickBraganca/qrcode-generator-extension/blob/0c4366338943c6f91372d356a2de25add9d8a988/docs/Preview.png"></img>
</div>

## 📜 Motivation
<span style="margin-botton: 5px">
 The main motivation was the study of Google Developers Documentation, to use the knowledge of HTML, CSS and JavaScript in the development of browser extensions.
 <br>
 Reference: https://developer.chrome.com/docs/extensions/
</span>

## 🎯 Description
<span style="margin-botton: 5px">
  This is a browser extension created to transform, text, links and geografic coordinates in QR Codes.
  <br>
  Its functionality is based on the google chart API. For each button click, an HTTP call is made to the google API that returns the QR Code.
  <br>
  In the case of the coordinate, a place link is created to redirect to the Google Maps app.
  <br>
  Reference: https://developers.google.com/chart
</span>

## 🥽 Installation and Use
<span style="margin-botton: 5px">
  Because it is an uncompressed extension, to install and use, you need to enable the developer mode.
  <br>
  The below process is similar in other browsers, like Microsoft Edge, Mozilla Firefox... 
  <ol>
    <li>Goto Chrome Settings using three dots on the top right corner.</li>
    <li>Then Select Extensions.</li>
    <li>Enable Developer Mode.</li>
    <li>Click on Load Unpacked and select this project folder.</li>
  </ol>
</span>

## 🔩 Extension Structure
  ```
📂qrcode-generator-extension
│
├───📁docs                      ✔️ Extension Documentation.
│    └───📄 README.md           🔸  Extension Overview. 
│    └───📄 Preview.png         🔸  Extension Image Preview.
│       
├───📁interface   
│    ├───📁 icons               ✔️  UI Element, icons of extension.   
│    └───📄 popup.png           🔸  UI Element, it is the default icon of the popup interface. 
│    └───📄 popup.css           🔸  UI Element, contain stylization of the popup interface.   
│    └───📄 popup.html          🔸  UI Element, main HTML structure of the popup interface. 
│    └───📄 popup.js            🔸  UI Element, contain the script of the popup interface. 
│
├───📄 background.j             🔸  Service worker, responsible for background activities.
└───📄 manifest.json            🔸  Extension start, contain the main informations.
