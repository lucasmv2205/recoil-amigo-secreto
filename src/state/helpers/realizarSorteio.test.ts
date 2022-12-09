import React from 'react'
import { realizarSorteio } from './realizarSorteio'

describe('dado um sorteio de amigo secreto', () => {
  it('cada participante nao tire seu proprio nome', () => {
    const participantes = ['Lucas','Millena','Joao','Igor']

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})