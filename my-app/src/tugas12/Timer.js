import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: this.props.waktu,
            date: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        if (this.props.start !== undefined) {
            this.setState({
                time: this.props.start
            });
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: this.state.time - 1
        });
    }

    render() {
        return(
            this.state.time > 0 ?  
            <div>         
                <h1 style={{textAlign: "center"}}>Sekarang Jam : {this.state.date}.    <span style={{marginRight: "20px"}}></span>       Hitung mundur : {this.state.time}</h1>
            </div>
            :
            <>
            </>
        )
    }
}
export default Timer;
