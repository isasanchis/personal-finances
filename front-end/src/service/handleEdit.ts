import axios from 'axios';

type Edit = (id: unknown, e: React.FormEvent<EventTarget>) => void;

export const handleEdit: Edit = (id, e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/savings/${id}`)
        .then(() => window.location.reload())
        .catch(err => console.log(err));
};