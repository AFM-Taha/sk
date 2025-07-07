import { makeRequest, makeRequestWihActualStatus } from "../services/v1/request";

export async function getSiteSettings() {
    const params = {
        url: `/api/v1/common/siteSettings`,
        method: 'GET',
    }
    return (await makeRequestWihActualStatus(params));
}