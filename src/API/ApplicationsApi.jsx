export const fetchMyJobs = (email) => {
    const token = localStorage.getItem('token');
    return fetch(`http://localhost:8000/applications?email=${email}`, {
        method: "GET",
        headers:
        {
            "contentType": "application/json",
            "authorization" : `Bearer ${token}`
        }
    })
    .then(res => res.json())
}