import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index
})

function updateSize() {
  document.title = window.innerWidth + ' x ' + window.innerHeight
}

function Index() {
  window.addEventListener('resize', updateSize) //* remove in prod

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
