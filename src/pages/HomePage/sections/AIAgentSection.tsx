import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Volume2,
  MapPin,
  Image as ImageIcon,
  X,
  Send,
  Play,
  Pause,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { capabilityClient, logger } from '@lark-apaas/client-toolkit-lite';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MOCK_CULTURAL_RESOURCES } from '@/data/culturalresources';
import { Image } from '@/components/ui/image';

const QA_PLUGIN_ID = 'jinan_water_culture_qa_agent_1';
const ROUTE_PLUGIN_ID = 'jinan_culture_tour_route_planner_1';
const SPEECH_PLUGIN_ID = 'jinan_attractions_speech_synthesis_1';

const aiFeatures = [
  {
    id: 'qa',
    icon: MessageCircle,
    title: '文化问答',
    description: '智能解答济南泉水、名士、历史等文化相关问题',
    color: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'speech',
    icon: Volume2,
    title: '语音讲解',
    description: 'AI语音合成，为景点提供专业的文化解说',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'route',
    icon: MapPin,
    title: '路线规划',
    description: '根据兴趣和时间，生成个性化游览路线',
    color: 'from-teal-500 to-emerald-500',
    bgColor: 'bg-teal-50',
  },
  {
    id: 'history',
    icon: ImageIcon,
    title: '历史复原',
    description: '古今对比，直观感受城市历史变迁',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
];

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAgentSection() {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  return (
      <section id="ai-agent" className="w-full py-20 md:py-28 bg-gradient-to-b from-background to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
          <span className="inline-block text-cyan-600 font-medium text-sm tracking-widest mb-3">
            AI INTELLIGENCE
          </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI 智能体
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              人工智能赋能文化探索，让千年文化更加生动可感
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                  <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      onClick={() => {
  if(feature.id === 'qa'){
    //文化问答智能体
    window.open("https://agentlab.sdu.edu.cn/product/llm/workspace/d9f3hm24dgs1m388gc2g/application/d9k3t5l4shh25omj81mg/arrange?tabKey=arrange&version=v1", "_blank")
  }else if(feature.id === 'route'){
    //路线规划智能体
    window.open("https://agentlab.sdu.edu.cn/product/llm/workspace/d9f3hm24dgs1m388gc2g/application/d9grfgl4shh25omj5980/arrange?tabKey=arrange&version=v2", "_blank")
  }else{
    //语音讲解、历史复原，保持原弹窗逻辑
    setActiveDialog(feature.id)
  }
}}
                      className="group cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-border/50 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    <div className="mt-4 text-cyan-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      立即体验
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </motion.div>
              );
            })}
          </div>

          {/* 问答对话框 */}
          <QADialog open={activeDialog === 'qa'} onOpenChange={(open) => !open && setActiveDialog(null)} />
          {/* 语音讲解对话框 */}
          <SpeechDialog open={activeDialog === 'speech'} onOpenChange={(open) => !open && setActiveDialog(null)} />
          {/* 路线规划对话框 */}
          <RouteDialog open={activeDialog === 'route'} onOpenChange={(open) => !open && setActiveDialog(null)} />
          {/* 历史复原对话框 */}
          <HistoryDialog open={activeDialog === 'history'} onOpenChange={(open) => !open && setActiveDialog(null)} />
        </div>
      </section>
  );
}

