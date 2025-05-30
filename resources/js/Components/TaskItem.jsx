import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 hover:bg-gray-200 transition p-3 sm:p-4 rounded-xl">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.is_completed}
          onChange={onToggle}
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
            <p className="text-sm text-gray-600">{task.description}</p>
          )}
        </div>
      </div>
      <button
  onClick={onDelete}
  className="text-red-500 hover:underline mt-2 sm:mt-0"
>
  Hapus
</button>
    </li>
  );
}
