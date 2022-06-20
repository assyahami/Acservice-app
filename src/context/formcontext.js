import react, { useState, useEffect, useContext } from 'react';
import client from "../Client"
const FormProvider = react.createContext();

function Formcontext({ children }) {
  const [Cleaningweek, setCleaningweek] = useState('Once');
  const [btnval, setBtnval] = useState({
    btnval1: '3',
    btnval2: '3-6',
    btnval3: 'Yes',
    Instruc: '',
  });
  const [formdb, setFormdb] = useState({
    date: '',
    time: '',
    ltn: '',
    err: '',
    err2: '',
    err3: '',
    errcheck: true,
  });
  useEffect(() => {
    const watchTextField = () => {
      if (formdb.date !== '') {
        setFormdb({
          ...formdb,
          err: '',
          errcheck: false,
        });
      }
      if (formdb.time !== '') {
        setFormdb({
          ...formdb,
          err2: '',
          errcheck: false,
        });
      }
      if (formdb.ltn !== '') {
        setFormdb({
          ...formdb,
          err3: '',
        });
      }
    };
    watchTextField();
  }, [formdb]);
  console.log(Cleaningweek)
const handlesubmit=async()=>{

const {btnval1,
btnval2,
btnval3,
Instruc}=btnval
const {date,time,ltn}=formdb

  let userdoc = {
    _type: 'CustomerCalledForService',
    _id: Date.now(),
    location: "From"+ltn,
    cleaners: btnval1,
    cleaningtime: btnval2,
    cleaningweek: Cleaningweek,
    materials: btnval3,
    specialinstruction: Instruc,
    servicedate: date,
    servicetime: time,
  };
  await client.create(userdoc)
  setBtnval({...btnval, btnval1: 3,
    btnval2: '3-6',
    btnval3: 'Yes',
    Instruc: ''})
    setFormdb({...formdb,
        date: '',
    time: '',
    ltn: '',
    err: '',
    err2: '',
    err3: '',
    errcheck: true})
    console.log("submitted")
}
  return (
    <FormProvider.Provider
      value={{
        Cleaningweek,
        btnval,
        setBtnval,
        setCleaningweek,
        handlesubmit,
        // handlecheck,
        formdb,
        setFormdb,
      }}
    >
      {children}
    </FormProvider.Provider>
  );
}

function useGlobalcontext() {
  return useContext(FormProvider);
}

export { Formcontext, useGlobalcontext };
