import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Navigate } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  Col,
  Label,
  Form
} from 'reactstrap';

function SignUp(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      email: '',
      password: '',
      username: ''
    });
    const loggedIn = Auth.loggedIn();
    if (loggedIn) {
      <Navigate to="/Profile" />
    };

  };

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <div>
      <Button id="sign-up-btn-header" onClick={toggle}>
        Sign Up 
      </Button>
      <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleFormSubmit}>

            <Col>
              <div>
                <Input
                  id="signUp-username"cd 
                  className="font"
                  placeholder="username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
              </div>
            </Col>
            <Col>
              <Label
                className="visually-hidden"
                for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                className="font"
                name="password"
                placeholder="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </Col>
            <Label
              className="visually-hidden"
              for="exampleEmail"
            >
              Email
            </Label>
            <Input
              id="exampleEmail"
              className="font"
              name="email"
              placeholder="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />

            <Button color="primary" onClick={toggle} value="submit" type="submit">
              Sign Up
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </Form>

        </ModalBody>
        <ModalFooter>


        </ModalFooter>
      </Modal>
    </div>
  );

}

export default SignUp;