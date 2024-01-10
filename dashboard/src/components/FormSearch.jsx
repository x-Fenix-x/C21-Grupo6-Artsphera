import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

export const FormSearch = () => {
    const [valuesForm, setValuesForm] = useState({});

    const handleInputChange = ({ target }) => {
        setValuesForm({
            ...valuesForm,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <input
                    type='text'
                    name='keyword'
                    className='form-control'
                    onChange={handleInputChange}
                    placeholder='Buscar producto'
                />
                <button
                    className='btn btn-outline-dark input-group-text'
                    type='submit'
                >
                    <i className='fas fa-search'></i>
                </button>
            </InputGroup>
        </Form>
    );
};
