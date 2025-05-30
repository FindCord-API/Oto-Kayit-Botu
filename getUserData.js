import axios from 'axios';
import { config } from './config.js';

export const getUserData = async (UserID) => {
  if (!UserID) {
    return { error: 'UserID belirtilmelidir.' };
  }

  try {
    const response = await axios.get(`${config.api.baseURL}${UserID}`, {
      headers: {
        'Authorization': config.api.key,
      },
    });

    const data = response.data;

    if (!data?.MemberInfo || !data.MemberInfo.TopName || !data.MemberInfo.TopAge || !data.MemberInfo.TopSex) {
      return { error: 'Kullanıcı bilgileri eksik. Kayıt yapılamaz.' };
    }

    return {
      isim: data.MemberInfo.TopName,
      yas: data.MemberInfo.TopAge,
      cinsiyet: data.MemberInfo.TopSex
    };

  } catch (error) {
    if (error.response) {
      return {
        error: `Sunucu hatası: ${error.response.status} - ${error.response.data?.message || 'Bilinmeyen hata'}`
      };
    } else if (error.request) {
      return { error: 'Sunucudan yanıt alınamadı. Lütfen daha sonra tekrar deneyin.' };
    } else {
      return { error: `İstek hatası: ${error.message}` };
    }
  }
};
