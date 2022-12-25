import React, { useEffect, useState } from 'react';
import Card from './Card';

function Question3() {

    const [data, setData] = useState({});

    useEffect(() => {

        let APIdata; 

        const api = async() => {
            const url = 'https://api.unsplash.com/search/users?query=nas&client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg';
            const response = await fetch(url);
            APIdata = await response.json();
            setData(APIdata);
            
        }

        api();        

    },[]);

    console.log(data);

  return (
    <div className='container'>
        {data.results?(
            data.results.map((item, index) => {
                return <Card data={item} key={index}/>
            })
        ):""}
    </div>
  )
}

export default Question3