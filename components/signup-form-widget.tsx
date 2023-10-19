export function SignupFormWidget() {
  return (
    <div className="flex flex-col w-full p-6 mb-3 shadow bg-cocoa_brown-100">
      <h3 className="pb-5 text-xl font-display">Email Sign Up</h3>
      <p className="pb-5 text-base font-body">
        Sign up for free news and updates.
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
          Sign Up
        </button>
      </form>
    </div>
  );
}
