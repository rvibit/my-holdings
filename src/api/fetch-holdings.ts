const BASE_URI = 'https://run.mocky.io/v3';

async function fetchHoldings() {
  try {
    const response = await fetch(
      BASE_URI + '/bde7230e-bc91-43bc-901d-c79d008bddc8',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
export {fetchHoldings};
