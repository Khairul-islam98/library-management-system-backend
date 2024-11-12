class AppError extends Error {
  status: number;
  message: string;
  stack?: string | undefined;

  constructor(status: number, message: string, stack?: "") {
    super(message);

    this.status = status;
    this.message = message;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
