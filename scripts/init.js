const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const promisify = require('util').promisify
const writeFile = promisify(fs.writeFile)

const pkgPath = path.join(process.cwd(), 'package.json')

const pkg = require(pkgPath)

Object.assign(pkg.scripts, {
  format: 'd-scripts format',
  lint: 'd-scripts lint',
  test: 'd-scripts test',
})

writeFile(pkgPath, JSON.stringify(pkg, null, 2), 'utf8')
  .then(() => {
    console.log()
    console.log(
      `  ${chalk.bold('d-scripts')} available scripts to ${chalk.bold(
        'package.json'
      )}!`
    )
    console.log()
  })
  .catch(err => {
    console.log(
      `Error while trying to add scripts to ${chalk.bold('package.json')}.`
    )
    console.log()
    console.error(err)
  })
