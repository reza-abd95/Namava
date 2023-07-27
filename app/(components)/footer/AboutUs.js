
import EnamadIcon from '../../../public/icons/Enamad-icon.png'
import SamandehiIcon from '../../../public/icons/Samandehi-icon.png'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {


    return (
        <div className='px-2'>
                <div>
                    <div className='text-[#FFFFFF] text-sm py-2 font-iranyekanBold'>درباره ما</div>
                    <p className='text-[#aaaaaa] leading-6 text-[11px] py-2 font-iranyekanRegular'>سرزمین شاتل در سایت نماوا امکان پخش آنلاین فیلم‌ها و سریال‌های محبوبتان را در اختیار شما کاربران گرامی قرار می‌دهد. مشاهده پیش‌نمایش فیلم و سریال‌ها، جستجوی سریع مجموعه انتخابی، دانلود درون‌برنامه‌ای، حساب چند کاربره، تنظیمات کودک، پخش زنده رویدادهای ورزشی و فرهنگی و آرشیوی کامل از پرطرفدارترین فیلم‌ها و سریال‌ها از جمله قابلیت‌های نماوا، به‌روزترین سایت تماشای فیلم و سریال است. نماوا این امکان را برای کاربران خود فراهم کرده است تا در سریع‌ترین زمان ممکن و تنها با چند کلیک، سریال‌ها و فیلم‌های مورد علاقه خود را به صورت آنلاین و آفلاین مشاهده کنند.</p>
                </div>
                <div className='flex w-[204px] justify-between py-3'>
                  <Link href='#' className='w-[90px] h-[90px] bg-[#CCCCCC] rounded-md'>
                    <Image className='w-[90px] h-[90px]' src={EnamadIcon}/>
                  </Link >
                  <Link href='#' className='w-[90px] h-[90px] bg-[#CCCCCC] rounded-md'>
                    <Image className='w-[90px] h-[90px]' src={SamandehiIcon} />
                  </Link >
                </div>

            </div>
    )
}