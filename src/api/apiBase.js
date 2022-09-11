export const apiBase  = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'fd14bc93cd6295d9ad5a441e113a3106',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}
