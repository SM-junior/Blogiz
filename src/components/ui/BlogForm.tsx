"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type FormValues = {
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
};

const CreateBlogForm = () => {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const blogData = {
        ...data,
        total_likes: 100,
      };

      const res = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (!res.ok) {
        throw new Error("Failed to create blog");
      }

      const result = await res.json();
      console.log("Created Blog:", result);

      reset();

      router.push("/blogs"); // go to blog list page
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl">
        Post Your <span className="text-accent">Blog</span>
      </h1>

      <div className="hero min-h-screen">
        <div className="card w-[50%] shadow-xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <input
              type="text"
              {...register("title")}
              placeholder="Title"
              className="input input-bordered"
              required
            />

            <textarea
              {...register("description")}
              placeholder="Description"
              className="textarea textarea-bordered"
              required
            />

            <input
              type="date"
              {...register("publish_date")}
              className="input input-bordered"
              required
            />

            <input
              type="text"
              {...register("author_name")}
              placeholder="Author Name"
              className="input input-bordered"
              required
            />

            <input
              type="url"
              {...register("blog_image")}
              placeholder="Image URL"
              className="input input-bordered"
              required
            />

            <button type="submit" className="btn btn-accent">
              Post
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;