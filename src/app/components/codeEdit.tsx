'use client'

import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import type { Snippet } from '@prisma/client'
import { updateSnippetById } from '@/app/actions'

interface CodeEditProps {
    snippet: Snippet
}

export default function CodeEdit({ snippet }: CodeEditProps) {
    const [code, setCode] = useState(snippet.code)
    const handleUpdate = () => {
        updateSnippetById({
            ...snippet,
            code: code
        })
    }
    const onChangeHandle = (code: string | undefined) => {
        if (!code) return
        setCode(code)
    }
    console.log('snippet:', snippet);
    return (
        <div className='mt-4'>
            <Editor
                height="40vh"
                defaultLanguage="javascript"
                defaultValue={snippet.code}
                theme="vs-dark"
                options={{
                    minimap: { enabled: false },  // 禁用右侧小地图
                    fontSize: 14,                 // 设置字体大小
                    lineNumbers: 'on',           // 显示行号
                    scrollBeyondLastLine: false, // 禁止滚动超过最后一行
                    automaticLayout: true,       // 自动调整布局
                }}
                onChange={onChangeHandle}
            />
            <form action={handleUpdate}>
                <button className='mt-4 border border-teal-500 p-2 rounded-md hover:bg-teal-50 transition-colors' type="submit">Save Changes</button>
            </form>
        </div>
    )
}
