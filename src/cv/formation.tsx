import {MdOutlineTimeline} from 'react-icons/md'
export const Formation=()=>{
    return(
    <div className="mt-[20%] ">
    <h2 className="font-extrabold text-[20px]">Formation</h2>
    <ul className='mt-[10px] ml-[10px]'> 
      <li className="flex text-white items-center"><MdOutlineTimeline className='mr-[7px]'/><p className="font-bold mr-[5px]">2021</p> Bac</li>
      <li className="flex text-white items-center"><MdOutlineTimeline className='mr-[7px]'/><p className="font-bold mr-[5px]">2021-2023</p> CPGE</li>
      <li className="flex text-white items-center"><MdOutlineTimeline className='mr-[7px]'/><p className="font-bold mr-[5px]">2023-2026</p> EMI</li>
    </ul>
   </div>)
}