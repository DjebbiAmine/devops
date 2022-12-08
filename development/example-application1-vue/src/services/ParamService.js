export async function getAllParams() {
  const response = await fetch("/api/params");
  return await response.json();
}
// some work in the view after day9_api_fixes
export async function getParam() {

  const response = await fetch("/api/params/PARAM1");
  return await response.json();
}

export async function setParam() {

  const response = await fetch("/api/params/PARAM1/AAAAAA", { method: "PUT" });
  return await response.json();
}
// first new-vue_commit