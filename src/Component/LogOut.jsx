export function LogOut(){                             
    localStorage.removeItem("studentToken");
    window.location.href="/"
}