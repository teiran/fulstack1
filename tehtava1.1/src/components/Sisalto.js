import React from 'react'
import Osa from './Osa'   


const Sisalto = ({ kurssi }) => {
    const {nimi, osat} = kurssi
    return (
      <div>
        <h1>{nimi}</h1>
        <Osat osat={osat} />
      </div>
    )
}

const Yhteensa = ({tehtavia}) => {
    return <div>Yhteensä {tehtavia} tehtävää</div>
}

const Osat = ({ osat }) => {
    const tehtavia = osat.reduce((tehtavia, osa) => {
        return tehtavia + osa.tehtavia
      }, 0)
    return (
        <div>
            {osat.map(osa => <Osa key={osa.id} osa={osa} />)}
            <Yhteensa tehtavia={tehtavia} />
        </div>
    )
}





  export default Sisalto