import fs from 'fs'
import path from 'path'

const pipe =
  (...fns: any[]) =>
    (x: any) =>
      fns.reduce(((v, f) => f(v)), x)

const flatternArray = (input: []) =>
  input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])

const map = (fn: any) => (input: []) => input.map(fn)

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath)
}

const pathJoinPrefix = (prefix: string) => (extraPath: string) => path.join(prefix, extraPath)

const getAllFilesRecursively = (folder: string) =>
  pipe(fs.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flatternArray)(folder)

export default getAllFilesRecursively