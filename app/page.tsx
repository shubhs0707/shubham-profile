import { Suspense } from 'react'
import { ResumeContent } from '@/components/resume-content'

export default function ModernResume() {
  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={<div>Loading...</div>}>
        <ResumeContent />
      </Suspense>
    </main>
  )
}
