const initialState ={
    curPage: 0,
    sort: "desc",
    filter: "none",
    totalPages: 0,
    init: true,
}

const statusReducer = (state=initialState, {type, page, sort, filter, totalPages})=>{
    switch(type){
        case "UPDATESTATUS":
            return state ={
                curPage: page,
                sort: sort,
                filter: filter,
                totalPages: totalPages,
                init:false
            }
        default:
            return state;
    }
}

// const statusReducer = (state = initialState, {type, updates})=>{
//     switch(type){
//         case "NEXTPAGE":
//             return state = {
//                 ...state,
//                 curPage : state.curPage+1
//             }
//         case "PREVPAGE":
//             return state = {
//                 ...state,
//                 curPage : state.curPage-1
//             }
//         case "CLEARFILTER":
//             return state = {
//                 ...state,
//                 filter : "none"
//                 }
//         case "UPDATEFILTER":
//             return state = {
//                     ...state,
//                     filter: updates
//                 }
//         case "SORT":
//             return state = {
//                     ...state,
//                     sort: updates
//                     }
//         default:
//             return state;
//     }
// }



export default statusReducer;