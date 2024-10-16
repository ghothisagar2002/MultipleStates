import React from 'react'

const PracticeOnePropse = (props) => {
    console.log(props)
    return (
        <div>
            <h1>This is a Propse In React js</h1>
            <p>This is react js propse in react js</p>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Sex : {props.sex}</p>
            <p>Qualification :{props.qualification}</p>
            <pre>{JSON.stringify(props)}</pre>
        </div>
    )
}

export default PracticeOnePropse
