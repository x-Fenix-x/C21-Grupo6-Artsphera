import PropTypes from 'prop-types';

export const TableItem = ({
    product: { title, price, discount, category, section },
}) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{category.name}</td>
            <td>{section.name}</td>
            <td>{price}</td>
            <td>{discount}</td>
            <td>
                <div className='d-flex'>
                    <button className='btn btn-sm btn-outline-success mr-2'>
                        <i className='fas fa-pencil-alt'></i>
                    </button>
                    <button className='btn btn-sm btn-outline-danger'>
                        <i className='fas fa-trash-alt'></i>
                    </button>
                </div>
            </td>
        </tr>
    );
};

TableItem.propTypes = {
    product: PropTypes.object,
};
