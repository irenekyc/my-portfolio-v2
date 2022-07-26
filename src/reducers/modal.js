const initialState ={
    portfolio: false,
    menu: false
}

const modalReducer = (state = initialState, {type})=>{
    switch(type){
        case "OPENPORTFOLIO":
            return state = {
                portfolio:true,
                menu: false
            }
        case "CLOSEPORTFOLIO":
        case "CLOSEMENU":
            return state = {
                portfolio:false,
                menu: false
            }
        case "OPENMENU":
                return state = {
                    portfolio:false,
                    menu: true,
                }
        default:
            return state;
    }
}

export default modalReducer;