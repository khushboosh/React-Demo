import React,{useState} from 'react';

const ObjComp = () => {
  
    const [objState, setObjstate] = useState({
        fname: "Radika",
         age:24
     });
  const   updateObjhandler =() =>{
      setObjstate({...objState, fname:"Hello"})
  }
    return <div>
    <h1>{objState.fname},{objState.age}</h1>
    <h1>Hello Obj</h1>
    <button onClick={updateObjhandler}>update</button>
    </div>;
}



export default ObjComp;