const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"]
}

const name = person.name

const { job, parents } = person

const [father, mother] = parents

console.log(name, job, parents)

console.log(father, mother)

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}

const luke = createUser(person)

console.log(luke)