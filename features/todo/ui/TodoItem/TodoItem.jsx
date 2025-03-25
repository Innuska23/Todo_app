"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import Button from "@/app/shared/Button/Button";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition"
    >
      <span className="flex-1 text-gray-900 text-base">{todo.title}</span>
      <Button variant="danger" size="sm" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </motion.li>
  );
};

export default TodoItem;
