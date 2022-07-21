import React from 'react'

function Review({ data }) {
  return (
    <div>
        {data.map((item)=>(
            <div>
                <h4>{item.name}</h4>
                <div>
                    <p>{item.date}</p>
                    <p>{item.comments}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Review