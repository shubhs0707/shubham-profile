'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  SiFigma, 
  SiLinear, 
  SiNotion, 
  SiJira, 
  SiGoogleanalytics, 
  SiMixpanel, 
  SiFirebase, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiVisualstudiocode,
  SiWhimsical
} from 'react-icons/si'
import { BsLightningChargeFill } from 'react-icons/bs'
import { FaBrain } from 'react-icons/fa'
import { TbBrandMidjourney } from 'react-icons/tb'
import { HiOutlineChartBar } from 'react-icons/hi'
import { IconType } from 'react-icons'

interface Tool {
  name: string;
  Icon: IconType;
  color: string;
}

interface ToolCategory {
  category: string;
  tools: Tool[];
}

const toolCategories: ToolCategory[] = [
  {
    category: "Product & Design",
    tools: [
      { name: "Figma/FigJam", Icon: SiFigma, color: "#F24E1E" },
      { name: "Linear", Icon: SiLinear, color: "#5E6AD2" },
      { name: "Whimsical", Icon: SiWhimsical, color: "#4A90E2" },
      { name: "Notion", Icon: SiNotion, color: "#000000" },
      { name: "Jira", Icon: SiJira, color: "#0052CC" }
    ]
  },
  {
    category: "Analytics & Data",
    tools: [
      { name: "Google Analytics", Icon: SiGoogleanalytics, color: "#E37400" },
      { name: "Mixpanel", Icon: SiMixpanel, color: "#7856FF" },
      { name: "CleverTap", Icon: HiOutlineChartBar, color: "#FF6B6B" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" }
    ]
  },
  {
    category: "AI & Automation",
    tools: [
      { name: "Claude-3", Icon: FaBrain, color: "#9333EA" },
      { name: "v0", Icon: BsLightningChargeFill, color: "#FFD700" },
      { name: "Cursor", Icon: SiVisualstudiocode, color: "#007ACC" },
      { name: "Midjourney", Icon: TbBrandMidjourney, color: "#000000" }
    ]
  },
  {
    category: "Development",
    tools: [
      { name: "React/TS", Icon: SiReact, color: "#61DAFB" },
      { name: "Node", Icon: SiNodedotjs, color: "#339933" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "React Native", Icon: SiReact, color: "#61DAFB" }
    ]
  }
]

const ToolItem = memo(({ tool }: { tool: Tool }) => (
  <motion.div
    className="flex items-center gap-1.5 p-2 sm:p-1.5 rounded-md hover:bg-muted/50 transition-colors"
    whileHover={{ scale: 1.02 }}
    layout
  >
    {tool.Icon && (
      <tool.Icon 
        size={16} 
        color={tool.color} 
        className="shrink-0" 
      />
    )}
    <span className="text-sm sm:text-xs font-medium truncate">
      {tool.name}
    </span>
  </motion.div>
))
ToolItem.displayName = 'ToolItem'

const ToolCategory = memo(({ category, tools }: { 
  category: string, 
  tools: Tool[]
}) => (
  <div className="space-y-3">
    <h3 className="text-base sm:text-lg font-semibold text-primary">
      {category}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {tools.map((tool) => (
        <ToolItem key={tool.name} tool={tool} />
      ))}
    </div>
  </div>
))
ToolCategory.displayName = 'ToolCategory'

export function Tools() {
  return (
    <Card className="border-2 h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl sm:text-2xl font-bold">Tools & Technologies</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 sm:space-y-8">
        {toolCategories.map((category) => (
          <ToolCategory 
            key={category.category}
            category={category.category}
            tools={category.tools}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default memo(Tools)
