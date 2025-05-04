import { toast } from "sonner"
import { useCallback, useState } from "react"
import styles from "./main.module.scss"
import { QUERY_KEY } from "@/constants"
import { Button } from "@/components/Button"
import { TWishlist } from "../../wishlist.types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { createWishlist, deleteWishlist, getWishlists } from "../../wishlist.api"

import { ListCard } from "../ListCard"
import { WishlistModal } from "../modals/WishlistModal"

export const WishlistsOverview = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const { data: wishlists } = useQuery<TWishlist[]>({
    queryKey: [QUERY_KEY.wishlists],
    queryFn: getWishlists
  })

  const createWishlistMutation = useMutation({
    mutationKey: [QUERY_KEY.wishlists],
    mutationFn: createWishlist,
    onSuccess() {
      toast.success("Вишлист создан")
    }
  })

  const deleteWishlistMutation = useMutation({
    mutationKey: [QUERY_KEY.wishlists],
    mutationFn: deleteWishlist,
    onSuccess() {
      toast.success("Вишлист создан")
    }
  })

  const getAcquiredPercentage = (wishlist: TWishlist) => {
    if (wishlist.items.length === 0) return 0

    const completedCount = wishlist.items.filter((item) => item.isCompleted).length
    return Math.round((completedCount / wishlist.items.length) * 100)
  }

  const geItemsCount = (wishlist: TWishlist) => {
    return `${wishlist.items.length}`
  }

  const handleOpenModal = useCallback(() => {
    setModalOpen(true)
  }, [])

  if (wishlists?.length) {
    return (
      <div className={styles.container}>
        <div className={styles.listsWrap}>
          {wishlists.map((wishlist) => (
            <ListCard
              key={wishlist.title}
              title={wishlist.title}
              itemCount={geItemsCount(wishlist)}
              averageBudget="1000-3000"
              acquiredPercentage={getAcquiredPercentage(wishlist)}
            />
          ))}
        </div>
        <Button
          className={styles.listButton}
          rightIcon="add"
          variant="secondary"
          onClick={handleOpenModal}
        >
          Добавить список
        </Button>
        <WishlistModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          type={"create"}
          onSubmitForm={createWishlistMutation.mutate}
        />
      </div>
    )
  } else {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.emptyListWrap}>
            <p className={styles.emptyListText}>
              У вас еще нет списков.
              <br /> Давайте создадим ваш <br /> первый вишлист!
            </p>
            <Button
              className={styles.listButton}
              rightIcon="add"
              onClick={handleOpenModal}
            >
              Создать вишлист
            </Button>
          </div>
        </div>
        <WishlistModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          type={"create"}
          onSubmitForm={createWishlistMutation.mutate}
        />
      </>
    )
  }
}
