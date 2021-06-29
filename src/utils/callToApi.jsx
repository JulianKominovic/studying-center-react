const apiBaseUrl = "https://60c6a86f19aa1e001769f896.mockapi.io";

const apiUrlHomeCards = apiBaseUrl + "/home-cards";

const getHomeCards = async () => {
  const data = await fetch(apiUrlHomeCards).then((res) => res.json());
  return await data;
};

export { getHomeCards };
