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

    componentDidMount() {
        const gPoints = localStorage.getItem('gPoints');
        const hPoints = localStorage.getItem('hPoints');
        const sPoints = localStorage.getItem('sPoints');
        const rPoints = localStorage.getItem('rPoints');
        if (gPoints) {
            this.setState({ gPoints: JSON.parse(gPoints) });
        }
        if (hPoints) {
            this.setState({ hPoints: JSON.parse(hPoints) });
        }
        if (sPoints) {
            this.setState({ sPoints: JSON.parse(sPoints) });
        }
        if (rPoints) {
            this.setState({ rPoints: JSON.parse(rPoints) });
        }

    }

    add = (num, house) => {
        if (house === "Gryffindor"){
            this.setState(prevState => {
                return {
                    gPoints: prevState.gPoints + num
                }
            },() => {
                localStorage.setItem('gPoints', JSON.stringify(this.state.gPoints) )
            })
        }else if (house === "Hufflepuff"){
            this.setState(prevState => {
                return {
                    hPoints: prevState.hPoints + num
                }
            },() => {
                localStorage.setItem('hPoints', JSON.stringify(this.state.hPoints) )
            }) 
        }else if (house === "Slytherin"){
            this.setState(prevState => {
                return {
                    sPoints: prevState.sPoints + num
                }
            },() => {
                localStorage.setItem('sPoints', JSON.stringify(this.state.sPoints) )
            })
        }else if (house === "Ravenclaw"){
            this.setState(prevState => {
                return {
                    rPoints: prevState.rPoints + num
                }
            },() => {
                localStorage.setItem('rPoints', JSON.stringify(this.state.rPoints) )
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