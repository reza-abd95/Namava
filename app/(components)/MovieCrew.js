'use client'

import Image from "next/image"

export default function MovieCrew(data) {
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
            <p className=" pt-3 text-xs">{data.data.job}</p>
        </div>
    )
  }
  