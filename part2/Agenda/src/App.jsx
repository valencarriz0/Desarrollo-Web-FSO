import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { TrashIcon, PlusCircleIcon } from 'lucide-react'
import personService from './services/persons'

function App() {
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [replaceModalOpen, setReplaceModalOpen] = useState(false)
  const [personToReplace, setPersonToReplace] = useState(null)

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addNumber = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (existingPerson) {
      setPersonToReplace(existingPerson)
      setReplaceModalOpen(true)
    } else {
      const personObject = { name: newName, number: newNumber }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleReplace = () => {
    if (!personToReplace) return;
    const updatedPerson = { ...personToReplace, number: newNumber }
    personService
      .update(personToReplace.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(
          persons.map(p => p.id !== personToReplace.id ? p : returnedPerson)
        )
        setNewName('')
        setNewNumber('')
        setReplaceModalOpen(false)
        setPersonToReplace(null)
      })
  }

  const confirmDelete = (person) => {
    setSelectedPerson(person)
    setIsOpen(true)
  }

  const handleDelete = () => {
    personService
      .remove(selectedPerson.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== selectedPerson.id))
        setIsOpen(false)
      })
  }

  const filteredItems = persons.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">📞 Agenda Telefónica</h1>

      <div className="flex items-center justify-center mb-8 gap-4 max-w-xl mx-auto w-full">
        <input
          type="text"
          placeholder="Buscar contacto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm"
        />
        <button
          onClick={() => setAddModalOpen(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
        >
          <PlusCircleIcon className="w-5 h-5" />
          Agregar nuevo contacto
        </button>
      </div>

      <Dialog open={addModalOpen} onClose={() => setAddModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-xl font-bold mb-4 text-blue-700 text-center">Agregar nuevo contacto</Dialog.Title>
            <form
              onSubmit={(e) => { addNumber(e); setAddModalOpen(false); }}
              className="flex flex-col gap-4 items-center"
            >
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Nombre"
                className="w-full px-3 py-2 border rounded-lg"
              />
              <input
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
                placeholder="Número"
                className="w-full px-3 py-2 border rounded-lg"
              />
              <div className="flex gap-4 justify-end w-full">
                <button
                  type="button"
                  onClick={() => setAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                >
                  <PlusCircleIcon className="w-5 h-5" />
                  Guardar
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>

      <div className="flex flex-col gap-4 max-w-xl mx-auto w-full">
        {filteredItems.map(person => (
          <div
            key={person.id}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow w-full"
          >
            <div>
              <p className="font-semibold">{person.name}</p>
              <p className="text-gray-500">{person.number}</p>
            </div>
            <button
              onClick={() => confirmDelete(person)}
              className="text-red-600 hover:text-red-800"
            >
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-4">
              Confirmar eliminación
            </Dialog.Title>
            <p className="mb-6">
              ¿Seguro que deseas eliminar a <span className="font-semibold">{selectedPerson?.name}</span>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <Dialog open={replaceModalOpen} onClose={() => setReplaceModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-4">
              Reemplazar número
            </Dialog.Title>
            <p className="mb-6">
              El nombre <span className="font-semibold">{personToReplace?.name}</span> ya existe.<br />
              ¿Deseas reemplazar el número antiguo por el nuevo?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setReplaceModalOpen(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                onClick={handleReplace}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Reemplazar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

export default App
