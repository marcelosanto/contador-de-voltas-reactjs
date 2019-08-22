import React from 'react'

const MostraTempo = (props) => {
  const tempo = props.tempo
  const minutos = Math.round(tempo / 60)
  const segundos = tempo % 60
  const minutosStr = minutos < 10 ? '0' + minutos : minutos
  const segundosStr = segundos < 10 ? '0' + segundos : segundos
  return (
    <p className='tempo'>
      <span>{`${minutosStr}:${segundosStr}`}</span><br />
      Tempo medio por volta
    </p>
  )
}

export default MostraTempo