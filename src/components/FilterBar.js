import React, {useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchData} from '../actions/data'


const FilterBar = ()=>{
    const dispatch = useDispatch()
    const {curPage, sort, filter, init}= useSelector(state=>state.status)
    const scrollToRef = useRef(null)

    useEffect(()=>{
        if(!init){
            window.scrollTo(0,scrollToRef.current.offsetTop-60)
        }
    }, [curPage])
    
    return(
        <section className="filter-session" ref={scrollToRef}>
        <div className="filter-session-inner">
            <div className="filter">
                <span> Filter by</span>
                <button className={filter === "SCSS" && `filter-active`} onClick={()=>dispatch(fetchData(0, sort, "SCSS"))}> Scss</button>
                <button className={filter === "JS" && `filter-active`} onClick={()=>dispatch(fetchData(0, sort, "JS"))}> JS</button>
                <button className={filter === "API" && `filter-active`}onClick={()=>dispatch(fetchData(0, sort, "API"))}> API</button>
                <button className={filter === "react" && `filter-active`} onClick={()=>dispatch(fetchData(0, sort, "react"))}> React js</button>
                <button className={filter === "MongoDB" && `filter-active`} onClick={()=>dispatch(fetchData(0, sort, "MongoDB"))}> MongoDB </button>
                <button onClick={()=>dispatch(fetchData(0, sort, "none"))}> Clear</button>
            </div>

            <div className="sort">
                <span> Sort by</span>
            <button className={sort === "desc" && `sort-active`} onClick={()=>dispatch(fetchData(0, "desc", filter))}> Latest</button>
            <button className={sort === "asc" && `sort-active`} onClick={()=>dispatch(fetchData(0, "asc", filter))}> Earliest</button>
            </div>
          
        </div>

      

    </section>
    )
}

export default FilterBar