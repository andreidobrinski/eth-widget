import styles from '../css/eth-card.scss'

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
  }

  connectedCallback() {

  }
}