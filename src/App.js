import React, { useState, useEffect } from 'react';
// import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




// function where most of the work happes
const Create_form = () => {


    // create an array for input values
    const[data,setData]= useState([]);

useEffect(()=>{
    fetch("https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json")
    .then(resp=>resp.json())
    .then(resp=>setData(resp))
})



const [inputarr, setinputarr]  = useState([])

const [values, setValues] = useState ({
        firstName:'',
        lastName: '', 
        emailAddress:'',
        mobileNumber:'',
        gender: '',
        nationality:'',
       
    }) 
// function for the gender radio buttons
const handleRadioChange = event  => {
        const target= event.target
        const name = target.name
        const value = target.value
        setValues({
            ...values,
            [name]:value
        })
    }
// function for the other values
function changeHandle(e){
       setValues({
        ...values, 
        [e.target.name]:e.target.value})
        
    }
 let {firstName, lastName, emailAddress, mobileNumber, gender,nationality}= values;
function changehandle(){
         setinputarr([...inputarr,{firstName,lastName,gender,emailAddress,mobileNumber,nationality}])
         setValues({firstName:'',lastName:'', gender:'', emailAddress:'',mobileNumber:'',nationality:''})
         
    }
    
    return (
      <React.Fragment>
        <div className='flex-container'>
            
           
        <div className='flex-item tabledesign'>
             {/* <div>
                  <button onClick={getData}> Data</button>
            </div> */}
             
            <h2>List of accounts</h2>
            {/* <MaterialTable data={data} columns={columns}/> */}
            <table>
           
            <thead>
            <tr>
                <th>
                    Full Name
                </th>
                <th>
                    Gender
                </th>
                <th>
                    Email Address
                </th>
                <th>
                    Mobile Number
                </th>
                <th>
                    Nationality
                </th>
            </tr>
            </thead>
            <Johndoe/>
            {
                data.map((fir, ind)=>{
    return(
        <tr key={ind}>
            <td>{`${fir.firstName} ${fir.lastName}`}</td>
            <td>{`${fir.gender}`}</td>
            <td>{`${fir.emailAddress}`}</td>
             <td>{`${fir.mobileNumber}`}</td>
              <td>{`${fir.nationality}`}</td>
        </tr>
    )
})}{
                inputarr.map (
                    (info,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{`${info.firstName} ${info.lastName}` }</td>
                                <td>{info.gender}</td>
                                <td>{info.emailAddress}</td>
                                <td>{info.mobileNumber}</td>
                                <td>{info.nationality}</td>
                            </tr>
                        )
                    }
                 )   }
            
                       
            </table>

        </div>
        <div className='create_account flex-item'>
            <form>
                 <h2>Create Account</h2>
    
                <input
                   onChange={changeHandle}
                   value={values.firstName}
                   name='firstName'
                   type="text"
                   required
                   placeholder='First Name'
                   
                />
                <br />
                <input 
                   value={values.lastName}
                   name='lastName'
                   type="text"
                   required
                   placeholder='Last Name'
                   onChange={changeHandle}
                /> <br /> 
                <div className='gender'>
                <input type="radio"className='radio' value='Male' name='gender' onChange={handleRadioChange} required/>
                <label className='radio'> Male </label>
                <input type="radio" className='radio' value='Female' name='gender' onChange={handleRadioChange} required/>
                <label className='radio'> Female </label>
                </div>
                <input 
                   type="email"
                   required
                   placeholder='Email Address'
                   value={values.emailAddress}
                   name='emailAddress'
                   onChange={changeHandle}
                />
                 <br />
                <input 
                   type="tel"
                   required
                   placeholder='Mobile Number'
                   value={values.mobileNumber}
                   name='mobileNumber'
                   onChange={changeHandle}

                />
                 <br />
                <div>
                    
                    <select name='nationality'   onChange={changeHandle} placeholder='Nationality'>
                     <option value=''> Nationality</option>
                    <option value='Nigerian'> Nigerian</option>
                    <option value='Chinese'> Chinese</option>
                    <option value='American'> American</option>
                    <option value='South African'> South African</option>
                    </select>
                </div>
                <br /> <br />
                 <button onClick={changehandle }>Submit</button>
                 

                 
            </form>
            </div> </div>
      </React.Fragment>
        )
    }


function Johndoe(){
    return <React.Fragment>
    <tbody className='table_body' >
    <tr>
                <td> John Doe</td>
                <td> Male</td>
                <td> johndoe@gmail.com</td>
                <td> +234708819181</td>
                <td> Nigerian</td>
    </tr>   
    </tbody>     </React.Fragment>   
}

function App(){
    return(
        <React.Fragment>
            <Create_form/>
        </React.Fragment>
    )
}

export default App;


