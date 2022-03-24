export type blog = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  title: string,
  body: string,
  category: category,
  tag: tag[],
}

export type category = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  label: string,
}

export type tag = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  label: string,
}