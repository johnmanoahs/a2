"use strict";
var PostComments = (function () {
    function PostComments() {
    }
    return PostComments;
}());
exports.PostComments = PostComments;
var Post = (function () {
    function Post() {
        this.comments = new PostComments();
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map