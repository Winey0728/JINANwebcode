// EXPORTS: ICulturalResource, ICulturalCategory, MOCK_CULTURAL_RESOURCES
export interface ICulturalResource {
  id: string
  name: string
  description: string
  imageUrl: string
  category: 'spring' | 'celebrity' | 'red' | 'ancient' | 'waterway'
  subCategory?: string // 名士文化分组：古代/近现代
  era?: string // 年代/时期
}

export interface ICulturalCategory {
  key: 'spring' | 'celebrity' | 'red' | 'ancient' | 'waterway'
  label: string
  description: string
  status: 'active' | 'placeholder'
}

export const MOCK_CULTURAL_CATEGORIES: ICulturalCategory[] = [
  {
    key: 'spring',
    label: '泉水文化',
    description: '济南七十二名泉核心景观',
    status: 'active',
  },
  {
    key: 'celebrity',
    label: '名士文化',
    description: '历代名士与济南的渊源',
    status: 'active',
  },
  {
    key: 'red',
    label: '红色文化',
    description: '革命历史与红色记忆',
    status: 'placeholder',
  },
  {
    key: 'ancient',
    label: '古城文化',
    description: '明府城与历史街区',
    status: 'placeholder',
  },
  {
    key: 'waterway',
    label: '水系脉络',
    description: '济南水系的历史变迁',
    status: 'placeholder',
  },
]

export const MOCK_CULTURAL_RESOURCES: ICulturalResource[] = [
  // 泉水文化 - 4个名泉
  {
    id: 'spring-1',
    name: '趵突泉',
    description: '天下第一泉，济南七十二名泉之首',
    imageUrl: 'https://ts1.tc.mm.bing.net/th/id/R-C.d3e7c5314f0b0d43316fe4598c942cb6?rik=ywdASgnioAj7aA&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2fw1600h1067%2f20180108%2f7625-fyqincv2450795.jpg&ehk=NNOho9qzd3WVttBfK4dRJVu5qtv9NGYokVd%2b5MkSefg%3d&risl=&pid=ImgRaw&r=0',
    category: 'spring',
    era: '宋代至今',
  },
  {
    id: 'spring-2',
    name: '黑虎泉',
    description: '济南四大泉群之一，水声如虎啸',
    imageUrl: 'https://ts1.tc.mm.bing.net/th/id/R-C.c9420165125a39cc9e2c83bd64108957?rik=eoTkoO8dhIvlGg&riu=http%3a%2f%2fdimg15.c-ctrip.com%2fimages%2f100r0r000000h0n8k8A2A_R_800_10000_Q90.jpg&ehk=QaZUF0x5zH0LoUA1YuBTZtOca65OWDegeBw8OnJhsw4%3d&risl=&pid=ImgRaw&r=0',
    category: 'spring',
    era: '金代始见记载',
  },
  {
    id: 'spring-3',
    name: '珍珠泉',
    description: '泉水如珍珠般涌出，晶莹剔透',
    imageUrl: 'https://img1.qunarzz.com/travel/poi/201407/31/1216c9c718d5f84bc8d65eac.jpg_r_640x426x70_2c613557.jpg',
    category: 'spring',
    era: '明代',
  },
  {
    id: 'spring-4',
    name: '五龙潭',
    description: '传说与龙王有关，潭水深幽清澈',
    imageUrl: 'https://ts4.tc.mm.bing.net/th/id/OIP-C.lPyG3vDFw6pHNCy4K799-AHaEw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'spring',
    era: '唐代传说',
  },
  // 名士文化 - 古代名士
  {
    id: 'celebrity-1',
    name: '曾巩',
    description: '唐宋八大家之一，曾任齐州知州',
    imageUrl: 'https://x0.ifengimg.com/res/2019/CAAE4643606B8B3F1B189D12FE3DC4CDE34D6283_size33_w307_h397.jpeg',
    category: 'celebrity',
    subCategory: '古代名士',
    era: '北宋',
  },
  {
    id: 'celebrity-2',
    name: '李清照',
    description: '婉约词派代表，济南章丘人',
    imageUrl: 'https://www.tqzw.net.cn/wp-content/uploads/2022/11/2022111215500498.jpg',
    category: 'celebrity',
    subCategory: '古代名士',
    era: '宋代',
  },
  {
    id: 'celebrity-3',
    name: '辛弃疾',
    description: '豪放派词人，济南历城人',
    imageUrl: 'https://ts1.tc.mm.bing.net/th/id/R-C.8def17ec16c1d33205243f0c536f4665?rik=mrZemduQdxSiDw&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190418%2f2521d1aeb84240e6bb77177e02e8ceed.jpeg&ehk=JlJZOVpXGcLCSfPh0And4%2bZ1PLYTSm4ZIZzHZC2OWOY%3d&risl=&pid=ImgRaw&r=0',
    category: 'celebrity',
    subCategory: '古代名士',
    era: '南宋',
  },
  {
    id: 'celebrity-4',
    name: '张养浩',
    description: '元代散曲家，济南历城人',
    imageUrl: 'https://ts2.tc.mm.bing.net/th/id/OIP-C.si53biWBJ7s_3o9coVlZ8wHaFo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'celebrity',
    subCategory: '古代名士',
    era: '元代',
  },
  {
    id: 'celebrity-5',
    name: '李攀龙',
    description: '明代后七子领袖，济南历城人',
    imageUrl: 'https://ts1.tc.mm.bing.net/th/id/R-C.b5b00a6fa82111f676461ac97b90e858?rik=H7ztCiFBu1ERWA&riu=http%3a%2f%2fs.3233.cn%2fa%2f202506%2f082e0988b8fd15c4.jpg&ehk=fmTDkCPDAxr%2bmfAUsObmPiFji3d9IPIQ9HCJJ6mXwcc%3d&risl=&pid=ImgRaw&r=0',
    category: 'celebrity',
    subCategory: '古代名士',
    era: '明代',
  },
  // 名士文化 - 近现代名士
  {
    id: 'celebrity-6',
    name: '老舍',
    description: '人民艺术家，曾在济南齐鲁大学任教',
    imageUrl: 'https://ts2.tc.mm.bing.net/th/id/OIP-C.R7fqlfU5QJr_WV0ZprKaIQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'celebrity',
    subCategory: '近现代名士',
    era: '民国',
  },
]