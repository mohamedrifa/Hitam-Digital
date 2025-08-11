import React from "react";
import BlogAutoRow from "../../components/blog/BlogAutoRow";
import EditorPicks from "../../components/blog/EditorPicks";
import BlogList from "../../components/blog/BlogList";

const BlogPage = () => {
   
 return(
    <>
      <BlogAutoRow/>
      <EditorPicks />
      <BlogList />
    </>
 )
}

export default BlogPage;