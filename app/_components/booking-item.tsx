"use client"
import { Booking, Prisma } from '@prisma/client';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card";
import { format, isFuture, isPast } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from "@/app/_components/ui/button";
import { cancelBooking } from '../_actions/cancel-booking';
import { toast } from 'sonner';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';



interface BookingItemProps {
    booking: Prisma.BookingGetPayload <{
        include:{
            service: true;
            barbershop: true
        }
    }>
}

const BookingItem = ({booking} : BookingItemProps) => {
    const [isDeleteLoading, setIsDeleteLoading] = useState (false)
    const isBookingConfirmed = isFuture(booking.date)


    const handleCancelClick = async ()=> {
        setIsDeleteLoading(true)
        try{
            await cancelBooking (booking.id);

            toast.success("Reserva cancelada com sucesso!")

        }catch (error) {
        console.error(error)
        } finally {
            setIsDeleteLoading(false)
        }
    }
    return ( 
       <Sheet>
        <SheetTrigger asChild>
        <Card className='min-w-full'>
            <CardContent className="py-0 flex  px-0">
                <div className="flex flex-col gap-2  py-5 flex-[3] px-5 pl-5">
                    <Badge variant={
                        isBookingConfirmed ? 'default' : 'secondary'
                    } className="w-fit">
                        {isBookingConfirmed? "Confirmado" : "Finalizado"}
                    </Badge>
                    <h2 className="font-bold">{booking.service.name}</h2>

                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={booking.barbershop.imageUrl}/>
                            <AvatarFallback>A</AvatarFallback>

                        </Avatar>
                        
                        
                        <h3 className="text-sm">{booking.barbershop.name}</h3>
          
                        
                    </div>
                    </div>
                    < div className="flex flex-col items-center justify-center flex-1 border-l border-solid border-secundary px-3">
                        <p className="text-sm"> {format(booking.date,  "MMMM", { locale: ptBR })}</p>
                        <p className="text-2x1">{format(booking.date, "dd")}</p>
                        <p className="text-sm">{format(booking.date, "hh:mm")}</p>

                    


                  
                </div>
            </CardContent>
            
        </Card>

        </SheetTrigger>
        <SheetContent className='px-0'>
            <SheetHeader className=' px-5 text-left py-6 border-b border-solid border-secondary'>
                <SheetTitle>Informacoes da reserva</SheetTitle>
            </SheetHeader>
<div className='px-5'>
    
            <div className='mt-6'>
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13137.031535033366!2d-58.456311512841815!3d-34.59763989999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58bc3515ccd%3A0xa26f12b3b6f98d3f!2sChopper%20Cuts!5e0!3m2!1spt-BR!2sar!4v1707539507952!5m2!1spt-BR!2sar"
             allowFullScreen
             loading="lazy"
             title="Localização do Chopper Cuts"
             referrerPolicy="no-referrer-when-downgrade"
             className='  filter invert  bg-gray-200 w-full h-[180px] rounded-md'
             >
            </iframe>

            <div className='w-full absolute bottom-4 left-0 px-5'>
                <Card>
                    <CardContent className='p-3 flex gap-2'>
                        <Avatar>
                            <AvatarImage src={booking.barbershop.imageUrl}/>
                        </Avatar>

                        <div>
                            <h2 className='font-bold'>{booking.barbershop.name}</h2>
                            <h3 className='text-xs overflow-hidden text-nowrap text-ellipsis'>{booking.barbershop.address}</h3>
                        </div>
                    </CardContent>
                </Card>

            </div>

            </div>

            <Badge variant={
                        isBookingConfirmed ? 'default' : 'secondary'
                    } className="w-fit my-3">
                        {isBookingConfirmed? "Confirmado" : "Finalizado"}
                    </Badge>


                    <Card>
                      <CardContent className="p-3">
                        <div className="flex justify-between">
                          <h2 className="font-bold">{booking.service.name}</h2>
                          <h3 className="font-bold">
                            {Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(Number(booking.service.price))}
                          </h3>
                        </div>

                          <div className="flex justify-between">
                            <h3 className="text-gray-400 text-sm">Data</h3>
                            <h4 className="text-sm">
                              {format(booking.date, "dd 'de' MMMM", { locale: ptBR })}
                            </h4>
                          </div>
                        

                       
                          <div className="flex justify-between">
                            <h3 className="text-gray-400 text-sm">Horario</h3>
                            <h4 className="text-sm">{format(booking.date, 'hh:mm')}</h4>
                          </div>
                     

                        <div className="flex justify-between">
                          <h3 className="text-gray-400 text-sm">Barbearia</h3>
                          <h4 className="text-sm">{booking.barbershop.name}</h4>
                        </div>
                      </CardContent>
                    </Card>

                    <SheetFooter className='gap-3 mt-6'>
                        <SheetClose asChild>
                        <Button className='w-full' variant="secondary">
                            Voltar
                        </Button>
                        </SheetClose>
                        


                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                            <Button 
                        disabled={!isBookingConfirmed || isDeleteLoading}
                        onClick={handleCancelClick}
                         className='w-full' 
                        variant="destructive">

                           
                            Cancelar reserva
                        </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className='w-full'>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Cancelar Reserva</AlertDialogTitle>
                                    <AlertDialogDescription>Uma vez cancelada nao seja possivel reverter esta situacao</AlertDialogDescription>

                                </AlertDialogHeader>
                                <AlertDialogFooter className='flex-row gap-3' >
                                    <AlertDialogCancel className='w-full mt-0'>Voltar</AlertDialogCancel>
                                    <AlertDialogAction disabled ={isDeleteLoading} className='w-full' onClick={handleCancelClick}>Confirmar
                                    {isDeleteLoading && (
                                <Loader2 
                                className='mr-2 h-4 w-4 animate-spin'/> 
                            )}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        
                    </SheetFooter>
</div>

        </SheetContent>
       </Sheet>
     );
}
 
export default BookingItem;