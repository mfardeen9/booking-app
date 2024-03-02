import React, { useState } from 'react'
import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options) //the values taken form homepage like destination, date, options(no. of Adult,chilren,rooms) will be updated in the list page.

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span> 
              {openDate && (<DateRange onChange={(item) => setDate([item.selection])}  
              minDate={new Date()} ranges={date}/>)}  
              {/* when onclick is clicked it will check if openDate is active "true" if it is open it will close it. Date window will disappear.  */}
            </div>  

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price <small>per night</small></span>
                  <input type="number" className="lsOptionInput"/>
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price <small>per night</small></span>
                  <input type="number" className="lsOptionInput"/>
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} placeholder={options.children} className="lsOptionInput"/>
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
                </div>
              </div>
            </div>
              <button>Search</button>

           </div>
          <div className="listResult">
           <SearchItem/>
           <SearchItem/>
           <SearchItem/>
           <SearchItem/>
           <SearchItem/> 
           <SearchItem/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default List
