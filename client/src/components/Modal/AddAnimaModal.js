import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ANIMAL } from '../../utils/mutations';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Label,
    Input,
    FormGroup,
} from 'reactstrap';


function AddAnimalModal(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [formState, setFormState] = useState({
        petname: '',
        age: '',
        breed: '',
        animaltype: '',
        weight: '',
    });

    const [addAnimal, { error }] = useMutation(ADD_ANIMAL);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
       // console.log(name, value);

    };

    const handleFormSubmit = async (event) => {
        try {
            await addAnimal({
                variables: { ...formState },
            });

        } catch (error) {
            console.log(error)
        }

        //clear the form state
        setFormState({
            petname: '',
            age: '',
            breed: '',
            animaltype: '',
            weight: '',
        });
    };

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Add Pet
            </Button>
            <Modal
                isOpen={modal}
                toggle={toggle}

            >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleFormSubmit}>
                        <FormGroup>
                            <Label className="font" for="petname">
                                Pet Name
                            </Label>
                            <Input
                                id="petname"
                                className="font"
                                name="petname"
                                placeholder="Add Your Pet's Name Here"
                                type="text"
                                value={formState.petname}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="font" for="age">
                                Pet's Age
                            </Label>
                            <Input
                                id="age"
                                className="font"
                                name="age"
                                placeholder="Add Your Pet's Age Here"
                                type="text"
                                value={formState.age}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="font" for="breed">
                                Pet's Breed
                            </Label>
                            <Input
                                id="breed"
                                className="font"
                                name="breed"
                                placeholder="Add Your Pet's Breed Here"
                                type="text"
                                value={formState.breed}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="font" for="animaltype">
                                Pet's Type
                            </Label>
                            <Input
                                id="animaltype"
                                className="font"
                                name="animaltype"
                                placeholder="Add Your Pet's Type Here"
                                type="text"
                                value={formState.animaltype}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="font" for="weight">
                                Pet's Weight
                            </Label>
                            <Input
                                id="weight"
                                className="font"
                                name="weight"
                                placeholder="Add Your Pet's Weight Here"
                                type="text"
                                value={formState.weight}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <Button color="primary" onClick={toggle} className="submit-button" type="submit" value="submit">
                        Add Pet
                    </Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


export default AddAnimalModal;