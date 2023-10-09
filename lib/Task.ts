class Task {
  id: number;
  title: string;
  description: string;
  tags: string[];
  completed: boolean;
  erased: boolean;
  createDate: Date;
  completedDate?: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    tags: string[],
    completed: boolean,
    erased: boolean,
    createDate: Date,
    completedDate?: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.tags = tags;
    this.erased = erased;
    this.createDate = createDate;
    this.completedDate = completedDate;
  }
}

export default Task;
