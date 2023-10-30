import { Profil } from './profil';
import { Personel } from './personel';
import { Civil } from './civil';
import { Formation } from './formation';
import { Langue } from './langue';
import { Loisir } from './loisirs';
import { Contact } from './contact';
import { Nom } from './nom';
import { Hard } from './hard';
import { Soft } from './soft';
import { Competence } from './competence';
import { Footer } from '../footer';

import '../App.css'


export const Cv =() =>{
    return(
      <div className='mt-[-20px]'>
        <div className='cv1 flex'>
        <div className='part1 rounded-bl-[30px] rounded-tl-[30px] justify-between'>
          <Profil/>
          <Personel/>
          <Civil/>
          <Formation/>
          <Langue/>
          <Loisir/>
          <Contact/>
         </div> 
         <div className="part2 rounded-tr-[30px] rounded-br-[30px]">
          <Nom/>
          <Hard/>
          <Soft/>
          <Competence/>
         </div>
       </div>
       <Footer/>
      </div>
    )
}