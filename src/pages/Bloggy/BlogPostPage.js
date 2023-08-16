import { useLocation } from "react-router-dom";
import { getPostDetail } from "./BlogFunctions";
import { useState, useEffect } from "react";
import parse from 'html-react-parser';

const BlogPostPage = () => {
  const [postDetail, setPostDetail] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postDate, setPostDate] = useState("");
  const post_slug = useLocation().state.slug;
  console.log(post_slug);

  useEffect (() => {
    const fetchPostDetail = async () => {
      const postDetail = await getPostDetail(post_slug);
      console.log(postDetail)
      setIsLoaded(true);
      setPostDetail(postDetail);
      const date = new Date(postDetail.createdAt);
      setPostDate(date);
    }
    fetchPostDetail()
      .catch(console.log("error getting Post Detail"));
  }, [])

  return (
    <div>
      {isLoaded ? (
        <div className="font-mono mb-8">
          <div>
            <div className="text-3xl mt-8 text-center underline">
              {postDetail.title}
            </div>
            <div className="text-xs mt-4 mx-6 flex justify-center items-center">
              Created by:
              <div>
                <img src={postDetail.author.photo.url} 
                  alt="dummy"
                  className="w-10 h-10 object-center rounded-full object-cover mx-2"/>
              </div>
              <div className="mr-2">
                {postDetail.author.name}
              </div>
              @ {postDate.toLocaleString()}
            </div>
          </div>
          <div className="flex mt-6">
            <div className="text-sm ml-10 mr-4 border-[1px] border-borderpink rounded-lg basis-2/3">
              <div className="mx-2 my-2">
                {parse(postDetail.content.html)}
              </div>
            </div>
            <div className="basis-1/3">
              box
            </div>
          </div>
        </div>
      ) : (
        <p>loading </p>
      )}
    </div>
  );
};

export default BlogPostPage;