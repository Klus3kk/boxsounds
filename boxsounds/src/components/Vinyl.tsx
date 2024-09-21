import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface VinylProps extends HTMLAttributes<HTMLDivElement> { // ???
    imgSrc: string
    dark?: boolean
}

const Vinyl = ({ imgSrc, className, dark = false, ...props }: VinylProps) => {
    return (
        <div
            className={cn(
                "relative pointer-events-none z-50 overflow-hidden", 
                className
            )}
            style={{ position: "relative", top: "35px", }} // Move the entire frame and photo
            {...props}
        >
            {/* Vinyl Box frame (moving only this) */}
            <img 
                src={dark ? "/phone-template-dark-edges.png" : "/phone-template-light-edges.png"}
                className="pointer-events-none z-50 select-none absolute -top-67 sm:-top-60 md-lg:-top-65.75 lg:-top-87"  // Ensuring it's above everything else
                alt='vinyl box frame'
            />

            {/* Background image stays in place */}
            <div className="absolute inset-0 z-0">
                <img 
                    className="object-cover w-full h-full" 
                    src={imgSrc}
                    alt='overlaying vinyl box image'
                />
            </div>
        </div>
    );
}



export default Vinyl