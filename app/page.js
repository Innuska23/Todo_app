import Providers from "./providers";
// import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <Providers>
      <main className="p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        {/* <TodoList /> */}
      </main>
    </Providers>
  );
}
