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
                // if (open) {
                //     setTimeout(() => {
                //         closed.current.classList.add("overflow-hidden")
                //     },500)
                // }
                // if(!open) {

                //     closed.current.classList.remove("oveflow-hidden")
                //     closed.current.classList.add("overflow-visible")
                // }

            }}
            className='Dropdown__button'>
                <h4 className={`Dropdown__button__text`}>سایر لینک‌ها</h4>
                <Image src={ArrowUp}/>
            </button>
        </div>

    )
}