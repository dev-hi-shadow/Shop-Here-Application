export const REVIEWS_FILTER = {
  0: {
    name: "Most recent",
    filterBy: "created_at",
    orderBy: "desc",
  },
  1: {
    name: "Most helpful",
  },
  2: {
    name: "Highest first",
    filterBy: "rating",
    orderBy: "desc",
  },
  3: {
    name: "Lowest first",
    filterBy: "rating",
    orderBy: "asc",
  },
};

export const SEARCH_QUERY = {
  REVIEWS_FILTER: "rvFltr",
};
