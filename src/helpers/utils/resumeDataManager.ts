import userDetailsData from '@/functions/userDetails';
import resumeData from '../../helpers/constants/resume-data.json';
export const getUserData = async (userId: string) => {
  try {
    // First try to get from localStorage
    const cachedData = localStorage.getItem(`resume-data-${userId}`);
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    // If not in localStorage, fetch from backend
    const response = await fetch(`http://localhost:5000/user-details/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    // Cache the fetched data
    localStorage.setItem(`resume-data-${userId}`, JSON.stringify(data.resumeData));
    return data.resumeData;
  } catch (error) {
    console.error('Error getting user data:', error);
    // Fall back to default resume data
    return userDetailsData?.resumeData;
  }
};
