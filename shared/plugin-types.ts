// ---- plugin:jinan_attractions_speech_synthesis_1 ----
// ============================================================
// 插件 jinan_attractions_speech_synthesis_1 (济南景点讲解语音合成) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface JinanAttractionsSpeechSynthesisOneInput {
  /** 济南景点介绍、文化解说的文本内容 */
  introduction_text: string;
}

/**
 * capabilityClient.load('jinan_attractions_speech_synthesis_1').call<JinanAttractionsSpeechSynthesisOneOutput>('speechSynthesis', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { audioUrl } = result;
 */
export interface JinanAttractionsSpeechSynthesisOneOutput {
  /** [object Object] */
  audioUrl: string;
}
// ---- end:jinan_attractions_speech_synthesis_1 ----

// ---- plugin:jinan_water_culture_qa_agent_1 ----
// ============================================================
// 插件 jinan_water_culture_qa_agent_1 (济南水系文化问答智能体) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface JinanWaterCultureQaAgentOneInput {
  /** 用户提出的济南水系文化相关问题 */
  user_question: string;
}

/**
 * capabilityClient.load('jinan_water_culture_qa_agent_1').call<JinanWaterCultureQaAgentOneOutput>('textGenerate', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content, response } = result;
 */
export interface JinanWaterCultureQaAgentOneOutput {
  /** [object Object] */
  content: string;
  /** [object Object] */
  response?: string;
}
// ---- end:jinan_water_culture_qa_agent_1 ----

// ---- plugin:jinan_culture_tour_route_planner_1 ----
// ============================================================
// 插件 jinan_culture_tour_route_planner_1 (济南文化游览路线规划推荐) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface JinanCultureTourRoutePlannerOneInput {
  /** 用户可用的游览时间，例如：1天、2天、半天、周末等 */
  available_time: string;
  /** 用户的其他特殊需求，例如：亲子友好、少走路、公共交通出行等（可选） */
  additional_requirements?: string;
  /** 用户感兴趣的济南文化方向，例如：历史古迹、泉水文化、美食体验、民俗非遗等 */
  user_interests: string;
}

/**
 * capabilityClient.load('jinan_culture_tour_route_planner_1').call<JinanCultureTourRoutePlannerOneOutput>('textGenerate', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content, response } = result;
 */
export interface JinanCultureTourRoutePlannerOneOutput {
  /** [object Object] */
  content: string;
  /** [object Object] */
  response?: string;
}
// ---- end:jinan_culture_tour_route_planner_1 ----