import React from 'react';
import { useForm } from '@inertiajs/react';

export default function TaskForm() {
  const { data, setData, post, processing, reset } = useForm({
    title: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('tasks.store'), {
      onSuccess: () => reset(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 px-2 sm:px-4">
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
  );
}
