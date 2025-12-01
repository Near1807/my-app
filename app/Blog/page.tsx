"use server";
import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { SendMessage, GetMessages, RemoveElem } from "../components/blog";
import { Text } from "../components/cv";

export default async function Blog() {
  const messages = await GetMessages();
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200 dark:text-gray-50">
      <form action={SendMessage} className="text-center p-5 dark:text-white ">
        <Text className="dark:text-gray-50">What's your message my dear</Text>
        <input
          className="dark:text-gray-50 border border-gray-300"
          name="message"
        />
        <button className="dark:text-white border border-gray-300 ml-1 px-1 rounded-2xl hover:bg-gray-200">
          Submit
        </button>
      </form>
      <ul>
        {messages.map((elem) => (
          <form
            key={elem.id}
            className="flex flex-row grow dark:text-gray-50"
            action={RemoveElem.bind(null, elem.id)}
          >
            <div className="grid grid-cols-5 grow p-5 border border-gray-300 rounded-2xl dark:bg-gradient-to-br from-gray-900 to-gray-800 dark:text-gray-50">
              <div className="col-span-4 ">
                <input className="ml-1" type="checkbox" />
                {elem.title}
              </div>
              <button className="bg-sky-100 hover:bg-sky-200 border border-gray-300 col-span-1 ">
                delete
              </button>
            </div>
          </form>
        ))}
      </ul>
    </div>
  );
}
