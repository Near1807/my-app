"use server";
import { SendMessage, GetMessages, RemoveElem } from "../components/blog";
import { Text } from "../components/cv";

export default async function Blog() {
  const messages = await GetMessages();
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <form action={SendMessage} className="text-center p-5">
        <Text className="">What's your message my dear</Text>
        <input className="border" name="message" />
        <button className="border ml-1 px-1 rounded-2xl hover:bg-gray-200">
          Submit
        </button>
      </form>
      <ul>
        {messages.map((elem, id) => (
          <form
            key={id}
            className="flex flex-row grow"
            action={RemoveElem.bind(null, id)}
          >
            <div className="grid grid-cols-5 grow p-5 border rounded-2xl dark:bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="col-span-4">{elem.message}</div>
              <button className="hover:bg-gray-200 border col-span-1">
                delete
              </button>
            </div>
          </form>
        ))}
      </ul>
    </div>
  );
}
