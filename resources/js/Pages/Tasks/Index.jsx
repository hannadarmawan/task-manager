import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ tasks }) {
  const { data, setData, post, delete: destroy, patch, processing, reset } = useForm({
    title: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('tasks.store'), {
      onSuccess: () => reset(),
    });
  };

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
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            🚀 Task Manager
          </h1>

          {/* Form Tambah Task */}
          <form onSubmit={handleSubmit} className="mb-6">
            <input
              type="text"
              placeholder="Judul Task"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              placeholder="Deskripsi Task (opsional)"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              disabled={processing}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl w-full transition"
            >
              + Tambah Tugas
            </button>
          </form>

          {/* List Tasks */}
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition p-3 rounded-xl"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.is_completed}
                    onChange={() => toggleComplete(task.id)}
                    className="form-checkbox h-5 w-5 text-indigo-600 mr-2"
                  />
                  <div>
                    <span
                      className={`font-medium ${
                        task.is_completed
                          ? 'line-through text-gray-400'
                          : 'text-gray-800'
                      }`}
                    >
                      {task.title}
                    </span>
                    {task.description && (
                      <p className="text-sm text-gray-600">
                        {task.description}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
