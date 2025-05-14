import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import {
  createWishlistItem,
  deleteWishlistItem,
  getWishlistItems,
  getWishlistItem,
  updateWishlistItem
} from "../api/wishlist-item.api"

import { MUTATION_KEY, QUERY_KEY } from "@/constants"

export const useWishlistItems = (wishlistId: string) =>
  useQuery({
    queryKey: [QUERY_KEY.wishlistItems, wishlistId],
    queryFn: () => getWishlistItems(wishlistId)
  })
export const useWishlistItem = (wishlistId: string, itemId: string) =>
  useQuery({
    queryKey: [QUERY_KEY.wishlistItem, wishlistId, itemId],
    queryFn: () => getWishlistItem({ wishlistId, itemId })
  })

export const useCreateWishlistItem = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: [MUTATION_KEY.createWishlistItem],
    mutationFn: createWishlistItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.wishlistItems]
      })
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.wishlistItem]
      })
      toast.success("Элемент создан!")
    }
  })
}

export const useUpdateWishlistItem = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: [MUTATION_KEY.updateWishlistItem],
    mutationFn: updateWishlistItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.wishlistItems]
      })
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.wishlistItem]
      })
      toast.success("Элемент обновлен!")
    }
  })
}

export const useDeleteWishlistItem = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: [MUTATION_KEY.deleteWishlistItem],
    mutationFn: deleteWishlistItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.wishlistItems]
      })
      toast.success("Элемент удален!")
    }
  })
}
