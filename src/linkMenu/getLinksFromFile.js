import {remote} from "electron";
import jetpack from "fs-jetpack";

export const getLinks = () => {
  const app = remote.app;
  const appDir = jetpack.cwd(app.getAppPath());
  const links = appDir.read("src/config/links.json", "json");
  let linkList = "";

  for (var link of links) {
    linkList += "<div data-link='" + link.url + "'>" + link.name + "</div>";
    document.querySelector("#stage").innerHTML += "<webview class='hidden' data-name='" + link.name + "' src='" + link.url + "'></webview>";
  }

  return linkList;
};
