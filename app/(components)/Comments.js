

import CommentsInput from "@/app/(components)/ComentsInput";
import UsersComments from "@/app/(components)/UsersComments";
import {getCommentsData} from "@/app/utils/getdata";

export default async function Comments({movieId}) {
    const commentsRowData = await getCommentsData();
    const commentsData = commentsRowData.record;
    const movieComments = commentsData.filter((comment)=>{
        return comment.movieId == movieId;
    })
  
    return (
        <div className="w-full flex flex-col justify-center items-center mb-[100px]">
            <CommentsInput/>
            {movieComments.map((comment)=>{
                return <UsersComments id={comment.id} user={comment.user} date={comment.date} comment={comment.comment} like={comment.like} dislike={comment.dislike} />
            })}
        </div>
    );
};
