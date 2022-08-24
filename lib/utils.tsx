export const getCdnUrl = (imageUrl: string) => {
  return imageUrl?.replace(
    's3://daily-kurly/',
    `https://${process.env.NEXT_PUBLIC_AWS_S3_URL}/`,
  )
}
