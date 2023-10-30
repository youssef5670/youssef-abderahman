import {SiYourtraveldottv,SiElectron} from 'react-icons/si'
import {BiFootball,BiSwim} from 'react-icons/bi'
import {MdDraw} from 'react-icons/md'
import {IoLogoGameControllerB} from 'react-icons/io'

export const Loisir=()=>{
    return(
        <div className="mt-[20%]">
        <h2 className="font-extrabold text-[20px]">Loisirs</h2>
         <ul className='mt-[10px] ml-[10px] '>
           <li className="flex items-center "><SiYourtraveldottv className='mr-[7px]'/>Voyage</li>
           <li className="flex items-center "><BiFootball className='mr-[7px]'/>Football</li>
           <li className="flex items-center "><SiElectron className='mr-[7px]'/>Technologie</li>
           <li className="flex items-center "><MdDraw className='mr-[7px]'/>Designing</li>
           <li className="flex items-center "><BiSwim className='mr-[7px]'/>Natation</li>
           <li className="flex items-center "><IoLogoGameControllerB className='mr-[7px]'/>Gaming</li>

         </ul>
        </div>
    )
}