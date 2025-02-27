import Link from 'next/link'

export default function SnippetNotFound() {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">代码片段未找到</h2>
            <p className="text-gray-600 mb-4">
                抱歉，您请求的代码片段不存在或已被删除
            </p>
            <Link 
                href="/snippets" 
                className="text-blue-500 hover:text-blue-600 underline"
            >
                返回代码片段列表
            </Link>
        </div>
    )
}