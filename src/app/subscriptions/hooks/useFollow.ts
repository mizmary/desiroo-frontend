import { useQuery } from "@tanstack/react-query"

import { getFollowing } from "../api/follow.api"

import { QUERY_KEY } from "@/constants"

export const useFollowing = () =>
  useQuery({
    queryKey: [QUERY_KEY.following],
    queryFn: getFollowing
  })
