export async function postRequest(endPoint: string, data?: any) {
  try {
    let response: any = await fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("Error in POST API", error);
  }
}
