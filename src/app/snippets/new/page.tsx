import { db } from '@/db';
import { redirect } from 'next/navigation';
import React from 'react'


export default function Page() {
    async function createSnippet(formData: FormData) {
        'use server'
        const title = formData.get('title') as string
        const code = formData.get('code') as string

        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            },
        });
        console.log(snippet);
        redirect('/')
    }
    return (
        <form action={createSnippet} >
            <div className='flex flex-col gap-4'>
                <h3 className='text-2xl font-bold text-center'>Create a Snippet</h3>
                {/* Title */}
                <div className='flex gap-4'>
                    <label className='w-12' htmlFor='title'>Title</label>
                    <input type="text" name="title" id="title" className='border-2 border-gray-300 w-full' />
                </div>
                {/* Code */}
                <div className='flex gap-4 '>
                    <label htmlFor='code' className='w-12'>Code</label>
                    <input type="text" name="code" id="code" className='border-2 border-gray-300 w-full' />

                </div>
                <button type='submit' className='bg-blue-500 text-white p-2 rounded-md  '>Create</button>
            </div>
        </form>
    )
}
