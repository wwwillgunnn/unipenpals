import AuthForm from "@/components/AuthForm";

export default function LogIn() {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content flex-col mb-[112px]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Sign into your account</h1>
          <p className="text-center py-6">
            Connect with a new pen pal today!
          </p>
        </div>
        <div className="card w-full shadow-2xl">
          {/* TODO: Remember sign in */}
          <AuthForm />
        </div>
      </div>
    </section>
  );
}
