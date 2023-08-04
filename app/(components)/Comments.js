

import CommentsInput from "@/app/(components)/ComentsInput";
import UsersComments from "@/app/(components)/UsersComments";

const Comments = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-[100px]">
            <CommentsInput/>
            <UsersComments/>
            <UsersComments/>
            <UsersComments/>
        </div>
    );
};

export default Comments;
