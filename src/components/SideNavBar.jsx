import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faChartLine} from '@fortawesome/free-solid-svg-icons'



export default function SideNavBar(){
    return(
        
           <div className="w-64 bg-gray-800 fixed h-full py-4 px-2">
              
            <div className='my-2 mb-4'>
          
            <h2 className="text-white text-center p-4 font-specialElite text-2x hover:text-pink-500">My Stuff</h2>
              <hr />
         <ul className="mt-3 text-white font-bold">
            <li className="text-white p-1 font-specialElite text-2x hover:text-pink-500">
                <a href="" className="px-3"> <FontAwesomeIcon icon={faHouse} className="px-4"style={{color: "white",}} />
                Home
                </a>
            </li>
            <li className="text-white p-1 font-specialElite text-2x hover:text-pink-500">
                <a href="" className="px-3"> <FontAwesomeIcon icon={faBook} className="px-4"style={{color: "white",}} />
                My Books
                </a>
            </li>
            <li className="text-white p-1 font-specialElite text-2x hover:text-pink-500">
                <a href="" className="px-3"> <FontAwesomeIcon icon={faChartLine} className="px-4"style={{color: "white",}} />
                Tracked
                </a>
            </li>
         </ul>
         
            
           
          
     
            </div>
          </div>
       
    )
}