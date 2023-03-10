import React from 'react'
import { Audio } from 'react-loader-spinner'

function Loading() {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <Audio
                height={80}
                width={80}
                radius={9}
                color="red"
                ariaLabel="loading"
            />
        </div>
    )
}

export default Loading