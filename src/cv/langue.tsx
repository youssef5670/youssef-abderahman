import {LuLanguages} from 'react-icons/lu'

export const Langue=()=>{
    return(
        <div className="mt-[20%] ">
        <h2 className="font-extrabold text-[20px]">Niveau linguistique</h2>
        <ul className='mt-[10px] ml-[10px]'> 
          <li className="flex items-center "><LuLanguages className='mr-[7px]'/><p className="font-bold mr-[5px]">Arabe:</p> Maternelle</li>
          <li className="flex items-center "><LuLanguages className='mr-[7px]'/><p className="font-bold mr-[5px]">Français:</p> Moyen</li>
          <li className="flex items-center "><LuLanguages className='mr-[7px]'/><p className="font-bold mr-[5px]">Anglais:</p> Moyen</li>
        </ul>
       </div>
    )
}