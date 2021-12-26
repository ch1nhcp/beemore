const PostModel = require('./post-model');
const PostTagModel = require('../postTag/posttag-model');
const { copy } = require('./post-router');

const getAllPosts = async (req, res, next) => {
    try{
        const { 
            keyword, 
            createdBy, 
            tag, 
            skip, 
            limit, 
            sortField, 
            sortDirection 
        } = req.query;
    
        const createdByFilter = createdBy ? { createdBy } : {};
        const keywordFilter = keyword ? 
          { 
            $or: [
              { title: { $regex: new RegExp(`${keyword}`, 'i') }},
              { description: { $regex: new RegExp(`${keyword}`, 'i') }}
            ]
          } : {};
    
        const tagFilter = tag ? { tags: tag } : {};
    
        const filter = {
          ...createdByFilter,
          ...keywordFilter,
          ...tagFilter
        };
    
        const pagination = {
          skip: skip ? Number(skip) : 0,
          limit: limit ? Number(limit): 4
        }
    
        const sortDirectionParams = sortDirection ? Number(sortDirection) : -1;
        const sortParams = sortField ? {
          [sortField]: sortDirectionParams
        } : {}
    
    
        const [posts, totalPosts] = await Promise.all([
            PostModel
              .find(filter)
              .populate('createdBy', '-password -__v') // populate xuôi

              .sort(sortParams)
              .skip(pagination.skip)
              .limit(pagination.limit),
            PostModel.find(filter).countDocuments()
          ])
    
          res.send({
            success: 1,
            data: {
              data: posts,
              total: totalPosts
            },
          });
    }
    catch(err){
        res.status(400).send({
            success: 0,
            data: null,
            message: err.message || "Something went wrong",
          });
    }
}

const getPostById = async (req, res, next) => {
    try{
        const {postId} = req.params;
        const foundPosts = await PostModel.findById(postId).populate({path:'createdBy',select:'username password'});
        res.send({
            success: 1,
            data: foundPosts
        })
    }
    catch (err) {
        next(err);
    }
}

const createNewPost = async (req, res, next) => {
    try {
        const { user } = req;
        const newPostData = req.body; 
        const newPost = await PostModel.create({
          ...newPostData,
          createdBy: user._id
        })
        console.log(newPost._id);
        const newPostTag = await PostTagModel.create({
          "postId":newPost._id
        })

        res.send({
          success: 1,
          data: {
            data: newPost,
            postTag: newPostTag
          },
        });
        // const { user } = req;
        // console.log(req)
    
        // const newPostData = req.body; 
        // const newPost = await PostModel.create({
        //   ...newPostData,
        //   createdBy: user._id
        // });
    
        // res.send({
        //   success: 1,
        //   data: newPost,
        // });
      } catch (err) {
        next(err);
      }

      
}

const updatePost = async (req, res) => {
    try{
        const { postId } = req.params;
        const updatePostData = req.body;

        const updatedPost = await PostModel.findByIdAndUpdate(postId,updatePostData, {new: true});

        res.send({
            success: 1,
            data: updatedPost
        })
    }
    catch (err) {
        next(err);
    }
}

const deletePost = async (req, res) => {
    const {postId} = req.params;
    try {
        const deletedPost = await PostModel.findByIdAndDelete(postId);
        res.send({
            success: 1,
            data: deletedPost
        })
    }
    catch(err) {
        next(err);
    }
}

const getPostTagAll = async (req, res, next) => {
  try{
    const { 
        keyword, 
        createdBy, 
        tag, 
        skip, 
        limit, 
        sortField, 
        sortDirection 
    } = req.query;

    const createdByFilter = createdBy ? { createdBy } : {};
    const keywordFilter = keyword ? 
      { 
        $or: [
          { title: { $regex: new RegExp(`${keyword}`, 'i') }},
          { description: { $regex: new RegExp(`${keyword}`, 'i') }}
        ]
      } : {};

    const tagFilter = tag ? { tags: tag } : {};

    const filter = {
      ...createdByFilter,
      ...keywordFilter,
      ...tagFilter
    };

    const pagination = {
      skip: skip ? Number(skip) : 0,
      limit: limit ? Number(limit): 4
    }

    const sortDirectionParams = sortDirection ? Number(sortDirection) : -1;
    const sortParams = sortField ? {
      [sortField]: sortDirectionParams
    } : {}


    const [posts, totalPosts] = await Promise.all([
        PostTagModel
          .find(filter)
          .populate('tagId').populate({path:'postId',populate:{path:'createdBy',select: 'username'}})
          .sort(sortParams)
          .skip(pagination.skip)
          .limit(pagination.limit),
        PostTagModel.find(filter).countDocuments()
      ])

      res.send({
        success: 1,
        data: {
          data: posts,
          total: totalPosts
        },
      });
    }
    
    catch(err){
        res.status(400).send({
            success: 0,
            data: null,
            message: err.message || "Something went wrong",
          });
    }
}

const getPostTag = async (req, res, next) => {
  try{
    const {postId} = req.params;
    const foundPosts = await PostTagModel.findOne({postId:postId}).populate('tagId').populate({path:'postId',populate:{path:'createdBy',select: 'username'}});
    res.send({
        success: 1,
        data: foundPosts,
    })
  } 
  catch (err) {
      next(err);
  }
}

const createPostTag = async (req, res) => {
  try {
    const { user } = req;

    const newPostTag = req.body; 
    const newPost = await PostTagModel.create({
      ...newPostTag
    });

    res.send({
      success: 1,
      data: newPost,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
    getAllPosts,
    getPostTagAll,
    getPostById,
    createNewPost,
    updatePost,
    deletePost,
    getPostTag,
    createPostTag,
}