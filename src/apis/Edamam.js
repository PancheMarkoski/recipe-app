import axios from "axios";

export default axios.create({
  baseURL: "https://api.edamam.com",
  params: {
    app_id: "d2e64997",
    app_key: "2b4c5fa2ddacda997648d351962f7308",
  },
});
