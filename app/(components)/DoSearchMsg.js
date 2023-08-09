import React from 'react'

export default function DoSearchMsg() {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center mt-52`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="137" height="129" ><rect width="88" height="129" rx="5" fill="#37383e" x="49"></rect><path d="M75.443 47.275A31.83 31.83 0 0 0 52.3 36.226q-.557-.02-1.113-.02a32.22 32.22 0 0 0-22.719 9.386c-10.43 10.41-12.423 26.587-4.83 39.215a5.99 5.99 0 0 1-.86 7.33L10.8 104.12c-.676.684-1.048 1.61-1.032 2.572a3.06 3.06 0 0 0 .938 2.213 3.3 3.3 0 0 0 4.477-.069L27.33 96.69a5.9 5.9 0 0 1 7.237-.921 32.09 32.09 0 0 0 16.609 4.616c9.247-.003 18.046-3.986 24.15-10.932C85.87 77.386 85.92 59.4 75.443 47.275zm-4.7 37.635c-4.88 5.74-12.034 9.046-19.568 9.046a25.68 25.68 0 0 1-19.569-9.042c-8.076-9.606-8.076-23.628 0-33.234 4.882-5.74 12.038-9.048 19.573-9.046s14.7 3.305 19.57 9.044a25.83 25.83 0 0 1-.004 33.232z" fill="#666666"></path></svg>
      <p className='text-white mt-10 w-60 leading-9 text-sm text-center'>عنوان فیلم مورد نظر خود را جستجو کنید و فیلم مورد علاقه خود را پیدا کنید.</p>
    </div>
  )
}
