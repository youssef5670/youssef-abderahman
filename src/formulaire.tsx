import {BiCurrentLocation,BiLogoGmail} from'react-icons/bi'
import {PiPhoneFill} from 'react-icons/pi'
import {PiIdentificationCardLight} from 'react-icons/pi'
import {BiWorld} from 'react-icons/bi'
import {FaCalendarTimes} from 'react-icons/fa'
import {MdOutlineTimeline} from 'react-icons/md'
import {LuLanguages} from 'react-icons/lu'
import {TbActivityHeartbeat} from 'react-icons/tb'
import {BsWhatsapp,BsFacebook,BsInstagram} from 'react-icons/bs'
import {GiLinkedRings} from 'react-icons/gi'
import {BsCodeSlash} from 'react-icons/bs'


import { useState ,FormEvent} from 'react'
import './form.css'
import { Cv } from './cv/cv'
import { Link } from 'react-router-dom'
import { link } from 'fs'



export const Formulaire =()=>{
    const [photo,setphoto] = useState('');
    const [loisir,setloisir] = useState('');
    const [soft,setsoft] = useState('');
    const [langue, setlangue] = useState('');
    const [hard, sethard] = useState('');
    const [telinvalid,settelinvalid] = useState('');
    const [nominvalid, setnominvalid] = useState('');
    const [prenominvalid, setPrenominvalid] = useState('');
    const [cin,setcin] = useState('');
    const [nom, setnom] = useState('');
    const [prenom, setprenom] = useState('');
    const [adresse, setadresse] = useState('');
    const [email, setemail] = useState('');
    const [telephone, settelephone] = useState('');
    const [age, setage] = useState('');
    const [nationalite, setnationalite] = useState('');
    const [objectifs, setobjectifs] = useState('');
    const [social, setsocial] = useState('');
    const [formation,setformation] = useState('');

    const [formsbmitted, setformsubmitted] = useState(false);    
    const [donnees, setdonnees] = useState({
        nom: '',
        prenom: '',
        adresse: '',
        email: '',
        telephone: '',
        age: '',
        nationalite: '',
        objectifs: '',
        social: '',
        cin:'',
        formation:'',
        hard:'',
        langue:'',
        loisir:'',
        soft: '',
        photo: '',
      });

     const handlesubmit = (e:FormEvent) =>{
        e.preventDefault();
        console.log(photo);
        setdonnees({
            nom,
            prenom,
            adresse,
            email,
            telephone,
            age,
            nationalite,
            objectifs,
            social,
            cin,
            formation,
            hard,
            langue,
            loisir,
            soft,
            photo,
        });
        setformsubmitted(true);

    }
//prenom
    const handlePrenomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const inputValue = e.target.value;
        e.target.value = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
        setprenom(e.target.value);
    
        const pattern = /^[a-zA-Z]*$/;
        if (!pattern.test(e.target.value)) {
          setPrenominvalid("Le prénom ne doit contenir que des lettres alphabétiques.");
          e.target.value='';
        } else {
          setPrenominvalid('');
        }
  }
