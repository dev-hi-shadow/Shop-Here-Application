export const disable_subbar = ["/", "/sign-up"];
export const baseUrl = import.meta.env.VITE_NODE_SERVER_API;
export const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "Application/JSON",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true,
  };