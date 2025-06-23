"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; 

    return (
        <Button variant={"ghost"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}
