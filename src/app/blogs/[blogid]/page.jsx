import BlogDetails from "@/components/ui/BlogDetails";

// interface BlogId{
//     params:{
//         blogid:string;
//     }
// }
export default async function page({params}) {
    const res=await fetch(`http://localhost:5000/blogs/${params.blogid}`,);
    const blog= await res.json();
    console.log(blog)
  return (
    <div>
        <BlogDetails blog={blog} />
    </div>
  )
}
