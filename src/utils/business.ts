import { DEFAULT_STAR_RATING_MAX } from "consts"

export const getRating = (likes: number, dislikes: number, max = DEFAULT_STAR_RATING_MAX) => max - (dislikes / likes * max)


export class YouTubeVideo {
  readonly id: string
  readonly url: URL

  readonly embed: string
  readonly thumbnail: string

  constructor(url: URL | string) {
    const videoUrl = new URL(url)
    const videoId = (videoUrl.pathname + videoUrl.search).replace(/\/|\/embed\/|\/watch\?v=/, "")

    this.id = videoId
    this.url = videoUrl

    this.embed = `https://www.youtube.com/embed/${videoId}`
    this.thumbnail = `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  }
}