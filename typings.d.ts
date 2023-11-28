type Note = {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    pinned: boolean;
};

type Tag = {
    id: string;
    title: string;
    color: string;
}