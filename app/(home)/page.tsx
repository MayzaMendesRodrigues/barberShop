import { ptBR } from 'date-fns/locale'
import Header from '../_components/header'
import {format} from "date-fns"
import Search from './_components/search'

function Home() {
  return (
    <div>
        <Header/>
        <div className='px-5 pt-5'>
        <h2 className='text-xl font-bold'>Ola, Miguel!</h2>
        <p className='capitalize text-sm'>{format(new Date (), "EEEE', 'dd 'de' yyyy", {
            locale:ptBR,
        })}</p>
        </div>
        <div className="px-5 mt-6">
        <Search/>

        </div>

      

    </div>

    
  )
}

export default Home