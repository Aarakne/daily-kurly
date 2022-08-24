export const getCdnUrl = (imageUrl: string) => {
  return imageUrl?.replace(
    's3://daily-kurly/',
    `https://${process.env.NEXT_PUBLIC_AWS_S3_URL}/`,
  )
}

export const commaPrice = (price: number) => {
  if (price === 0) return '0'
  if (price) return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return '-'
}
