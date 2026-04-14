const readValue = (value: string | undefined) => {
  const normalized = value?.trim()

  return normalized ? normalized : null
}

const toMailto = (email: string | null) => {
  if (!email) {
    return null
  }

  return email.startsWith('mailto:') ? email : `mailto:${email}`
}

export const appEnv = {
  loginUrl: readValue(import.meta.env.VITE_LOGIN_URL),
  registerUrl: readValue(import.meta.env.VITE_REGISTER_URL),
  contactEmail: toMailto(readValue(import.meta.env.VITE_CONTACT_EMAIL)),
  contactTelegram: readValue(import.meta.env.VITE_CONTACT_TELEGRAM),
}
