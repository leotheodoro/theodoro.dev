export interface Article {
  id: string
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Understanding JavaScript Closures',
    description:
      'A deep dive into closures, their uses, and how they work in JavaScript.',
    createdAt: new Date('2024-04-01T09:00:00'),
    updatedAt: new Date('2024-04-10T09:00:00'),
    publishedAt: new Date('2024-04-02T09:00:00'),
  },
  {
    id: '2',
    title: 'Exploring the New Features of TypeScript 4.5',
    description:
      'An overview of the latest features in TypeScript 4.5, including how to effectively use them in your projects.',
    createdAt: new Date('2024-04-05T09:00:00'),
    updatedAt: new Date('2024-04-15T09:00:00'),
    publishedAt: new Date('2024-04-06T09:00:00'),
  },
  {
    id: '3',
    title: 'Best Practices for Python API Development',
    description:
      'Learn about best practices for designing and implementing robust APIs using Python.',
    createdAt: new Date('2024-04-10T09:00:00'),
    updatedAt: new Date('2024-04-20T09:00:00'),
    publishedAt: new Date('2024-04-11T09:00:00'),
  },
]