//nom
  const handlenomchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = e.target.value;
    e.target.value = inputValue.toUpperCase();
    setnom(e.target.value);

    const pattern = /^[a-zA-Z]*$/;
    if (!pattern.test(e.target.value)) {
      setnominvalid("Le nom ne doit contenir que des lettres alphabétiques.");
      setnom('');
    } else {
      setnominvalid('');
    }
}
//telephone
    const handltelephone = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const tel= e.target.value;
        const pattern = /[^0-9]/;
        if(pattern.test(tel) || tel.length>10){
            settelinvalid('le num de telephone ne doit pas dépasser 10 chiffres et sans utiliser des lettres ');
            e.target.value= '';
        }else{
            settelinvalid('');
        }
    }



    return(
        <div className='pb-[5%] pt-[20px] mt-[-20px]'>
            {formsbmitted ?(
        
        <div className='cv1 flex'>
        <div className='part1 rounded-bl-[30px] rounded-tl-[30px] justify-between'>

            <div> 
            <div className='flex justify-center items-center'>
            <p id='title'>cv de travail de {donnees.prenom} {donnees.nom}</p>
            <img src={donnees.photo} id="profil" />
            </div>
            <div>
            <p id='subtitle'>exemple de cv par react</p>
            </div>
            </div>

            <div className="mt-[20%]">
            <h2 className="font-extrabold text-[20px]">Information personelles</h2>
            <ul className='mt-[10px] ml-[10px]'>
                <li className="flex items-center"><BiCurrentLocation className='mr-[7px]'/>{donnees.adresse}</li>
                <li className="flex items-center"><BiLogoGmail className='mr-[7px]'/><a href='mailto:{donnees.email}' id='email'>{donnees.email}</a></li>
                <li className="flex items-center"><PiPhoneFill className='mr-[7px]'/>{donnees.telephone}</li>
            </ul>
            </div>

            <div className='mt-[20%]'>
            <h2 className="font-extrabold text-[20px]">Etat civil</h2>
            <ul className='mt-[10px] ml-[10px]'>
                <li className="flex items-center"><PiIdentificationCardLight className='mr-[7px]'/>{donnees.cin}</li>
                <li className="flex items-center"><BiWorld className='mr-[7px]'/>{donnees.nationalite}</li>
                <li className="flex items-center"><GiLinkedRings className='mr-[7px]'/>{donnees.social}</li>
                <li className="flex items-center"><FaCalendarTimes className='mr-[7px]'/>{donnees.age} ans</li>
            </ul>
            </div>

            <div className="mt-[20%] ">
            <h2 className="font-extrabold text-[20px]">Formation</h2>
            <ul className='mt-[10px] ml-[10px]' id='formation'>
            <li className="flex items-center "><MdOutlineTimeline className='mr-[7px]'/>{donnees.formation}</li>
            </ul>
            </div>

            <div className="mt-[20%] ">
            <h2 className="font-extrabold text-[20px]">Niveau linguistique</h2>
            <ul className='mt-[10px] ml-[10px]' id='langue'>
            <li className="flex items-center "><LuLanguages className='mr-[7px]'/>{donnees.langue}</li>
            </ul>
            </div>

            <div className="mt-[20%]">
            <h2 className="font-extrabold text-[20px]">Loisirs</h2>
            <ul className='mt-[10px] ml-[10px] '>
                <li className="flex items-center "><TbActivityHeartbeat className='mr-[7px]'/>{donnees.loisir}</li>
            </ul>
            </div>

            <footer className='mt-[24%] flex items-center justify-between'>  
            <p className='contact font-bold'>contact:</p>
            <div className='flex'>
            <BsFacebook className='facebook mr-[5px]'/>
            <BsWhatsapp className='mr-[5px]'/>
            <BsInstagram className='mr-[5px]'/>         
            </div>
            </footer>

         </div> 
         <div className="part2 rounded-tr-[30px] rounded-br-[30px]">
            <div className='flex font-extrabold mt-[40px] ml-[26px] text-[60px]'>
            <h1 className='nom mr-[14px]'>{donnees.nom} {donnees.prenom}</h1>

            </div>
            <div className='mt-[70px]'>
                <h2 className='font-extrabold text-[24px] flex items-center'><BsCodeSlash className='mr-[10px]'/>Hard skills</h2>
                    <ul className='text-[13px] mt-[10px] list-disc ml-[20px] '>
                         <li > {donnees.hard}</li>
                    </ul>
            </div>
            <div className='mt-[80px]'>
                <h2 className='font-extrabold text-[24px] flex items-center'><BsCodeSlash className='mr-[10px]'/>Soft skills</h2>
                <ul className='text-[13px] mt-[10px] list-disc ml-[20px] '>
                    <li >{donnees.soft}</li>

                </ul>
            </div>
            <div className='mt-[80px]'>
                <h2 className='font-extrabold text-[24px] flex items-center'><BsCodeSlash className='mr-[10px]'/>Mes objectifs</h2>
                <ul className='text-[13px] mt-[10px] list-disc ml-[20px] '>
                    <li>{donnees.objectifs}</li>
                </ul>
            </div>
         </div>
        </div>

            ):(
                <form className='form backdrop-blur-[17px] w-[70%] ml-[15%] pt-[15px] pb-[15px] rounded-[15px]' onSubmit={handlesubmit}>
                <h1 className="font-extrabold ml-[10%] text-[30px] mb-[15px]">Formulaire de cv</h1>
                
                <label>Nom</label><br/>
                <input type='text' placeholder='nom' name='nom' onChange={(e)=>{setnom(e.target.value);handlenomchange(e)}} value={nom}/><br/>
                <p className='erreur text-[12px] font-bold'>{nominvalid}</p>

                <label>Prenom</label><br/>
                <input type='text' placeholder='prenom' name='prenom' onChange={(e)=>{setprenom(e.target.value); handlePrenomChange(e)}} value={prenom}/><br/>
                <p className='erreur text-[12px] font-bold'>{prenominvalid}</p>

                <label>CIN</label>
                <input type='text' placeholder='votre CIN' name='cin' onChange={(e)=>setcin(e.target.value)}/>

                <label>Adresse</label><br/>
                <input type='text' placeholder='votre adresse' name='adresse' onChange={(e)=>setadresse(e.target.value)}/><br/>

                <label>Email</label><br/>
                <input type='email' placeholder='email' name='email' onChange={(e)=>setemail(e.target.value)}/><br/>
                
                <label>Telephone</label><br/>
                <input type='text' placeholder='votre numero de telephone' name='telephone' onChange={(e)=>{{settelephone(e.target.value)};handltelephone(e)}} value={telephone}/><br/>
                <p className='erreur text-[12px] font-bold'>{telinvalid}</p>

                <label>Age</label><br/>
                <input type='number' max={'100'} min={'12'} name='age' onChange={(e)=>setage(e.target.value)}/><br/>

                <label>Nationalité</label>
                <select name='nationalite' onChange={(e)=>setnationalite(e.target.value)}>
                    <option value={'Marocaine'}>Marocaine</option>
                    <option value={'Etrangère'}>Etrangère</option>
                </select><br/><br/>

                <label>Formation</label>
                <textarea className='ml-[10%] w-[80%] rounded-[9px] pl-[5px] mt-[5px]' placeholder='sauter une ligne pour chaque formation' onChange={(e)=>setformation(e.target.value)}></textarea>

                <label>Niveau linguistique</label>
                <textarea className='ml-[10%] w-[80%] rounded-[9px] pl-[5px] mt-[5px]' placeholder='sauter une ligne pour chaque langue' onChange={(e)=>setlangue(e.target.value)}></textarea>

                <label>Loisirs</label>
                <textarea className='ml-[10%] w-[80%] rounded-[9px] pl-[5px] mt-[5px]' placeholder='sauter une ligne pour chaque loisir' onChange={(e)=>setloisir(e.target.value)}></textarea>

                <label>Hard skills</label>
                <textarea className='ml-[10%] w-[80%] rounded-[9px] pl-[5px] mt-[5px]' placeholder='sauter une ligne pour chaque skill' onChange={(e)=>sethard(e.target.value)}></textarea>
                <label>Soft skills</label>
                <textarea className='ml-[10%] w-[80%] rounded-[9px] pl-[5px] mt-[5px]' placeholder='sauter une ligne pour chaque skill' onChange={(e)=>setsoft(e.target.value)}></textarea>
                
                <label>Objectifs</label><br/>
                <textarea className='ml-[10%] w-[80%] rounded-[9px] mt-[5px]' placeholder='decrir votre' onChange={(e)=>setobjectifs(e.target.value)}></textarea>

                <div className='flex items-center ml-[10%] '>
                    <h1 className='font-bold w-1/3'>Situation social</h1>
                    <label className='text-[14px]'>Marié(e)</label>
                    <input type="radio" name='choix' className='choix ml-[-3px] scale-[50%] mr-[-3pxpx]' onChange={(e)=>setsocial(e.target.value)} value={'marié(e)'}/>
                    <label className='text-[14px]'>Célébataire</label>
                    <input type='radio' name='choix' className='choix ml-[0px] scale-[50%] mr-[10%]' onChange={(e)=>setsocial(e.target.value)} value={'célébataire'}/>
                </div><br/>
                <div className='flex items-center justify-between'>
                    <p className='text-black text-[12px] w-1/2 font-bold ml-[10%]'> Photo de profile</p>
                    <input type='file' accept="image/*" className='scale-[0.8] rounded-[5px] text-[13px] mr-[10%] bg-[transparent]'/>
                </div>
                
                
                <input type='submit' className='submit font-bold'/>
                
            </form>
            )}

   
        </div>
    )
}


