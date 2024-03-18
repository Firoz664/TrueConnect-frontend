import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({length = 4, onOtpSubmit=()=> {}}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""))
  const [combinedOtp, setCombinedOtp] = useState("")
  const inputRef = useRef([])
  console.log(combinedOtp)

const handleChange = (e,index) => {
  const inputValue = e.target.value
  if(isNaN(inputValue)) return
  const newOtp = [...otp]
  newOtp[index] = inputValue.substring(inputValue.length -1) 
  setOtp(newOtp)   //taking updated value as js async operstion of useState update function

  const completeOtp  = newOtp.join("")
  setCombinedOtp(completeOtp)

  // move next input box if it is filled
  if(inputValue && index < length-1 && inputRef.current[index+1]) {
    inputRef.current[index+1].focus()
  }
}
const handleKeyDown = (e,index) => {
if (e.key == "Backspace" && !otp[index] && (index > 0) && inputRef.current[index-1]) {
  inputRef.current[index-1].focus()
}
}
const handleClik = (index) => {
inputRef.current[index].setSelectionRange(1,1)

if((index > 0) && !otp[index-1]){
  inputRef.current[otp.indexOf("")].focus()
}
}

useEffect(() => {
if(inputRef.current[0]){
inputRef.current[0].focus()
}
}, [])


  return (
    <div>Please Enter your otp
        <div style={{display:"flex",gap:"1rem",marginTop:"2rem"}}>
{
    otp?.map((value,index) => {
        return (
            <input
            ref={(input)=>(inputRef.current[index] = input)}
            key={index}
            value={value}
             onChange={(e) => handleChange(e,index)}
             onKeyDown={(e) => handleKeyDown(e,index)}
             onClick={() => handleClik(index)}
             style={{padding:"10px",border:`1px solid black`,width:"2.8rem", borderRadius:".5rem"}}
             />
        )
    })
}
        </div>
    </div>
  )
}

export default OtpInput