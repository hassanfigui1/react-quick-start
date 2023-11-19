import React from 'react'

function Student(){
    const student = [
        'hassan figuigui','James blunt'
    ]
    const studentsJson = [
        {
            id: 1,
            name: 'hassan figuigui',
            age: 25,
            skill: ['Angular', 'React js', 'JEE']
        },
        {
            id: 2,
            name: 'Karima fiuigui',
            age: 25,
            skill: ['Biology', 'Geology']
        },
        {
            id: 3,
            name: 'Ahmed Guirrane',
            age: 22,
            skill: [ 'React js', 'JEE']
        }
    ]
    const studentsList = studentsJson.map((student) => {
      
    })
    const students = student.map((std, index)=><h1 key={index}>{std}</h1>)
    return(
        <div>
          {students}
        </div>
    )

}
export default Student