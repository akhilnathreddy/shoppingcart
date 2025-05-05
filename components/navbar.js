export default function Navbar(){
    return (
        <>
        <div className="flex justify-between">
            <div><h2>Name</h2></div>
            <div>
                <Link href="/login">
                <h3>LogIn</h3>
                </Link>
                <h1>Cart</h1>
            </div>
        </div>
        </>
    )
}