import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      accessToken?: string; // AccessToken from Go
      accountId?: string; // AccountID from Go
      apiKey?: string; // APIKey from Go
      companyName?: string; // CompanyName from Go
      contactId?: string; // ContactID from Go
      email: string; // Email from Go
      environment?: string; // Environment from Go
      firstName?: string; // FirstName from Go
      gitHub?: string; // GitHub from Go
      image?: string; // Small or Large image from Go
      isActive?: boolean; // IsActive from Go
      lastIP?: string; // LastIP from Go
      lastLogin?: string; // LastLogin from Go (assuming it's a string after sqlDateToString function)
      lastName?: string; // LastName from Go
      linkedIn?: string; // LinkedIn from Go
      loginCount?: number; // LoginCount from Go
      mobilePhone?: string; // MobilePhone from Go
      name: string; // Name from Go
      phone?: string; // Phone from Go
      portalRole?: string; // PortalRole from Go
      status?: string; // Status from Go
      tenantId?: string; // TenantID from Go
      title?: string; // Title from Go
      twitter?: string; // Twitter from Go
    };
  }
}
