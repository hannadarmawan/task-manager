<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    // Pastikan hanya user yg sudah login yg bisa akses controller ini
    public function __construct()
    {
        $this->middleware('auth');
    }

    // Tampilkan semua task user
    public function index()
    {
        $tasks = Task::where('user_id', auth()->id())->orderBy('created_at', 'desc')->get();

        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks,
        ]);
    }

    // Simpan task baru
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        Task::create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return redirect()->back()->with('success', 'Task berhasil dibuat!');
    }

    // Tandai task selesai / belum selesai
    public function toggleComplete(Task $task)
    {
        // Pastikan task milik user yg login
        if ($task->user_id !== auth()->id()) {
            abort(403);
        }

        $task->is_completed = !$task->is_completed;
        $task->save();

        return redirect()->back();
    }

    // Hapus task
    public function destroy(Task $task)
    {
        if ($task->user_id !== auth()->id()) {
            abort(403);
        }

        $task->delete();

        return redirect()->back()->with('success', 'Task berhasil dihapus!');
    }
}
