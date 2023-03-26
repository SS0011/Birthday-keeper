import React from 'react'

export default function Select({className,onChange,dateArray ,defaultValue}){
  return(
    <>
    <select className={className} onChange={onChange}>
      <option>{defaultValue}</option>
      {dateArray.map(x=><option>{x}</option>)}


    </select>
    </>
  )
}