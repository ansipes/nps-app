import { get } from "../config/api";

const Park = {
  index: (start = 0) => get("parks", { params: { start } }),
  single: (id) => get("parks", { params: { id } }),
  singleByParkCode: (parkCode) => get("parks", { params: { parkCode } }),
};

export default Park;
