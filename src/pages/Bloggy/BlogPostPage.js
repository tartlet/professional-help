import { useLocation } from "react-router-dom";
import { getPostDetail } from "./BlogFunctions";
import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import "./BlogStuff.css";

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
      setPostDetail(postDetail);
      const date = new Date(postDetail.createdAt);
      setPostDate(date);
      setIsLoaded(true);
    }
    fetchPostDetail()
      .catch(console.log("error getting Post Detail"));
  }, [isLoaded, post_slug])

  return (
    <div>
      {isLoaded ? (
        <div className="font-mono mb-8">
          <div>
            <div className="text-3xl mt-8 text-center underline">
              {postDetail.title}
            </div>
            <div className="flex items-center place-content-center mt-2">
              <div className="text-xs">
                Tags: 
              </div>
              <div className="ml-[2px] flex flex-row">
              {(postDetail.categories).map((category, index) => (
                <div key='{index}' className="text-[8px] border-[1px] border-borderpink rounded-full p-1">
                  {category.categoryName}
                </div>
              ))}
              </div>
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
            <div className="basis-1/3 flex flex-col border-borderpink border-[1px] rounded-lg mr-10 h-[320px]">
              <div className="m-2 text-center">
                Other Posts Within the Same Category
              </div>
              <div className="overflow-auto">
                {postDetail.categories.map((category) => {
                  return (
                    <div>
                      {category.posts.map((post, index) => {
                        if ((post.slug) !== post_slug) {
                        return (
                          <Link to={`/blog/${post.slug}`} state={{slug: post.slug}}>
                          <div className="text-sm m-2 border-[1px] hover:drop-shadow-md hover:bg-searchpink border-borderpink rounded-lg p-2">
                            {post.title}
                          </div>
                          </Link>
                        );
                      }
                      })}
                    </div>
                  );
                })}
              </div>
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