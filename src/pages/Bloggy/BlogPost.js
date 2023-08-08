import parse from 'html-react-parser';

const BlogPost = ({title, body, date}) => {

	return (
		<div className="mx-auto h-52 border-2 rounded overflow-auto">
			<div className="font-mono text-lg">
				{title}
			</div>
			<br/>
			<div className="overflow-hidden">
				{parse(body)}
			</div>
		</div>
	);
};

export default BlogPost;