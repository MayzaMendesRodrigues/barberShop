"use client"

import { ChevronLeftCircleIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { BarberShop } from "@prisma/client";
import { useRouter } from "next/navigation";


interface BarbershopInfoProps {
    barbershop: BarberShop
}


const BarbershopInfo = ({barbershop}: BarbershopInfoProps) => {

    const router = useRouter();
    const handleBackClick = () => {
        router.back()
    }

    return ( 
        <div>
        <div className="h-[250px] w-full relative">
            <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute top-4 left-4">
                <ChevronLeftCircleIcon/>
            </Button>

            <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4">
                <MenuIcon/>
            </Button>


            <Image 
            src= {barbershop.imageUrl} 
            fill
            alt={barbershop.name}
            style={{
                objectFit: "cover",
            }}
            className="opacity-85"
            />
        </div>

        <div className="px-5 pt-3 pb-6 border-solid border-b border-primary">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-2 mt-2">
        <MapPinIcon className="text-primary" size={18}/>
        <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1 mt-2">
        <StarIcon className="text-primary" size={18}/>
        <p className="text-sm">5.0 (565 avaliacoes)</p>
        </div>

        </div>
    </div>
     );
}
 
export default BarbershopInfo;