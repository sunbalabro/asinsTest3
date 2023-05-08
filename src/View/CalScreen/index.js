import React, { useState } from 'react'
import { CalButtons } from '../CalButtons'
import '../../Style/cal.css'
import { CalInput } from '../CalInput'

export const CalScreen = () => {
    const [totalSum , setTotalSum] = useState('')
  return(
    <div className='calScreen'>
        <CalButtons setTotalSum={setTotalSum} />
        {/* <CalInput totalSum={totalSum} setTotalSum={setTotalSum} /> */}
    </div>
   )

 }