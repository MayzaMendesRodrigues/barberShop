"use client"
import {  MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";
import Link from "next/link";

const Header = () => {
   
    
    return ( 
        <Card>
            <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
            <Sheet>
                <Link href= "/">
                <Image src="/logo.png" alt="FSW Barber" height={22} width={130}></Image>
                </Link>
                <SheetTrigger>
                <Button variant="outline" size="icon" className="h-8 w-8" >
                <MenuIcon size={16}/>
                </Button>
                </SheetTrigger>
                <SheetContent className="p-0">
                   <SideMenu/>

                </SheetContent>
            </Sheet>

            
          
        

            </CardContent>
        </Card>

     );
}
 
export default Header;