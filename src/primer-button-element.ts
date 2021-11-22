class PrimerButtonElement extends HTMLElement {
  connectedCallback(): void {
    const shadow = this.attachShadow({mode: 'open'})
    shadow.innerHTML = `
    <style>
      :host {
        --color-btn-bg: #f6f8fa;
        --color-btn-border: rgba(27,31,36,0.15);
        --color-btn-focus-border: rgba(27,31,36,0.15);
        --color-btn-focus-shadow: 0 0 0 3px rgba(9,105,218,0.3);
        --color-btn-hover-bg: #f3f4f6;
        --color-btn-hover-border: rgba(27,31,36,0.15);
        --color-btn-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.25);
        --color-btn-shadow: 0 1px 0 rgba(27,31,36,0.04);
        --color-btn-text: #24292f;
      }

      button {
        position: relative;
        display: inline-block;
        padding: 5px 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        border: 1px solid var(--color-btn-border);
        border-radius: 6px;
        appearance: none;
      }
      button {
        color: var(--color-btn-text);
        background-color: var(--color-btn-bg);
        box-shadow: var(--color-btn-shadow),var(--color-btn-inset-shadow);
        transition: .2s cubic-bezier(0.3, 0, 0.5, 1);
        transition-property: color,background-color,border-color;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
      }

      button:hover {
        background-color: var(--color-btn-hover-bg);
        border-color: var(--color-btn-hover-border);
        transition-duration: 0.1s;
      }

      button:focus {
        border-color: var(--color-btn-focus-border);
        outline: none;
        box-shadow: var(--color-btn-focus-shadow);
      }

      :host([primary]) button {
        --color-btn-text: #ffffff;
        --color-btn-bg: #2da44e;
        --color-btn-border: rgba(27,31,36,0.15);
        --color-btn-shadow: 0 1px 0 rgba(27,31,36,0.1);
        --color-btn-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
      }

      :host([primary]) button:hover {
        --color-btn-hover-bg: #2c974b;
        --color-btn-hover-border: rgba(27,31,36,0.15);
      }

      :host([primary][disabled]) button:hover {
        --color-btn-hover-text: rgba(255,255,255,0.8);
        --color-btn-hover-bg: #94d3a2;
        --color-btn-border: rgba(27,31,36,0.15);
      }

      :host([disabled]) button {
        --color-btn-text: #8c959f;
      }
      
      :host([disabled][primary]) button {
        --color-btn-text: rgba(255,255,255,0.8);
        --color-btn-bg: #94d3a2;
      }

<style>
.btn:disabled, .btn.disabled, .btn[aria-disabled=true] {
    cursor: default;
}
    </style>
    <button><slot></slot></button>
    `.trim()
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
