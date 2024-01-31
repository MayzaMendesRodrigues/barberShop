import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
            <Image src="/logo.png" alt="FSW Barber" height={22} width={130}></Image>
            <Button variant="outline" size="icon" className="h-8 w-8">
                <MenuIcon size={16}/>
            </Button>
            </CardContent>
        </Card>

     );
}
 
export default Header;