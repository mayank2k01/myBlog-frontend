import { formatISO9075 } from "date-fns";
import {Link} from 'react-router-dom'

export default function Post({_id,title,summary,cover,content,createdAt,author}) {
  // console.log(cover);  
  return (
        <div className="post">
          <div className="image">
          <Link to={'/post/'+_id}>
            <img src={'https://myblogwebsite-2nxz.onrender.com/'+cover} alt="" />
          </Link>
          </div>
          <div className="content">
            <Link to={'/post/'+_id}>
              <h2> {title}</h2>
            </Link>
            <p className="info">
              <a href="" className="author">{author.username}</a>
              <time>{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p>{summary}</p>
          </div> 
        </div>
    );
}