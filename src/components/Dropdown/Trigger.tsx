'use client'

import { useEffect, useRef } from "react";

type TriggerProps = {
    children: React.ReactNode
}

export function Trigger({ children }: TriggerProps) {
    const dropdownRef = useRef<any>(null);

    useEffect(() => {
        window.addEventListener("click", handleClickOutside)
        return () => { window.removeEventListener("click", handleClickOutside)}
    }, [])


    const handleClickOutside = (event: { target: any; }) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            const element = document.getElementById('dropdownContent') as HTMLElement
            element.style.display = 'none'
        }
    }

    function openDropdown() {
        const element = document.getElementById('dropdownContent') as HTMLElement
        element.style.display = 'block'
    }

    return (
        <div ref={dropdownRef} onClick={() => openDropdown()}>
            {children}
        </div>
    );
}