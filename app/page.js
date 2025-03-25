import Todolist from "@/features/todo/ui/TodoList/TodoList";
import Providers from "./providers";
import Header from "@/features/todo/ui/Header/Header";

export default function Home() {
  return (
    <Providers>
      <main className="p-8 max-w-2xl mx-auto bg-white rounded-xl shadow-lg mt-10">
        <Header />
        <Todolist />
      </main>
    </Providers>
  );
}
