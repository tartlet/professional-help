import axios from 'axios';
import { useState, useEffect } from 'react'; // Import useEffect
import BlogPost from './BlogPost';

const BloggyPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [issueData, setIssueData] = useState([]); // Store issue data in state
  const AUTH_TOKEN = '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';

  useEffect(() => { 
    axios
      .get('https://api.github.com/repos/tartlet/tartlet.github.io/issues', {
        headers: { 'Authorization': AUTH_TOKEN },
      })
      .then((response) => {
        setIssueData(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div>
          {issueData.map((issue, index) => (
            <div className="p-4">
              <BlogPost 
              title={issue.title} 
              body={issue.body}
              date={issue.created_at} />
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
