export const uploadToCloudinary = async (pics) => {
  if (pics) {
    try {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "instagram_cloud");
      data.append("cloud_name", "dqtwzuhsy");

      const res = await fetch("https://api.cloudinary.com/v1_1/dqtwzuhsy/image/upload", {
        method: "post",
        body: data,
      });

      if (!res.ok) {
        throw new Error(`Error uploading file: ${res.statusText}`);
      }

      const fileData = await res.json();
      if (!fileData.url) {
        throw new Error("No URL returned in response");
      }

      console.log("url : ", fileData.url);
      return fileData.url.toString();

    } catch (error) {
      console.error("Upload error:", error.message);
      return null;
    }
  } else {
    console.error("No image provided");
    return null;
  }
};
