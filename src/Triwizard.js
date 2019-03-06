import React, { Component } from 'react';
import confirm from 'react-confirm';
import Youtube from 'react-youtube';

class Triwizard extends Component {
    constructor(){
        super()

        this.state = {
            jan1Name: '',
            jan2Name: '',
            febName: '',
            dumble: false,
            placed: true,
            jan1: [],
            jan2: [],
            feb: []
        }

       
    }

    componentDidMount() {
        const jan1 = localStorage.getItem('jan1');
        const jan2 = localStorage.getItem('jan2');
        const feb = localStorage.getItem('feb');
        if (jan1) {
            this.setState({ jan1: JSON.parse(jan1) });
        }
        if (jan2) {
            this.setState({ jan2: JSON.parse(jan2) });
        }
        if (feb) {
            this.setState({ feb: JSON.parse(feb) });
        }
    }


    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e, cohort) => {
        e.preventDefault()
        switch(cohort){
            case "jan1":
                this.setState(prevState => ({
                    placed: false,
                    jan1: [...prevState.jan1, prevState.jan1Name],
                    jan1Name: ''
                }), () => {
                    localStorage.setItem('jan1', JSON.stringify(this.state.jan1))
                })
                setTimeout(() => {
                    this.setState({placed: true});
                }, 900) 
                return;
            case "jan2":
                this.setState(prevState => ({
                    placed: false,
                    jan2: [...prevState.jan2, prevState.jan2Name],
                    jan2Name: ''
                }), () => {
                    localStorage.setItem('jan2', JSON.stringify(this.state.jan2))
                })
                setTimeout(() => {
                    this.setState({placed: true});
                }, 900) 
                return;
            case "feb":
                this.setState(prevState => ({
                    placed: false,
                    feb: [...prevState.feb, prevState.febName],
                    febName: ''
                }), () => {
                    localStorage.setItem('feb', JSON.stringify(this.state.feb))
                })
                setTimeout(() => {
                    this.setState({placed: true});
                }, 900) 
                return;
            default:
                return;
        }

    }

    selectChampion = () => {
        const d = new Date()
        const day = d.getDay()
        if (day === 5){
            let choose = window.confirm('Are you sure you want to select your champion??')
            if (choose){
                const jan1Champ = this.state.jan1[Math.floor(Math.random()*this.state.jan1.length)]
                const jan2Champ = this.state.jan2[Math.floor(Math.random()*this.state.jan2.length)]
                const febChamp = this.state.feb[Math.floor(Math.random()*this.state.feb.length)]
                alert('The Champion for the Drink Sprite Cohort is ...')
                alert(jan1Champ)
                alert('The Champion for the Dumb January Cohort is ...')
                alert(jan2Champ)
                alert('The Champion for the February Cohort is ...')
                alert(febChamp)
            }
        }else {
            let choose = window.confirm('Are you allowed to select the champion??')
            if (choose){
                this.setState({dumble: true})
                setTimeout(() => {
                    this.setState({dumble: false});
                }, 9000) 
            }else {
                alert('Good choice, now go sit down!')
            }
        }
        
    }

    checkPlay = e => {
        if(this.state.dumble){
            e.target.playVideo()
            setTimeout(() => {
                e.target.pauseVideo()
                e.target.currentTime = 0;
            }, 9000) 
        }else {
            e.target.pauseVideo()
        }
    }

    render() {
        console.log(this.state)
        return (
            <>
            <div className="form-container">
                <form onSubmit={(e) => this.handleSubmit(e, 'jan1')}>
                    <h1>Drink Sprite Cohort</h1>
                    <input type="text" placeholder="Enter Name" name='jan1Name' value={this.state.jan1Name} onChange={this.handleChange} />
                    <button>Place Name in Goblet</button>
                </form>
                <form onSubmit={(e) => this.handleSubmit(e, 'jan2')}>
                    <h1>Jan 2 Cohort (Nate)</h1>
                    <input type="text" placeholder="Enter Name" name='jan2Name' value={this.state.jan2Name} onChange={this.handleChange} />
                    <button>Place Name in Goblet</button>
                </form>
                <form onSubmit={(e) => this.handleSubmit(e, 'feb')}>
                    <h1>February Cohort</h1>
                    <input type="text" placeholder="Enter Name" name='febName' value={this.state.febName} onChange={this.handleChange} />
                    <button>Place Name in Goblet</button>
                </form>
            </div>
            
            <Youtube videoId="yHJeqnU_rtE" onReady={(e) => e.target.playVideo()} onPlay={this.checkPlay} className={this.state.dumble ? 'video-dumbledore' : 'no-dumbledore'} />

            <div className='gif'>
                <div className={this.state.placed ? 'flame1' : 'flame1 flame2'}></div>
                <img src="https://i.pinimg.com/originals/b9/88/cb/b988cbebc23aaa816259618015f6f5c5.png" id='goblet'/>
            </div>

            <div className="select" onDoubleClick={this.selectChampion}><h1>Select Champion</h1></div>

            <ul className='rules'>
                <h1>Rules</h1>
                <li id='firstRule'>The rules are simple: </li>
                <li>Each cohort will be represented by a champion, chosen by the Goblet of Fire.</li>
                <li>The champions take part in one challenging tasks each week to win the Triwizard Cup, winner takes all, eternal glory and probably eternal bruises.</li>
                <li>$1 to enter, all money goes to the champion</li>
            </ul>
            </>
        );
    }
}

export default Triwizard;

