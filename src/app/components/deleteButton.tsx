'use client'

import React, { startTransition } from 'react'
import { deleteSnippetById } from '@/app/actions'


export default function DeleteButton({id}: {id: number}) {
  const clickHandler = () => {
    startTransition(async() => {
      await deleteSnippetById(id)      
    })    
  }
  return (
    <button onClick={clickHandler}>Delete</button>
  )
}
