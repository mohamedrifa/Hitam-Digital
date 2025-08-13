import React from "react";
import BlogAutoRow from "../../components/blog/BlogAutoRow";
import EditorPicks from "../../components/blog/EditorPicks";
import BlogList from "../../components/blog/BlogList";
import HeroSectionOne from "../../components/herosection-one/HeroPageOne";

const BlogPage = () => {
   
 return(
    <>
      <HeroSectionOne/>
      <BlogAutoRow/>
      <EditorPicks />
      <BlogList />
    </>
 )
}

export default BlogPage;