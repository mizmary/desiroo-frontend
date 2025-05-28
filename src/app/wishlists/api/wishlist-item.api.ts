import { TWishlistItem, TWishlistItemForm } from "../types"

import { axiosWithAuth } from "@/api/interceptors"

class WishlistItemsService {
  private BASE_URL = "/wishlists"

  async getWishlistItems(wishlistId: string) {
    const response = await axiosWithAuth.get<TWishlistItem[]>(
      `${this.BASE_URL}/${wishlistId}/items`
    )
    return response
  }
  async getWishlistItem({ wishlistId, itemId }: { wishlistId: string; itemId: string }) {
    const response = await axiosWithAuth.get<TWishlistItem>(
      `${this.BASE_URL}/${wishlistId}/items/${itemId}`
    )
    return response
  }

  async createWishlistItem({ data, wishlistId }: { data: TWishlistItemForm; wishlistId: string }) {
    const response = await axiosWithAuth.post(`${this.BASE_URL}/${wishlistId}`, data)
    return response
  }

  async updateWishlistItem({
    data,
    wishlistId,
    itemId
  }: {
    data: TWishlistItemForm
    wishlistId: string
    itemId: string
  }) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/${wishlistId}/${itemId}`, data)
    return response
  }

  async deleteWishlistItem({ wishlistId, itemId }: { wishlistId: string; itemId: string }) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${wishlistId}/${itemId}`)
    return response
  }
}

const wishlistItemService = new WishlistItemsService()

export const getWishlistItems = async (wishlistId: string) => {
  const response = await wishlistItemService.getWishlistItems(wishlistId)
  return response.data
}
export const getWishlistItem = async (props: { wishlistId: string; itemId: string }) => {
  const response = await wishlistItemService.getWishlistItem({
    wishlistId: props.wishlistId,
    itemId: props.itemId
  })
  return response.data
}

export const createWishlistItem = (props: { data: TWishlistItemForm; wishlistId: string }) =>
  wishlistItemService.createWishlistItem({
    data: props.data,
    wishlistId: props.wishlistId
  })

export const deleteWishlistItem = (props: { wishlistId: string; itemId: string }) =>
  wishlistItemService.deleteWishlistItem({
    wishlistId: props.wishlistId,
    itemId: props.itemId
  })

export const updateWishlistItem = (props: {
  data: TWishlistItemForm
  wishlistId: string
  itemId: string
}) =>
  wishlistItemService.updateWishlistItem({
    data: props.data,
    wishlistId: props.wishlistId,
    itemId: props.itemId
  })
