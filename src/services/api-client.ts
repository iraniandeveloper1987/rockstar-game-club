import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1be35dca8dc340fba626fcb8f0187a61",
  },
});
