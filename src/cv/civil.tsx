import {PiIdentificationCardLight} from 'react-icons/pi'
import {BiWorld} from 'react-icons/bi'
import {FaCalendarTimes} from 'react-icons/fa'

export const Civil=()=>{
    return(
      <div className='mt-[20%]'>
      <h2 className="font-extrabold text-[20px]">Etat civil</h2>
       <ul className='mt-[10px] ml-[10px]'>
         <li className="flex items-center"><PiIdentificationCardLight className='mr-[7px]'/>EE988895</li>
         <li className="flex items-center"><BiWorld className='mr-[7px]'/>Marocaine</li>
         <li className="flex items-center"><FaCalendarTimes className='mr-[7px]'/>19 ans</li>
       </ul>
      </div>
    )
}