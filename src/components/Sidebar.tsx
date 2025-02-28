import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  const { login, register, isAuthenticated, user, logout, isLoading } =
    useKindeAuth();
  return (
    <section className="col-[2/3] row-[2/3] bg-[#fffcf2] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px] flex flex-col">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        {isLoading ? (
          <p className="text-center">Loading....</p>
        ) : isAuthenticated ? (
          <div className="flex flex-col gap-4">
            <div className="flex justify-start items-center bg-gray-300 p-5 gap-3 rounded-[8px]">
              <img
                src={user?.picture || undefined}
                alt="User Image"
                className="h-12 w-12 rounded-full"
              />
              <div className="text-xs">
                <p>Logged in as {user?.given_name}</p>
                <p>Email:{user?.email}</p>
              </div>
            </div>

            <Button onClick={logout} buttonType="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Log In
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
