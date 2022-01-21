import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(item => {
        const {id, ...itemsProps} = item;
        return (
            <EmployeesListItem key={id} {...itemsProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}/> // Тут можно добавить {...item} как упрощения кода 
        );
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList