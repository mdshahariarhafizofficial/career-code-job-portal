export const fetchMyJobs = (email) => {
    return fetch(`http://localhost:8000/applications?email=${email}`, {
        method: "GET",
        credentials: "include",
    })
    .then(res => res.json())
}