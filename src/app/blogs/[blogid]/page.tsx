import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

export interface BlogId {
    params: {
        blogid: string;
    }
}

export async function generateStaticParams() {                      //'npm run build' korar somoy jeno first 3 ta blog SSG hoye thake jate client click dile load nite n hoy
    const res = await fetch('http://localhost:5000/blogs');            {/* mane holo amar 100 blogs theke first 3 ta blogs ami static kore rakci*/}
    const blogs = await res.json();

    return blogs.slice(0, 3).map((blog: Blog) => ({
        blogid: blog.id,
    }));
}

export default async function PageDetails({ params }: BlogId) {         //read more a click korle oi product ar details dekhabe
    const { blogid } = params;
    const res = await fetch(`http://localhost:5000/blogs/${blogid}`, {
        cache: "no-store"
    });
    const blog = await res.json();
    return (
        <div>
            <BlogDetails key={blog.id} blog={blog} />
        </div>
    )
}
