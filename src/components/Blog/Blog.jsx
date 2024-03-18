import PropTypes from 'prop-types'
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({ blog }) => {   
    // console.log(blog)
    const {title,cover,reading_time,author,author_img,posted_date,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 border rounded-xl' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-[16px]'>
                        <h1 className='text-2xl font-bold'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} Min read</span>
                    <button className='ml-2'> <MdOutlineBookmarks ></MdOutlineBookmarks></button>

                </div>
            </div>
            <h1 className='text-4xl'> {title} </h1>
            <p>
                {
                    hashtags.map((has, idx) =><span key={idx}><a href="">#{has}</a></span>)
                }
            </p>
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}



export default Blog;