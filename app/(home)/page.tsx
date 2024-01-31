import { ptBR } from 'date-fns/locale'
import Header from '../_components/header'
import {format} from "date-fns"

function Home() {
  return (
    <div>
        <Header/>
        <div className='px-5 pt-5'>
        <h2 className='text-xl font-bold'>Ola Miguel</h2>
        <p className='capitalize text-sm'>{format(new Date (), "EEEE', 'dd 'de' yyyy", {
            locale:ptBR,
        })}</p>
        </div>

    </div>

    
  )
}

export default Home