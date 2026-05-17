import LoadingCard from '@/components/ui/LoadingCard'
import { Blog } from '@/types';
import React from 'react'

export default async function BlogLoadingPage() {
    const res=await fetch("http://localhost:5000/blogs");
    const blogs=await res.json();
  return (
    <div className='grid grid-cols-3 gap-4'>
        {
            blogs.slice(0,3).map((blog:Blog)=><LoadingCard key={blog.id}></LoadingCard>)
        }
    </div>
  )
}
