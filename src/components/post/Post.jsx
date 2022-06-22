import { MoreHoriz } from '@mui/icons-material'
import'./post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="post-wrapper">
            <div className="post-header">
                <div className="post-header-left">
                    <img className="post-profile-img" src="/assets/users/3.jpg" />
                    <span className="post-username">John Doe</span>
                    <span className="post-date">15 mins ago</span>
                </div>
                <div className="post-header-right">
                    <MoreHoriz />
                </div>
            </div>
            <div className="post-body">
                <span className="post-text">Hey! It's my first post.</span>
                <img className="post-img" src="/assets/post/1.jpeg" />
            </div>
            <div className="post-footer">
                <div className="post-footer-left">
                    <img className="like-icon" src="/assets/like.png" alt="like" />
                    <span className="post-like-count">18 people like this</span>
                </div>
                <div className="post-footer-right">
                    <span className="post-comment-text">3 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
