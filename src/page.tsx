import CourseCard from './components/CourseCard'

const courses = [
  { id: 1, title: 'Mathématiques', level: 'Primaire', students: 120 },
  { id: 2, title: 'Français', level: 'Secondaire', students: 85 },
  { id: 3, title: 'Informatique', level: 'Université', students: 200 },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Ntumba-educ</h1>
        <p className="text-gray-600 mt-2">Plateforme éducative RDC - Kinshasa</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Statistiques</h2>
        <p className="mt-2">Total étudiants: {courses.reduce((s, c) => s + c.students, 0)}</p>
      </section>
    </main>
  )
}
