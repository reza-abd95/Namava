
import Category from "@/app/categories/Category";
import {getCategoriesData} from "@/app/utils/getdata";

export default async function Categories() {
    const categories = await getCategoriesData();
    const category = categories.record;
    console.log(category)
    return (
        <div className="bg-[#121212] w-full h-auto py-[22px] flex justify-center items-center flex-col">
                <Category data={category}/>
        </div>
    )
}