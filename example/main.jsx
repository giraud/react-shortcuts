import React from 'react'
import ReactDOM from 'react-dom'
import keymap from './keymap'
import { ShortcutManager } from '../src/index.js'
import App from './app.jsx'
import './main.css'

const shortcutManager = new ShortcutManager(keymap)

// Just for testing
window.shortcutManager = shortcutManager

const element = React.createElement(App, { shortcuts: shortcutManager })
ReactDOM.render(element, document.getElementById('app'))
