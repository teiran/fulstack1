import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }

    nextAnecdote = () => () => {
        let arvo = Math.floor(Math.random() * 6)
        return (
            this.setState({ selected: arvo })
        )
    }

    klicVote = () => () => {
        this.props.anecdotes[this.state.selected].vote += 1
        return (
            this.setState({ selected: this.state.selected})
        )
    }

    render() {
        const moustVotes = () => {
            let t = this.props.anecdotes[0]
            for (var i = 0; i <5; i++){
                let s = this.props.anecdotes[i]
                if(s.vote > t.vote) {
                    t = s
                s} 
            }
            return (
                <div>
                    <p> {t.anecdote} </p>
                    <p> {t.vote} </p>
                </div>
            )
        }
        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected].anecdote}</p>
                <p>has {this.props.anecdotes[this.state.selected].vote} votes </p>
                <button onClick={this.klicVote()}> vote </button>
                <button onClick={this.nextAnecdote()}> next anecdote </button>
                <h2>anecdote whit moust votes:</h2>
                <div> {moustVotes()} </div>
            </div>
        )
    }
}


const anecdotes = [
    {anecdote: 'If it hurts, do it more often', vote: 0},
    {anecdote: 'Adding manpower to a late software project makes it later!', vote: 0},
    {anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote: 0},
    {anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote: 0},
    {anecdote: 'Premature optimization is the root of all evil.', vote: 0},
    {anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote: 0}
]

ReactDOM.render(
    <App anecdotes={anecdotes}  />,
    document.getElementById('root')
)