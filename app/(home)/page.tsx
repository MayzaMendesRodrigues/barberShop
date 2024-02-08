import { ptBR } from 'date-fns/locale'
import Header from '../_components/header'
import {format} from "date-fns"
import Search from './_components/search'
import BookingItem from '../_components/booking-item'
import BarbershopItem from './_components/barbershop-item'
import { db } from '../_lib/prisma'

async function Home() {
  const barbershops = await db.barbershop.findMany({})

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
        {/*<div className="px-5 mt-6">
            <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">Agendamentos</h2>
            <BookingItem/>
        </div>
      */}
        <div className="px-5 mt-6">
            <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">Recomendados</h2>
            </div>

            <div className='flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
              {barbershops.map((barbershop: any) => (
                <BarbershopItem key={barbershop.id}barbershop={barbershop}/>
              ))}
            </div>

            <div className="px-5 mt-6">
            <h2 className= " px-5 text-xs uppercase text-gray-400 font-bold mb-3">Populares</h2>
            </div>

            <div className='flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden mb-[4.5rem]'>
              {barbershops.map((barbershop: any) => (
                <BarbershopItem key={barbershop.id}barbershop={barbershop}/>
              ))}
            </div>


            

      

    </div>

    
  )
}

export default Home