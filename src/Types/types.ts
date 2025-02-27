export type TodoProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export type handleAddTodoType = {
  handleAddTodo: (todoText: string) => void;
};

export type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

export type TodoListProps = {
  initialTodos: TodoProps[];
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export type DeleteButtonProps = {
  id: number;
  handleDeleteTodo: (id: number) => void;
};

export type DerivedStateProps = {
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
};