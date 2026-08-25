// EXPORTS: IPanorama, MOCK_PANORAMAS
export interface IPanorama {
  id: string
  name: string
  imageUrl: string
  description: string
  hotspots: IHotspot[]
}

export interface IHotspot {
  id: string
  name: string
  x: number
  y: number
  description: string
}

export const MOCK_PANORAMAS: IPanorama[] = [
  {
    id: '1',
    name: '大明湖',
    imageUrl: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=1200&h=600&fit=crop',
    description: '济南三大名胜之一，素有"泉城明珠"美誉',
    hotspots: [
      { id: 'h1', name: '历下亭', x: 35, y: 45, description: '唐代著名诗人杜甫曾在此留下千古名句' },
      { id: 'h2', name: '超然楼', x: 65, y: 35, description: '大明湖标志性建筑，登楼可俯瞰全湖景色' },
      { id: 'h3', name: '铁公祠', x: 20, y: 55, description: '纪念明代兵部尚书铁铉的祠堂' },
    ],
  },
  {
    id: '2',
    name: '趵突泉',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=600&fit=crop',
    description: '济南七十二名泉之首，被誉为"天下第一泉"',
    hotspots: [
      { id: 'h1', name: '观澜亭', x: 40, y: 50, description: '观赏趵突泉三股水的最佳位置' },
      { id: 'h2', name: '泺源堂', x: 60, y: 40, description: '始建于宋代的著名殿堂' },
      { id: 'h3', name: '三股水', x: 50, y: 55, description: '趵突泉主泉眼，三窟并发，水涌若轮' },
    ],
  },
  {
    id: '3',
    name: '芙蓉街',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&h=600&fit=crop',
    description: '济南最著名的商业文化古街，明清时期就是商贾云集之地',
    hotspots: [
      { id: 'h1', name: '芙蓉泉', x: 30, y: 50, description: '济南七十二名泉之一，街因泉得名' },
      { id: 'h2', name: '关帝庙', x: 55, y: 45, description: '始建于清代的古建筑' },
      { id: 'h3', name: '老字号商铺', x: 75, y: 55, description: '众多百年老字号汇聚于此' },
    ],
  },
]