import { create } from "zustand";
import { persist } from "zustand/middleware";


type NotesStore = {
    notes: Note[];

    addNote: (note: Note) => void;
    removeNote: (id: string) => void;
    updateNote: (id: string, note: Note) => void;
    pinNote: (id: string) => void;
    unpinNote: (id: string) => void;

    trashNotes: Note[];

    addTrashNote: (note: Note) => void;
    recoverTrashNote: (id: string) => void;
    removeTrashNote: (id: string) => void;
    clearTrash: () => void;
};

export const useNotesStore = create<NotesStore>()(persist((set, get) => ({
    notes: [],

    addNote: (note) => {
        const pinnedNotes = get().notes.filter((n) => n.pinned);
        const otherNotes = get().notes.filter((n) => !n.pinned);
        set((state) => ({
            notes: [...pinnedNotes, note, ...otherNotes],
        }));
    },

    recoverTrashNote: (id) => {
        const recoveredNote = get().trashNotes.find((n) => n.id === id);
        // add to notes
        if (recoveredNote) {
            get().addNote(recoveredNote);
        }
        // remove note form list
        set((state) => ({
            trashNotes: state.trashNotes.filter((n) => n.id !== id),
        }));
    },

    removeNote: (id) => {
        const removedNote = get().notes.find((n) => n.id === id);
        // add to trash
        if (removedNote) {
            get().addTrashNote(removedNote);
        }
        // remove note form list
        set((state) => ({
            notes: state.notes.filter((n) => n.id !== id),
        }));
    },

    updateNote: (id, note) =>
        set((state) => ({
            notes: state.notes.map((n) => (n.id === id ? {
                ...n,
                ...note
            } : n)),
        })),

    pinNote(id) {
        const pinnedNotes = get().notes.filter((n) => n.pinned && n.id !== id);
        const otherNotes = get().notes.filter((n) => !n.pinned && n.id !== id);

        const note = get().notes.find((n) => n.id === id);

        if (!note) return

        set(() => ({
            notes: [{ ...note, pinned: true }, ...pinnedNotes, ...otherNotes]
        }))
    },

    unpinNote(id) {
        const pinnedNotes = get().notes.filter((n) => n.pinned && n.id !== id);
        const otherNotes = get().notes.filter((n) => !n.pinned && n.id !== id);

        const note = get().notes.find((n) => n.id === id);

        if (!note) return

        set(() => ({
            notes: [...pinnedNotes, { ...note, pinned: false }, ...otherNotes]
        }))
    },

    trashNotes: [],

    addTrashNote: (note) => set((state) => ({
        trashNotes: [...state.trashNotes, note],
    })),

    removeTrashNote: (id) => set((state) => ({
        trashNotes: state.trashNotes.filter((n) => n.id !== id)
    })),

    clearTrash: () => set((state) => ({
        trashNotes: []
    })),

}), {
    name: "notes",
    version: 0.1,
}
));
