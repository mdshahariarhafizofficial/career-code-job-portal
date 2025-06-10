export const fetchMyJobs = (email) => {
    const token = localStorage.getItem('token');
    return fetch(`http://localhost:8000/applications?email=${email}`, {
        headers:
        {
            authorization: `Bearer ${token}`
        }
    })
    .then(res => res.json())
}