
const Page = () => {
    return (
        <section className="flex justify-center align-center">
            <div>
                <div>
                    <h1>Login</h1>
                    <p>Hi, Welcome back 👋</p>
                </div>
                <div >
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Page;