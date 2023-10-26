import Image from "next/image"

export default function NotFound() {
    return(
        <div> 
            <Image src="/img/erro404.jpg" alt="error" width={1000} height={500}/>
        </div>
    )
}