import React, { useState } from 'react';
import './List.css';
import { IState as Props } from '../App';

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        salary: "",
        img: "",
        designation: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        setPeople([
            ...people,
            {
                name: input.name,
                salary: parseInt(input.salary),
                img: input.img,
                designation: input.designation
            }
        ]);

        setInput({
            name: "",
            salary: "",
            img: "",
            designation: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="name"
                className="AddToList-input"
                value={input.name}
                name="name"
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="Salary"
                className="AddToList-input"
                value={input.salary}
                name="salary"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="image url"
                className="AddToList-input"
                value={input.img}
                name="img"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Designation"
                className="AddToList-input"
                value={input.designation}
                name="Designation"
                onChange={handleChange}
            />
            <button onClick={handleClick} className="AddToList-btn">ADD NEW MEMBER</button>
        </div>

    );
}

export default AddToList;