import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../actions/data'


const Pagination = ()=>{
    const dispatch = useDispatch()
    const {curPage, sort, filter, totalPages} = useSelector(state=> state.status)
    return(
        <div className="pagination-bar">
            {curPage>0 &&(<div class="prev">
                <span onClick={()=>dispatch(fetchData(curPage-1, sort, filter))}>Prev </span>
            </div>)}
            <div class="next">
            {curPage < totalPages-1 &&( <span onClick = {()=>dispatch(fetchData(curPage+1, sort, filter))}> Next</span>)}
              
            </div>
        </div>

    )
}

export default Pagination