
import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";
import BookingItem from "../_components/booking-item";
import { authOptions } from "../_lib/auth";

const BookingsPage = async () => {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
        return redirect ("/")
    }

    const [confirmedBookings, finishedBookings] = await Promise.all ([

        db.booking.findMany ({ 
            where: {
                userId: (session.user as any).id, 
                date: {
                    gte: new Date(),
                } 
            },
            include: {
                service:true,
                barbershop: true,
    
            }
        }),


 

    db.booking.findMany ({ 
        where: {
            userId: (session.user as any).id, 
            date: {
             lt: new Date(),
            } 
        },
        include: {
            service:true,
            barbershop: true,

        }
    })

])



    return (
        <>
        <Header/>

        <div className="px-5 py-6">
            <h1 className="text-xl font-bold mb-6">Agendamento</h1>

{confirmedBookings.length === 0 &&  (
    <>
                    <h2 className="text-sm uppercase text-gray-400 font-bold mt-3 mb-3">Confirmados</h2>


            
           <div className="flex gap-3 flex-col">
           {confirmedBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} />
            ))}
           </div>
           </>
)}

           {finishedBookings.length > 0 && (
<>
           <h2 className="text-sm uppercase text-gray-400 font-bold mt-3 mb-3">Finalizados</h2>
           <div className="flex gap-3 flex-col">
           {finishedBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} />
            ))}
           </div>
        </>
    )}

</div>
</>
    )}
 
export default BookingsPage;


