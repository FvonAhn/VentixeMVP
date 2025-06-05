const API_BASE = ""

export async function getUserById(id) {
    const response = await fetch(`${API_BASE}/api/users/${id}`)
    if(!response.ok) throw new Error("Fetching user failed.");
    return response.json();
}