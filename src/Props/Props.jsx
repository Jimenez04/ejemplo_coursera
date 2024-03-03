import React, { useEffect, useState } from 'react'

export default function Props() {
    
    const DataFetcher = ({ render, url }) => { 
        const [data, setData] = useState([])

        useEffect(() => {
            if (url.includes('desserts')) {
                setData(['Cake', 'Ice Cream', 'Pie', 'Brownie'])
            } else {
                setData(['Water', 'Soda', 'Juice'])
            }
         }, [])
        return render(data);
    }

  return  (
    <div>Props</div>
  )
}
