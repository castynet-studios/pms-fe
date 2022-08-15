import React from 'react'

import { Icons } from 'elements'

import style from './signature.module.scss'

interface ISignature {
  paddingTop?: string
  marginTop?: string
}

function Signature({ paddingTop, marginTop }: ISignature) {
  const sty = {
    paddingTop: paddingTop,
    marginTop: marginTop,
  }

  return (
    <div style={sty} className={style.signDiv}>
      <p>
        <Icons.Copyright size="15" /> Sagana Organic <br /> built by Castynet
        Studios
      </p>
    </div>
  )
}

export default Signature
