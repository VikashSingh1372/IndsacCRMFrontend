import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { path_url } from '../config/config';

export default function UserComponent() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
          setError('Access token not found in localStorage');
          setLoading(false);
          return;
        }
        const response = await axios.get(`${path_url}/user`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

      setUserId (response.data);
        localStorage.setItem('userId', userId);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user ID');
        setLoading(false);
      }
    };
  
    fetchUserId();
  
  }, [userId]);}
 