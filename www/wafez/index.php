<!DOCTYPE html>
<html>
<head>
  <script type='text/javascript' src='https://cdn.scaledrone.com/scaledrone.min.js'></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <style>
    body {
      background: #0098ff;
      display: flex;
      height: 100vh;
      margin: 0;
      align-items: center;
      justify-content: center;
      padding: 0 50px;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }
    video {
      background: white;
      background-image: url(images/LOGO-UTM.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      max-width: calc(50% - 5%);
      margin: 0 5%;
      box-sizing: border-box;
      border-radius: 2px;
      padding: 0;
    }
    .copy {
      position: fixed;
      top: 25px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      color: white;
    }
  </style>
</head>
<body>
  <div class="copy">UTM Project</div>
  <video id="localVideo" autoplay muted></video>
  <video id="remoteVideo" autoplay></video>
  <script src="script.js"></script>
</body>
</html>
