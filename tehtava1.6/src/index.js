import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }
    klikPalute = (arvo) => {
        if(arvo === 1){
            return () => {
                this.setState({
                    hyva: this.state.hyva + 1
                 })
            }
        }
        if(arvo === 0){
            return () => {
                this.setState({
                    neutraali: this.state.neutraali + 1
                })
            }
        }
        if(arvo === -1){
            return () => {
                this.setState({
                    huono: this.state.huono + 1
                })
            }
        }
    }

    render() {
        const pyoristaa = function(a,b) {
            return(
            Math.round(a * Math.pow(10, b)) / Math.pow(10, b)
            )
        }
        const keskiarvo = () => {
            if(this.state.kaikki === 0){
                return (
                    0
                )
            }
            let arvo = this.state.hyva - this.state.huono
            arvo = (arvo / (this.state.hyva + this.state.neutraali + this.state.huono))
            arvo = pyoristaa(arvo, 1)
            return (
                arvo

            )
        }
        const positiivisia = () => {
            if(this.state.hyva === 0){
                return(
                    0
                )
            }
            let arvo = ((this.state.hyva / (this.state.hyva + this.state.huono + this.state.neutraali)) * 100)
            arvo = pyoristaa(arvo, 1) 
            return(
                arvo
            )
        }
        const statiikka = () => {
            if((this.state.huono + this.state.hyva + this.state.neutraali) === 0){
                return(
                    <div>
                        <em> ei yhtään palautetta annettu </em>
                    </div>
                )
            }
            return(
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>hyvä {this.state.hyva}</td>
                            </tr>
                            <tr>
                                <td>neutraali {this.state.neutraali}</td>
                            </tr>
                            <tr>
                                <td>huono {this.state.huono}</td>
                            </tr>
                            <tr>
                                <td>keskiarvo {keskiarvo()} </td>
                            </tr>
                            <tr>
                                <td>positiivisia {positiivisia()} % </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                   
                    
                </div>
            )
        }
        
        return (
            <div>
                <h1>anna palautetta</h1>
                <button onClick={this.klikPalute(1)}>hyva</button>
                <button onClick={this.klikPalute(0)}>neutraali</button>
                <button onClick={this.klikPalute(-1)}>huono</button>
                <h1>statiikka</h1>
                {statiikka()}
            </div>
        )
    }
}
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )