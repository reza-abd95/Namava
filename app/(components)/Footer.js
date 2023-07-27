import Image from 'next/image'
import Link from 'next/link'



import AboutUs from './footer/AboutUs'
import DownloadApp from './footer/DownloadApp'
import ContactUs from './footer/ContactUs'
export default function Footer() {
    return (
          <div className='Footer__container'>
              <div className="Footer">
                  <DownloadApp/>
                  <AboutUs/>
                  <ContactUs/>
               </div>
          </div>
    )
}
  