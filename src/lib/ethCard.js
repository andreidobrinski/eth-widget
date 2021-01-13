import styles from '../css/eth-card.scss'
import { API_KEY } from './api-key'

const template = document.createElement('template')

template.innerHTML = `
  <style>${styles.toString()}</style>
  <div class='eth-plugin-widget'>
    <p>Ethereum Stats</p>
    <div class='data'>
      <p class='price'></p>
      <p>CAD</p>
    </div>
    <section class='actions'>
      <Button>Buy</Button>
      <Button>Sell</Button>
    </section>
  </div>
`

export class ETHCard extends HTMLElement {
  constructor() {
    super()

    // add shadow DOM
    const shadowDOM = this.attachShadow({ mode: 'open' })

    // render the template in shadow DOM
    shadowDOM.appendChild(template.content.cloneNode(true))

    // binding methods
    this.loadETHPrice = this.loadETHPrice.bind(this)
    this.redirectToUniswap = this.redirectToUniswap.bind(this)
  }

  connectedCallback() {
    this.loadETHPrice()

    let buyBtn = this.shadowRoot.querySelector('.actions button')
    let sellBtn = this.shadowRoot.querySelector('.actions button:nth-of-type(2)')

    buyBtn.onclick = this.redirectToUniswap
    sellBtn.onclick = this.redirectToUniswap
  }

  loadETHPrice() {
    let price = this.shadowRoot.querySelector('.eth-plugin-widget .price')

    fetch('https://rest.coinapi.io/v1/exchangerate/ETH/CAD', {
      method: 'GET',
      headers: {
        "X-CoinAPI-Key": API_KEY
      }
    })
    .then(response => response.json())
    .then(data => {
      price.innerHTML = `$ ${data.rate}`
    })
    .catch(error => {
      console.log(error)
    })
  }

  redirectToUniswap() {
    window.location = 'https://uniswap.org/'
  }
}