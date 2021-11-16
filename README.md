"# beemore" 
# Website: https://beemore.xyz/
# User Story
## KHÁCH
- Là khách, tôi có thể vào trang web và xem các thông tin bài viết
- Là khách, tôi có thể đăng ký tài khoản và đăng nhập

## NGƯỜI DÙNG
- Là người dùng, tôi có thể đăng bài theo danh mục, đặt hashtag
- Là người dùng, tôi có thể voteup các bài viết
- Là người dùng, tôi có thể báo cáo bài viết không hợp lệ
- Là người dùng, tôi có thể bình luận bài viết ( khi bình luận của tôi được chủ bài viết đánh dấu là giúp giải quyết đc vấn đề, tôi được tặng 1 sao )
- Là người dùng, tôi có thể voteup các bình luận
- Là người dùng, tôi có thể thêm bài viết yêu thích vào bookmark
- Là người dùng, tôi có thể theo dõi người dùng khác và theo dõi bài viết của họ
- Là người dùng, tôi có thể được người khác theo dõi
- Là người dùng, tôi có thể có trang cá nhân ( hiển thị những bài viết tôi đã đăng )

## ADMIN
- Là admin, tôi có thể phê duyệt bài viết
- Là admin, tôi có thể xem các bài viết bị report
- Là admin, tôi có thể xóa bài viết bất kì

# Stack công nghệ
- ExpressJS để tạo web app
- MongoDB để tạo CSDL
- ReactJS để tạo giao diện

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
    follower: {
        type: Array,
        require: true
    }
    following: {
        type: Array,
        require: true
    },
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
    viewNumber: Number
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
    }
},{
    timestamps:true
}
```
## CommentSchema
```sh
{
    type: {
        type: String,
        enum: ["image","text"]
    },
    content: {
        type: String,
        require: true
    },
    postImg: Array,
    hashTag: String,

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
    status: Boolean,
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }
    reportBy:{
        type: mongoose.Types.ObjectId,
    }

},{
    timestamps:true
});
```
