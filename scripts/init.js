const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const chalk = require('chalk')
const inquirer = require('inquirer')

const writeFile = promisify(fs.writeFile)

function writePkg() {
  const pkgPath = path.join(process.cwd(), 'package.json')

  // eslint-disable-next-line import/no-dynamic-require,global-require
  const pkg = require(pkgPath)

  Object.assign(pkg.scripts, {
    format: 'd-scripts format',
    lint: 'd-scripts lint',
    test: 'd-scripts test',
    'test:cover': 'd-scripts test --coverage',
  })

  return writeFile(pkgPath, JSON.stringify(pkg, null, 2), 'utf8').then(() => {
    console.log()
    console.log(
      `  Added ${chalk.bold('d-scripts')} available scripts to ${chalk.bold(
        'package.json'
      )}!`
    )
    console.log()
  })
}

const proceedMessage = `The following scripts will be added to your package.json:

    ${chalk.cyan('lint')}         ${chalk.reset('- d-scripts lint')}
    ${chalk.cyan('format')}       ${chalk.reset('- d-scripts format')}
    ${chalk.cyan('test')}         ${chalk.reset('- d-scripts test')}
    ${chalk.cyan('test:cover')}   ${chalk.reset('- d-scripts test --coverage')}

  If you already have some of these scripts defined they will be overriden.
  Are you sure you want to continue?`

const questions = [
  {
    type: 'confirm',
    name: 'proceed',
    default: false,
    message: proceedMessage,
  },
]

inquirer
  .prompt(questions)
  .then(({ proceed }) => {
    if (proceed) {
      writePkg()
    }
  })
  .catch(err => {
    console.log()
    console.log(
      `Error while trying to add scripts to ${chalk.bold('package.json')}.`
    )
    console.log()
    console.error(err)
  })
