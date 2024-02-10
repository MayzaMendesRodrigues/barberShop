"use client"

import { ChevronLeftCircleIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";
import SideMenu from "@/app/_components/side-menu";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";


interface BarbershopInfoProps {
    barbershop: Barbershop
}


const BarbershopInfo = ({barbershop}: BarbershopInfoProps) => {

    const router = useRouter();
    const handleBackClick = () => {
        router.replace("/");
    }

    return ( 
        <div>
        <div className="h-[250px] w-full relative">
            <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute top-4 left-4">
                <ChevronLeftCircleIcon/>
            </Button>
            
            <Sheet>
                <SheetTrigger>
                    <Button size="icon" variant="outline" className="z-50 absolute top-4" >

                    </Button>
                </SheetTrigger>
            </Sheet>
            

           


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

        <div className="px-5 pt-3 pb-6 border-solid border-b border-secondary">
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