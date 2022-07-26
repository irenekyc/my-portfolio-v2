export const openPortfolio = ()=>{
    return {
        type : "OPENPORTFOLIO"
    }
}

export const closePortfolio = ()=>{
    return {
        type : "CLOSEPORTFOLIO"
    }
}

export const toggleMenu= (status)=>{
    if (status){
        return{
            type: "CLOSEMENU"
        }
    } else {
        return {
            type: "OPENMENU"
        }
    }
    
}