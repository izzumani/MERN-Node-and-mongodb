import { writeFileSync, readFileSync } from 'node:fs'

const users = [{ name: 'Adam Ondra', email: 'adam.ondra@climb.ing' }]

const usersJSON = JSON.stringify(users)

writeFileSync('backend/users.json', usersJSON)

const readUsersJson = readFileSync('backend/users.json')
const readUsers = JSON.parse(readUsersJson)

console.log(readUsers)
