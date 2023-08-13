
import EnamadIcon from '../../../public/icons/Enamad-icon.png'
import SamandehiIcon from '../../../public/icons/Samandehi-icon.png'
import TrustUs from './TrustUs'
export default function AboutUs() {
    return (
        <div className='AboutUs__container'>
                <div>
                    <div className='AboutUs__title'>درباره ما</div>
                    <p className='AboutUs__description'>سرزمین شاتل در سایت نماوا امکان پخش آنلاین فیلم‌ها و سریال‌های محبوبتان را در اختیار شما کاربران گرامی قرار می‌دهد. مشاهده پیش‌نمایش فیلم و سریال‌ها، جستجوی سریع مجموعه انتخابی، دانلود درون‌برنامه‌ای، حساب چند کاربره، تنظیمات کودک، پخش زنده رویدادهای ورزشی و فرهنگی و آرشیوی کامل از پرطرفدارترین فیلم‌ها و سریال‌ها از جمله قابلیت‌های نماوا، به‌روزترین سایت تماشای فیلم و سریال است. نماوا این امکان را برای کاربران خود فراهم کرده است تا در سریع‌ترین زمان ممکن و تنها با چند کلیک، سریال‌ها و فیلم‌های مورد علاقه خود را به صورت آنلاین و آفلاین مشاهده کنند.</p>
                </div>
                <div className='TrustUs'>
                    <TrustUs icon={EnamadIcon}/>
                    <TrustUs icon={SamandehiIcon}/>
                </div>

            </div>
    )
}