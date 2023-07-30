'use client'

import Image from "next/image"

export default function FilmCrew() {
    return (
        <div>              
            <div>
                <Image  className="block max-w-full h-auto rounded-full "
                        src={"/images/benedict.jpg"}
                        width={1000}
                        height={1000}
                        alt='mehmooni' />
            </div>
            <p className=" pt-3 text-xs">بندیکت کامبربچ</p>
        </div>
    )
  }
  