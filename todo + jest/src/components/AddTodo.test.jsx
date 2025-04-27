import { fireEvent, render, screen } from '@testing-library/react';
import AddTodo from './AddTodo';

describe('AddTodo', () => {
    const mockOnAdd = jest.fn();
    
    beforeEach(() => {
        render(<AddTodo onAdd={mockOnAdd} />);
    });
    
    test('Ввод текста и отправка формы вызывают добавление задачи', () => {
        const input = screen.getByPlaceholderText('Add new todo...');
        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByTestId('add-button'));
    
        expect(mockOnAdd).toHaveBeenCalledWith('New Todo');
    });
    
    test('Форма очищается после отправки', () => {
        const input = screen.getByPlaceholderText('Add new todo...');
        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByTestId('add-button'));
    
        expect(input.value).toBe('');
    });
});