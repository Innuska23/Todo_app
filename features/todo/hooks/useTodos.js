"use client";

import { addTodo, deleteTodo, fetchTodos } from "@/features/todo/api/todoApi";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const useTodos = () => {
  const queryClient = useQueryClient();

  const {
    data: todos = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const addMutation = useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData(["todos"]);

      const optimisticTodo = {
        id: Date.now(),
        ...newTodo,
      };

      queryClient.setQueryData(["todos"], (old) => [
        optimisticTodo,
        ...(old || []),
      ]);
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["todos"], context.previousTodos);
    },
    onSettled: () => {},
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData(["todos"]);

      queryClient.setQueryData(["todos"], (old) =>
        old.filter((todo) => todo.id !== id)
      );

      return { previousTodos };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(["todos"], context.previousTodos);
    },
    onSettled: () => {},
  });

  return {
    todos,
    isLoading,
    isError,
    addTodo: addMutation.mutate,
    deleteTodo: deleteMutation.mutate,
  };
};

export default useTodos;
