// watch-tokens.js
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const source = path.resolve(__dirname, "node_modules/figma-design-tokens/output/fixed-token.css");
const target = path.resolve(__dirname, "public/styles/tokens.css");

function copyCSS() {
  fs.copyFile(source, target, (err) => {
    if (err) return console.error("❌ Copy failed:", err);
    console.log("✔ Tokens updated.");
  });
}

chokidar.watch(source).on("change", copyCSS);
