export const getEnvVariables = () => {
    return {
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_ACCESS_KEY: import.meta.env.VITE_ACCESS_KEY
    }
}