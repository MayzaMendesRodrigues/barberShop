import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-2  py-5">
                    <Badge className="bg-[#221c3d] text-primary hover:bg-[#221c3d] w-fit">Confirmado</Badge>
                    <h2 className="font-bold"> Corte de Cabelo</h2>

                    <div className="flex items-center gap-2">
                        <p>img</p>
                        
                        <h3 className="text-sm">Vintage Barber</h3>
          
                        
                    </div>
                    </div>
                    < div className="flex flex-col items-center justify-center border-l border-solid border-secundary px-3">
                        <p className="text-sm">Fevereiro</p>
                        <p className="text-2x1">06</p>
                        <p className="text-sm">09:45</p>

                    


                  
                </div>
            </CardContent>
            
        </Card>
     );
}
 
export default BookingItem;