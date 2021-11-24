"# beemore" 
# Website: https://beemore.xyz/
Trang web lai giữa mạng xã hội và diễn đàn giúp mọi người trao đổi, học tập ( giao diện như mạng xã hội, cách hoạt động như diễn đàn ). Mọi người có thể đăng các câu hỏi đáp theo danh mục chủ đề được tạo sẵn, người dùng khác sẽ vào và giải đáp câu hỏi, tương tác như để lại like, bình luận. Chủ post có thể tặng 1 sao mỗi post cho người đã giúp họ giải đáp được vấn đề.
Người dùng sở hữu nhiều sao sẽ có bảng xếp hạng để theo dõi

# User Story
## KHÁCH
- Là khách, tôi có thể vào trang web và xem các thông tin bài đăng
- Là khách, tôi có thể đăng ký tài khoản và đăng nhập

## NGƯỜI DÙNG
- Là người dùng, tôi có thể đăng bài theo danh mục, đặt hashtag
- Là người dùng, tôi có thể like các bài đăng
- Là người dùng, tôi có thể like các bình luận
- Là người dùng, tôi có thể báo cáo bài đăng không hợp lệ
- Là người dùng, tôi có thể bình luận bài đăng ( khi bình luận của tôi được chủ bài đăng đánh dấu là giúp giải quyết đc vấn đề, tôi được tặng 1 sao )
- Là người dùng, tôi có thể thêm bài đăng yêu thích vào bookmark
- Là người dùng, tôi có thể theo dõi người dùng khác và theo dõi bài đăng của họ
- Là người dùng, tôi có thể được người khác theo dõi
- Là người dùng, tôi có trang cá nhân ( hiển thị những bài đăng tôi đã đăng )
- Là người dùng, tôi có trang chỉ hiện các bài đăng mà những người tôi theo dõi

## ADMIN
- Là admin, tôi có trang quản trị riêng
- Là admin, tôi có thể phê duyệt bài đăng
- Là admin, tôi có thể xem các bài đăng bị report
- Là admin, tôi có thể sửa / xóa bài đăng bất kì

# Stack công nghệ
- NodeJS để tạo web app
- MongoDB để tạo CSDL
- ReactJS để tạo giao diện
- PostMan để thử nghiệm API
- Robo3T để kết nối và tương tác database

# Thiết kế cơ sở dữ liệu
## UserSchema
```sh
{
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
    role: {
        type: String,
        enum: ["admin","member"]
    },
    countVote: Number,
    avatar: {
        type: String,
    }
},{
    timestamps:true
}
```

## PostSchema
```sh
{
    postTitle: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    postImg: Array,
    categoryId: {
        type:mongoose.Types.ObjectId,
        ref:"Category"
    },
    viewNumber: Number,
    status: Boolean // true = đã duyệt , false = chưa duyệt
    giftByPoster {
       type:mongoose.Types.ObjectId,
        ref:"User" 
    } // Người giải quyết đc vấn đề sẽ được chủ thread tặng sao
},{
    timestamps:true
}
```

## CategorySchema
```sh
{
    categoryName:{
        type: String,
        require: true
    },
    description: String
},{
    timestamps:true
}
```
## CommentSchema
```sh
{
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    },
    content: {
        type: String,
        require: true
    },

},{
    timestamps:true
}
```
## ReportSchema
```sh
{
    content: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ["Chưa xử lý","Đang xử lý","Đã xử lý"]
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    },
    reportBy:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    }

},{
    timestamps:true
});
```

## FollowSchema
```sh
{
    owner: {
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    followers:Array,
    following:Array,
},{
    timestamps:true
});
```

## LikePostSchema
```sh
{
    postId: {
        type: mongoose.Types.ObjectId,
        ref:"Post"
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    status: Boolean
},{
    timestamps:true
});
```

## LikeCommentSchema
```sh
{
    commentId: {
        type: mongoose.Types.ObjectId,
        ref:"Comment"
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    status: Boolean
},{
    timestamps:true
});
```
