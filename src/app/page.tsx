import LatestBlogs from "@/components/latest-blog/latest-blog";

const HomePage = async () => {
  const res=await fetch("http://localhost:5000/blogs",{
    next:{revalidate:5}   //for SSG
  });
  const blogs=await res.json();
  
  return (
    <>
      <LatestBlogs blogs={blogs}></LatestBlogs>
    </>
  );
};

export default HomePage;
