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
  {
    id: '4',
    title: 'Introduction to React Hooks',
    description:
      'Understanding the power of React Hooks to manage state and lifecycle features in functional components.',
    createdAt: new Date('2024-04-12T09:00:00'),
    updatedAt: new Date('2024-04-22T09:00:00'),
    publishedAt: new Date('2024-04-13T09:00:00'),
  },
  {
    id: '5',
    title: 'How to Build Scalable Web Applications',
    description:
      'Techniques and architectures for building web applications that can scale efficiently with user demand.',
    createdAt: new Date('2024-04-14T09:00:00'),
    updatedAt: new Date('2024-04-24T09:00:00'),
    publishedAt: new Date('2024-04-15T09:00:00'),
  },
  {
    id: '6',
    title: 'Getting Started with Vue.js',
    description:
      "A beginner's guide to Vue.js, focusing on the core concepts and how to start building your first application.",
    createdAt: new Date('2024-04-16T09:00:00'),
    updatedAt: new Date('2024-04-26T09:00:00'),
    publishedAt: new Date('2024-04-17T09:00:00'),
  },
  {
    id: '7',
    title: 'Mastering Asynchronous JavaScript',
    description:
      'Learn how to handle asynchronous operations in JavaScript using callbacks, promises, and async/await syntax.',
    createdAt: new Date('2024-04-18T09:00:00'),
    updatedAt: new Date('2024-04-28T09:00:00'),
    publishedAt: new Date('2024-04-19T09:00:00'),
  },
  {
    id: '8',
    title: 'Effective Testing Strategies in Angular',
    description:
      'Explore various testing strategies in Angular to ensure your applications are reliable and maintainable.',
    createdAt: new Date('2024-04-20T09:00:00'),
    updatedAt: new Date('2024-04-30T09:00:00'),
    publishedAt: new Date('2024-04-21T09:00:00'),
  },
  {
    id: '9',
    title: 'Introduction to Machine Learning with Python',
    description:
      'A primer on using Python for machine learning, covering key libraries like Scikit-Learn and TensorFlow.',
    createdAt: new Date('2024-04-22T09:00:00'),
    updatedAt: new Date('2024-05-02T09:00:00'),
    publishedAt: new Date('2024-04-23T09:00:00'),
  },
  {
    id: '10',
    title: 'Building RESTful APIs with Node.js',
    description:
      'Step-by-step guide to creating efficient and scalable RESTful APIs using Node.js.',
    createdAt: new Date('2024-04-24T09:00:00'),
    updatedAt: new Date('2024-05-04T09:00:00'),
    publishedAt: new Date('2024-04-25T09:00:00'),
  },
  {
    id: '11',
    title: 'Advanced CSS Techniques for Responsive Design',
    description:
      'Explore advanced CSS techniques to make your websites responsive and adaptable to different devices.',
    createdAt: new Date('2024-04-26T09:00:00'),
    updatedAt: new Date('2024-05-06T09:00:00'),
    publishedAt: new Date('2024-04-27T09:00:00'),
  },
  {
    id: '12',
    title: 'Security Best Practices for Web Developers',
    description:
      'Learn about the latest security best practices that every web developer should know.',
    createdAt: new Date('2024-04-28T09:00:00'),
    updatedAt: new Date('2024-05-08T09:00:00'),
    publishedAt: new Date('2024-04-29T09:00:00'),
  },
  {
    id: '13',
    title: 'Exploring Graph Databases with Neo4j',
    description:
      'An introduction to graph databases, focusing on how to use Neo4j for complex data relationships.',
    createdAt: new Date('2024-05-01T09:00:00'),
    updatedAt: new Date('2024-05-11T09:00:00'),
    publishedAt: new Date('2024-05-02T09:00:00'),
  },
  {
    id: '14',
    title: 'Using Docker for Development and Production',
    description:
      'A guide on how to leverage Docker to streamline development and production workflows.',
    createdAt: new Date('2024-05-03T09:00:00'),
    updatedAt: new Date('2024-05-13T09:00:00'),
    publishedAt: new Date('2024-05-04T09:00:00'),
  },
  {
    id: '15',
    title: 'Automating Workflows with GitHub Actions',
    description:
      'Learn how to automate your code integration and deployment processes using GitHub Actions.',
    createdAt: new Date('2024-05-05T09:00:00'),
    updatedAt: new Date('2024-05-15T09:00:00'),
    publishedAt: new Date('2024-05-06T09:00:00'),
  },
  {
    id: '16',
    title: 'The Basics of Cloud Computing',
    description:
      'An introduction to cloud computing concepts, service models, and key providers.',
    createdAt: new Date('2024-05-07T09:00:00'),
    updatedAt: new Date('2024-05-17T09:00:00'),
    publishedAt: new Date('2024-05-08T09:00:00'),
  },
  {
    id: '17',
    title: 'Developing Apps with Flutter',
    description:
      'Get started with Flutter to build beautiful and fast mobile applications across platforms.',
    createdAt: new Date('2024-05-09T09:00:00'),
    updatedAt: new Date('2024-05-19T09:00:00'),
    publishedAt: new Date('2024-05-10T09:00:00'),
  },
  {
    id: '18',
    title: 'Deep Dive into SQL Optimization',
    description:
      'Techniques to optimize SQL queries for better performance in your database applications.',
    createdAt: new Date('2024-05-11T09:00:00'),
    updatedAt: new Date('2024-05-21T09:00:00'),
    publishedAt: new Date('2024-05-12T09:00:00'),
  },
  {
    id: '19',
    title: 'The Fundamentals of Cybersecurity',
    description:
      'A comprehensive overview of cybersecurity principles, threats, and best practices to protect systems.',
    createdAt: new Date('2024-05-13T09:00:00'),
    updatedAt: new Date('2024-05-23T09:00:00'),
    publishedAt: new Date('2024-05-14T09:00:00'),
  },
  {
    id: '20',
    title: 'Progressive Web Apps: The Complete Guide',
    description:
      'Everything you need to know about developing Progressive Web Apps (PWAs) for a seamless user experience.',
    createdAt: new Date('2024-05-15T09:00:00'),
    updatedAt: new Date('2024-05-25T09:00:00'),
    publishedAt: new Date('2024-05-16T09:00:00'),
  },
  {
    id: '21',
    title: 'Agile Methodology: From Novice to Expert',
    description:
      'Learn how to implement Agile methodologies in your project management to improve team productivity and product quality.',
    createdAt: new Date('2024-05-17T09:00:00'),
    updatedAt: new Date('2024-05-27T09:00:00'),
    publishedAt: new Date('2024-05-18T09:00:00'),
  },
  {
    id: '22',
    title: 'Essential Tools for Data Scientists',
    description:
      'A review of essential software and tools that every data scientist should be familiar with.',
    createdAt: new Date('2024-05-19T09:00:00'),
    updatedAt: new Date('2024-05-29T09:00:00'),
    publishedAt: new Date('2024-05-20T09:00:00'),
  },
  {
    id: '23',
    title: 'Introduction to Quantum Computing',
    description:
      "A beginner's guide to the concepts and applications of quantum computing.",
    createdAt: new Date('2024-05-21T09:00:00'),
    updatedAt: new Date('2024-05-31T09:00:00'),
    publishedAt: new Date('2024-05-22T09:00:00'),
  },
]
