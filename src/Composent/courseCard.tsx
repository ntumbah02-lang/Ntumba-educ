type Props = {
  title: string
  level: string
  students: number
}

export default function CourseCard({ title, level, students }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">{level}</p>
      <p className="mt-2">{students} étudiants inscrits</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Voir cours</button>
    </div>
  )
}
