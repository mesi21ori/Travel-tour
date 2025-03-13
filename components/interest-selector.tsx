"use client"

import { CheckIcon } from "lucide-react"

type InterestSelectorProps = {
  selected: string[]
  onChange: (selected: string[]) => void
}

const interests = [
  { id: "history", label: "Historical Sites", icon: "🏛️" },
  { id: "culture", label: "Cultural Experiences", icon: "🎭" },
  { id: "nature", label: "Natural Landscapes", icon: "🏞️" },
  { id: "adventure", label: "Adventure Activities", icon: "🧗" },
  { id: "wildlife", label: "Wildlife & Nature", icon: "🦓" },
  { id: "food", label: "Culinary Experiences", icon: "🍲" },
  { id: "photography", label: "Photography", icon: "📷" },
  { id: "religion", label: "Religious Sites", icon: "⛪" },
]

export default function InterestSelector({ selected, onChange }: InterestSelectorProps) {
  const toggleInterest = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id))
    } else {
      onChange([...selected, id])
    }
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {interests.map((interest) => (
        <div
          key={interest.id}
          className={`
            flex cursor-pointer flex-col items-center rounded-lg border p-3 text-center transition-all
            ${
              selected.includes(interest.id)
                ? "border-green-600 bg-green-50"
                : "border-gray-200 hover:border-green-200 hover:bg-green-50/50"
            }
          `}
          onClick={() => toggleInterest(interest.id)}
        >
          <div className="mb-2 text-2xl">{interest.icon}</div>
          <div className="text-sm font-medium">{interest.label}</div>
          {selected.includes(interest.id) && (
            <div className="mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-white">
              <CheckIcon className="h-3 w-3" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

