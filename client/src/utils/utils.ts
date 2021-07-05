export function isUrlValid(portfolioUrl: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const urlRegex =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g
  const res = portfolioUrl.match(urlRegex)
  return res !== null
}
