import ClientAPI from "../client"
import * as APIActions from "./actions"
import {
  SchemaChatUsersFormAdd,
  SchemaClaimsAdd,
  SchemaFavorite,
  SchemaLikes,
  SchemaLotsPlaceBet,
  SchemaReviewsAdd,
  SchemaUsersAvatar,
  SchemaUserSettings,
  SchemaUsersForgotRequest,
  SchemaUsersForgotReset,
  SchemaUsersLotsFormData,
  SchemaUsersLotsStatus,
  SchemaUsersPassword,
  SchemaUsersPhone,
  SchemaUsersPostData,
  SchemaUsersSignin,
  SchemaUsersSignUp
} from "./schemas"

const APIQuery = ClientAPI.query
describe("Etuuk API", () => {
  test("getGetPagesIdByPagesId", () => {
    const pages_id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        title: "test",
        description: "test",
        keywords: "test",
        content: "test",
        modules: {
          news: {
            id: 10,
            name: "test",
            anons: "test",
            picture: "test",
            date_create: "test"
          },
          blogs: {
            id: 10,
            name: "test",
            picture: "test",
            date_create: "test",
            users: {
              id: 10,
              name: "test",
              type: "organization",
              picture: "test",
              rating_buyer: 10,
              rating_seller: 10,
              confirm: true
            }
          }
        }
      }
    }
    const response = APIQuery(APIActions.getGetPagesIdByPagesId(pages_id))
    expect(response).resolves.toBe(example)
  })
  test("getGetPagesUrlByUrl", () => {
    const url = "test"
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        title: "test",
        description: "test",
        keywords: "test",
        content: "test",
        modules: {
          news: {
            id: 10,
            name: "test",
            anons: "test",
            picture: "test",
            date_create: "test"
          },
          blogs: {
            id: 10,
            name: "test",
            picture: "test",
            date_create: "test",
            users: {
              id: 10,
              name: "test",
              type: "organization",
              picture: "test",
              rating_buyer: 10,
              rating_seller: 10,
              confirm: true
            }
          }
        }
      }
    }
    const response = APIQuery(APIActions.getGetPagesUrlByUrl(url))
    expect(response).resolves.toBe(example)
  })
  test("getGetMenu", () => {
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        parent: 10,
        level: 10,
        name: "test"
      }
    }
    const response = APIQuery(APIActions.getGetMenu())
    expect(response).resolves.toBe(example)
  })
  test("getGetBreadcrumbsByPagesId", () => {
    const pages_id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        parent: 10,
        level: 10,
        name: "test"
      }
    }
    const response = APIQuery(APIActions.getGetBreadcrumbsByPagesId(pages_id))
    expect(response).resolves.toBe(example)
  })
  test("getGetFilters", () => {
    const price: {
  min: number
  max: number
} = {
  min: 10,
  max: 10
}
    const category: number[] = [10]
    const seller: "all" | "user" | "organization" = "all"
    const delivery: "all" | "other_regions" | "only_city" = "all"
    const period: {
  date_start: string
  date_end: string
} = {
  date_start: "test",
  date_end: "test"
}
    const started: "started" | "ended" | "waiting" = "started"
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: {
          id: 10,
          name: "test",
          price: 10,
          picture: "test",
          city: "test",
          delivery: "other_regions",
          trading_start: "test",
          favorite: 10
        }
      }
    }
    const response = APIQuery(APIActions.getGetFilters(price, category, seller, delivery, period, started))
    expect(response).resolves.toBe(example)
  })
  test("getGetFiltersCategory", () => {
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        category: {
          id: 10,
          parent: 10,
          level: 10,
          name: "test"
        },
        cities: {
          city: "test"
        },
        price: {
          min: 10,
          max: 10
        }
      }
    }
    const response = APIQuery(APIActions.getGetFiltersCategory())
    expect(response).resolves.toBe(example)
  })
  test("getGetSearch", () => {
    const s = "test"
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: {
          id: 10,
          name: "test",
          price: 10,
          picture: "test",
          city: "test",
          delivery: "other_regions",
          trading_start: "test",
          favorite: 10
        }
      }
    }
    const response = APIQuery(APIActions.getGetSearch(s, limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getGetRecommendations", () => {
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        name: "test",
        price: 10,
        picture: "test",
        city: "test",
        delivery: "other_regions",
        trading_start: "test",
        favorite: 10
      }
    }
    const response = APIQuery(APIActions.getGetRecommendations())
    expect(response).resolves.toBe(example)
  })
  test("getGetDeliveryAddress", () => {
    const users_coordinate: {
  latitude: number
  longitude: number
} = {
  latitude: 10,
  longitude: 10
}
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        price: 10,
        city: "test",
        description: "test"
      }
    }
    const response = APIQuery(APIActions.getGetDeliveryAddress(users_coordinate))
    expect(response).resolves.toBe(example)
  })
  test("getGetDeliveryZone", () => {
    const users_coordinate: {
  latitude: number
  longitude: number
} = {
  latitude: 10,
  longitude: 10
}
    const city = "test"
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        city: "test",
        price: 10,
        description: "test",
        zone: "test",
        color: "test"
      }]
    }
    const response = APIQuery(APIActions.getGetDeliveryZone(users_coordinate, city))
    expect(response).resolves.toBe(example)
  })
  test("getGetAdvertising", () => {
    const example = {
      uid: "test",
      name: "test",
      media: "test"
    }
    const response = APIQuery(APIActions.getGetAdvertising())
    expect(response).resolves.toBe(example)
  })
  test("getGetAdvertisingFollowLinkByUid", () => {
    const uid = "test"
    const example = {
      status: true,
      msg: "test"
    }
    const response = APIQuery(APIActions.getGetAdvertisingFollowLinkByUid(uid))
    expect(response).resolves.toBe(example)
  })
  test("getGetNews", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: {
          id: 10,
          name: "test",
          anons: "test",
          picture: "test",
          date_create: "test"
        }
      }
    }
    const response = APIQuery(APIActions.getGetNews(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getGetNewsById", () => {
    const id = 10
    const example = {
      id: 10,
      name: "test",
      content: "test",
      picture: "test",
      date_create: "test"
    }
    const response = APIQuery(APIActions.getGetNewsById(id))
    expect(response).resolves.toBe(example)
  })
  test("getGetFaq", () => {
    const limit = 10
    const current = 10
    const hashtags: string[] = ["test"]
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        hashtags: ["test"],
        items: [{
          id: 10,
          path: "test",
          title: "test",
          content: "test"
        }]
      }
    }
    const response = APIQuery(APIActions.getGetFaq(limit, current, hashtags))
    expect(response).resolves.toBe(example)
  })
  test("getGetBlogs", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: {
          id: 10,
          name: "test",
          picture: "test",
          date_create: "test",
          users: {
            id: 10,
            name: "test",
            type: "organization",
            picture: "test",
            rating_buyer: 10,
            rating_seller: 10,
            confirm: true
          }
        }
      }
    }
    const response = APIQuery(APIActions.getGetBlogs(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getGetBlogsById", () => {
    const id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        name: "test",
        content: "test",
        picture: ["test"],
        date_create: "test",
        users: {
          id: 10,
          name: "test",
          type: "organization",
          picture: "test",
          rating_buyer: 10,
          rating_seller: 10,
          confirm: true
        }
      }
    }
    const response = APIQuery(APIActions.getGetBlogsById(id))
    expect(response).resolves.toBe(example)
  })
  test("getGetUsersById", () => {
    const id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        type: "user",
        name: "test",
        picture: "test",
        rating_buyer: 10,
        rating_seller: 10
      }
    }
    const response = APIQuery(APIActions.getGetUsersById(id))
    expect(response).resolves.toBe(example)
  })
  test("getGetUsersByIdReviews", () => {
    const id = 10
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: {
          id: 10,
          lots: 10,
          votes: 10,
          content: "test",
          picture: "test",
          user: "test"
        }
      }
    }
    const response = APIQuery(APIActions.getGetUsersByIdReviews(id, limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getGetUsersById(placed|completed)", () => {
    const id = 10
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: {
          id: 10,
          name: "test",
          price: 10,
          picture: "test",
          city: "test",
          delivery: "other_regions",
          trading_start: "test",
          favorite: 10
        }
      }
    }
    const response = APIQuery(APIActions.getGetUsersById(placed|completed)(id, limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getGetLotsEqualById", () => {
    const id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        name: "test",
        price: 10,
        picture: "test",
        city: "test",
        delivery: "other_regions",
        trading_start: "test",
        favorite: 10
      }
    }
    const response = APIQuery(APIActions.getGetLotsEqualById(id))
    expect(response).resolves.toBe(example)
  })
  test("getGetLots", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: {
          id: 10,
          name: "test",
          price: 10,
          picture: "test",
          city: "test",
          delivery: "other_regions",
          trading_start: "test",
          favorite: 10
        }
      }
    }
    const response = APIQuery(APIActions.getGetLots(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getGetLotsById", () => {
    const id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        name: "test",
        content: "test",
        specifications: {
          key: "test",
          val: "test"
        },
        picture: ["test"],
        video: "test",
        city: "test",
        delivery: "other_regions",
        trading_start: "test",
        trading_end: "test",
        started: "started",
        redeemed: true,
        price: 10,
        price_step: 10,
        price_bids: {
          uid: 10,
          users: "test",
          bet: 10,
          date: "test"
        },
        binds_10: 10,
        bind_current: 10,
        favorite: 10,
        users_info: {
          id: 10,
          name: "test",
          type: "organization",
          reviews: {
            likes: 10,
            dislikes: 10
          },
          rating: 10
        }
      }
    }
    const response = APIQuery(APIActions.getGetLotsById(id))
    expect(response).resolves.toBe(example)
  })
  test("getGetLotsByIdDetail", () => {
    const id = 10
    const period = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        bets: [{
          bet: 10,
          date: "test",
          user: "test"
        }],
        total_bets: 10,
        current_bid: 10
      }
    }
    const response = APIQuery(APIActions.getGetLotsByIdDetail(id, period))
    expect(response).resolves.toBe(example)
  })
  test("getGetLotsByIdStats", () => {
    const id = 10
    const period = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        bets: {
          uid: 10,
          users: "test",
          bet: 10,
          date: "test"
        },
        favorites: 10,
        views: 10
      }
    }
    const response = APIQuery(APIActions.getGetLotsByIdStats(id, period))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetLotsPlaceBet", () => {
    const body: SchemaLotsPlaceBet = {
      lots: 10,
      bet: 10
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postCabinetLotsPlaceBet(body))
    expect(response).resolves.toBe(example)
  })
  test("getCabinet", () => {
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        type: "user",
        name: "test",
        picture: "test",
        email: "test",
        phone: "test",
        inn: 10,
        rating_buyer: 10,
        rating_seller: 10,
        analytics: {
          amount_sales: 10,
          amount_purchase: 10
        }
      }
    }
    const response = APIQuery(APIActions.getCabinet())
    expect(response).resolves.toBe(example)
  })
  test("getCabinetUsersSettings", () => {
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        increase: true,
        subscriptions: true,
        bidding: true
      }
    }
    const response = APIQuery(APIActions.getCabinetUsersSettings())
    expect(response).resolves.toBe(example)
  })
  test("postCabinetUsersSettings", () => {
    const body: SchemaUserSettings = {
      increase: true,
      subscriptions: true,
      bidding: true
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        increase: true,
        subscriptions: true,
        bidding: true
      }
    }
    const response = APIQuery(APIActions.postCabinetUsersSettings(body))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetUsersPicture", () => {
    const body: SchemaUsersAvatar = {
      picture: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: "test"
    }
    const response = APIQuery(APIActions.postCabinetUsersPicture(body))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetUsersPassword", () => {
    const body: SchemaUsersPassword = {
      password_old: "test",
      password: "test",
      password_confirm: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postCabinetUsersPassword(body))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetSave", () => {
    const body: SchemaUsersPostData = {
      id: 10,
      type: "user",
      name: "test",
      email: "test",
      phone: "test",
      inn: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        type: "user",
        name: "test",
        picture: "test",
        email: "test",
        phone: "test",
        inn: 10,
        rating_buyer: 10,
        rating_seller: 10,
        analytics: {
          amount_sales: 10,
          amount_purchase: 10
        }
      }
    }
    const response = APIQuery(APIActions.postCabinetSave(body))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLots", () => {
    const limit = 10
    const current = 10
    const status = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: {
          id: 10,
          status: 10,
          status_msg: "test",
          name: "test",
          price: 10,
          price_step: 10,
          price_bids: {
            users: {
              id: 10,
              name: "test",
              type: "organization",
              picture: "test",
              rating_buyer: 10,
              rating_seller: 10,
              confirm: true
            },
            bet: 10,
            date: "test"
          },
          trading_start: "test",
          trading_end: "test",
          picture: "test",
          city: "test",
          started: "test",
          active: true,
          banned: true,
          banned_msg: "test"
        }
      }
    }
    const response = APIQuery(APIActions.getCabinetLots(limit, current, status))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetLotsDeleteById", () => {
    const id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postCabinetLotsDeleteById(id))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetLotsStatus", () => {
    const body: SchemaUsersLotsStatus = {
      status: "started"
    }
    const example = null
    const response = APIQuery(APIActions.postCabinetLotsStatus(body))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsAdd", () => {
    const id = 10
    const example = {
      category: {
        status: true,
        msg: "test",
        uid: "test",
        result: {
          category: {
            id: 10,
            parent: 10,
            level: 10,
            name: "test"
          },
          cities: {
            city: "test"
          },
          price: {
            min: 10,
            max: 10
          }
        }
      },
      data: {
        id: 10,
        category: 10,
        name: "test",
        content: "test",
        specifications: {
          key: "test",
          val: "test"
        },
        picture: ["test"],
        video: "test",
        city: "test",
        price: 10,
        price_bids: {
          uid: 10,
          users: "test",
          bet: 10,
          date: "test"
        },
        trading_start: "test",
        trading_end: "test",
        redeemed: true,
        active: true,
        banned: true
      }
    }
    const response = APIQuery(APIActions.getCabinetLotsAdd(id))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetLotsAdd", () => {
    const body: SchemaUsersLotsFormData = {
      id: 10,
      category: 10,
      delivery: "other_regions",
      name: "test",
      content: "test",
      specifications: [{
        key: "test",
        val: "test"
      }],
      picture: ["test"],
      video: "test",
      city: "test",
      price: 10,
      trading_start: "test",
      trading_end: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postCabinetLotsAdd(body))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsPurchasesInspection", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        trading_end: "test",
        price: 10,
        users: {
          id: 10,
          name: "test",
          picture: "test"
        }
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsPurchasesInspection(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsPurchasesPublished", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        trading_end: "test",
        count: 10,
        price_bet: 10,
        price: 10
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsPurchasesPublished(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsPurchasesRejected", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        banned_msg: "test"
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsPurchasesRejected(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsPurchasesSold", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        price: 10,
        city: "test",
        date_acceptance: "test",
        users: {
          id: 10,
          name: "test",
          picture: "test"
        }
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsPurchasesSold(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsPurchasesArchive", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        banned: true,
        sold: true
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsPurchasesArchive(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsPurchasesDisputes", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        price: 10,
        city: "test",
        claims_open: "test",
        users: {
          id: 10,
          name: "test",
          picture: "test"
        }
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsPurchasesDisputes(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsSalesWon", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        price: 10,
        users: {
          id: 10,
          name: "test",
          picture: "test"
        },
        date: "test"
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsSalesWon(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsSalesWay", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        price: 10,
        city: "test",
        users: {
          id: 10,
          name: "test",
          picture: "test"
        }
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsSalesWay(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsSalesConfirm", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        price: 10,
        city: "test",
        delivery_time: "test",
        users: {
          id: 10,
          name: "test",
          picture: "test"
        }
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsSalesConfirm(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsSalesDisputes", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        price: 10,
        city: "test",
        claims_open: "test",
        users: {
          id: 10,
          name: "test",
          picture: "test"
        }
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsSalesDisputes(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsSalesCompleting", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test",
        price: 10,
        city: "test",
        claims_open: "test",
        users: {
          id: 10,
          name: "test",
          picture: "test"
        }
      }]
    }
    const response = APIQuery(APIActions.getCabinetLotsSalesCompleting(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLotsBets", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: {
          id: 10,
          name: "test",
          price: 10,
          price_bet: 10,
          picture: "test",
          city: "test",
          delivery: "other_regions",
          trading_end: "test"
        }
      }
    }
    const response = APIQuery(APIActions.getCabinetLotsBets(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetReviewsDeleteById", () => {
    const id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postCabinetReviewsDeleteById(id))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetReviewsAdd", () => {
    const body: SchemaReviewsAdd = {
      answer: 10,
      orders: 10,
      lots: 10,
      votes: 10,
      content: "test",
      picture: ["test"],
      date_create: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postCabinetReviewsAdd(body))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetNotifications", () => {
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        type: "test",
        message: "test",
        date_create: "test"
      }]
    }
    const response = APIQuery(APIActions.getCabinetNotifications())
    expect(response).resolves.toBe(example)
  })
  test("postCabinetNotificationsRead", () => {
    const body: {
  id: number
} = {
  id: 10
}
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postCabinetNotificationsRead(body))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetFavorite", () => {
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        limit: 10,
        current: 10,
        items: [{
          id: 10,
          name: "test",
          picture: "test",
          city: "test",
          price: 10,
          delivery: "other_regions",
          trading_start: "test"
        }]
      }
    }
    const response = APIQuery(APIActions.getCabinetFavorite())
    expect(response).resolves.toBe(example)
  })
  test("getCabinetFavoriteUsers", () => {
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        id: 10,
        name: "test",
        picture: "test"
      }]
    }
    const response = APIQuery(APIActions.getCabinetFavoriteUsers())
    expect(response).resolves.toBe(example)
  })
  test("postCabinetFavoriteAdd", () => {
    const body: SchemaFavorite = {
      type: "lots",
      item: 10
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: "add"
    }
    const response = APIQuery(APIActions.postCabinetFavoriteAdd(body))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetLikes", () => {
    const entity = "test"
    const id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        count_likes: 10,
        count_dislikes: 10,
        response_type: "add"
      }
    }
    const response = APIQuery(APIActions.getCabinetLikes(entity, id))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetDislikesAdd", () => {
    const body: SchemaLikes = {
      entity: "test",
      id: 10
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        count_likes: 10,
        count_dislikes: 10,
        response_type: "add"
      }
    }
    const response = APIQuery(APIActions.postCabinetDislikesAdd(body))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetLikesAdd", () => {
    const body: SchemaLikes = {
      entity: "test",
      id: 10
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        count_likes: 10,
        count_dislikes: 10,
        response_type: "add"
      }
    }
    const response = APIQuery(APIActions.postCabinetLikesAdd(body))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetChat", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: [{
        users: 10,
        avatar: "test",
        unread: true
      }]
    }
    const response = APIQuery(APIActions.getCabinetChat(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetChatByChatUsers", () => {
    const chat_users = 10
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        reply: 10,
        users_to: {
          id: 10,
          name: "test",
          avatar: "test"
        },
        users_from: {
          id: 10,
          name: "test",
          avatar: "test"
        },
        message: "test",
        date_create: "test",
        read: true
      }
    }
    const response = APIQuery(APIActions.getCabinetChatByChatUsers(chat_users, limit, current))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetChatByChatUsersAdd", () => {
    const chat_users = 10
    const body: SchemaChatUsersFormAdd = {
      reply: 10,
      user: 10,
      message: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        reply: 10,
        users_to: {
          id: 10,
          name: "test",
          avatar: "test"
        },
        users_from: {
          id: 10,
          name: "test",
          avatar: "test"
        },
        message: "test",
        date_create: "test",
        read: true
      }
    }
    const response = APIQuery(APIActions.postCabinetChatByChatUsersAdd(chat_users, body))
    expect(response).resolves.toBe(example)
  })
  test("getCabinetClaims", () => {
    const limit = 10
    const current = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        total_items: 10,
        limit: 10,
        items: {
          lots: {
            id: 10,
            name: "test",
            price: 10,
            picture: "test",
            city: "test",
            delivery: "other_regions",
            trading_start: "test",
            favorite: 10
          },
          seller: {
            id: 10,
            name: "test",
            type: "organization",
            picture: "test",
            rating_buyer: 10,
            rating_seller: 10,
            confirm: true
          },
          buyer: {
            id: 10,
            name: "test",
            type: "organization",
            picture: "test",
            rating_buyer: 10,
            rating_seller: 10,
            confirm: true
          },
          claims: [{
            id: 10,
            seller: 10,
            buyer: 10,
            manager: 10,
            name: "test",
            content: "test",
            picture: ["test"],
            date_create: "test"
          }]
        }
      }
    }
    const response = APIQuery(APIActions.getCabinetClaims(limit, current))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetClaimsAdd", () => {
    const body: SchemaClaimsAdd = {
      lots: 10,
      seller: 10,
      buyer: 10,
      name: "test",
      content: "test",
      picture: ["test"]
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postCabinetClaimsAdd(body))
    expect(response).resolves.toBe(example)
  })
  test("postCabinetClaimsDeleteById", () => {
    const id = 10
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postCabinetClaimsDeleteById(id))
    expect(response).resolves.toBe(example)
  })
  test("postUsersPhoneSet", () => {
    const body: SchemaUsersPhone = {
      id: 10,
      phone: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postUsersPhoneSet(body))
    expect(response).resolves.toBe(example)
  })
  test("getUsersConfirmByConfirmKey", () => {
    const confirm_key = "test"
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.getUsersConfirmByConfirmKey(confirm_key))
    expect(response).resolves.toBe(example)
  })
  test("postUsersForgot", () => {
    const body: SchemaUsersForgotRequest = {
      email: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postUsersForgot(body))
    expect(response).resolves.toBe(example)
  })
  test("postUsersForgotByConfirmKey", () => {
    const confirm_key = "test"
    const body: SchemaUsersForgotReset = {
      password: "test",
      password_confirm: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.postUsersForgotByConfirmKey(confirm_key, body))
    expect(response).resolves.toBe(example)
  })
  test("getUsersForgotByConfirmKey", () => {
    const confirm_key = "test"
    const example = {
      status: true,
      msg: "test",
      uid: "test"
    }
    const response = APIQuery(APIActions.getUsersForgotByConfirmKey(confirm_key))
    expect(response).resolves.toBe(example)
  })
  test("getUsersSocial", () => {
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {}
    }
    const response = APIQuery(APIActions.getUsersSocial())
    expect(response).resolves.toBe(example)
  })
  test("getUsersSignupBySocialKey", () => {
    const social_key: "vk" | "facebook" | "google" = "vk"
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        name: "test",
        type: "organization",
        picture: "test",
        rating_buyer: 10,
        rating_seller: 10,
        confirm: true
      }
    }
    const response = APIQuery(APIActions.getUsersSignupBySocialKey(social_key))
    expect(response).resolves.toBe(example)
  })
  test("postUsersSignup", () => {
    const body: SchemaUsersSignUp = {
      email: "test",
      password: "test",
      password_confirm: "test",
      phone: "test",
      inn: "test",
      name: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        name: "test",
        type: "organization",
        picture: "test",
        rating_buyer: 10,
        rating_seller: 10,
        confirm: true
      }
    }
    const response = APIQuery(APIActions.postUsersSignup(body))
    expect(response).resolves.toBe(example)
  })
  test("postUsersSignin", () => {
    const body: SchemaUsersSignin = {
      email: "test",
      password: "test"
    }
    const example = {
      status: true,
      msg: "test",
      uid: "test",
      result: {
        id: 10,
        name: "test",
        type: "organization",
        picture: "test",
        rating_buyer: 10,
        rating_seller: 10,
        confirm: true
      }
    }
    const response = APIQuery(APIActions.postUsersSignin(body))
    expect(response).resolves.toBe(example)
  })})