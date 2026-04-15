
const API_URL = "http:localhost:5050/api/users"

// Get Users with pagination
export const getUsers = async (page = 1, limit = 5) => {
    const res = await fetch(`${API_URL}?page=${page}&limit=${limit}`)

    if (!res.ok) {
        throw new Error("Failed to fetch users.")
    }

    return res.json()
}


// Search Users
export const searchUsers = async (term = "", page = 1, limit = 5) => {
    const res = await fetch(`${API_URL}/search/${encodeURIComponent(term)}?page=${page}&limit=${limit}`)

    if (!res.ok) {
        throw new Error("Failed to search users.")
    }

    return res.json()
}

//Get Stats
export const getStats = async () => {
    const res = await fetch(`${API_URL}/stats`)

    if (!res.ok) {
        throw new Error("Failed to get stats.")
    }

    return res.json()
}


// Add New User
export const addUser = async (data) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })

    if (!res.ok) {
        throw new Error("Failed to create new user.")
    }

    return res.json()
}

// Update User
export const updateUser = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })

    if (!res.ok) {
        throw new Error("Failed to update user.")
    }

    return res.json()
}

// Delete User
export const deleteUser = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" })

    if (!res.ok) {
        throw new Error("Failed to delete user.")
    }

    return res.json()
}

