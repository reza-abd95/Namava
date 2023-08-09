

import React from 'react';
import CategoryItem from "@/app/(components)/Categoryitem";

export default function Category({data}) {
    return (
        <div className=" w-full mt-[48px] px-[20px] pb-[70px] flex flex-wrap justify-start  items-center gap-[10px] ml:mt-[58px] ml:gap-[12px] ml:px-[24px] tab:px-[32px] tab:mt-[38px] tab:gap-[14px] des:px-[43px] des:mt-[58px] des:gap-[16px] large:px-[55px] large:mt-[80px]">
            {data.map((Items) => {
                return (
                    <CategoryItem
                        key={Items.id}
                        id={Items.id}
                        name={Items.name}
                        image={Items.imageUrl}
                    />
                );
            })}

        </div>

    );
};