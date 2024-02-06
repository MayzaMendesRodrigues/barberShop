"use client"
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    const {data} = useSession()
    const handleLoginClick = async () => {
        console.log('login was clicked')
        await signIn()
    }
    return ( 
        <Card>
            <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
            <Image src="/logo.png" alt="FSW Barber" height={22} width={130}></Image>
            
            {data?.user ? (
            <div>
                <Button onClick={() => signOut}>Logout</Button>
                <h1>{data.user.name}</h1>
            </div> ): (
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleLoginClick}>
            <MenuIcon size={16}/>
        </Button>


            )}

            </CardContent>
        </Card>

     );
}
 
export default Header;