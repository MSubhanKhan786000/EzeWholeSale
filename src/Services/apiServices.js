async function fetchPhoneData(apiURL) {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    if (data && data.status === 200) {
      return data.data.data;
    } else {
      throw new Error("Failed to fetch phone data");
    }
  } catch (error) {
    console.error("Error fetching phone data:", error);
    return null;
  }
}

function getPhoneNames(phones) {
  return phones.map(phone => phone.name);
}

function getPhoneIDs(phones) {
  return phones.map(phone => phone.id);
}

function getPhoneImageURLs(phones) {
  return phones.map(phone => phone.imgUrl);
}

export { fetchPhoneData, getPhoneNames, getPhoneIDs, getPhoneImageURLs };
