import { Lesson } from "./Lesson"
import { gql, useQuery } from '@apollo/client'








export function Sidebar () {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="w-[348px] bg-gray-700 p-6 bordel-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b gray-500 block">
        Cronograma de aulas
        </span>


        <div className="flex flex-col gap-8">
          {data?.lessons.map(lesson => {
            return (
              <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              />
            )

          })}
         
         
        </div>
    </aside>
    
  )
}