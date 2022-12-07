export async function getAllUsers() {
    const response = await fetch('/api/users');
    return await response.json();
}
// here chang in comm 1
export async function createUser(data) {
    const response = await fetch(`/api/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}
// here change in commit 2

export async function getDate() {
    const response = await fetch(`/api/getDate`);
    return await response.json();
}
  // here chang commit 1 -b new-view-chart
export async function getEnv() {
    const response = await fetch(`/api/getEnv`);
    return await response.json();
}
// second new view commit