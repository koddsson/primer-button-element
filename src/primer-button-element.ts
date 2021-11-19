class PrimerButtonElement extends HTMLElement {
  connectedCallback(): void {
    this.textContent = ':wave:'
  }
}

declare global {
  interface Window {
    PrimerButtonElement: typeof PrimerButtonElement
  }
}

export default PrimerButtonElement

if (!window.customElements.get('primer-button')) {
  window.PrimerButtonElement = PrimerButtonElement
  window.customElements.define('primer-button', PrimerButtonElement)
}
