const server = process.env.SERVER_URL || "";

async function handleRequest(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endPoint: string,
  data: any = null
) {
  const options: RequestInit = {
    method,
    headers: data ? { "Content-Type": "application/json" } : undefined,
    cache: method === "GET" ? "no-store" : undefined,
    body: data ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(server + endPoint, options);
    if (!response.ok)
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error(`Error in ${method} request to ${endPoint}:`, error);
    throw error;
  }
}

export const api = {
  get: (endPoint: string) => handleRequest("GET", endPoint),
  post: (endPoint: string, data?: any) => handleRequest("POST", endPoint, data),
  put: (endPoint: string, data?: any) => handleRequest("PUT", endPoint, data),
  delete: (endPoint: string) => handleRequest("DELETE", endPoint),
};
