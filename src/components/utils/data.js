export const signInData = {
  data: {
    tokens: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0MiwiaXNSZWZyZXNoIjpmYWxzZSwiaWF0IjoxNjY0MzYyOTE3LCJleHAiOjE2NjQ0NDkzMTd9.FBIBKIUp-6jdVtUhbpgOxwRe60fkj6mKcCDGsZaL8m0',
      refreshToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0MiwiaXNSZWZyZXNoIjp0cnVlLCJpYXQiOjE2NjQzNjI5MTcsImV4cCI6MTY2NTU3MjUxN30.JyhC22es_txqUiLjvISkbI2PHRPRWbDJ2cBGhSvtVpA',
    },
    user: {
      id: 142,
      email: 'nukuutos@gmail.com',
      nickname: 'nukuutos',
    },
  },
};

export const signUpData = {
  data: {
    user: {
      id: 142,
      email: 'nukuutos@gmail.com',
      nickname: 'nukuutos',
    },
    tokens: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0MiwiaXNSZWZyZXNoIjpmYWxzZSwiaWF0IjoxNjY0MzYyODkxLCJleHAiOjE2NjQ0NDkyOTF9.on16p0bJishsaYN1kKG-KToMBMranMEDNuYbHIG4llc',
      refreshToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0MiwiaXNSZWZyZXNoIjp0cnVlLCJpYXQiOjE2NjQzNjI4OTEsImV4cCI6MTY2NTU3MjQ5MX0.rIe2ECfHrDnr47tpc8vpa5gR8b9D_IqbHWCbQH-rtWU',
    },
  },
};

export const restaurantsData = {
  data: {
    count: 3,
    restaurants: [
      {
        is_favourite: false,
        id: 1,
        title: 'New restaurant',
        description: 'New restaurant description',
        schedule_id: 1,
        coords_id: 1,
        user_id: 1,
        schedule: {
          id: 1,
          opening: '12:00',
          closing: '00:00',
        },
        coords: {
          id: 1,
          longitude: 76.88892877135433,
          latitude: 43.23672076148338,
          address_name: 'улица Мынбаева, Алматы',
        },
        images: [],
        user: {
          id: 1,
          email: 'test@gmail.com',
          nickname: 'test',
        },
      },
      {
        is_favourite: false,
        id: 2,
        title: 'У Малики эже',
        description: 'Очень вкусно и еще то что там про вкусно',
        schedule_id: 2,
        coords_id: 2,
        user_id: 46,
        schedule: {
          id: 2,
          opening: '12:00',
          closing: '00:00',
        },
        coords: {
          id: 2,
          longitude: 76.88892877135433,
          latitude: 43.23672076148338,
          address_name: 'улица Мынбаеeва, Нурсултан',
        },
        images: [],
        user: {
          id: 46,
          email: 'denihero81@gmail.com',
          nickname: 'denihero',
        },
      },
      {
        is_favourite: false,
        id: 3,
        title: 'Золотой квадрат',
        description:
          'Место где ты можешь придти и вкусно покушать со своей семьей и много разных развлечений, приходи наслаждайся \n',
        schedule_id: 3,
        coords_id: 3,
        user_id: 46,
        schedule: {
          id: 3,
          opening: '09:00',
          closing: '10:00',
        },
        coords: {
          id: 3,
          longitude: 76.94619,
          latitude: 43.248604,
          address_name: 'улица Жамбыла, Алмата',
        },
        images: [],
        user: {
          id: 46,
          email: 'denihero81@gmail.com',
          nickname: 'denihero',
        },
      },
    ],
  },
};
