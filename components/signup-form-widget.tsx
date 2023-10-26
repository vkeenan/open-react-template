import Link from "next/link";
export function SignupFormWidget() {
  return (
    <div className="flex flex-col w-full p-6 mb-3 shadow bg-cocoa_brown-100">
      <h3 className="pb-5 text-2xl font-display">Join Us Today</h3>
      <p className="pb-5 text-base font-body">
        Become a member to enjoy exclusive benefits or sign up for free news and
        updates below.
      </p>
      <Link
        href="/sign-up"
        className="block p-2 mb-4 font-bold text-center text-white rounded bg-cocoa_brown-500 hover:bg-cocoa_brown-800"
      >
        Become a Member
      </Link>
      <p className="mb-2 text-sm text-gray-600">
        Just curious? Sign up for our newsletter:
      </p>
      <form
        action="https://workdifferentwithai.us21.list-manage.com/subscribe/post?u=2646a4e07067fb7d15e071cf6&amp;id=12fdc6b4ed&amp;f_id=00d6e3e6f0"
        method="post"
        className="flex flex-col"
      >
        <input
          className="p-2 mb-4 border rounded email border-cocoa_brown-500"
          id="mce-EMAIL"
          type="email"
          name="EMAIL"
          placeholder="Email Address"
          required
          autoComplete="email"
        />
        <input
          className="p-2 mb-4 border rounded email border-cocoa_brown-500"
          id="mce-PHONE"
          type="text"
          name="PHONE"
          placeholder="Phone Number"
          autoComplete="tel"
        />
        <button
          className="p-2 text-white rounded bg-cocoa_brown-500 hover:bg-cocoa_brown-800"
          type="submit"
          data-element="submit"
        >
          Sign Up for Updates
        </button>
      </form>
    </div>
  );
}

export function HorizontalSignupWidget() {
  return (
    <div className="items-center justify-between hidden w-full p-6 mx-auto my-10 shadow-lg bg-cocoa_brown-100 lg:space-x-20 lg:flex">
      <div className="flex flex-col items-center justify-center text-center lg:flex-1 lg:flex-row lg:text-left lg:items-start">
        <div className="lg:mr-10">
          <h3 className="pb-5 text-xl font-display">Join Us Today</h3>
          <p className="pb-5 text-base font-body">
            Become a member to enjoy exclusive benefits.
          </p>
          <a
            href="/sign-up"
            className="block p-2 mb-4 text-lg font-bold text-center text-white rounded bg-cocoa_brown-500 hover:bg-cocoa_brown-800 lg:text-left"
          >
            Become a Member
          </a>
        </div>
        <p className="mb-2 text-sm text-gray-600 lg:hidden">
          Just curious? Sign up for our newsletter:
        </p>
      </div>
      <div className="flex flex-col lg:flex-1">
        <p className="hidden mb-2 text-sm text-gray-600 lg:block">
          Just curious? Sign up for our newsletter:
        </p>
        <form
          action="https://workdifferentwithai.us21.list-manage.com/subscribe/post?u=2646a4e07067fb7d15e071cf6&amp;id=12fdc6b4ed&amp;f_id=00d6e3e6f0"
          method="post"
          className="flex flex-col"
        >
          <input
            className="p-2 mb-4 border rounded email border-cocoa_brown-500"
            id="mce-EMAIL"
            type="email"
            name="EMAIL"
            placeholder="Email Address"
            required
            autoComplete="email"
          />
          <input
            className="p-2 mb-4 border rounded email border-cocoa_brown-500"
            id="mce-PHONE"
            type="text"
            name="PHONE"
            placeholder="Phone Number"
            autoComplete="tel"
          />
          <button
            className="p-2 text-white rounded bg-cocoa_brown-500 hover:bg-cocoa_brown-800"
            type="submit"
            data-element="submit"
          >
            Sign Up for Updates
          </button>
        </form>
      </div>
    </div>
  );
}
