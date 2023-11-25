import { getWebUserByEmail } from "@/services/user/get-user";
import { EnrollmentForm } from "@/components/member/enrollment-form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export default async function MemberAreaAccountPage() {
  const data = await getServerSession(authOptions);
  // console.log("data", data);
  const userId = data?.user?.email;
  if (!userId) {
    return <p>Not signed in</p>;
  }
  const initialValues = {
    ID: "",
    Biography: "",
    CompanyName: "",
    Email: userId,
    FirstName: "",
    FullPhotoURL: "",
    GitHub: "",
    LastName: "",
    LinkedIn: "",
    LinkToCompany: false,
    Twitter: "",
  };
  const user = await getWebUserByEmail(userId);
  // console.log("user", user);

  if (!user) {
    return <p>No user record is available. Please try again.</p>;
  } else {
    initialValues.ID = user.ID;
    initialValues.Biography = user.Biography;
    initialValues.CompanyName = user.CompanyName;
    initialValues.Email = user.Email;
    initialValues.FirstName = user.FirstName;
    initialValues.FullPhotoURL = user.FullPhotoURL;
    initialValues.GitHub = user.GitHub;
    initialValues.LastName = user.LastName;
    initialValues.LinkedIn = user.LinkedIn;
    initialValues.Twitter = user.Twitter;
  }

  return (
    <>
      <h2 className="mb-4 text-2xl font-display">Account Management</h2>
      <EnrollmentForm initialValues={initialValues} />
    </>
  );
}
