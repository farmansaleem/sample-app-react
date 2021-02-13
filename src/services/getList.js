export function getList() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((data) =>
        data.json()
    );
}
