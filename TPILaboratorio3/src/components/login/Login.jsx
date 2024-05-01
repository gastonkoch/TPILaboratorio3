import {Button,Form} from 'react-bootstrap';


const Login = () => {
    return (
        <>
            <Form >
            <Form.Group controlId="product-name">
                <Form.Label className='text-light'>Product Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder='Name...'
                    // onChange={}
                    // value={}
                />
            </Form.Group>
            <Form.Group controlId="product-name">
                <Form.Label className='text-light'>Product Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder='Name...'
                    // onChange={}
                    // value={}
                />
            </Form.Group>
            <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5">Add</Button>
        </Form>
        </>
    )
}

export default Login