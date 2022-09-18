import React from 'react'

class Devs extends React.Component {
    render() {
        console.log(this.props);
        const { name, age, skill} = this.props
        return (
            <div className="dev"> 
                <div> Name: {name} </div>
                <div> Age: {age} </div>
                <div> Skill: {skill} </div>
                <button> 
                    Sign Up
                </button>
             </div>
        )
    }
}

export default Devs;