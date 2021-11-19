describe('primer-button', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('primer-button')
      assert.equal('PRIMER-BUTTON', el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.PrimerButtonElement()
      assert.equal('PRIMER-BUTTON', el.nodeName)
    })
  })

  describe('after tree insertion', function () {
    beforeEach(function () {
      document.body.innerHTML = `
        <primer-button></primer-button>
      `
    })

    afterEach(function () {
      document.body.innerHTML = ''
    })

    it('initiates', function () {
      const ce = document.querySelector('primer-button')
      assert.equal(ce.textContent, ':wave:')
    })
  })
})
