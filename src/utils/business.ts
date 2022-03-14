import { DEFAULT_STAR_RATING_MAX } from "consts"

export const getRating = (likes: number, dislikes: number, max = DEFAULT_STAR_RATING_MAX) => max - (dislikes / likes * max)
