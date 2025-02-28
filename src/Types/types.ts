export type TodoProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

export type TodosContextProviderProps = {
  children: React.ReactNode;
};

export type TTodosContext = {
  initialTodos: TodoProps[];
  numberOfCompletedTodos: number;
  totalNumberOfTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
};