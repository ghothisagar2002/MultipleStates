import React, { useState } from 'react'

const PracticeOneState = () => {
    let [state, setState] = useState({
        name: "Waheguru ji",
    })
    return (
        <div>
            <h1>This is a react Js State</h1>
            <p>This is very usefull in react.js State</p>
            <p>God Name :{state.name}</p>
            <pre>{JSON.stringify(state)}</pre>
        </div>
    )
}

export default PracticeOneState
