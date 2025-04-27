import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const updatedTodo = { ...mockTodo, completed: true };
  const mockTodo = {
    id: 1,
    text: 'Test todo',
    completed: false
  };

  const mockOnToggle = jest.fn();
  const mockOnDelete = jest.fn();

  it('renders todo item correctly', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );

    expect(screen.getByText('Test todo')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('item deleting calls onDelete()', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );
    
    const deleteButton = screen.getByTestId('delete-1');
    fireEvent.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalled();
  });

  test('status change works', () => {
    const { rerender } = render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );

    const toggleButton = screen.getByTestId('toggle-1');
    fireEvent.click(toggleButton);
    rerender(
    <TodoItem 
      todo={updatedTodo} 
      onToggle={mockOnToggle} 
      onDelete={mockOnDelete} 
    />
  );
    expect(mockOnToggle).toHaveBeenCalledWith(mockTodo.id);
    expect(toggleButton).toBeChecked();
  });
});