import parse from 'html-react-parser';
import { Link } from "react-router-dom";

const BlogPostCard = ({post}) => {
	var date = new Date(post.createdAt);
	// .split(' ')[0] 
	// 	+ ' '
	// 	+ Date(post.createdAt).split(' ')[1]
	// 	+ ' '
	// 	+ Date(post.createdAt).split(' ')[2]
	// 	+ ' ' 
	// 	+ Date(post.createdAt).split(' ')[3]

	return (
		<Link to={`/blog/${post.slug}`} state={{slug: post.slug}}>
		<div className="font-mono mx-auto border-borderpink border-2 mb-2 rounded-lg shadow-md hover:shadow-xl">
			<div className="font-semibold text-xl mt-2 ml-2 mb-4">
				{post.title}
			</div>
			<div className="relative overflow-hidden shadow-md pb-80 mb-4">
				<img src={post.postPhoto.url} alt="dummy" className="object-top absolute h-80 w-full object-cover rounded-lg"/>
			</div>
			<div className="px-4 mb-4">
				{post.preview}
			</div>
			<div className='flex'>
				<div className="w-1/2 px-4 text-xs shadow-sm ml-4 mb-4 rounded-lg content-center">
					<div className='flex'>
						<div>
							<img src={post.author.photo.url} alt="dummy" className="object-center w-12 h-12 rounded-full object-cover my-2"/>
						</div>
						<div className="ml-4 my-6">
							Created by: {post.author.name}
						</div>
					</div>
				</div>
				<div className='basis-1/2 font-light text-xs text-right px-4 pt-10 text-themegrey'>
					{date.toLocaleString()}
				</div>
			</div>
		</div>
		</Link>
	);
};

export default BlogPostCard;