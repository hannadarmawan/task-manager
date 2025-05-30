import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import TaskForm from '@/Components/TaskForm';
import TaskItem from '@/Components/TaskItem';

export default function Index({ tasks }) {
  const { patch, delete: destroy } = useForm();

  const toggleComplete = (taskId) => {
    patch(route('tasks.toggleComplete', taskId));
  };

  const handleDelete = (taskId) => {
    if (confirm('Apakah kamu yakin ingin menghapus task ini?')) {
      destroy(route('tasks.destroy', taskId));
    }
  };

  return (
    <>
      <Head title="Task Manager" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-2 sm:px-0">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
            🚀 Task Manager
         </h1>

          <TaskForm />

          <ul className="space-y-2">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleComplete(task.id)}
                onDelete={() => handleDelete(task.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
