import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
} from 'reactstrap';

function Login(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = userMutation(LOGIN);

    //update state based on from input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFromSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            })

            Auth.login(data.login.token)
        } catch (e) {
            console.log(e);

        }

        //clear form values
        setFormState({
            username: '',
            password: ''
        });
    }
  
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
        <Button color="danger" onClick={toggle}>
          Click Me
        </Button>
        <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
          <Form>

          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default Login;