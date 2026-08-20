import type React from 'react'
import Languages from './Languages'
import Skills from './Skills'

const LeftColumn: React.FC = () => {
  return (
    <div className="w-full lg:w-1/3 bg-gray-50 dark:bg-gray-800/50 p-6 sm:p-8 print:px-0 print:py-3">
      <Skills />
      <Languages />
    </div>
  )
}

export default LeftColumn
