"use server";

import { db } from "@/db";
import { Snippet } from "@prisma/client";
import { redirect } from "next/navigation";

export async function deleteSnippetById(id: number) {
  await db.snippet.delete({
    where: {
      id,
    },
  });
  redirect("/");
}

export async function updateSnippetById(snippet: Snippet) {
  await db.snippet.update({
    where: {
      id: snippet.id,
    },
    data: {
      code: snippet.code,
    },
  });
  redirect("/snippets/" + snippet.id);
}
