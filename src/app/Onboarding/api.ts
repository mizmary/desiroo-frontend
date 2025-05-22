import { TypeUserForm } from "../auth/types"

import { axiosWithAuth } from "@/api/interceptors"

class OnboardingService {
  private BASE_URL = "/user"

  async updateProfile(data: TypeUserForm) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}`, data)
    return response
  }
}

const onboardingService = new OnboardingService()

export const updateProfile = async (data: TypeUserForm) => {
  const response = await onboardingService.updateProfile(data)
  return response.data
}
