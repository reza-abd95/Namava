import windowDimensions from "@/app/hooks/useWindowDimensions";
import Image from "next/image";
export default function BackGroundImage({imageUrl,imageMobileUrl,title}){
    const windowWidth = windowDimensions();
    return(
        <div className="relative mb-[12px] ml:h- ml:mb-[32%] min-[600px]:mb-[20%] min-[700px]:mb-[11%] tab:mb-[64px] min-[900px]:mb-2 min-[1050px]:mb-0">
        <Image
          className="w-full h-full"
          width={windowWidth > 499 ? 1920: 1000 }
          height={windowWidth > 499 ? 900: 1350}
          src={windowWidth > 499 ? imageUrl : imageMobileUrl}
          alt={title}

        />
        <div className="absolute w-[50%] inset-0 bg-gradient-to-l from-[#121212] to-transparent"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
      </div>
    )
}