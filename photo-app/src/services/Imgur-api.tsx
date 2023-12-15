// Base URL for Dropbox API
const clientId = process.env.IMGUR_CLIENT_ID || ''; // Ensure your Client ID is stored in .env


const baseURL = 'https://api.imgur.com/3';

// Define an interface for the image object structure
interface ImgurImage {
  link: string;
}

// Function to get images from a public Imgur album
export async function getAlbumImages(albumId: string): Promise<string[]> {
  try {
    const response = await fetch(`${baseURL}/album/${albumId}/images`, {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${clientId}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data.map((image: ImgurImage) => image.link); // Extract the image links
  } catch (error) {
    console.error('Error fetching images from Imgur:', error);
    throw error;
  }
}
