
// }
import React from "react"
import ContentLoader from "react-content-loader"

export default function MainSliderLoading() {
    return(
        <ContentLoader className=" w-full h-screen"
        speed={0.5}
        backgroundColor="#121212"
        foregroundColor="#121212"
      >

        <rect width="100%" height="100%" />
      </ContentLoader>
    )

}

MainSliderLoading.metadata = {
  name: 'Sagi', // My name
  github: 'sagi403', // Github username
  description: 'Twitter generic text with image', // Little tagline
  filename: 'Twitter', // filename of your loader
}



