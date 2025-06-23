// imports
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import BuyMeCoffee from "./buymecoffee";
import { RiTwitterXFill } from "react-icons/ri";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { LuMenu } from "react-icons/lu";

export default function Navbar({ }): any {
    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Link href="/">
                <Image alt="logo" className="w-40 cursor-pointer dark:invert" src="/images/flipprLogo.svg" height={100} width={170} />
            </Link>
            <div className="items-center hidden gap-2 md:flex">
                <ModeToggle />
                <Link href="https://x.com/singh_rakshat" target="_blank">
                    <Button
                        variant="default"
                        className="items-center hidden bg-blue-600 rounded-full w-fit md:flex"
                        size="lg"
                    >
                        <span className="text-xl">
                            <RiTwitterXFill />
                        </span>
                    </Button>
                </Link>
            </div>

            {/* MOBILE NAV */}
            <Sheet>
                <SheetTrigger className="block p-3 md:hidden cursor-pointer hover:bg-slate-500 rounded-full">
                    <span className="text-2xl text-slate-950 dark:text-slate-200 ">
                        <LuMenu />
                    </span>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col w-full h-full">
                                <SheetTrigger asChild>
                                    <Link href="https://x.com/singh_rakshat" target="_blank">
                                        <RiTwitterXFill className="flex items-center justify-center w-full h-5"/>
                                    </Link>
                                </SheetTrigger>
                                <ModeToggle />
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
