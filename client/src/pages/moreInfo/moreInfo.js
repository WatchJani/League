// import TableColumn from "../../components/tableColumn/tableColumn";
// import Styled from "./moreInfo.module.css";
import { TableWithSubcontent } from "./Views";
import { Leagues } from "./testData";

const data = Leagues;
const tableColumns = ["avatar", "name", "address"];
export const Table = () => {
  return <TableWithSubcontent tableColumns={tableColumns} content={data} />;
};
