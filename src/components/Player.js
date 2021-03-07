import React, { Component } from 'react';
import {connect} from 'react-redux';
class Player extends Component {
    render() {
        let {mangDatCuoc,datCuoc} = this.props;
        let keyframe = `@keyframes upDown {
            0% {transform:rotate(0deg)}
            25% {transform:rotate(-20deg)}
            50% {transform:rotate(0deg)}
            75% {transform:rotate(20deg)}
            100% {transform:rotate(0deg)}
        }`
        return (
            <div className="playerGame text-center">
                <style>{keyframe}</style>
                <div className="playerChoice">
                    <img className="mt-5" width={100} height={100} src={mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:200,height:200}} src="./images/oantuti/player.png"></img>
                <div className="row">
                    {mangDatCuoc.map((item,index) => {
                        let activeStyle ={}
                        if(item.datCuoc){
                            activeStyle ={width:65,height:65,animation: `upDown 1s linear infinite`}
                        }

                        return <div key={index} className="col-4">
                        <button onClick={() => {datCuoc(item.ma)}} className="btnItem">
                            <img style={activeStyle}  width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh} />
                        </button>
                    </div>
                    })}
                    
                  
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    mangDatCuoc: state.GameOanTuXiReducer.mangDatCuoc
})
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type:'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);