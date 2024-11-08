import React, { useEffect, useRef ,useState} from 'react'

const UseRefEx = () => {
    const [userInput,setuserInput] = useState("");
    //const [renders,setRender] = useState(0);
    const renders = useRef(0);

    useEffect(()=>{
        renders.current = renders.current + 1;
    })
  return (
    <div>
        <input value={userInput} onChange={(ele)=>{setuserInput(ele.target.value)}}></input>
        <p>The componenet rendered : {renders.current} times</p>
    </div>
  )
}

export default UseRefEx