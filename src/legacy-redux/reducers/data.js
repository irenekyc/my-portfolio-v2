const initialState = {
    all: null,
    pages: null,
    projectDetails: null,
}

const dataReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case "ALLDATA":
            return state={
                all: payload.data,
                pages: payload.pages,
                projectDetails: null
            };
        case "SORTEDDATA":
            return state.concat("sorteddata");
        case "FILTERDATA":
            return state.concat("filterdata");
        case "PROJECTDETAILS":
            return state={
                ...state,
                projectDetails: payload
            }
        default:
            return state;
    }

}

export default dataReducer;