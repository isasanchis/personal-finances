import axios from 'axios';

type Delete = (id: unknown, e: React.FormEvent<EventTarget>) => void;

export const handleDelete: Delete = (id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/savings/${id}`)
        .then(() => window.location.reload())
        .catch(err => console.log(err));
};