import styles from '../src/css/index.scss'
import { ETHCard } from './lib/ethCard'

const plugin = document.getElementById('eth-widget-plugin')

const pluginButton = document.createElement('button')

pluginButton.innerHTML= `
<style>${styles.toString()}</style>
ETH Widget
`
plugin.appendChild(pluginButton)

pluginButton.onclick = renderWidget

function renderWidget() {
  // define custom HTML element
  customElements.define('eth-card', ETHCard)

  plugin.innerHTML = `<eth-card></eth-card>`
}