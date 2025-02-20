import { axiosWithAuth } from "@/api/interceptors"
import { IWishlistItemResponse, TypeWishlistItemFormState } from "@/types/wishlist-item.types"

class WishlistItemsService {
  private BASE_URL = "/user/wishlists"

  async getWishlistItems(wishlistID: string) {
    const response = await axiosWithAuth.get<IWishlistItemResponse[]>(
      `${this.BASE_URL}/${wishlistID}/items`
    )
    return response
  }

  async createWishlistItem(data: TypeWishlistItemFormState, wishlistID: string) {
    const response = await axiosWithAuth.post(`${this.BASE_URL}/${wishlistID}`, data)
    return response
  }

  async updateWishlistItem(data: TypeWishlistItemFormState, wishlistID: string, itemID: string) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/${wishlistID}/${itemID}`, data)
    return response
  }

  async deleteWishlistItem(wishlistID: string, itemID: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${wishlistID}/${itemID}`)
    return response
  }
}

export const wishlistItemService = new WishlistItemsService()
