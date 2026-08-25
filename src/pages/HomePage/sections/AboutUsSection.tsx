import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Code, BookOpen, Palette, Mail, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { avatarImages } from '@lark-apaas/client-toolkit-lite';
import { Image } from '@/components/ui/image';

const contactSchema = z.object({
  name: z.string().min(1, '请输入您的姓名'),
  email: z.string().email('请输入有效的邮箱地址'),
  message: z.string().min(5, '留言内容至少5个字符'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const teamGroups = [
  {
    id: 'tech',
    icon: Code,
    title: '技术开发',
    members: [
      { name: '王蔚宁', role: '前端开发', avatar: avatarImages.avatarImg1 },
    ],
  },
  {
    id: 'research',
    icon: BookOpen,
    title: '内容研究',
    members: [
      { name: '陈文博', role: '历史研究', avatar: avatarImages.avatarImg4 },
      { name: '刘雅琴', role: '文化研究', avatar: avatarImages.avatarImg5 },
      { name: '赵建华', role: '文献整理', avatar: avatarImages.avatarImg6 },
    ],
  },
  {
    id: 'design',
    icon: Palette,
    title: '视觉设计',
    members: [
      { name: '孙晓琳', role: 'UI设计', avatar: avatarImages.avatarImg7 },
      { name: '周子轩', role: '视觉设计', avatar: avatarImages.avatarImg8 },
      { name: '吴雨晴', role: '交互设计', avatar: avatarImages.avatarImg9 },
    ],
  },
];

export default function AboutUsSection() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    // 模拟提交
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.success('留言已提交，感谢您的反馈！');
    form.reset();
  };

  return (
    <section id="about-us" className="w-full py-20 md:py-28 bg-gradient-to-b from-background to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-600 font-medium text-sm tracking-widest mb-3">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            关于我们
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            一支热爱济南文化的年轻团队，用数字技术守护千年泉城记忆
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {teamGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.members.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: groupIndex * 0.1 + index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-foreground text-sm">{member.name}</div>
                        <div className="text-xs text-muted-foreground">{member.role}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 联系表单 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">联系我们</h3>
              <p className="text-muted-foreground mb-8">
                如果您对济南水系文化有研究成果希望分享，或者对平台有任何建议，
                欢迎通过以下方式与我们取得联系。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">邮箱</div>
                    <div className="font-medium text-foreground">jinan-water@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">合作单位</div>
                    <div className="font-medium text-foreground">山东大学历史文化学院</div>
                  </div>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          姓名 <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="请输入姓名" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          邮箱 <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="请输入邮箱" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        留言 <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="请输入您的留言内容..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                      </svg>
                      提交中...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      提交留言
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
