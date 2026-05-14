import BlogCard from "../../components/ui/BlogCard"

export default async function BlogPage() {
    const res = await fetch("http://localhost:5000/blogs", {
        cache:"no-store"
    });
    const blogs = await res.json();
    
    return (
        <div>
            <h1 className="text-center text-3xl mb-8">Latest Blog From <span className="text-accent">Blogiz</span></h1>
            <div className="grid grid-cols-3 gap-3">
            
            {
                blogs.map((blog)=><BlogCard key={blog.id} blog={blog} />)
            }
        </div>
        </div>
    )
}
