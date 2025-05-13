import 'next';

declare module 'next' {
  export interface NextApiRequest {
    params: {
      [key: string]: string | string[];
    };
  }
}

declare module 'next/server' {
  interface NextRequest {
    params: {
      [key: string]: string | string[];
    };
  }
}

type RouteHandler<T = {}> = (
  request: Request,
  context: { params: T }
) => Promise<Response> | Response;

export type { RouteHandler };
