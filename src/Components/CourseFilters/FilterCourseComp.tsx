import { FilterCourseCard } from "./FilterCourseCard";
import { useState } from "react";

interface FilterCourseProp {
  title: string;
  items: { name: string }[];
}

export function FilterCourseComp({ title, items }: FilterCourseProp) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = (name: string) => {
    if (selectedItems.includes(name)) {
      // Remove if already selected
      setSelectedItems(selectedItems.filter((item) => item !== name));
    } else {
      // Add to selection
      setSelectedItems([...selectedItems, name]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-lg">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <FilterCourseCard
            key={item.name}
            name={item.name}
            selected={selectedItems.includes(item.name)}
            onClick={() => toggleSelection(item.name)}
          />
        ))}
      </div>
      <hr className="h-px my-5 bg-gray-400 border-0" />
    </div>
  );
}
