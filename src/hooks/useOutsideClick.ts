import { useEffect, useRef } from "react";


export function useOutsideClick(handler: any) {
    const wrapperRef = useRef<any>();
    useEffect(() => {
        function handleClickOutside(event: any) {           
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                handler();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })
    return wrapperRef;
}
