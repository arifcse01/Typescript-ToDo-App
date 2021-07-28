import React from 'react';
import './List.css';
import { IState as IProps} from '../App';


const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img src={person.img} className="List-img" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>$ {person.salary}</p>
                    <p className="List-note">{person.designation}</p>
                </li>
            )
        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    );
}

export default List;