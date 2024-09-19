
export default function LogIn() {
  return (
    <section className="hero min-h-screen">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-center">Login</h1>
                <p className="py-6">
                    Connect with a new pen pal today!
                </p>
            </div>
            <div className="card  w-full shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#F4AFAF] text-white hover:bg-[#e5a3a3]">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
