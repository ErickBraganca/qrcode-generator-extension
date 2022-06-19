<h1 align = "justify">🚦 QR CODE Generator Extension</h1>

<div style="margin: 10px 0 2px 0" class="preview-container">
  <h3 style="margin: 0px">💻 Application Preview</h3>
  <img style="height:300px; border-radius: 10px;" src=""></img>
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
  Its functionality is based on the google chart API. For each button click, an HTTP call is made to the google API that returns the QRcode.
  <br>
  In the case of the coordinate, a place link is created to redirect to the Google Maps app.
  Reference: https://developers.google.com/chart
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