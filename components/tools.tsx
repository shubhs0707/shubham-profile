'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'react-icons/si'
import { BsLightningChargeFill } from 'react-icons/bs'
import { FaBrain } from 'react-icons/fa'

const toolCategories = [
  {
    category: "Development",
    tools: [
      { name: "React", Icon: Icons.SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: Icons.SiTypescript, color: "#3178C6" },
      { name: "Tailwind", Icon: Icons.SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", Icon: Icons.SiNodedotjs, color: "#339933" }
    ]
  },
  {
    category: "Design",
    tools: [
      { name: "Figma", Icon: Icons.SiFigma, color: "#F24E1E" },
      { name: "v0", Icon: BsLightningChargeFill, color: "#FFD700" }
    ]
  },
  {
    category: "Creative",
    tools: [
      { name: "Canva", Icon: Icons.SiCanva, color: "#00C4CC" },
      { name: "AI Tools", Icon: FaBrain, color: "#9333EA" }
    ]
  },
  {
    category: "Management",
    tools: [
      { name: "Jira", Icon: Icons.SiJira, color: "#0052CC" },
      { name: "Notion", Icon: Icons.SiNotion, color: "#000000" }
    ]
  }
]

const ToolItem = memo(({ tool }: { tool: typeof toolCategories[0]['tools'][0] }) => {
  const IconComponent = tool.Icon
  return (
    <motion.div
      className="flex items-center gap-1.5 p-1 rounded-md hover:bg-muted/50 transition-colors"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <IconComponent 
        size={14} 
        color={tool.color} 
        className="shrink-0" 
      />
      <span className="text-xs font-medium truncate">
        {tool.name}
      </span>
    </motion.div>
  )
})
ToolItem.displayName = 'ToolItem'

const ToolCategory = memo(({ category, tools }: { 
  category: string, 
  tools: typeof toolCategories[0]['tools']
}) => (
  <div>
    <h3 className="text-xs font-medium text-muted-foreground mb-1.5">{category}</h3>
    <div className="grid grid-cols-2 gap-1.5">
      {tools.map((tool, index) => (
        <ToolItem key={tool.name} tool={tool} />
      ))}
    </div>
  </div>
))
ToolCategory.displayName = 'ToolCategory'

export function Tools() {
  return (
    <div className="space-y-3">
      {toolCategories.map((category) => (
        <ToolCategory 
          key={category.category}
          category={category.category}
          tools={category.tools}
        />
      ))}
    </div>
  )
}

export default memo(Tools)
