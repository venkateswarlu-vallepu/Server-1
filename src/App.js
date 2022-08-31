import './App.css';
import React,{useRef} from 'react';

function App() {
   let nameDisplay = useRef();
   let nameInput = useRef();
   let emailInput = useRef();
   let emailDisplay = useRef();
   let idInput = useRef();
   let idDisplay = useRef();
  //  let name2 = useRef();
  //  let email2 = useRef();
  //  let name3 = useRef();
  //  let email3 = useRef();
  
   
  let onGetData = async ()=>{
   
    let reqOptions = {
      method:"GET",

    };
    let rawData = await fetch("https://reqres.in/api/users?page=2", reqOptions);
    
    let convertedData = await rawData.json();

    console.log("Getting Data From Server");
    console.log(convertedData);
  };
   let gettingName = async ()=>{
    
    let requestMethods = {
     method: "GET",
    };
    let rawData = await fetch("https://reqres.in/api/users?page=2",requestMethods);

    let convertedData =  await rawData.json();
   
    let nameData = Number(nameInput.current.value)

    nameDisplay.current.innerHTML = convertedData.data[nameData].first_name;
   
   };

   let gettingEmail = async ()=>{
    
    let requestMethods = {
     method:"GET",
    };
    let rawData = await fetch("https://reqres.in/api/users?page=2",requestMethods);

    let convertedData =  await rawData.json();
   
    let emailData = Number(emailInput.current.value);

    emailDisplay.current.innerHTML = convertedData.data[emailData].email;
   
   };

   let gettingId = async ()=>{
    let requestMethods = {
      method: "GET",
    };
    let rawData = await fetch("https://reqres.in/api/users?page=2",requestMethods);

    let convertedData =  await rawData.json();

    let idData = Number(idInput.current.value);

    idDisplay.current.innerHTML = convertedData.data[idData].id;
  
   } ;

  return (
    <div className="App">
      <h1>Getting Data from Server-1</h1>
    
      <button type='button' onClick={()=>{
        onGetData();
      }}>Server Data</button>
       <br></br>
         <div className='div'>
          <div className='idclass'>
          <span>
            <label className='label'>Check ID:</label>
          </span>
       <input id="login" type="number" min={0} max={5} ref={idInput} />
          <label  ref={idDisplay}></label>

      <button type='button' onClick={()=>{
        gettingId();
      }}>GetData</button>
      </div>
      <div className='idclass'>
      <span>
            <label className='label'>Check Name:</label>
          </span>
         <input id="login" type="number" min={0} max={5} ref={nameInput} />
          <label  ref={nameDisplay}></label>

      <button type='button' onClick={()=>{
        gettingName();
      }}>GetData</button>
</div>
      <div className='idclass'>
      <span>
            <label className='label'>Check Email:</label>
          </span>
      <input id="login" type="number" min={0} max={5} ref={emailInput} />
          <label  ref={emailDisplay}></label>

      <button type='button' onClick={()=>{
       gettingEmail();
      }}>GetData</button>
      </div>
</div>
    </div>
  );
}

export default App;
