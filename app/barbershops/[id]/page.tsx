import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_component/barbershopInfo";


interface BarbershopsDetailsPagesProps {
    params:{
        id?: string
    }
}
const BarbershopsDetailsPages = async ({params}: BarbershopsDetailsPagesProps) => {
    if (!params.id) {
        //TODO: redirecionar para home page 
        return null
    }
    const barbershop = await db.barberShop.findUnique ({
        where: {
            id: params.id,
        }
        
    });
    if (!barbershop) { 
        //TODO: redirecionar para home page 
        return null
    }

    return (  
        <BarbershopInfo barbershop={barbershop}/>

    );
}
 
export default  BarbershopsDetailsPages;