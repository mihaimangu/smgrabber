
var constants = {
    app_url: "https://localhost:3000",
    instagram_app_id: 615978818998957,
}

constants.
    instagram_auth_url = `https://api.instagram.com/oauth/authorize?client_id=${constants.instagram_app_id}`  + `&redirect_uri=${constants.app_url}/auth&scope=user_profile,user_media&response_type=code`


export default {...constants}

//code
/*
AQDi3cv6RdaLMfjpF2XCDPNmxCDEaUpKBJaolNNVmtRCcWZ0sx6FmJf_JT7qflQyqwdJlVVhG6sP5wU0TunbrtlmDTzCYwtAT6N_SeOEIAfaa4aAQFImWSZVDtNrsQw29pauYClkwiQ3WNLyYiqk3KarfTVwcl4K3b77oIw-ZuXWEj74ppIhL8yUgjqVwc7Ia514OzKl9SWsSZk4q-ZK3gP65_OFu7ftXObxU_qUIbcW3w
*/