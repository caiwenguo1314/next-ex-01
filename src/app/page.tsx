import React from 'react'
import '@/db'
import Link from 'next/link'
import { db } from '@/db'

// 强制动态渲染，确保每次请求都获取最新数据
export const dynamic = 'force-dynamic';

export default async function Page() {
  const snippets = await db.snippet.findMany()

  const snippetList = snippets.map(snippet => (
    <Link key={snippet.id}
      href={`/snippets/${snippet.id}`}
      className='flex justify-between gap-4 mt-4 border border-teal-500 p-4 rounded-md hover:bg-teal-50 transition-colors'
    >
      <span>{snippet.title}</span>
      <span>View</span>
    </Link>)
  )

  return (
    <>
      <div className='flex justify-between mt-4'>
        <h3 className='text-2xl font-bold'>Snippets</h3>
        <Link className='  p-2 rounded-md border border-teal-500' href="/snippets/new">New</Link>
      </div>
      {snippetList}
    </>
  )
}
// export const metadata = {