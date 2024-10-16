import React, { useState } from 'react'

const PracticeMultiState = () => {
    let [data, setData] = useState({
        student_Bio_Data: {
            name: "Sagar",
            surName: "Ghothi",
            age: 22,
            hight: 166,
            weight: 50,
            color: "white"
        }
    })
    let { student_Bio_Data } = data
    return (
        <div>
            <h1>This is a React Multiple States</h1>
            <p>This is React State</p>
            <p>Name:{student_Bio_Data.name}</p>
            <p>SurName: {student_Bio_Data.surName}</p>
            <p>Age : {student_Bio_Data.age}</p>
            <p>Hight: {student_Bio_Data.hight}</p>
            <p>Weight: {student_Bio_Data.weight}</p>
            <p>Color: {student_Bio_Data.color}</p>

        </div>
    )
}

export default PracticeMultiState
