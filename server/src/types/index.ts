// Example type definition
export interface CustomError extends Error {
  statusCode?: number;
  code?: string;
}

// Add more types as needed 