// Replace these variables with your own Dropbox API credentials
const accessToken: string = 'sl.BrUcy1x92Vvddw2Zv5_e969hJmVcxyt_rKh5yPYrpAAWDwMgtxRrKiGWPHxeoG8UimNXVh0C2i6TDGTpedkfI1OYzu9vnfc4CNnQFnP30Nmlat8ltS_WKdIPQ_QDCW-fON6aLW9_66Wo'; // Your Dropbox access token


// Base URL for Dropbox API
const baseURL: string = 'https://api.dropboxapi.com/2';

// Function to make a GET request to list files in a folder
export async function listFiles(folderPath: string): Promise<string[]> {
  try {
    const response = await fetch(`${baseURL}/files/list_folder`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        path: folderPath,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    // Process the list of files (images) here
    const files = data.entries as Array<{ name: string; preview_url: string }>;
    
    // Extract the image URLs
    const imageUrls = files.map((file) => file.preview_url);

    return imageUrls; // Return the image URLs as an array
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
