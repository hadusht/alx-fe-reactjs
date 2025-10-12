import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("new-todo-input");
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.submit(input.closest("form"));
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("can toggle a todo's completion status", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    expect(todo).toHaveStyle("text-decoration: none");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build a Todo App");
    const deleteButton = screen.getByTestId(/delete-\d+/);
    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
