const stateDefault = {
    mangDatCuoc: [
        {ma:'bua',hinhAnh:'./images/oantuti/bua.png',datCuoc:true},
        {ma:'keo',hinhAnh:'./images/oantuti/keo.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./images/oantuti/bao.png',datCuoc:false},
    ],
    ketQua: 'You Win !!!',
    soBanThang: 0,
    soBanChoi:0,
    computer: {ma:'bua',hinhAnh:'./images/oantuti/bua.png'},
};

export const GameOanTuXiReducer = (state=stateDefault,action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            let mangUpdate = [...state.mangDatCuoc];
            mangUpdate = mangUpdate.map((item,index) => {
                if(item.ma === action.maCuoc){
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            state.mangDatCuoc = mangUpdate;
            return {...state}
        }
        case 'RAN_DOM': {
            let randomNumber = Math.floor(Math.random() * 3);
            let randomChoice = state.mangDatCuoc[randomNumber];
            
            state.computer = randomChoice;
            return {...state}
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'DRAW !!!'
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'You Lose !!!'
                    }else {
                        state.ketQua = 'You Win !!!'
                        state.soBanThang += 1;
                    };
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'You Win !!!'
                        state.soBanThang += 1;
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'DRAW !!!'
                    }else {
                        state.ketQua = 'You Lose !!!'
                    };
                    break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'You Lose !!!'
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'You Win !!!'
                        state.soBanThang += 1;
                    }else {
                        state.ketQua = 'DRAW !!!'
                    };
                    break;
                default : 
                state.soBanThang += 1;
                state.ketQua = 'You Win !!!';

            };
            state.soBanChoi += 1;
            return {...state}
        }
        default: return {...state}
    }
};
