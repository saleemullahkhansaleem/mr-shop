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

export async function getRequest(endPoint: string) {
  try {
    let response: any = await fetch(endPoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error in GET API", error);
  }
}
