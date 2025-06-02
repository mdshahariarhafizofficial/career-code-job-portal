export const fetchMyPostedJobs = (email) => {
    return fetch(`http://localhost:8000/jobs?email=${email}`)
    .then(res => res.json())
}