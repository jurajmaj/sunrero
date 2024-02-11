import api from "./index";

export const fetchData = async () => {
  const { data } = await api.get("/v3/531e769c-863c-45c8-8b52-634dd6bfe18d");
  return data;
};
