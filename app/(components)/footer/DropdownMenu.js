'use client'

import Image from 'next/image'
import Link from 'next/link'
import ArrowUp from '../../../public/icons/ArrowUp-footer.svg'

export default function DropdownMenu({width,open,setOpen}) {


    return (
        <div className={`DropdownMenu ${(width>=1920)? 'hidden': ''}`}>
            <button
            onClick={() => setOpen(!open)}
            className='Dropdown__button'
            >
                <h4 className={`Dropdown__button__text`}>سایر لینک‌ها</h4>
                <Image src={ArrowUp} alt='arrow'/>
            </button>
        </div>
    )
}