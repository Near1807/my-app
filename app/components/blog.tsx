"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

let messages: { message: string }[] = [{ message: "test" }];

export async function GetMessages() {
  return messages;
}

export async function SendMessage(form: FormData) {
  messages.push({
    message: String(form.get("message")),
  });
  redirect((await headers()).get("referer") ?? "/");
}

export async function RemoveElem(id: number) {
  delete messages[id];
  redirect((await headers()).get("referer") ?? "/");
}
