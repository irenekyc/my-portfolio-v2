import axios from 'axios'

export const fetchData =  (page=0, sort="desc", filter="none") => async dispatch=>{
    const projects = await axios.get(`/api/projects/sort=${sort}&filter=${filter}&page=${page}`)
    try{
        dispatch({
            type: "ALLDATA",
            payload: projects.data
        })
        dispatch({
            type: "UPDATESTATUS",
            page: page,
            sort: sort,
            filter:filter,
            totalPages: projects.data.pages
        })
    } catch(err){
        console.log(err)
    }
}

export const openProject =  (id)=> async dispatch=>{
    const project = await axios.get(`/api/projects/projectId=${id}`)

    dispatch({
        type: "PROJECTDETAILS",
        payload: project.data
    })
}