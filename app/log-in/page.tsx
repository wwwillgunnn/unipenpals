
export default function LogIn() {
  return (
    <section className="hero min-h-screen">
        <div className="hero-content flex-col mb-[112px]">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-center">Sign up/Login</h1>
                <p className="text-center py-6">
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
                            <a href="#" className="label-text-alt link link-hover text-[#E0E0E0]">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D48A67] border-2 border-[#D48A67] text-white hover:bg-[#BF7553] hover:border-[#BF7553]">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
