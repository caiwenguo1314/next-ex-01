import { db } from '@/db'
import React from 'react'
import { redirect } from 'next/navigation'
import CodeEdit from '@/app/components/codeEdit'

// 强制动态渲染，确保每次请求都获取最新数据
export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const snippetParams = await params
    const id = snippetParams.id
    const snippet = await db.snippet.findUnique({
        where: {
            id: Number(id),
        }
    })
    if (!snippet) {
        redirect('/')
    }
    return (
        <>
                <CodeEdit snippet={snippet} />
        </>

    )
}
