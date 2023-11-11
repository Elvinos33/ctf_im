import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [GitHub({ 
    clientId: GITHUB_ID,
    clientSecret: GITHUB_SECRET,
    profile(profile) {
      return {
        id: profile.id.toString(),
        name: profile.name,
        username: profile.login,
        email: profile.login,
        image:profile.avatar_url,
      }
    }
  })],
})
