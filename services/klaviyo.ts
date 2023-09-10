export interface KlaviyoProfileData {
  email: string;
  user_agent?: string;
  ip_address?: string;
  referrer_url?: string;  // Add other properties as required, for example:
  // first_name?: string;
  // last_name?: string;
}

export async function NewKlaviyoProfileByEmail(profileData: KlaviyoProfileData): Promise<'success' | 'error'> {
  const endpoint = `https://a.klaviyo.com/api/v2/list/${process.env.KLAVIYO_LIST_ID}/members?api_key=${process.env.KLAVIYO_API_KEY}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        profiles: [profileData]
      })
    });
    if (response.status === 200 || response.status === 201) {
      // Handle the response data as needed. For this example, we're just checking for success
      return 'success';
    } else {
      // Handle other HTTP response statuses as needed
      console.error(`Error creating Klaviyo profile: ${response.statusText}`);
      return 'error';
    }
  } catch (error: any) {
    console.error(`Error creating Klaviyo profile: ${error.message}`);
    return 'error';
  }
}
