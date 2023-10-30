import {BiCurrentLocation,BiLogoGmail} from'react-icons/bi'
import {PiPhoneFill} from 'react-icons/pi'
export const Personel =() =>{
    return(
        <div className="mt-[20%]">
         <h2 className="font-extrabold text-[20px]">Information personelles</h2>
          <ul className='mt-[10px] ml-[10px]'>
            <li className="flex items-center"><BiCurrentLocation className='mr-[7px]'/>Marrakech</li>
            <li className="flex items-center"><BiLogoGmail className='mr-[7px]'/><a href="mailto:youssefkentari56@gmail.com" id='email'>youssefkentari56@gmail.com</a></li>
            <li className="flex items-center"><PiPhoneFill className='mr-[7px]'/>0694293387</li>
          </ul>
        </div>
    )
}