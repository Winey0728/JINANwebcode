// EXPORTS: IMapPoint, MOCK_MAP_POINTS
export interface IMapPoint {
  id: string
  name: string
  type: 'spring' | 'culture' | 'waterway'
  period: 'modern' | 'ming' | 'qing' | 'republic'
  lat: number
  lng: number
  description: string
  imageUrl: string
}

export const MOCK_MAP_POINTS: IMapPoint[] = [
  {
    id: '1',
    name: '趵突泉',
    type: 'spring',
    period: 'modern',
    lat: 36.6678,
    lng: 117.0158,
    description: '济南七十二名泉之首，被誉为天下第一泉',
    imageUrl: 'https://ts1.tc.mm.bing.net/th/id/R-C.d45c805e8f52e59f16cf0af28070d8e0?rik=4e0%2b6cmutsb9JA&riu=http%3a%2f%2fwww.sjlvyou.com%2fstatic%2fuploads%2fp11139%2f398%2f0f2b.jpg%3fv%3d1474427389&ehk=m8b8IH4zt0dLjRp1auar5EdfTWzMfDcKmF%2bFK7IgTy8%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: '2',
    name: '黑虎泉',
    type: 'spring',
    period: 'modern',
    lat: 36.6645,
    lng: 117.0213,
    description: '济南四大泉群之一，因水声如虎啸而得名',
    imageUrl: 'https://ts2.tc.mm.bing.net/th/id/OIP-C.2H3YlGSMY9gU040pdU3TpwHaE1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '3',
    name: '珍珠泉',
    type: 'spring',
    period: 'ming',
    lat: 36.6702,
    lng: 117.0186,
    description: '泉珠串串，如珍珠散落，明代为德王府内泉',
    imageUrl: 'https://ts3.tc.mm.bing.net/th/id/OIP-C.0XXGUcnCUVsF7wqlGk34nQHaEi?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '4',
    name: '大明湖',
    type: 'waterway',
    period: 'modern',
    lat: 36.6758,
    lng: 117.0183,
    description: '济南三大名胜之一，众泉汇流而成',
    imageUrl: 'https://ts1.tc.mm.bing.net/th/id/R-C.110c337fe569ec303a190f404e98d190?rik=iKsOU7TgWRpMXQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50129%2f1077.jpg_wh860.jpg&ehk=7%2bpD%2bkWvjf%2f8Q%2fXWxXPqC%2beo77Z4w9FpBgkrok3Y0VA%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: '5',
    name: '李清照故居',
    type: 'culture',
    period: 'ming',
    lat: 36.6725,
    lng: 117.0169,
    description: '宋代著名女词人李清照的故居纪念堂',
    imageUrl: 'https://img95.699pic.com/photo/50100/4619.jpg_wh860.jpg'
  },
  {
    id: '6',
    name: '辛弃疾纪念馆',
    type: 'culture',
    period: 'ming',
    lat: 36.6781,
    lng: 117.0225,
    description: '南宋豪放派词人辛弃疾的纪念场馆',
    imageUrl: 'https://n.sinaimg.cn/sinakd10113/612/w2000h1012/20200624/f68e-ivmqpci3719961.jpg'
  },
  {
    id: '7',
    name: '五龙潭',
    type: 'spring',
    period: 'qing',
    lat: 36.6698,
    lng: 117.0123,
    description: '济南四大泉群之一，潭水深澈如镜',
    imageUrl: 'https://ts4.tc.mm.bing.net/th/id/OIP-C.lPyG3vDFw6pHNCy4K799-AHaEw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '8',
    name: '小清河',
    type: 'waterway',
    period: 'modern',
    lat: 36.6850,
    lng: 117.0300,
    description: '济南重要水系，贯通城市东西的生态廊道',
    imageUrl: 'https://ts1.tc.mm.bing.net/th/id/R-C.92e49ebf18d9a6e6d5e08a34586a0260?rik=DunkdzYxcyt5Ug&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20220425s%2f700%2fw900h600%2f20220425%2f2f28-72c9cbf02bcc81f70fc63e8b24872fda.jpg&ehk=kARJ%2bJBKYgDZLdxYxleBn92baR4NduBWO5MMaGuIU5M%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: '9',
    name: '芙蓉街',
    type: 'culture',
    period: 'qing',
    lat: 36.6685,
    lng: 117.0195,
    description: '济南古城核心商业街，清代即为繁华之地',
    imageUrl: 'https://ts1.tc.mm.bing.net/th/id/R-C.511d6a0430f246f9265d76e3085babfa?rik=gTc0zptdzGgpoQ&riu=http%3a%2f%2fy1.ifengimg.com%2f4fd9656bff9dab77%2f2013%2f1107%2frdn_527b2c1c40173.jpg&ehk=tDk3cOdJ%2bjQEk9Sr6WhQ%2fIIgFT5iveZ4xXChtJ65Iy4%3d&risl=&pid=ImgRaw&r=0'
  }
]