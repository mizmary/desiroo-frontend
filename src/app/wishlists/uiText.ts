import { ACCESS_LEVEL, PRICE_RANGE, PRIORITY } from "./constants"

export const uiText = {
  titles: {
    priceRange: {
      [PRICE_RANGE.UpTo1000]: "До 1000",
      [PRICE_RANGE.From1000To5000]: "От 1000 до 5000",
      [PRICE_RANGE.From5000To10000]: "От 5000 до 10000",
      [PRICE_RANGE.From10000To50000]: "От 10000 до 50000",
      [PRICE_RANGE.Over50000]: "Более 50000"
    },
    priorityLevel: {
      [PRIORITY.low]: "Низкий приоритет",
      [PRIORITY.medium]: "Средний приоритет",
      [PRIORITY.high]: "Высокий приоритет"
    },
    accessLevel: {
      [ACCESS_LEVEL.public]: "Публичный список",
      [ACCESS_LEVEL.private]: "Приватный список",
      [ACCESS_LEVEL.invite]: "Групповой список"
    }
  },
  components: {
    listCard: {
      elementsCount: "Количество элементов",
      accessLevel: "Уровень доступа"
    }
  },
  modals: {
    confirmDeletion: {
      list: {
        title: "Вы уверенны что хотите удалить вишлист",
        description: "При удалении списка, все элементы будут утеряны.",
        actions: {
          delete: "Удалить",
          cancel: "Отменить"
        }
      },
      element: {
        title: "Вы уверенны что хотите удалить элемент",
        description: "Это действие удалит его навсегда и не может быть отменено.",
        actions: {
          delete: "Удалить",
          cancel: "Отменить",
          close: "Закрыть"
        }
      }
    },
    wishlist: {
      title: {
        create: "Создание вишлиста",
        edit: "Редактирование вишлиста"
      },
      form: {
        title: "Название списка",
        description: "Описание",
        accessLevel: "Доступ к списку"
      },
      actions: {
        cancel: "Отменить",
        action: {
          create: "Создать",
          edit: "Сохранить"
        }
      }
    },
    wishlistItem: {
      title: {
        create: "Создание подарка",
        edit: "Редактирование подарка"
      },
      form: {
        title: "Название подарка",
        description: "Описание",
        link: "Ссылка на подарок",
        priority: "Укажите приоритет подарка",
        priceRange: "Укажите ценовой диапазон подарка"
      },
      actions: {
        cancel: "Отменить",
        action: {
          create: "Создать",
          edit: "Сохранить"
        }
      }
    },
    wishlistItemDetails: {
      elementInfo: {
        title: "Детали подарка",
        description: {
          title: "Описание:",
          emptyField: "Описание к этому элементу не указано"
        },
        link: {
          title: "Ссылка на покупку:",
          emptyField: "Ссылка на покупку этого элемента не указана"
        },
        priceRange: "Ценовой диапазон:",
        priority: "Приоритет:"
      },
      actions: {
        edit: "Редактировать",
        delete: "Удалить",
        close: "Закрыть"
      }
    }
  },
  wishlistDetails: {
    owner: {
      emptyList: "В этом списке еще нет элементов, давайте добавим первый!",
      addAction: "Добавить подарок"
    },
    guest: {
      emptyList: "В этом списке еще нет элементов."
    },
    nonSelectedList: "Выберите список для просмотра его элементов"
  },
  wishlistsOverview: {
    owner: {
      emptyList: {
        text: "У вас еще нет списков. Давайте создадим ваш первый вишлист!",
        action: "Создать вишлист"
      },
      addListAction: "Добавить список"
    },
    guest: {
      emptyListText: "У данного пользователя еще нет списков."
    }
  }
}
