import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import employees from './EmployeeDB';
import Details from './Details';
import { createBrowserHistory } from 'history'
export const Context = React.createContext();

function Header() {
    const history = createBrowserHistory()
    const [search, setSearch] = useState('');
    const [checkValues, setCheckButton] = useState([
        { type: "All", isChecked: false }, 
        { type: "Designation", isChecked: false }, 
        { type: "Name", isChecked: false }
    ]);

    const inputSearch = useRef();


    useEffect(() => {
        inputSearch.current.focus()
    }, [])

    const requirementChange = (selectedItems) => {
        let updatedValue = checkValues.map((items) => {
            if (items.type === selectedItems.type){
                return {...items, isChecked:!items.isChecked}
            }
            else {
                return { ...items, isChecked: false }
            }
        })
        setCheckButton(updatedValue)
    }

    const onChangeHandlerSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <Context.Provider value={{ checkValues, search}}>
            <div className="container">
                <div className="d-flex justify-content-center row">
                    <h1>Search Employee Details here:</h1>
                    <div className="input-group mb-3 mt-5">
                        <span className="input-group-text">Search Here</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandlerSearch} value={search} ref={inputSearch} />
                    </div>
                    <div className='d-flex justify-content-start mt-2'>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            {checkValues.map((items, i) => {
                                return (
                                    <div className="form-check form-check-inline mx-5" key={i}>
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" id="inlineCheckbox1" 
                                            value={items.type}
                                            onChange={() => requirementChange(items)} 
                                            name={items.type} 
                                            checked={items.isChecked}
                                        />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">{items.type}</label>
                                    </div>
                                );
                            })
                            }
                            <span role='button' onClick={history.push('/addUser')}>Add User</span>
                        </div>
                    </div>
                </div>
                <Details></Details>
            </div>
        </Context.Provider>
    )
}

export default Header;