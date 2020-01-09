// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
    state = {
        mood: 'happy'
    }

    handleMood = () => {
        this.setState(() => {
            return {
                mood: 'sad'
            }
        })
    }

    render(){
        return (
            <div onClick={this.handleMood}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent