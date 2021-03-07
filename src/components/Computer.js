import React, { Component } from "react";
import { connect } from "react-redux";
import './buble.css';
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top: -50px}
            25% {top:100px}
            50% {top:-50px}
            75% {top:100px}
            100% {top:0}
        }`;
    let { computer } = this.props;
    return (
      <div className="playerGame text-center">
        <style>{keyframe}</style>
        <div className="playerChoice">
          <img
            style={{
              position: 'relative',
              animation: `randomItem${Date.now()} 0.2s `,
            }}
            className="mt-5"
            width={100}
            height={100}
            src={computer.hinhAnh}
            alt={computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./images/oantuti/playerComputer.png"
        ></img>
        <div className="row"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  computer: state.GameOanTuXiReducer.computer,
});
export default connect(mapStateToProps)(Computer);
