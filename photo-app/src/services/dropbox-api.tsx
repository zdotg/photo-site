
// Now, correctly access the Dropbox access token from environment variables
const accessToken: string = process.env.DROPBOX_ACCESS_TOKEN || '';

// Base URL for Dropbox API
const baseURL: string = 'https://api.dropboxapi.com/2';

// Function to get a temporary link for a file
async function getTemporaryLink(filePath: string): Promise<string> {
  try {
    const response = await fetch(`https://api.dropboxapi.com/2/files/get_temporary_link`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        path: filePath,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.link; // This is the temporary link to the file
  } catch (error) {
    console.error('Error fetching temporary link:', error);
    throw error;
  }
}


// Function to make a GET request to list files in a folder
export async function listFiles(folderPaths: string[]): Promise<string[]> {
  let imageUrls: string[] = [];

  try {
    for (const folderPath of folderPaths) {
      const body = JSON.stringify({ path: folderPath }); // Adjust the path as needed

      const response = await fetch(`${baseURL}/files/list_folder`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      const files = data.entries as Array<{ path_lower: string }>;

      // Get temporary links for each file
      const tempLinksPromises = files.map((file) => getTemporaryLink(file.path_lower));
      const tempLinks = await Promise.all(tempLinksPromises);

      imageUrls = imageUrls.concat(tempLinks);
    }

    return imageUrls;
  }  catch (error) {
    if (error instanceof Response) {
      const errorBody = await error.json();
      console.error('Dropbox API Error:', errorBody);
    } else {
      console.error('Error:', error);
    }
    throw error;
  }
}