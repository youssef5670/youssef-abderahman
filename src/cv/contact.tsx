import {BsWhatsapp,BsFacebook,BsInstagram} from 'react-icons/bs'
import { transform } from 'typescript';

export const Contact=()=>{
    return(
        <footer className='mt-[24%] flex items-center justify-between'>  
        <p className='font-bold text-[black]'>contact:</p>
        <div className='flex'>
        <BsFacebook className='facebook mr-[5px]'/>
        <BsWhatsapp className='mr-[5px]'/>
        <BsInstagram className='mr-[5px]'/>         
      </div>
    
    
     </footer>
    )
}