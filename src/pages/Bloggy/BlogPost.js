import parse from 'html-react-parser';

const BlogPost = ({post}) => {

	return (
		<div className="mx-auto h-52 border-2 rounded overflow-auto">
			<div className="font-mono text-lg">
				{post.title}
			</div>
			<br/>
			<div className="overflow-hidden">
				<img src={post.author.photo.url} alt="dummy"/>
				{post.preview}
			</div>
		</div>
	);
};

export default BlogPost;