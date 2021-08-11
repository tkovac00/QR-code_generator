import React, { useState } from 'react';
import QRCode from 'qrcode';
import './App.css'

function App() {

  const [text, setText] = useState({
    payer_name:'', payer_surname:'', payer_adress:'', payer_postNu_city:'', bill_adress:'', bill_postNu_city:'', IBAN:'', 
    model:'', reference_number:'',  month_year:'',  date:'' });
  const [image, setImage] = useState('');
  const [isClicked, setIsClicked] = useState('false');
    // Creating the data
let data = {
  payer_name: text.payer_name,
  payer_surname: text.payer_surname,
  payer_adress: text.payer_adress,
  payer_postNu_city: text.payer_postNu_city,
  bill_adress: text.bill_adress,
  bill_postNu_city: text.bill_postNu_city, 
  IBAN: text.IBAN, 
  model: text.model,
  reference_number: text.reference_number,  
  month_year: text.month_year, 
  date: text.date
}

// Converting the data into String format
let stringdata = JSON.stringify(data)

  const generateQrCode = async () => {
    try {
      const res = await QRCode.toDataURL(stringdata);
      setImage(res);
      setIsClicked(true);
    }
    catch (err) {
      console.log(err);
    }
  }

  const clear = () => {
    setText({payer_name:'', payer_surname:'', payer_adress:'', payer_postNu_city:'', bill_adress:'', bill_postNu_city:'', IBAN:'', 
    model:'', reference_number:'',  month_year:'',  date:''});
    setIsClicked(false);
}


  return ( 
      <div className='Maincontainer'>
        
        <div className='container'>
        <h1>QR-GENERATOR</h1>
        <h4>Enter data here:</h4><br />
        <label>Name:</label><br />
        <input type="text" name="payer_name" value={text.payer_name} required onChange={(e) => setText({ ...text, payer_name: e.target.value }) }></input><br />
        <label>Surname:</label><br />
        <input type="text" name="payer_surname" value={text.payer_surname} onChange={(e) => setText({ ...text, payer_surname: e.target.value })}></input><br />
        <label>Adress:</label><br />
        <input type="text" name="payer_adress" value={text.payer_adress} onChange={(e) => setText({ ...text, payer_adress: e.target.value })}></input><br />
        <label>Postal code and city:</label><br />
        <input type="text" name="payer_postNu_city" value={text.payer_postNu_city} onChange={(e) => setText({ ...text, payer_postNu_city: e.target.value })}></input><br />
        <label>Payment adress:</label><br />
        <input type="text" name="bill_adress" value={text.bill_adress} onChange={(e) => setText({ ...text, bill_adress: e.target.value })}></input><br />
        <label>Payment postal code and city:</label><br />
        <input type="text" name="bill_postNu_city" value={text.bill_postNu_city} onChange={(e) => setText({ ...text, bill_postNu_city: e.target.value })}></input><br />
        <label>IBAN:</label><br />
        <input type="text" name="IBAN" value={text.IBAN} onChange={(e) => setText({ ...text, IBAN: e.target.value })}></input><br />
        <label>MODEL:</label><br />
        <input type="text" name="model" value={text.model} onChange={(e) => setText({ ...text, model: e.target.value })}></input><br />
        <label>Reference number:</label><br />
        <input type="text" name="reference_number" value={text.reference_number} onChange={(e) => setText({ ...text, reference_number: e.target.value })}></input><br />
        <label>Payment month/year:</label><br />
        <input type="month" name="month_year" value={text.month_year} onChange={(e) => setText({ ...text, month_year: e.target.value })}></input><br />
        <label>Payment date:</label><br />
        <input type="date" name="date" value={text.date} onChange={(e) => setText({ ...text, date: e.target.value })}></input><br /><br />
        <button onClick={() => generateQrCode()}>Generate</button>
        <a href={image} download onClick={()=> clear()}><button >Download</button></a>
        <button onClick={()=> clear()}>Cancel</button><br /><br /><br />
        {(image && isClicked) ? (<img src={image} alt="img" />) : null} 
        </div>
      </div>
  );
}

export default App;
