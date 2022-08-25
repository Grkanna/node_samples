import axios from 'axios';
import { useEffect, useState, useContext } from 'react'
import DataBase from './EmployeeDB'
import {Context} from './Header'

function Details(props) {
    const contextStruct = useContext(Context)
    const { search, checkValues } = contextStruct != undefined ? contextStruct : { search
:''};
    const [userDetails, setUserDetails] = useState([])

    const config = {
        headers: {
            "Content-type": "application/json",
             "Authorization": `Bearer ${localStorage.getItem('userAuth')}`
        }
   }

    useEffect ( () => {
        let filterType = '';
        checkValues.filter((checkedItem) => {
            if (checkedItem.isChecked && checkedItem.type == "Designation"){
                filterType = "designation"
            } else if (checkedItem.isChecked && checkedItem.type == "Name") {
                filterType = "employeename"
            } 
        })
        axios.post('http://localhost:5000/employee', {filterType, search}, config)
        .then((json) => {
            console.log('details', json.data.userData)
            setUserDetails(json.data.userData)
        })
        // let [...tempArr] = userDetails;
        // if (checkValues && checkValues.length) {
        //     let tempArr = userDetails.filter((user) => {

        //         if (search != '' && search && filterType != 'All') {
        //             if (filterType == "Desgination" && user.Designation.toLowerCase().includes(search.toLowerCase())) {
        //                 return user;
        //             } else if (filterType == "Name" && user.Name.toLowerCase().includes(search.toLowerCase())) {
        //                 return user;
        //             }
        //         } else if (user.Name.toLowerCase().includes(search.toLowerCase())) {
        //             return user;
        //         }
        //     })
        //     setUserDetails(tempArr);
        // }
    }, [search])

    return(
        <>
            <div className="user-container bg-secondary">
                <div className='d-flex justify-content-start'>
                    <div className='users d-flex justify-content-between col p-5'>
                        {userDetails.map( (items,i) =>{
                            return(
                                <div key={i}>
                                    <img src={items.Image} width={100}></img>
                                    <div>
                                        <strong>Name: </strong>{items.employeename}<br/>
                                        <strong>Age: </strong>{items.age}<br />
                                        <strong>Place: </strong>{items.place}<br />
                                        <strong>Designation: </strong>{items.designation}
                                    </div>
                                </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details;