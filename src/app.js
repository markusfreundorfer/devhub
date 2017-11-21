import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";
import {getLinks} from "./linkMenu/getLinksFromFile";

document.querySelector("#links").innerHTML = getLinks();

for(let link of document.querySelectorAll("[data-link]")){
  let attr = link.getAttribute("data-link"),
  webview = document.querySelector("[src='" + attr + "']");

  console.log(document.querySelectorAll("webview"));

  link.onclick = function () {

    for(let webviewtest of document.querySelectorAll("webview")){
      console.log(webviewtest)

      webviewtest.setAttribute("style","flex: 0; width: 0; height: 0; opacity: 0;");
    }


    webview.setAttribute("style","flex: 1; width: 100%; height: 100%; opacity: 1");
  };

}





// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

/*import { remote } from "electron";
import jetpack from "fs-jetpack";
import { greet } from "./hello_world/hello_world";
import env from "env";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};*/

/*document.querySelector("#app").style.display = "block";
document.querySelector("#greet").innerHTML = greet();
document.querySelector("#os").innerHTML = osMap[process.platform];
document.querySelector("#author").innerHTML = manifest.author;
document.querySelector("#env").innerHTML = env.name;
document.querySelector("#electron-version").innerHTML = process.versions.electron;*/