// === 文化问答 ===
function QADialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '你好！我是济南水系文化智能问答助手，可以回答你关于济南泉水、名士、历史文化等方面的问题。请问有什么想了解的吗？' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userQuestion = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userQuestion }]);
    setIsLoading(true);

    try {
      const executor = (capabilityClient as any).load(QA_PLUGIN_ID);
      const stream = (executor as any).callStream('textGenerate', {
        user_question: userQuestion,
      });

      let fullContent = '';
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      for await (const chunk of stream) {
        const piece = chunk.content ?? chunk.response;
        if (piece) {
          fullContent += piece;
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'assistant', content: fullContent };
            return newMessages;
          });
        }
      }
    } catch (error) {
      logger.error('QA plugin error:', String(error));
      toast.error('智能问答服务暂不可用，请稍后再试');
      setMessages((prev) => [...prev, { role: 'assistant', content: '抱歉，智能问答服务暂时不可用，请稍后再试。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col p-0">
          <DialogHeader className="px-6 py-4 border-b">
            <DialogTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-cyan-600" />
              文化问答智能体
            </DialogTitle>
            <DialogDescription>
              关于济南泉水、名士、历史文化的问题都可以问我
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
            {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                          ? 'bg-cyan-500 text-white rounded-br-md'
                          : 'bg-muted text-foreground rounded-bl-md'
                  }`}>
                    {msg.role === 'assistant' ? (
                        <div className="prose prose-sm max-w-none dark:prose-invert">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content || '思考中...'}</ReactMarkdown>
                        </div>
                    ) : (
                        <p className="text-sm">{msg.content}</p>
                    )}
                  </div>
                </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                    <Loader2 className="w-5 h-5 animate-spin text-cyan-600" />
                  </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="输入你的问题..."
                disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
  );
}

// === 语音讲解 ===
function SpeechDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [selectedSpot, setSelectedSpot] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const springResources = MOCK_CULTURAL_RESOURCES.filter((r) => r.category === 'spring');

  const handleGenerate = async () => {
    if (!selectedSpot) {
      toast.info('请先选择一个景点');
      return;
    }
    const spot = springResources.find((r) => r.id === selectedSpot);
    if (!spot) return;

    setIsLoading(true);
    setAudioUrl('');
    setIsPlaying(false);
    setProgress(0);

    try {
      const executor = (capabilityClient as any).load(SPEECH_PLUGIN_ID);
      const result = await (executor as any).call('speechSynthesis', {
        introduction_text: `${spot.name}，${spot.description}。${spot.era ? '始建于' + spot.era + '。' : ''}济南七十二名泉之一，是泉城济南的重要文化名片。`,
      });
      if (result?.audioUrl) {
        setAudioUrl(result.audioUrl);
        toast.success('语音讲解已生成');
      }
    } catch (error) {
      logger.error('Speech plugin error:', String(error));
      toast.error('语音合成服务暂不可用');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-blue-600" />
              AI 语音讲解
            </DialogTitle>
            <DialogDescription>
              选择景点，生成专业的语音导览讲解
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>选择景点</Label>
              <Select value={selectedSpot} onValueChange={setSelectedSpot}>
                <SelectTrigger>
                  <SelectValue placeholder="请选择景点" />
                </SelectTrigger>
                <SelectContent>
                  {springResources.map((spot) => (
                      <SelectItem key={spot.id} value={spot.id}>
                        {spot.name}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleGenerate} disabled={isLoading || !selectedSpot} className="w-full">
              {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    生成中...
                  </>
              ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    生成语音讲解
                  </>
              )}
            </Button>

            {audioUrl && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-3 p-4 bg-muted/50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <Button size="icon" variant="secondary" className="rounded-full w-12 h-12 shrink-0" onClick={togglePlay}>
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </Button>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground mb-1">
                        {springResources.find((r) => r.id === selectedSpot)?.name} 讲解
                      </div>
                      <Slider
                          value={[progress]}
                          max={100}
                          step={0.1}
                          onValueChange={(vals) => {
                            if (audioRef.current && audioRef.current.duration) {
                              audioRef.current.currentTime = (vals[0] / 100) * audioRef.current.duration;
                              setProgress(vals[0]);
                            }
                          }}
                      />
                    </div>
                  </div>
                  <audio
                      ref={audioRef}
                      src={audioUrl}
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={() => setIsPlaying(false)}
                  />
                </motion.div>
            )}
          </div>
        </DialogContent>
      </Dialog>
  );
}

// === 路线规划 ===
function RouteDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [interests, setInterests] = useState('');
  const [time, setTime] = useState('');
  const [requirements, setRequirements] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 本地路线文案库，完全来自文档
  const routeData: Record<string, Record<string, string>> = {
    "泉水文化核心区": {
      "半日精华游（3–4h）": `【专属济南水系文化游览路线】
主题：泉脉寻踪，漫步名泉群
推荐时长：半日精华游
游览顺序：
1. 趵突泉公园｜天下第一泉，三股水喷涌，济南泉水地标
2. 黑虎泉泉群｜本地市民取水点，感受泉水融入日常生活
3. 护城河畔慢行｜泉水汇流成河，老城水系风貌一览无余

1.票价：趵突泉成人40元，学生半价20元；6周岁（含）以下或1.4米以下儿童、60周岁以上老人免票；黑虎泉、护城河全域免费开放，无需预约。
2.开放时间：趵突泉7:00-19:00；黑虎泉、护城河24小时全天开放。
3. 步行时长：全程约3.5小时，趵突泉步行至黑虎泉约25分钟，护城河畔慢行全程平缓无爬坡。

线路介绍：这条线路浓缩济南泉水最具代表性的景观。先到趵突泉一睹 “天下第一泉” 三股水的独特风貌，再沿着护城河向东走到黑虎泉。本地人常年在此取水，你能真切感受到泉水早已融入济南人的日常。整条线路沿着泉水水系串联，近距离看懂老城泉群如何汇流进护城河。

出行小建议：尽量上午前往，游客相对更少；可以带上空水瓶，体验取用天然泉水；景点距离很近，全程步行体验最佳。`,
      "两日深度游": `【专属济南水系文化游览路线】
主题：老城寻泉，探寻泉水脉络
推荐时长：两日深度游
游览顺序：
Day1：
1. 趵突泉｜天下第一泉核心名泉
2. 五龙潭｜老城幽静泉潭园林
3. 泉城广场｜城市中心泉水文化广场
4. 黑虎泉、解放阁护城河沿岸｜护城河边观泉赏景

Day2：
1. 珍珠泉｜大院之内的官署名泉
2. 王府池子｜藏在老街巷中的平民泉池
3. 城郊砚池泉群｜城郊小众泉点，探访泉水源头脉络

1.票价：趵突泉成人40元，学生半价20元；6周岁（含）以下或1.4米以下儿童、60周岁以上老人免票；五龙潭、泉城广场、黑虎泉、珍珠泉、王府池子、砚池泉群均免费开放。
2. 开放时间：五龙潭7:00-22:00；珍珠泉大院9:00-18:00；其余沿河点位全天开放。
3. 步行时长：Day1全程约4小时，趵突泉步行至五龙潭约15分钟，路段密集无远距离奔波；Day2全程约3小时，老城街巷步行平缓，节奏宽松。

线路介绍：用两天时间深度探访济南老城大大小小的泉眼。除了家喻户晓的名泉，也走进藏在街巷里的小众泉水点位，理清泉水涌出、汇流，最终注入大明湖的完整水系脉络。穿行老街巷之间，体会老济南 “家家泉水，户户垂杨” 独有的生活氛围。

出行小建议：行程节奏不用赶，中途可以找一家泉水茶馆歇脚；傍晚的护城河晚风舒适，夜景十分值得一看。`
    },
    "名士文化体验区": {
      "半日精华游（3–4h）": `【专属济南水系文化游览路线】
主题：清泉伴文脉，寻访济南名士
推荐时长：半日精华游
游览顺序：
1. 趵突泉李清照纪念堂｜泉水园林中品读易安生平往事
2. 大明湖历下亭｜海右此亭古，济南名士多，湖亭感受名士文脉

1.票价：李清照纪念堂包含在趵突泉门票内，无额外收费；大明湖、历下亭免费开放。（趵突泉成人40元，学生半价20元；6周岁（含）以下或1.4米以下儿童、60周岁以上老人免票）
2. 开放时间：趵突泉7:00-19:00；大明湖、历下亭全天开放。
3. 步行时长：全程约3小时，趵突泉步行至大明湖南岸约20分钟，园区内游览步行平缓省力

线路介绍：济南泉水滋养出无数文人雅士。在李清照纪念堂品读词人在济南的往事，再前往大明湖历下亭，感受 “海右此亭古，济南名士多” 的意境。短短一段行程，感受泉水园林与诗词文脉相融的独特魅力。

出行小建议：历下亭位置临湖，适合静坐观景，慢慢体会山水与人文交融的氛围。`,
      "两日深度游": `【专属济南水系文化游览路线】
主题：沿水访先贤，品读名士千年往事
推荐时长：两日深度游
游览顺序：
Day1：
1. 趵突泉李清照纪念堂｜泉水园林追忆易安
2. 大明湖历下亭、铁公祠｜湖畔亭祠感受历代名士风骨

Day2：
1. 府学文庙｜老城儒学文化遗存
2. 老舍旧居｜文人笔下的济南泉水记忆
3. 辛弃疾纪念祠（稼轩祠）｜缅怀稼轩豪迈词人与一生过往

1.票价：李清照纪念堂包含在趵突泉门票内，无额外收费；大明湖、历下亭免费开放；府学文庙、老舍旧居免费开放；稼轩祠成人票10元，学生票5元。（趵突泉成人40元，学生半价20元；6周岁（含）以下或1.4米以下儿童、60周岁以上老人免票）
2.开放时间：府学文庙9:00-17:00（周一闭馆）；老舍旧居8:30-17:00；稼轩祠8：00-17：30。
3. 步行时长：Day1全程约3.5小时，园区内短途步行为主；Day2全程约3小时，各点位间距较近，街巷步行舒适。

线路介绍：沿着泉水与湖水的脉络，串联起辛弃疾、李清照、曾巩、老舍等一代代名士的足迹。泉水、河湖不只是风景，更是文人生活、创作的载体，沿途慢慢读懂济南水系如何孕育绵延千年的名士文化。

出行小建议：路线人文点位较多，适合慢慢游览，多多留意园内碑文、诗词题记。`
    },
    "古城历史文化区": {
      "半日精华游（3–4h）": `【专属济南水系文化游览路线】
主题：穿行古城水巷，感受老济南市井烟火
推荐时长：半日精华游
游览顺序：
1. 曲水亭街｜家家泉水户户垂杨，古城水巷街巷
2. 百花洲｜明府城活水湖区，老城水乡风貌

1.票价：曲水亭街、百花洲全域免费开放，无门票、无需预约。
2.开放时间：街区全天对外开放，沿街商铺营业时间多为9:00-21:00。
3. 步行时长：全程约3小时，街巷环线步行无折返，全程平缓，适合慢行闲逛。

线路介绍：曲水亭街与百花洲保留着济南最原汁原味的古城水网。河道顺着街巷蜿蜒，民居临水而建，有着北方城市少见的水乡风貌。漫步其间，可以直观感受古代明府城依托泉水修建城池的规划巧思。

出行小建议：街巷狭窄，适合慢行闲逛；周边藏着不少本地小吃，可以顺路体验老城烟火气。`,
      "两日深度游": `【专属济南水系文化游览路线】
主题：漫游明府城，读懂古城水系格局
推荐时长：两日深度游
游览顺序：
Day1：
1. 百花洲｜老城活水湖区
2. 曲水亭街｜泉水街巷
3. 后宰门街｜老城古街遗存
4. 大明湖南岸｜湖岸观老城山水

Day2：
1. 珍珠泉大院｜官署名泉院落
2. 西更道街｜老城泉巷小路
3. 王府池子｜街巷内部天然泉池

1.票价：所有街区、点位均免费开放，无收费项目。
2.开放时间：古城街巷全天开放；珍珠泉大院9:00-18:00，常态化开放无闭园日。
3. 步行时长：Day1全程约3.5小时，老城街巷连贯，步行节奏舒缓；Day2全程约3小时，点位集中，通勤步行耗时短。

线路介绍：完整游走明府城古水系网络。古代济南城依托天然泉水修建街巷，泉水贯穿民居、园林、街巷，形成独一无二的城市格局。两天时间深入老城街巷，了解泉水如何塑造老济南人的生活方式。

出行小建议：不用严格卡点赶路，随意拐进小巷，常常能遇见意想不到的泉水景致。`
    },
    "商埠文化风景区": {
      "半日精华游（3–4h）": `【专属济南水系文化游览路线】
主题：走进百年商埠，探寻河道航运往事
推荐时长：半日精华游
游览顺序：
1. 老商埠街区｜百年洋楼，近代开埠历史街区
2. 工商河沿岸步道｜人工运河遗存，见证商埠航运兴衰

1. 票价：老商埠街区、工商河沿岸步道全域免费开放。
2. 开放时间：街区全天开放，沿街商铺10:00-22:00；滨河步道全天通行。
3. 步行时长：全程约3小时，街区漫步+滨河慢行，路面平整，无爬坡路段。

线路介绍：1904 年济南自开商埠，工商河作为人工运河，承担起货物运输的功能，推动济南近代商业快速发展。漫步百年洋楼街区，再沿着工商河岸边行走，感受水系如何改变这座城市近代发展的轨迹。

出行小建议：街区复古建筑众多，适合拍照；工商河沿岸步道安静，适合散步沉思。`,
      "两日深度游": `【专属济南水系文化游览路线】
主题：水道与商埠，回望济南近代变迁
推荐时长：两日深度游
游览顺序：
Day1：
1. 经三路老商埠建筑群｜百年洋楼集中片区
2. 中山公园水系景观｜商埠配套城市公园水系

Day2：
1. 工商河沿岸步道｜人工运河遗迹
2. 小清河黄台古码头遗址｜漕运古码头旧址

1.票价：商埠街区、中山公园、工商河、黄台古码头均免费开放。
2.开放时间：中山公园5:00-22:30；古码头遗址、滨河步道全天开放。
3. 步行时长：Day1全程约3小时，街区与公园步行轻松；Day2全程约4小时，河段跨度稍大，可短途步行结合接驳。

线路介绍：串联商埠老建筑、人工运河与古漕运码头。近代济南依托小清河航运、工商河运输、胶济铁路，形成水陆联动的商贸体系。沿着河道寻访遗迹，了解水系如何造就曾经繁华的济南商埠。

出行小建议：片区景点分布相对分散，合理借助公共交通，减少长时间步行。`
    },
    "铁路红色文化区": {
      "半日精华游（3–4h）": `【专属济南水系文化游览路线】
主题：铁道河畔，追寻红色印记
推荐时长：半日精华游
游览顺序：
1. 胶济铁路博物馆｜百年铁路历史展馆，见证近代风云
2. 小清河五柳岛｜河道岛屿，红色革命旧址所在地

1.票价：胶济铁路博物馆免费开放，需实名登记；五柳岛全域免费。
2.开放时间：胶济铁路博物馆9:00-16:30（周一、周二闭馆）；五柳岛全天开放。
3. 步行时长：全程约3.5小时，博物馆内游览1.5小时，两地通勤+岛上慢行2小时。

线路介绍：胶济铁路见证近代齐鲁风云，小清河曾是重要水陆通道。五柳岛上保留着中共济南市委重建旧址，铁道与河道在此交汇，一同见证济南波澜壮阔的革命岁月。

出行小建议：博物馆内史料丰富，可以预留充足时间参观；五柳岛环境清幽，适合静心参观红色展陈。`,
      "两日深度游": `【专属济南水系文化游览路线】
主题：水陆要道，寻访红色研学线路
推荐时长：两日深度游
游览顺序：
Day1：
1. 胶济铁路博物馆｜百年铁路红色史料展馆
2. 泺口古码头｜黄河与小清河交汇古渡口

Day2：
1. 五柳岛红色陈列馆｜岛上红色革命展陈
2. 黄台盐仓码头｜漕运码头红色活动旧址

1.票价：所有展馆、码头遗址均免费开放，博物馆、陈列馆需实名登记入场。
2.开放时间：红色陈列馆9:00-17:00（周一闭馆）；所有滨河、码头点位全天开放。
3. 步行时长：两日全程均为3‑4小时，路段平整，适合研学慢行游览。

线路介绍：小清河漕运航道、百年胶济铁路，曾经是济南重要的水陆交通要道。沿线码头、渡口不仅是商贸枢纽，也是重要的革命活动地点。沿着河道与铁道，探寻发生在济南水道旁的红色历史。

出行小建议：这条线路非常适合研学出行，建议提前查阅相关历史背景，游览体验更佳。`
    },
    "小清河生态文化区": {
      "半日精华游（3–4h）": `【专属济南水系文化游览路线】
主题：漫步小清河，探访古闸与湿地
推荐时长：半日精华游
游览顺序：
1. 五柳岛景观区｜主城唯一河中岛，湿地河景
2. 五柳闸遗址｜千年水利古闸，调蓄防洪水利遗迹

1.票价：景观区、古闸遗址全部免费开放，无预约门槛。
2. 开放时间：全域滨河区域全天开放，无时间限制。
3. 步行时长：全程约3小时，环岛慢行+遗址游览，步行轻松无压力。

线路介绍：小清河被誉为济南的 “母亲河”，五柳岛是主城河道内唯一河中岛，千年五柳闸承担着调水防洪的作用。短途游览可以近距离欣赏河道湿地风光，简单了解小清河从古至今的水利功能。

出行小建议：河岸风比较舒适，适合傍晚出行，欣赏沿河日落景色。`,
      "两日深度游": `【专属济南水系文化游览路线】
主题：行走漕运廊道，遇见小清河古今变迁
推荐时长：两日深度游
游览顺序：
Day1：
1. 五柳岛、五柳闸｜河中岛屿与千年古闸
2. 黄台盐仓码头遗址｜古代漕运盐运码头

Day2：
1. 张养浩墓文忠园｜沿河文人墓园人文遗迹
2. 小清河上游湿地景观带｜生态修复后的河道湿地风光

1.票价：所有生态景观、人文遗址、园区均免费开放。
2.开放时间：文忠园、小清河湿地、码头遗址全天开放。
3. 步行时长：两日全程各3.5小时左右，滨河步道宽阔平整，可步行也可适配骑行。

线路介绍：自金代开挖以来，小清河承担漕运、泄洪、灌溉多重功能。这条线路沿着河道铺开，寻访古码头、水利遗迹与沿河人文景观，对比河道古今风貌，感受近些年生态治理带来的巨大变化。

出行小建议：线路跨度较长，可分段骑行或者乘坐沿河公交，轻松游览。`
    }
  };

  // 附加需求处理
  function appendCustomTips(baseText:string, req:string):string{
    if(!req.trim()) return baseText;
    let extra = "";
    if(req.includes("亲子")) extra += "\n> 💡亲子出行补充：优先选择平缓步道、亲水点位，沿途多有休息区域，适合孩童慢行。";
    if(req.includes("少走路")) extra += "\n> 💡少走路补充：优先选取点位密集片区，建议多利用公交接驳减少步行距离。";
    if(req.includes("研学")) extra += "\n> 💡研学团队补充：路线历史知识点丰富，适合讲解研学，建议提前查阅相关史料。";
    if(req.includes("拍照")) extra += "\n> 💡拍照打卡补充：沿途临水观景台、日落河岸、复古建筑均是出片机位。";
    return baseText + extra;
  }

  const handleGenerate = async () => {
    if (!interests || !time) {
      toast.info('请填写兴趣方向和可用时间');
      return;
    }
    setIsLoading(true);
    setResult('');

    // 模拟加载动画效果
    await new Promise(resolve => setTimeout(resolve, 600));

    let outputMd = "";
    // 多选分割，支持逗号分隔多个兴趣
    const interestList = interests.split(/[,，]/).map(s=>s.trim()).filter(Boolean);

    if(interestList.length > 1){
      // 多选兴趣
      if(time === "半日精华游（3–4h）"){
        outputMd += "本次为你整合多个片区精华点位，沿济南水脉规划短途路线。\n\n";
      }else{
        outputMd += "已串联多个文化片区，依托泉水、河道动线规划两日行程。\n\n";
      }
    }

    // 取第一个兴趣（文档需求，多兴趣仅做开头提示，输出第一个片区标准文案）
    const mainInterest = interestList[0];
    const rawText = routeData[mainInterest]?.[time];
    if(!rawText){
      outputMd += "> 暂无该组合对应的路线数据，请切换兴趣或时长重新生成。";
    }else{
      outputMd += rawText;
    }

    outputMd = appendCustomTips(outputMd, requirements);
    setResult(outputMd);
    setIsLoading(false);
  };

  return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-600" />
              个性化路线规划
            </DialogTitle>
            <DialogDescription>
              根据你的兴趣和时间，定制专属济南文化之旅
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>兴趣方向</Label>
                <Select value={interests} onValueChange={setInterests}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择兴趣" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="泉水文化核心区">泉水文化核心区</SelectItem>
                    <SelectItem value="名士文化体验区">名士文化体验区</SelectItem>
                    <SelectItem value="古城历史文化区">古城历史文化区</SelectItem>
                    <SelectItem value="商埠文化风景区">商埠文化风景区</SelectItem>
                    <SelectItem value="铁路红色文化区">铁路红色文化区</SelectItem>
                    <SelectItem value="小清河生态文化区">小清河生态文化区</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>可用时间</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择时间" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="半日精华游（3–4h）">半日精华游（3–4h）</SelectItem>
                    <SelectItem value="两日深度游">两日深度游</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>其他需求（可选）</Label>
              <Input
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="如：亲子出行、少走路、研学团队、拍照打卡"
              />
            </div>

            <Button onClick={handleGenerate} disabled={isLoading || !interests || !time} className="w-full">
              {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    规划中...
                  </>
              ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    生成路线方案
                  </>
              )}
            </Button>

            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-muted/50 rounded-xl max-h-[400px] overflow-y-auto"
                >
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown>
                  </div>
                </motion.div>
            )}
          </div>
        </DialogContent>
      </Dialog>
  );
}

// === 历史复原 ===
function HistoryDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-amber-600" />
              历史场景复原
            </DialogTitle>
            <DialogDescription>
              拖动滑块，对比济南的古今变迁
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div
                className="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-ew-resize select-none"
                onMouseMove={(e) => e.buttons === 1 && handleSliderChange(e)}
                onMouseDown={handleSliderChange}
            >
              {/* 现代图（底层） */}
              <Image
                  src="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=800&h=450&fit=crop"
                  alt="现代济南"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
              />
              {/* 历史图（上层，clip） */}
              <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop"
                    alt="老济南"
                    className="absolute inset-0 w-full h-full object-cover sepia"
                    draggable={false}
                />
              </div>
              {/* 滑块线 */}
              <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
                  style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l-6-6 6-6" />
                    <path d="M15 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
              {/* 标签 */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                老济南
              </div>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-cyan-500/80 backdrop-blur-sm text-white text-xs font-medium">
                现代泉城
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              拖动中间滑块，感受济南从古城到现代泉城的历史变迁
            </p>
          </div>
        </DialogContent>
      </Dialog>
  );
}
