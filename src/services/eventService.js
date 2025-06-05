const API_BASE = ""

export async function getAllEvents() {
    const response = await fetch(`${API_BASE}/api/events`)
    if(!response.ok) throw new Error("Fetching events failed.");
    return response.json();
}

export async function getEventById(id) {
    const response = await fetch(`${API_BASE}/api/events/${id}`)
    if(!response.ok) throw new Error("Fetching event failed.");
    return response.json();
}

