import React from 'react';




export default function SideNavBar(){
    return(
        
           <div className="w-64 bg-gray-800 fixed h-full py-4 px-2">
              
            <div className='my-2 mb-4'>
          
            <h2 className="text-white text-center p-4 font-specialElite text-2x hover:text-pink-500">My Stuff</h2>
              <hr />
         <ul className="mt-3 text-white font-bold">
            <li className="text-white p-1 font-specialElite text-2x hover:text-pink-500">
                <a href="" className="px-3"> 
                Home
                </a>
            </li>
            <li className="text-white p-1 font-specialElite text-2x hover:text-pink-500">
                <a href="" className="px-3"> 
                My Books
                </a>
            </li>
            <li className="text-white p-1 font-specialElite text-2x hover:text-pink-500">
                <a href="" className="px-3"> 
                Tracked
                </a>
            </li>
         </ul>
         
            
           
          
     
            </div>
          </div>
       
    )
}