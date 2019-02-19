import React, { Component } from 'react';
import House from './House';
import housesArr from './houseInfo'


class Houses extends Component {
    constructor (){
        super()
        
        this.state = {
            gPoints: 0,
            hPoints: 0,
            sPoints: 0,
            rPoints: 0
        }
    }

    add = (num, house) => {
        if (house === "Gryffindor"){
            this.setState(prevState => {
                return {
                    gPoints: prevState.gPoints + num
                }
            })
        }else if (house === "Hufflepuff"){
            this.setState(prevState => {
                return {
                    hPoints: prevState.hPoints + num
                }
            })
        }else if (house === "Slytherin"){
            this.setState(prevState => {
                return {
                    sPoints: prevState.sPoints + num
                }
            })
        }else if (house === "Ravenclaw"){
            this.setState(prevState => {
                return {
                    rPoints: prevState.rPoints + num
                }
            })
        }
    }

    
    render() {
        const houses = housesArr.houses.map(house => {
        switch (house.name){
            case "Gryffindor":
                var points = this.state.gPoints;
                break;
            case "Hufflepuff":
                var points = this.state.hPoints;
                break;
            case "Ravenclaw":
                var points = this.state.rPoints;
                break;
            case "Slytherin":
                var points = this.state.sPoints;
                break;
            default: 
                break;
        }
        return <House name={house.name}
            points={points}
            members={house.houseMembers}
            colors={house.colors}
            add={this.add} />
        })
        return (
            <div className='houses'>
                {houses}
            </div>
        );
    }
}

export default Houses;