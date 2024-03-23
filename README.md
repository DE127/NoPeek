<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="NoPeek" />

  &#xa0;

<!-- <a href="https://nopeek.netlify.app">Demo</a> -->

</div>

<h1 align="center">NoPeek</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/de127/nopeek?color=56BEB8"><img alt="Repository size" src="https://img.shields.io/github/repo-size/de127/nopeek?color=56BEB8"><img alt="License" src="https://img.shields.io/github/license/de127/nopeek?color=56BEB8">

<!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/nopeek?color=56BEB8" /> -->

<!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/nopeek?color=56BEB8" /> -->

<!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/nopeek?color=56BEB8" /> -->

</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  NoPeek 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a>   |   
  <a href="#sparkles-features">Features</a>   | 
  <a href="#checkered_flag-starting">Starting</a>   |  
  <a href="https://github.com/DE127/NoPeek/blob/main/LICENSE">License</a>   |  
  <a href="https://github.com/de127" target="_blank">DE127</a>
</p>

<br>

## 🎯 About

NoPeek is a tool designed to safeguard all content on your website from being copied. The straightforward JavaScript code completely prevents all existing content copying methods, including right-click menus, hotkeys, developer tools, text selection and dragging, and more.

## ✨ Features

✔️ Full text and image protection;
✔️ All major browsers supported Chrome, Firefox, Safari, Edge, Opera;
✔️ Works both for the entire Website and for Single Pages;
✔️ 100% SEO Friendly;
✔️ Native Valid JavaScript, without jQuery;
✔️ Works well on Windows, Linux, and macOS;
✔️ Lightweight and Fast;
✔️ Compatible with all Modern Browsers;
✔️ Easy to use and customize;
✔️ Awesome for Mobile and Tablets;
✔️ Huge Customization Capabilities;

## 🏁 Starting

```bash
# Clone this project
$ git clone https://github.com/de127/nopeek
```

## 🚀 Quick Start

1. **Download NoPeek:** Download NoPeek from the [Github repository](https://github.com/de127/nopeek).

2. **Include NoPeek Files:** Copy NoPeek's JS files into your project directory.

    ```html
    <script type="text/javascript" src="/path/to/hotkeys.min.js"></script>
    <script type="text/javascript" src="/path/to/devtools-detect.js"></script>
    <script type="text/javascript" src="/path/to/NoPeek.js"></script>
    ```

3. **Enable NoPeek:** Insert the following code into your website to start using NoPeek.

    ```html
    <script>
        var mdpNoPeek = { 
            "selectAll": "on", 
            "copy": "on", 
            "cut": "on", 
            "paste": "on", 
            "save": "on", 
            "viewSource": "on", 
            "printPage": "on", 
            "developerTool": "on", 
            "windowBlur": "on", 
            "tabHidden": "on", 
            "readerMode": "on", 
            "rightClick": "on", 
            "rightClickImage": "on", 
            "textSelection": "on", 
            "imageDragging": "on" 
        };
    </script>
    ```

## 🛠️ Configuration

You can customize NoPeek's settings by modifying the `mdpNoPeek` variable in the JavaScript code. Here are some available settings:

- `"selectAll": "on"`: Enable selecting all content on the page.
- `"copy": "on"`: Allow copying content.
- `"cut": "on"`: Allow cutting content.
- `"paste": "on"`: Allow pasting content.
- `"save": "on"`: Allow saving the webpage.
- `"viewSource": "on"`: Allow viewing the webpage source code.
- `"printPage": "on"`: Allow printing the webpage.
- and many more settings.

## 📝 Example

Below is an example of how to use NoPeek in a webpage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website Title</title>
    <script type="text/javascript" src="/path/to/hotkeys.min.js"></script>
    <script type="text/javascript" src="/path/to/devtools-detect.js"></script>
    <script type="text/javascript" src="/path/to/NoPeek.js"></script>
    <script>
        var mdpNoPeek = { 
            "selectAll": "on", 
            "copy": "on", 
            "cut": "on", 
            "paste": "on", 
            "save": "on", 
            "viewSource": "on", 
            "printPage": "on", 
            "developerTool": "on", 
            "windowBlur": "on", 
            "tabHidden": "on", 
            "readerMode": "on", 
            "rightClick": "on", 
            "rightClickImage": "on", 
            "textSelection": "on", 
            "imageDragging": "on" 
        };
    </script>
</head>
<body>
    <!-- Your website content goes here -->
</body>
</html>
```

## 🎉 Congratulations!

You have successfully integrated and configured NoPeek for your website. Now, the content on your website will be protected from unauthorized copying or grabbing.
## 📝 License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.

<p>
Made with ❤️ by <a href="https://github.com/de127" target="_blank">DE127 </a>
</p>
 
<p>
<a href="#top">`Back to top </a>
</p>
