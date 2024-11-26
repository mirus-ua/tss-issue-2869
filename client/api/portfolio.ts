import { createServerFn } from "@tanstack/start";
import { getPocketbase } from "./pb.server";
import { queryOptions } from "@tanstack/react-query";

const fetchPortfoliosPB = createServerFn().handler(async () => {
  const { pb } = await getPocketbase();
  return pb.collection("portfolios").getFullList({
    fields: "id,name,icon,color",
  });
});

export const portfoliosQueryOptions = () =>
  queryOptions({
    queryKey: ["portfolios"],
    queryFn: () => fetchPortfoliosPB(),
    staleTime: Infinity,
  });
