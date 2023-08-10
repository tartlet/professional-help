import { useState, useEffect } from 'react'; // Import useEffect
import BlogPost from './BlogPost';
import getPosts from './BlogFunctions';

const BloggyPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [postData, setPostData] = useState([]); 
  // Store issue data in state
  // const AUTH_TOKEN = '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';

  //legacy code: using github as my source of blog data ! keeping because it is my repo!
  // useEffect(() => { 
  //   axios
  //     .get('https://api.github.com/repos/tartlet/tartlet.github.io/issues', {
  //       headers: { 'Authorization': AUTH_TOKEN },
  //     })
  //     .then((response) => {
  //       setIssueData(response.data);
  //       setIsLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error(error.response.data);
  //     });
  // }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setIsLoaded(true);
      setPostData(posts);
    }
    fetchPosts()
      .catch(console.log("error"))
  }, [])

  return (
    <div>
      {isLoaded ? (
        <div>
          {postData.map((post, index) => (
            <div className="p-4">
              <BlogPost 
              post={post.node}/>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BloggyPage;
