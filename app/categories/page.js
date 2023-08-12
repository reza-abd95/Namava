
import Category from "@/app/categories/Category";
import {getCategoriesData} from "@/app/utils/getdata";

export async function generateMetadata() {
    return {
      title: "دسته بندی ها",
      description : "فیلم ها در دسته بندی های مختلفی تولید می شوند که در این صفحه می توانید دسته بندی های مختلف را در انی صفحه مشاهده کنید"
    }
  }

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