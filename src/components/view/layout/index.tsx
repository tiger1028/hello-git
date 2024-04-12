import { InfoManageComponent } from "./InfoManage";
import { TotalViewComponent } from "./TotalView";
import { UserManageComponent } from "./UserManage";
import { Container } from "./styles";

export const LayoutComponent: React.FC = () => {
  return (
    <>
      <Container>
        <UserManageComponent />
        <InfoManageComponent />
        <TotalViewComponent />
      </Container>
    </>
  );
};
