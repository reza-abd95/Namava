'use client'

import Header from "@/app/(components)/Header";
import useScrollingUp from "@/app/hooks/useScrollingUp";
import "../globals.css";


export default function HeaderSticky() {
    const scrolledUp = useScrollingUp();
    return (
        <div className="bg-black">
            <div className={`${scrolledUp ? "stickyHeader" : ""} bg-black`}>
                <Header/>
            </div>
        </div>

    )
}