// EXPORTS: IPhoto, MOCK_PHOTOS
export interface IPhoto {
  id: string
  name: string
  imageUrl: string
  description: string
  era: string
}

export const MOCK_PHOTOS: IPhoto[] = [
  {
    id: '1',
    name: '济南府属总图',
    imageUrl: '/jinanfushuzongtu.jpg',
    description: '清代济南府全域地理舆图，记载山川水系分布',
    era: '清代'
  },
  {
    id: '2',
    name: '大小清河图',
    imageUrl: '/daxioaqinghetu.jpg',
    description: '济南小清河与大清河水系脉络图',
    era: '清代'
  },
  {
    id: '3',
    name: '省城街巷全图',
    imageUrl: '/jinanfuchengtu.jpg',
    description: '民国时期济南古城街巷建筑详细分布图',
    era: '民国'
  }
]