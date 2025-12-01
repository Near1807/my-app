"use server";
import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import { ALL } from "dns";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

let messages: { message: string }[] = [{ message: "test" }];

export async function GetMessages() {
  return await db.select().from(tasksTable);
}

export async function SendMessage(form: FormData) {
  await db.insert(tasksTable).values({
    title: String(form.get("message")),
    done: false,
  });
  redirect((await headers()).get("referer") ?? "/");
}

export async function RemoveElem(id: string) {
  await db.delete(tasksTable).where(eq(tasksTable.id, id));
  redirect((await headers()).get("referer") ?? "/");
}
