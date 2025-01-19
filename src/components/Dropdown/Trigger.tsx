'use client'

type TriggerProps = {
    children: React.ReactNode
}

export function Trigger({ children }: TriggerProps){
    
    function openDropdown(){
        const element = document.getElementById('dropdownContent') as HTMLElement
        element.style.display = 'block'
    }

    return(
        <div onClick={() => openDropdown()}>
            {children}
        </div>
    );
}