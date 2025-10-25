import { Bookmark } from "./bookmarkStore";


export const sampleBookmarks: Bookmark[] = [
  {
    id: "1",
    title: "Spring Boot Official Documentation",
    url: "https://spring.io/projects/spring-boot",
    description: "Comprehensive guide to Spring Boot framework with tutorials and references",
    category: "Learning",
    isFavorite: true,
    createdAt: new Date("2025-11-05T10:30:00")
  },
  {
    id: "2",
    title: "Baeldung Spring Tutorials",
    url: "https://www.baeldung.com/spring-tutorial",
    description: "In-depth Spring Framework tutorials covering core concepts to advanced topics",
    category: "Learning",
    isFavorite: true,
    createdAt: new Date("2025-11-02T14:20:00")
  },
  {
    id: "3",
    title: "Apache Kafka Documentation",
    url: "https://kafka.apache.org/documentation/",
    description: "Official Apache Kafka docs for distributed event streaming platform",
    category: "Learning",
    isFavorite: false,
    createdAt: new Date("2025-10-27T09:15:00")
  },
  {
    id: "4",
    title: "Java Design Patterns",
    url: "https://refactoring.guru/design-patterns/java",
    description: "Essential design patterns every Java backend developer should know",
    category: "Reference",
    isFavorite: true,
    createdAt: new Date("2025-10-23T16:45:00")
  },
  {
    id: "5",
    title: "Spring Security in Action",
    url: "https://www.manning.com/books/spring-security-in-action",
    description: "Book resource for implementing authentication and authorization",
    category: "Books",
    isFavorite: false,
    createdAt: new Date("2025-10-18T11:00:00")
  },
  {
    id: "6",
    title: "Docker Getting Started",
    url: "https://docs.docker.com/get-started/",
    description: "Docker fundamentals for containerizing Spring Boot applications",
    category: "DevOps",
    isFavorite: true,
    createdAt: new Date("2025-10-10T08:30:00")
  },
  {
    id: "7",
    title: "PostgreSQL Tutorial",
    url: "https://www.postgresql.org/docs/current/tutorial.html",
    description: "Official PostgreSQL tutorial for database design and SQL queries",
    category: "Database",
    isFavorite: false,
    createdAt: new Date("2025-09-29T13:20:00")
  },
  {
    id: "8",
    title: "REST API Best Practices",
    url: "https://restfulapi.net/",
    description: "Guidelines for designing clean and maintainable RESTful APIs",
    category: "Reference",
    isFavorite: true,
    createdAt: new Date("2025-09-20T15:10:00")
  },
  {
    id: "9",
    title: "Microservices Patterns",
    url: "https://microservices.io/patterns/",
    description: "Collection of microservices architecture patterns and solutions",
    category: "Architecture",
    isFavorite: false,
    createdAt: new Date("2025-09-08T10:00:00")
  },
  {
    id: "10",
    title: "JPA and Hibernate Guide",
    url: "https://thorben-janssen.com/tips/",
    description: "Expert tips on using JPA and Hibernate for data persistence",
    category: "Learning",
    isFavorite: true,
    createdAt: new Date("2025-08-29T14:30:00")
  },
  {
    id: "11",
    title: "GitHub - Spring Boot Projects",
    url: "https://github.com/topics/spring-boot",
    description: "Open source Spring Boot projects to learn from real-world examples",
    category: "Projects",
    isFavorite: false,
    createdAt: new Date("2025-08-19T09:45:00")
  },
  {
    id: "12",
    title: "Jenkins Pipeline Tutorial",
    url: "https://www.jenkins.io/doc/book/pipeline/",
    description: "CI/CD pipeline setup for automated testing and deployment",
    category: "DevOps",
    isFavorite: false,
    createdAt: new Date("2025-08-10T16:20:00")
  }
];
