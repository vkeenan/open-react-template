export function SignupFormWidget() {
  return (
    <div className="flex flex-col w-full p-6 mb-3 shadow bg-cocoa_brown-50">
      <h3 className="pb-5 text-xl font-display">Email Sign Up</h3>
      <p className="pb-5 text-base font-body">
        Sign up for free news and updates.
      </p>
      <form
        action="https://salesforcedevops.us1.list-manage.com/subscribe/post?u=59729dc085aff239c25dfda10&amp;id=1c8e141616"
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
