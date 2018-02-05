import React from 'react'
import Sisalto from './Sisalto'

const Kurssi = ({kurssit}) => {
    return (
      <div>
            <ul>
                {kurssit.map(kurssi => <Sisalto key={kurssi.id} kurssi={kurssi} />)}
            </ul>
      </div>
    )
  }


export default Kurssi