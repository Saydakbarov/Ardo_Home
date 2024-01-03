import axios from "../utils/axios";

// NEWS

export const getNews = async ({ limit, offset }) => {
  try {
    const res = await axios.get("furniture/news/list", {
      params: {
        limit,
        offset,
      },
    });
    console.log(res.data, "news");

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
