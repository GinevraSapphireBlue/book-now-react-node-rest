import { API_ENDPOINT } from './index.js';
// Function adding a new book to the backend API
export const addNewBook = async (newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books`, {
        method: 'POST',
        body: JSON.stringify({
            title: newTitle,
            start: newStart,
            end: newEnd
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const newBook = await response.json();
    return newBook;
};
// Function getting all books from the backend API
export const getBooks = async () => {
    const response = await fetch(`${API_ENDPOINT}/books`);
    const books = await response.json();
    return books;
};
// Function updating an existing book through the backend API
export const updateBook = async (id, newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            newTitle,
            newStart,
            newEnd
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.status;
};
// Function deleting an existing book through the backend API
export const deleteBook = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
        method: 'DELETE'
    });
    return response.status;
};