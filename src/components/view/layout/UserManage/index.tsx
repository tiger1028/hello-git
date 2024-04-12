import { useState, FormEvent } from "react";
import { TableComponent } from "../../../common/table";
import {
  AddButton,
  SubmitButton,
  Container,
  Title,
  Modal,
  ModalContent,
  CloseButton,
  Input,
  Form,
  Label,
} from "./styles";
import { UserInfoType, INITIAL_INFO } from "../../../../consts/UserInfoType";

const headerColumns = ["UserId", "Name", "Email", "Action"];

export const UserManageComponent: React.FC = () => {
  const [isModelOpened, setIsModelOpened] = useState<boolean>(false);
  const [users, setUsers] = useState<UserInfoType[]>(INITIAL_INFO);

  const addUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserData = {
      userId: users.length + 1,
      name: formData.get("Name"),
      email: formData.get("Email"),
    } as UserInfoType;
    setUsers([...users, newUserData]);
    setIsModelOpened(false);
  };

  const deleteUser = (id: number) => {
    setUsers((previousUsers) => {
      const preArray = [...previousUsers];
      preArray.splice(id, 1);
      return preArray;
    });
  };

  return (
    <>
      <Container>
        <Title>User Table</Title>
        <TableComponent
          data={users}
          delete={deleteUser}
          headers={headerColumns}
        />
        <AddButton onClick={() => setIsModelOpened(true)}>+</AddButton>
        {isModelOpened == true && (
          <Modal>
            <ModalContent>
              <Form onSubmit={addUser}>
                <Label>Name:</Label>
                <Input type="text" name="Name" />
                <br />
                <Label>Email:</Label>
                <Input type="email" name="Email" />
                <SubmitButton type="submit">Save</SubmitButton>
                <CloseButton onClick={() => setIsModelOpened(false)}>
                  Close
                </CloseButton>
              </Form>
            </ModalContent>
          </Modal>
        )}
      </Container>
    </>
  );
};
