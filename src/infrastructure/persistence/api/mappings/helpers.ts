export function mapImageUrl(item: string) {
  return process.env.REACT_APP_API_HOST + item + ".webp"
}