import React, { Component } from "react";
import { connect } from "react-redux";
class GameResult extends Component {
  render() {
    let { ketQua, soBanChoi, soBanThang } = this.props;
    return (
      <div style={{fontSize:25}}>
        <div className="text-warning">{ketQua}</div>
        <div className="text-success">
          Số bàn thắng: <span className="text-warning">{soBanThang}</span>
        </div>
        <div className="text-success">
          Tổng số bàn chơi: <span className="text-warning">{soBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ketQua: state.GameOanTuXiReducer.ketQua,
  soBanThang: state.GameOanTuXiReducer.soBanThang,
  soBanChoi: state.GameOanTuXiReducer.soBanChoi,
});
export default connect(mapStateToProps, null)(GameResult);
