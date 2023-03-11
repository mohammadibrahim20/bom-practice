localStorage.clear()
localStorage.setItem('name', 'Sakib khan')
const actor = localStorage.getItem("name")

// console.log(actor)

localStorage.setItem('age', 40)
const ages = localStorage.getItem('age')
console.log(ages)

const details = {
    firstName: 'Abraham',
    lastName: 'Linkon'
}
const newdetails = JSON.stringify(details)
// console.log(newdetails)
localStorage.setItem('details', newdetails)
const item = localStorage.getItem("details")
const itemObject = JSON.parse(item)
console.log(item, itemObject)

/* localStorage.removeItem('name')
localStorage.removeItem('age')
localStorage.removeItem('details') */
