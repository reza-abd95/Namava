'use client'

import Image from 'next/image'
import Link from 'next/link'
import ArrowUp from '../../../public/icons/ArrowUp-footer.svg'
export default function DropdownMenu({elementClosed,closed,isFixed,items,open,setOpen}) {


    return (
        <div className={`DropdownMenu`}>
            <button
            onClick={() => {
                setOpen(!open)
                if (open) {
                    setTimeout(() => {
                        closed.current['className'] = `FooterNavbar ${isFixed? 'fixed bottom-0':'relative'}` + ' overflow-hidden'
                    },500)
                }
                if(!open) {
                    closed.current['className'] = closed.current.className + ' overflow-visible'
                }

            }}
            className='Dropdown__button'>
                <h4 className={`Dropdown__button__text`}>سایر لینک‌ها</h4>
                <Image src={ArrowUp}/>
            </button>
        </div>

    )
}