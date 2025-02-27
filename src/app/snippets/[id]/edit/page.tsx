import { db } from '@/db'
import React from 'react'
import { redirect } from 'next/navigation'
import CodeEdit from '@/app/components/codeEdit'

export default async function Page({ params }: { params: { id: string } }) {
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
