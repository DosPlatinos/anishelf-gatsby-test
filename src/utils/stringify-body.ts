interface gqlBody {
  query: string;
  variables?: {
    [key: string]: any;
  };
}

export function stringifyBody(body: gqlBody): string {
  return JSON.stringify(body);
}
