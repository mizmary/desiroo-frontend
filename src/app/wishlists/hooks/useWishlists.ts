import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import {
  createWishlist,
  deleteWishlist,
  getWishlistById,
  getWishlistByUserId,
  getWishlists,
  getWishlistsByUserId,
  updateWishlist
} from "../api/wishlist.api"

import { MUTATION_KEY, QUERY_KEY } from "@/constants"

export const useWishlists = () =>
  useQuery({
    queryKey: [QUERY_KEY.wishlists],
    queryFn: getWishlists
  })

export const useWishlistById = (id: string | null) =>
  useQuery({
    queryKey: [QUERY_KEY.wishlist, id],
    queryFn: () => getWishlistById(id!),
    enabled: !!id
  })

export const useWishlistsByUserId = (userId: string | null) =>
  useQuery({
    queryKey: [QUERY_KEY.publicWishlists, userId],
    queryFn: () => getWishlistsByUserId(userId!),
    enabled: !!userId
  })

export const useWishlistByUserId = (userId: string, listId: string) =>
  useQuery({
    queryKey: [QUERY_KEY.publicWishlist, userId, listId],
    queryFn: () => getWishlistByUserId({ userId, listId }),
    enabled: !!userId
  })

export const useCreateWishlist = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: [MUTATION_KEY.createWishlist],
    mutationFn: createWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.wishlists]
      })
      toast.success("Вишлист создан!")
    }
  })
}

export const useUpdateWishlist = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: [MUTATION_KEY.updateWishlist],
    mutationFn: updateWishlist,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.wishlists] })
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.wishlist, variables.wishlistId]
      })
      toast.success("Вишлист обновлен!")
    }
  })
}

export const useDeleteWishlist = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: [MUTATION_KEY.deleteWishlist],
    mutationFn: deleteWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.wishlists]
      })
      toast.success("Вишлист удален!")
    }
  })
}
