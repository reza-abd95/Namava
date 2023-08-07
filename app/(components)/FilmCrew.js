'use client'

import Image from "next/image"

export default function FilmCrew(data) {
    return (
        <div>              
            <div>
                <Image  className="block max-w-full h-auto rounded-full "
                        src={data.data.imageUrl}
                        width={1000}
                        height={1000}
                        alt={data.data.name} />
            </div>
            <p className=" pt-3 text-xs">{data.data.name}</p>
        </div>
    )
  }
  