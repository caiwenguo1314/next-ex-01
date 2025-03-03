import Link from 'next/link'
import React from 'react'
import { db } from '@/db'
import { notFound } from 'next/navigation'
import DeleteButton from '@/app/components/deleteButton'
// import { sleep } from '@/utils/sleep'

// 强制动态渲染，确保每次请求都获取最新数据
export const dynamic = 'force-dynamic';

interface SnippetShowPageProps { params: Promise<{ id: string }> }

export default async function Page({ params }: SnippetShowPageProps) {
    const snippetParams = await params

    const id = snippetParams.id
    // await sleep(1000)
    const snippet = await db.snippet.findUnique({
        where: {
            id: Number(id),
        }
    })
    if (!snippet) {
        notFound()
    }
    return (
        <>
            <div className='flex justify-between mt-4 items-center' >
                <h1 className='text-2xl font-bold'>{snippet.title}</h1>
                <div className='flex gap-4'>
                    <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link>
                    <DeleteButton id={+id}/>
                </div>
            </div>
            <pre className='border rounded p-4 mt-4 border-teal-500 bg-gray-300'>
                <code >
                    {snippet.code}
                </code>
            </pre>
        </>
    )
}
