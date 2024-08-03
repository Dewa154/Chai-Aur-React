import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //      .then(response => response.json())
    //      .then(data => {
    //         console.log(data);
    //         setData(data)
    //      })
    //      .catch(error => console.error('Error:', error))
    //   }, [])

  return (
    <div className='text-center m-4 flex flex-row bg-gray-600 text-white p-4 text-3xl'>
      <img src={data.avatar_url} alt="Git Picture" width={300} />
      <div className='p-2 m-2 text-left flex flex-col space-y-4 '>
      <h1 >Name: {data.name}</h1>
      <p className='text-white text-2xl'>Bio: {data.bio}</p>
      <p>Github followers: {data.followers}</p>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}