import React from 'react'


const Osa = ({ osa }) => {
    const {nimi, tehtavia} = osa  
    return (
        <div>{nimi} {tehtavia}</div>
    )
  }


export default Osa