const { expect } = require('chai')
const index = require('../index')

describe('Teste de calculadora', () => {
  it('Testando função soma', () => {
    const res = index.sum(2, 4)
    expect(res).to.be.equals(6)
  })

  it('Testando função multiplicação', () => {
    const res = index.mult(2, 4)
    expect(res).to.be.equals(8)
  })

  it('Testando função subtração', () => {

  })

  it('Testando função divisão', () => {
    
  })
})
