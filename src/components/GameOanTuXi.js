import React, { Component } from 'react';
import Computer from './Computer';
import GameResult from './GameResult';
import Player from './Player';
import {connect} from 'react-redux';;
import './buble.css';
class GameOanTuXi extends Component {
    render() {
        return (
            <div className="gameOTX">
               
            <div className="row text-center mt-5">
                <div className="col-4">
                    <Player/>
                </div>
                <div className="col-4">
                    <GameResult/>
                    <button onClick={() => {this.props.playGame()}} className="btn btn-success mt-3">Play Game</button>
                </div>
                <div className="col-4">
                    <Computer/>
                </div>
            </div> 
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            // Hàm lặp
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if(count > 8){
                    // dừng hàm setInterval
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            },100)
        }
    }
}

export default connect (null,mapDispatchToProps)(GameOanTuXi);