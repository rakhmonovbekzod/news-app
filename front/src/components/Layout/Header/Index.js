import { Link } from 'react-router-dom';
import { Button, Input } from '../../formComponents';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className='container'>
            <Link to="/">Home</Link>
            <Link to="/news">Link</Link>
            <Link to="/" >Link</Link>
          
          <Form className="d-flex">
            <Input
              type="search"
              placeholder="Search"
              className="me-2"
            />
            <Button className="outline-success" text="Search"/>
          </Form>
      </div>
    </Navbar>
  );
}

export default Header;