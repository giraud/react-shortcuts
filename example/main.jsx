import React from "react"
import { createRoot } from "react-dom/client"
import { ShortcutManager } from "../src/index.js"
import keymap from "./keymap"
import App from "./app.jsx"
import "./main.css"

const shortcutManager = new ShortcutManager(keymap)

// Just for testing
window.shortcutManager = shortcutManager

let rootElement = document.getElementById("app")
let root = createRoot(rootElement)

root.render(<App shortcuts={{ shortcuts: shortcutManager }} show={true} />)
