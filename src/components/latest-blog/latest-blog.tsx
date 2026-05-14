import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";


export default function LatestBlogs({blogs}:{blogs:Blog[]}) {
  return (
    <div>
        <h1 className="text-center text-3xl">Latest Blog From <span className="text-accent">Blogiz</span></h1>
        <p className="w-2/4 mx-auto text-center my-5">
            Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.
        </p>
        <div className="grid grid-cols-2 gap-3">
            {
                blogs.slice(0,2).map(blog=><LatestBlogCard key={blog.id} blog={blog} />)
            }
        </div>
        <div className="grid grid-cols-3 gap-3 my-4">
            {
                blogs.slice(2,5).map(blog=><LatestBlogCard key={blog.id} blog={blog} />)
            }
        </div>
    </div>
  )
}
