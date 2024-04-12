import {
  Container,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  TableHead,
  DeleteButton,
} from "./styles";
import { UserInfoType } from "../../../consts/UserInfoType";

interface TableComponentProps {
  data: UserInfoType[];
  headers: string[];
  delete: (id: number) => void;
}

export const TableComponent: React.FC<TableComponentProps> = (props) => {
  const deleteRow = (id: number) => {
    props.delete(id);
  };
  return (
    <>
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              {props.headers.map((header, index) => (
                <TableHeader key={index}> {header} </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row: UserInfoType, index: number) => (
              <TableRow key={index}>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <DeleteButton onClick={() => deleteRow(index)}>
                    delete
                  </DeleteButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
};
