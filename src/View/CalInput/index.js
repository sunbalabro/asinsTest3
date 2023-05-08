import { Input } from 'antd'
import React, { useEffect, useState } from 'react'

export const CalInput = ({ totalSum, setTotalSum }) => {
    const [inpValue, setinpValue] = useState('')
    console.log("🚀 ~ file: index.js:6 ~ CalInput ~ inpValue:", inpValue)

    useEffect(() => {
        const val = totalSum
        
        setinpValue(val)
    }, [totalSum])

    const newValue = inpValue.toString()
    
    return (
        <div>
            <Input type='text' placeholder="0" value={newValue} />
        </div>
    )
}