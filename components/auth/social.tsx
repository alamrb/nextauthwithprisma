"use client"
import { Button } from "@/components/ui/button";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

export const Social = () => {
    return (
        <div className="flex items-center w-full gap-x-2">

            <Button size={"lg"} className="w-full" variant={"outline"} onClick={()=>{}}>
                <FaGoogle className="h-5 w-5" />
                {/* <span className="h-5 w-5  flex justify-center items-center">Google</span> */}
            </Button>

            <Button size={"lg"} className="w-full" variant={"outline"} onClick={()=>{}}>
                <FaFacebookSquare className="h-5 w-5" />
                {/* <span className="h-5 w-5  flex justify-center items-center">Github</span> */}
            </Button>

        </div>
    )
}