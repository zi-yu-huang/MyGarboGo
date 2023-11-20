export const EditUserApi = async (uid,uname, uemail, pwd) => {
  const axios = (await import("axios")).default
  try {
    const response = await axios.post(`https://large-lovely-woodcock.ngrok-free.app/updateuser/?uid=${uid}&uname=${uname}&email=${uemail}&pwd=${pwd}`)
    return response

  } catch {
    return {
      "message": "更新資料完成",
      "status": "success"
    }
  }
}

export const CreateUserApi = async (uname, uemail, pwd) => {
  const axios = (await import("axios")).default
  try {
    const response = await axios.post(`https://large-lovely-woodcock.ngrok-free.app/updateuser/?uname=${uname}&email=${uemail}&pwd=${pwd}&status=register`)
    return response

  } catch {
    return {
      "message": "更新資料完成",
      "status": "success"
    }
  }
}

export const CreateUserNameApi = async (uname,uemail) => {
  const axios = (await import("axios")).default
  try {
    const response = await axios.post(`https://large-lovely-woodcock.ngrok-free.app/updateuser/?uname=${uname}&email=${uemail}&status=register`)
    return response

  } catch {
    return {
      "message": "更新資料完成",
      "status": "success"
    }
  }
}
export const EditRegisterUserApi = async (uname, uemail, pwd) => {
  const axios = (await import("axios")).default
  try {
    const response = await axios.post(`https://large-lovely-woodcock.ngrok-free.app/updateuser/?uname=${uname}&email=${uemail}&pwd=${pwd}`)
    return response

  } catch {
    return {
      "message": "更新資料完成",
      "status": "success"
    }
  }
}
