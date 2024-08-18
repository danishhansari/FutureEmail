declare const Bun: {
  env: { [key: string]: string | undefined };
  fetch: (request: Request) => Promise<Response>;
  serve: (options: {
    fetch: (request: Request) => Response | Promise<Response>;
  }) => void;
};
