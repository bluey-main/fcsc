import React from 'react'


const page = () => {
  return (
    <div>
      {
        Array.from({length:5}).map((_,index) => (
          <Box/>
        ))
      }
    </div>
  )
}

export default page