'use client';

import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  date: string;
}

const initialData: Item[] = [
  { id: 1, name: 'Item 1', description: 'Description 1', date: '2023-10-03' },
  { id: 2, name: 'Item 2', description: 'Description 2', date: '2023-10-04' },
  { id: 3, name: 'Item 3', description: 'Description 3', date: '2023-10-05' },
];

const CRUD: React.FC = () => {
  const [data, setData] = useState<Item[]>(initialData);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [editId, setEditId] = useState<number | null>(null);

  const handleAdd = () => {
    if (name && description && date) {
      setData([
        ...data,
        { id: Date.now(), name, description, date },
      ]);
      setName('');
      setDescription('');
      setDate('');
    }
  };

  const handleEdit = (item: Item) => {
    setName(item.name);
    setDescription(item.description);
    setDate(item.date);
    setEditId(item.id);
  };

  const handleUpdate = () => {
    if (editId !== null) {
      setData(data.map(item =>
        item.id === editId ? { ...item, name, description, date } : item
      ));
      setName('');
      setDescription('');
      setDate('');
      setEditId(null);
    }
  };

  const handleDelete = (id: number) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 min-h-screen p-4">
      <div className="bg-black bg-opacity-70 p-8 rounded-xl shadow-2xl text-blue-100 max-w-4xl mx-auto">
        <h1 className='text-4xl font-bold mb-6 text-blue-300'>TODO Notes</h1>
        <div className='mb-6 space-y-4'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            className='p-2 w-full bg-blue-900 bg-opacity-50 border border-blue-400 rounded text-blue-100 placeholder-blue-300'
          />
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
            className='p-2 w-full bg-blue-900 bg-opacity-50 border border-blue-400 rounded text-blue-100 placeholder-blue-300'
          />
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='p-2 w-full bg-blue-900 bg-opacity-50 border border-blue-400 rounded text-blue-100'
          />
          {editId !== null ? (
            <button
              onClick={handleUpdate}
              className='bg-green-600 hover:bg-green-700 text-white p-2 rounded w-full transition duration-300'
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full transition duration-300'
            >
              Add
            </button>
          )}
        </div>
        <ul className="space-y-4">
          {data.map(item => (
            <li key={item.id} className='bg-blue-900 bg-opacity-50 p-4 rounded flex justify-between items-center'>
              <div>
                <h2 className='text-xl font-bold text-blue-300'>{item.name}</h2>
                <p className='text-blue-100'>{item.description}</p>
                <p className='text-blue-200'>Date: {item.date}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className='bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded transition duration-300'
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='bg-red-600 hover:bg-red-700 text-white p-2 rounded transition duration-300'
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CRUD;