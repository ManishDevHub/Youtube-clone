import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Video from '../components/Video.jsx'
import {useAuth} from '../context/AuthProvider.jsx'
export default function Home() {

    const {data} = useAuth();
    console.log(data);
  return (
    <div className='flex'>
        <Sidebar/>
        <div>{
              data.map((item) => {
                if(item.type!=="video" ) return false;
              return  <Video key={item.id} video={item?.video}/>
 } )

            
            }
          
        </div>
    </div>
  )
}
